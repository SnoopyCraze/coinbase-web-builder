// Converts Puck JSON data into React/TSX source code with CDS imports

import type { Data } from "@measured/puck";

// Map Puck component names to their CDS import paths
const importMap: Record<string, { module: string; name: string }> = {
  Box: { module: "@coinbase/cds-web/layout", name: "Box" },
  VStack: { module: "@coinbase/cds-web/layout", name: "VStack" },
  HStack: { module: "@coinbase/cds-web/layout", name: "HStack" },
  Grid: { module: "@coinbase/cds-web/layout", name: "Grid" },
  GridColumn: { module: "@coinbase/cds-web/layout", name: "GridColumn" },
  Divider: { module: "@coinbase/cds-web/layout", name: "Divider" },
  Spacer: { module: "@coinbase/cds-web/layout", name: "Spacer" },
  Fallback: { module: "@coinbase/cds-web/layout", name: "Fallback" },
  Text: { module: "@coinbase/cds-web/typography", name: "Text" },
  Link: { module: "@coinbase/cds-web/typography", name: "Link" },
  Button: { module: "@coinbase/cds-web/buttons", name: "Button" },
  IconButton: { module: "@coinbase/cds-web/buttons", name: "IconButton" },
  ButtonGroup: { module: "@coinbase/cds-web/buttons", name: "ButtonGroup" },
  TileButton: { module: "@coinbase/cds-web/buttons", name: "TileButton" },
  AvatarButton: { module: "@coinbase/cds-web/buttons", name: "AvatarButton" },
  TextInput: { module: "@coinbase/cds-web/controls", name: "TextInput" },
  SearchInput: { module: "@coinbase/cds-web/controls", name: "SearchInput" },
  Checkbox: { module: "@coinbase/cds-web/controls", name: "Checkbox" },
  Radio: { module: "@coinbase/cds-web/controls", name: "Radio" },
  Select: { module: "@coinbase/cds-web/controls", name: "Select" },
  Switch: { module: "@coinbase/cds-web/controls", name: "Switch" },
  SegmentedControl: { module: "@coinbase/cds-web/controls", name: "SegmentedControl" },
  Chip: { module: "@coinbase/cds-web/chips", name: "Chip" },
  InputChip: { module: "@coinbase/cds-web/chips", name: "InputChip" },
  ContentCard: { module: "@coinbase/cds-web/cards/ContentCard", name: "ContentCard" },
  ListCell: { module: "@coinbase/cds-web/cells", name: "ListCell" },
  ContentCell: { module: "@coinbase/cds-web/cells", name: "ContentCell" },
  Accordion: { module: "@coinbase/cds-web/accordion", name: "Accordion" },
  AccordionItem: { module: "@coinbase/cds-web/accordion", name: "AccordionItem" },
  Banner: { module: "@coinbase/cds-web/banner", name: "Banner" },
  Tag: { module: "@coinbase/cds-web/tag", name: "Tag" },
  Avatar: { module: "@coinbase/cds-web/media", name: "Avatar" },
  Icon: { module: "@coinbase/cds-web/icons", name: "Icon" },
  LogoMark: { module: "@coinbase/cds-web/icons", name: "LogoMark" },
  LogoWordmark: { module: "@coinbase/cds-web/icons", name: "LogoWordmark" },
  Spinner: { module: "@coinbase/cds-web/loaders", name: "Spinner" },
  ProgressBar: { module: "@coinbase/cds-web/visualizations", name: "ProgressBar" },
  ProgressCircle: { module: "@coinbase/cds-web/visualizations", name: "ProgressCircle" },
  NavigationBar: { module: "@coinbase/cds-web/navigation", name: "NavigationBar" },
  Sidebar: { module: "@coinbase/cds-web/navigation", name: "Sidebar" },
  SidebarItem: { module: "@coinbase/cds-web/navigation", name: "SidebarItem" },
  Table: { module: "@coinbase/cds-web/tables", name: "Table" },
  Alert: { module: "@coinbase/cds-web/overlays", name: "Alert" },
  Toast: { module: "@coinbase/cds-web/overlays", name: "Toast" },
  Modal: { module: "@coinbase/cds-web/overlays", name: "Modal" },
  Tooltip: { module: "@coinbase/cds-web/overlays", name: "Tooltip" },
  PageHeader: { module: "@coinbase/cds-web/page", name: "PageHeader" },
  PageFooter: { module: "@coinbase/cds-web/page", name: "PageFooter" },
  SectionHeader: { module: "@coinbase/cds-web/section-header", name: "SectionHeader" },
  Pagination: { module: "@coinbase/cds-web/pagination", name: "Pagination" },
  Stepper: { module: "@coinbase/cds-web/stepper", name: "Stepper" },
  Calendar: { module: "@coinbase/cds-web/dates", name: "Calendar" },
  DateInput: { module: "@coinbase/cds-web/dates", name: "DateInput" },
  DatePicker: { module: "@coinbase/cds-web/dates", name: "DatePicker" },
  RollingNumber: { module: "@coinbase/cds-web/numbers/RollingNumber", name: "RollingNumber" },
  Carousel: { module: "@coinbase/cds-web/carousel", name: "Carousel" },
  MultiContentModule: { module: "@coinbase/cds-web/multi-content-module", name: "MultiContentModule" },
};

// Props to skip in code generation (internal/empty)
const skipProps = new Set(["id", "puck"]);

// Props that are text content (rendered as children, not as attributes)
const childrenProps: Record<string, string> = {
  Button: "label",
  Text: "content",
  Link: "content",
  Tag: "label",
  Chip: "label",
  InputChip: "label",
  MediaChip: "label",
  Banner: "text",
  Checkbox: "label",
  Radio: "label",
  Switch: "label",
};

// Props with boolean string values that should be converted
const boolStringProps = new Set([
  "block", "compact", "disabled", "bordered", "checked",
  "showDismiss", "underline", "openInNewWindow", "visible",
  "active", "collapsed", "selected", "hideContent",
  "colorPulseOnUpdate", "hideControls", "centered",
  "showFirstLastButtons",
]);

// Props with numeric string values
const numericProps = new Set([
  "padding", "paddingX", "paddingY", "margin", "marginX", "marginY",
  "gap", "columns", "colSpan", "size",
]);

function formatPropValue(key: string, value: unknown): string | null {
  if (value === "" || value === undefined || value === null) return null;
  if (skipProps.has(key)) return null;

  if (boolStringProps.has(key)) {
    const bool = value === "true" || value === true;
    return bool ? key : null; // short form: <Button block /> or omit
  }

  if (numericProps.has(key) && typeof value === "string" && !isNaN(Number(value)) && value !== "0") {
    return `${key}={${Number(value)}}`;
  }

  if (typeof value === "number") {
    return value === 0 ? null : `${key}={${value}}`;
  }

  if (typeof value === "boolean") {
    return value ? key : null;
  }

  if (typeof value === "string") {
    return `${key}="${value}"`;
  }

  return `${key}={${JSON.stringify(value)}}`;
}

interface ContentItem {
  type: string;
  props: Record<string, unknown>;
}

function generateComponentCode(item: ContentItem, indent: number): string {
  const pad = "  ".repeat(indent);
  const type = item.type;
  const props = item.props || {};

  // Get children text prop if applicable
  const childPropKey = childrenProps[type];
  const childrenText = childPropKey ? (props[childPropKey] as string) : null;

  // Build prop string
  const propEntries: string[] = [];
  for (const [key, value] of Object.entries(props)) {
    if (key === childPropKey) continue; // rendered as children
    const formatted = formatPropValue(key, value);
    if (formatted) propEntries.push(formatted);
  }

  const propsStr = propEntries.length > 0 ? " " + propEntries.join(" ") : "";

  if (childrenText) {
    return `${pad}<${type}${propsStr}>${childrenText}</${type}>`;
  }

  // Self-closing for components without children
  return `${pad}<${type}${propsStr} />`;
}

function generateContentCode(content: ContentItem[], indent: number): string {
  return content
    .map((item) => generateComponentCode(item, indent))
    .join("\n");
}

export function generateTSX(data: Data): string {
  const content = data.content || [];

  // Collect unique imports
  const imports = new Map<string, Set<string>>();
  function collectImports(items: ContentItem[]) {
    for (const item of items) {
      const mapping = importMap[item.type];
      if (mapping) {
        if (!imports.has(mapping.module)) {
          imports.set(mapping.module, new Set());
        }
        imports.get(mapping.module)!.add(mapping.name);
      }
      // Composite components use Box/HStack/etc internally — add those too
      if (["Row", "TwoColumns", "ThreeColumns", "Section", "NavBar", "HeroSection", "AssetRow", "Footer"].includes(item.type)) {
        if (!imports.has("@coinbase/cds-web/layout")) {
          imports.set("@coinbase/cds-web/layout", new Set());
        }
        imports.get("@coinbase/cds-web/layout")!.add("Box");
        imports.get("@coinbase/cds-web/layout")!.add("HStack");
        imports.get("@coinbase/cds-web/layout")!.add("VStack");
      }
    }
  }
  collectImports(content);

  // Generate import statements
  const importLines: string[] = [
    'import React from "react";',
  ];
  for (const [module, names] of imports) {
    const nameList = Array.from(names).sort().join(", ");
    importLines.push(`import { ${nameList} } from "${module}";`);
  }

  // Generate component body
  const bodyCode = content.length > 0
    ? generateContentCode(content, 3)
    : '      {/* Drop components here */}';

  const code = `${importLines.join("\n")}

export default function Page() {
  return (
    <main>
${bodyCode}
    </main>
  );
}
`;

  return code;
}

export function generateJS(data: Data): string {
  // Same as TSX but with .js extension hint in mind (no type annotations)
  return generateTSX(data);
}

export function downloadFile(content: string, filename: string) {
  const blob = new Blob([content], { type: "text/plain" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}
