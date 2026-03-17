"use client";
// @ts-nocheck
import React from "react";
import type { Config } from "@measured/puck";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Any = any;

// ─── BUTTONS ───
import { Button, IconButton, ButtonGroup, TileButton, AvatarButton, IconCounterButton } from "@coinbase/cds-web/buttons";

// ─── TYPOGRAPHY ───
import { Text, Link } from "@coinbase/cds-web/typography";

// ─── LAYOUT ───
import {
  Box,
  VStack,
  HStack,
  Divider,
  Spacer,
  Grid,
  GridColumn,
  Fallback,
} from "@coinbase/cds-web/layout";

// ─── ACCORDION ───
import { Accordion, AccordionItem } from "@coinbase/cds-web/accordion";

// ─── BANNER ───
import { Banner } from "@coinbase/cds-web/banner";

// ─── TAG ───
import { Tag } from "@coinbase/cds-web/tag";

// ─── CONTROLS ───
import {
  TextInput,
  SearchInput,
  Checkbox,
  Radio,
  Select,
  SelectOption,
  SegmentedControl,
  Switch,
  CheckboxCell,
  RadioCell,
  ControlGroup,
  NativeTextArea,
} from "@coinbase/cds-web/controls";

// ─── CHIPS ───
import { Chip, InputChip, MediaChip } from "@coinbase/cds-web/chips";

// ─── CELLS ───
import { ListCell, ContentCell } from "@coinbase/cds-web/cells";

// ─── CARDS ───
import { ContentCard, ContentCardHeader, ContentCardBody, ContentCardFooter } from "@coinbase/cds-web/cards/ContentCard";
import { Card, CardBody, CardHeader, CardFooter, CardMedia, CardGroup, MediaCard, MessagingCard } from "@coinbase/cds-web/cards";
// DataCard is deprecated — use alpha version or skip
// import { DataCard } from "@coinbase/cds-web/cards";

// ─── CAROUSEL ───
import { Carousel, CarouselItem } from "@coinbase/cds-web/carousel";

// ─── COLLAPSIBLE ───
import { Collapsible } from "@coinbase/cds-web/collapsible";

// ─── DROPDOWN ───
import { Dropdown, MenuItem } from "@coinbase/cds-web/dropdown";

// ─── NAVIGATION ───
import { NavigationBar, Sidebar, SidebarItem, NavLink } from "@coinbase/cds-web/navigation";

// ─── TABLES ───
import {
  Table,
  TableBody,
  TableHeader,
  TableRow,
  TableCell as TCell,
} from "@coinbase/cds-web/tables";

// ─── TABS ───
import { Tabs, SegmentedTabs, TabLabel, TabIndicator } from "@coinbase/cds-web/tabs";

// ─── OVERLAYS ───
import { Alert, Toast, Tooltip, Modal, ModalHeader, ModalBody, ModalFooter, Tray, FullscreenAlert } from "@coinbase/cds-web/overlays";

// ─── PAGE ───
import { PageHeader, PageFooter } from "@coinbase/cds-web/page";

// ─── LOADERS ───
import { Spinner } from "@coinbase/cds-web/loaders";

// ─── MEDIA ───
import { Avatar, RemoteImage, RemoteImageGroup } from "@coinbase/cds-web/media";

// ─── ICONS ───
import { Icon, LogoMark, LogoWordmark } from "@coinbase/cds-web/icons";

// ─── VISUALIZATIONS ───
import { ProgressBar, ProgressCircle } from "@coinbase/cds-web/visualizations";

// ─── STEPPER ───
import { Stepper } from "@coinbase/cds-web/stepper";

// ─── SECTION HEADER ───
import { SectionHeader } from "@coinbase/cds-web/section-header";

// ─── PAGINATION ───
import { Pagination } from "@coinbase/cds-web/pagination";

// ─── DOTS ───
import { DotCount, DotStatusColor, DotSymbol } from "@coinbase/cds-web/dots";

// ─── ILLUSTRATIONS ───
import { HeroSquare, Pictogram, SpotIcon, SpotRectangle, SpotSquare } from "@coinbase/cds-web/illustrations";

// ─── DATES ───
import { Calendar, DateInput, DatePicker } from "@coinbase/cds-web/dates";

// ─── NUMBERS ───
import { RollingNumber } from "@coinbase/cds-web/numbers/RollingNumber";

// ─── COACHMARK ───
import { Coachmark } from "@coinbase/cds-web/coachmark";

// ─── MULTI CONTENT MODULE ───
import { MultiContentModule } from "@coinbase/cds-web/multi-content-module";

/* ═══════════════════════════════════════════════════════════════
   Shared option sets for Puck fields
   ═══════════════════════════════════════════════════════════════ */

const spaceOptions = [
  { label: "0", value: "0" },
  { label: "0.25", value: "0.25" },
  { label: "0.5", value: "0.5" },
  { label: "0.75", value: "0.75" },
  { label: "1", value: "1" },
  { label: "1.5", value: "1.5" },
  { label: "2", value: "2" },
  { label: "3", value: "3" },
  { label: "4", value: "4" },
  { label: "5", value: "5" },
  { label: "6", value: "6" },
  { label: "7", value: "7" },
  { label: "8", value: "8" },
];

const borderRadiusOptions = [
  { label: "None", value: "0" },
  { label: "100", value: "100" },
  { label: "200", value: "200" },
  { label: "300", value: "300" },
  { label: "400", value: "400" },
  { label: "500", value: "500" },
  { label: "600", value: "600" },
  { label: "700", value: "700" },
  { label: "800", value: "800" },
  { label: "Round", value: "full" },
];

const fontOptions = [
  { label: "Display 1", value: "display1" },
  { label: "Display 2", value: "display2" },
  { label: "Display 3", value: "display3" },
  { label: "Title 1", value: "title1" },
  { label: "Title 2", value: "title2" },
  { label: "Title 3", value: "title3" },
  { label: "Title 4", value: "title4" },
  { label: "Headline", value: "headline" },
  { label: "Body", value: "body" },
  { label: "Label 1", value: "label1" },
  { label: "Label 2", value: "label2" },
  { label: "Caption", value: "caption" },
  { label: "Legal", value: "legal" },
];

const colorOptions = [
  { label: "Foreground", value: "foreground" },
  { label: "Foreground Muted", value: "foregroundMuted" },
  { label: "Primary", value: "primary" },
  { label: "Positive", value: "positive" },
  { label: "Negative", value: "negative" },
  { label: "Warning", value: "warning" },
];

const backgroundOptions = [
  { label: "Default", value: "background" },
  { label: "Alternate", value: "backgroundAlternate" },
  { label: "Primary", value: "primary" },
  { label: "Secondary", value: "secondary" },
  { label: "Positive", value: "positive" },
  { label: "Negative", value: "negative" },
];

const boolOptions = [
  { label: "Yes", value: "true" },
  { label: "No", value: "false" },
];

const buttonVariantOptions = [
  { label: "Primary", value: "primary" },
  { label: "Secondary", value: "secondary" },
  { label: "Tertiary", value: "tertiary" },
  { label: "Positive", value: "positive" },
  { label: "Negative", value: "negative" },
  { label: "Foreground Muted", value: "foregroundMuted" },
];

const alignItemsOptions = [
  { label: "Start", value: "flex-start" },
  { label: "Center", value: "center" },
  { label: "End", value: "flex-end" },
  { label: "Stretch", value: "stretch" },
];

const justifyContentOptions = [
  { label: "Start", value: "flex-start" },
  { label: "Center", value: "center" },
  { label: "End", value: "flex-end" },
  { label: "Between", value: "space-between" },
  { label: "Around", value: "space-around" },
];

/* ═══════════════════════════════════════════════════════════════
   Puck Config
   ═══════════════════════════════════════════════════════════════ */

export const puckConfig: Config<Any> = {
  categories: {
    "Layout Helpers": {
      title: "Layout Helpers",
      components: ["Section", "Row", "TwoColumns", "ThreeColumns", "Wrapper"],
      defaultExpanded: true,
    },
    "Layout": {
      title: "Layout",
      components: ["Box", "VStack", "HStack", "Grid", "GridColumn", "Divider", "Spacer", "Fallback", "Collapsible"],
      defaultExpanded: false,
    },
    "Typography": {
      title: "Typography",
      components: ["Text", "Link"],
      defaultExpanded: false,
    },
    "Buttons": {
      title: "Buttons",
      components: ["Button", "ButtonGroup", "IconButton", "TileButton", "AvatarButton", "IconCounterButton"],
      defaultExpanded: false,
    },
    "Inputs": {
      title: "Inputs",
      components: ["TextInput", "SearchInput", "NativeTextArea", "Checkbox", "CheckboxCell", "Radio", "RadioCell", "Select", "Switch", "SegmentedControl", "ControlGroup"],
      defaultExpanded: false,
    },
    "Chips": {
      title: "Chips",
      components: ["Chip", "InputChip", "MediaChip"],
      defaultExpanded: false,
    },
    "Cards": {
      title: "Cards",
      components: ["Card", "CardBody", "CardHeader", "CardFooter", "CardGroup", "ContentCard", "ContentCardHeader", "ContentCardBody", "ContentCardFooter", "MediaCard", "MessagingCard"],
      defaultExpanded: false,
    },
    "Data Display": {
      title: "Data Display",
      components: ["ListCell", "ContentCell", "Table", "Tag", "SectionHeader", "DotCount", "DotStatusColor", "DotSymbol", "RollingNumber"],
      defaultExpanded: false,
    },
    "Feedback": {
      title: "Feedback",
      components: ["Banner", "ProgressBar", "ProgressCircle", "Spinner"],
      defaultExpanded: false,
    },
    "Media": {
      title: "Media",
      components: ["Avatar", "Icon", "LogoMark", "LogoWordmark", "RemoteImage", "RemoteImageGroup"],
      defaultExpanded: false,
    },
    "Illustrations": {
      title: "Illustrations",
      components: ["HeroSquare", "Pictogram", "SpotIcon", "SpotRectangle", "SpotSquare"],
      defaultExpanded: false,
    },
    "Overlays": {
      title: "Overlays",
      components: ["Alert", "Toast", "Tooltip", "Modal", "Tray", "FullscreenAlert"],
      defaultExpanded: false,
    },
    "Navigation": {
      title: "Navigation",
      components: ["NavigationBar", "Sidebar", "SidebarItem", "NavLink", "PageHeader", "PageFooter", "Pagination", "Stepper", "Coachmark"],
      defaultExpanded: false,
    },
    "Tabs & Accordion": {
      title: "Tabs & Accordion",
      components: ["Accordion", "AccordionItem", "SegmentedTabs", "TabLabel", "TabIndicator"],
      defaultExpanded: false,
    },
    "Dates": {
      title: "Dates",
      components: ["Calendar", "DateInput", "DatePicker"],
      defaultExpanded: false,
    },
    "Other": {
      title: "Other",
      components: ["Carousel", "Dropdown", "MultiContentModule"],
      defaultExpanded: false,
    },
    "Sections (Composite)": {
      title: "Sections (Composite)",
      components: ["NavBar", "HeroSection", "AssetRow", "Footer"],
      defaultExpanded: false,
    },
  },
  components: {
    // ─── LAYOUT ─────────────────────────────────────────────────

    Box: {
      fields: {
        background: { type: "select", options: backgroundOptions },
        padding: { type: "select", options: spaceOptions },
        paddingX: { type: "select", options: spaceOptions },
        paddingY: { type: "select", options: spaceOptions },
        margin: { type: "select", options: spaceOptions },
        marginX: { type: "select", options: spaceOptions },
        marginY: { type: "select", options: spaceOptions },
        gap: { type: "select", options: spaceOptions },
        width: { type: "text" },
        minWidth: { type: "text" },
        maxWidth: { type: "text" },
        height: { type: "text" },
        minHeight: { type: "text" },
        maxHeight: { type: "text" },
        borderRadius: { type: "select", options: borderRadiusOptions },
        bordered: { type: "radio", options: boolOptions },
        display: {
          type: "select",
          options: [
            { label: "Flex", value: "flex" },
            { label: "Block", value: "block" },
            { label: "Inline Flex", value: "inline-flex" },
            { label: "Grid", value: "grid" },
            { label: "None", value: "none" },
          ],
        },
        flexDirection: {
          type: "select",
          options: [
            { label: "Column", value: "column" },
            { label: "Row", value: "row" },
            { label: "Row Reverse", value: "row-reverse" },
            { label: "Column Reverse", value: "column-reverse" },
          ],
        },
        flexWrap: {
          type: "select",
          options: [
            { label: "No Wrap", value: "nowrap" },
            { label: "Wrap", value: "wrap" },
          ],
        },
        alignItems: { type: "select", options: alignItemsOptions },
        justifyContent: { type: "select", options: justifyContentOptions },
        flexGrow: { type: "number" },
        flexShrink: { type: "number" },
        overflow: {
          type: "select",
          options: [
            { label: "Visible", value: "" },
            { label: "Hidden", value: "hidden" },
            { label: "Scroll", value: "scroll" },
            { label: "Auto", value: "auto" },
          ],
        },
      },
      defaultProps: {
        background: "background",
        padding: "3",
        paddingX: "",
        paddingY: "",
        margin: "",
        marginX: "",
        marginY: "",
        gap: "",
        width: "",
        minWidth: "",
        maxWidth: "",
        height: "",
        minHeight: "",
        maxHeight: "",
        borderRadius: "0",
        bordered: "false",
        display: "flex",
        flexDirection: "column",
        flexWrap: "nowrap",
        alignItems: "",
        justifyContent: "",
        flexGrow: 0,
        flexShrink: 0,
        overflow: "",
      },
      render: ({
        background, padding, paddingX, paddingY,
        margin, marginX, marginY, gap,
        width, minWidth, maxWidth, height, minHeight, maxHeight,
        borderRadius, bordered, display, flexDirection, flexWrap,
        alignItems, justifyContent, flexGrow, flexShrink, overflow,
        puck,
      }) => (
        <Box
          background={background as any}
          padding={padding ? (Number(padding) as any) : undefined}
          paddingX={paddingX ? (Number(paddingX) as any) : undefined}
          paddingY={paddingY ? (Number(paddingY) as any) : undefined}
          margin={margin ? (Number(margin) as any) : undefined}
          marginX={marginX ? (Number(marginX) as any) : undefined}
          marginY={marginY ? (Number(marginY) as any) : undefined}
          gap={gap ? (Number(gap) as any) : undefined}
          width={width ? (isNaN(Number(width)) ? width : Number(width)) : undefined}
          minWidth={minWidth ? (isNaN(Number(minWidth)) ? minWidth : Number(minWidth)) : undefined}
          maxWidth={maxWidth ? (isNaN(Number(maxWidth)) ? maxWidth : Number(maxWidth)) : undefined}
          height={height ? (isNaN(Number(height)) ? height : Number(height)) : undefined}
          minHeight={minHeight ? (isNaN(Number(minHeight)) ? minHeight : Number(minHeight)) : undefined}
          maxHeight={maxHeight ? (isNaN(Number(maxHeight)) ? maxHeight : Number(maxHeight)) : undefined}
          borderRadius={borderRadius as any}
          bordered={bordered === "true"}
          display={display as any}
          flexDirection={flexDirection as any}
          flexWrap={flexWrap as any}
          alignItems={alignItems ? (alignItems as any) : undefined}
          justifyContent={justifyContent ? (justifyContent as any) : undefined}
          flexGrow={flexGrow || undefined}
          flexShrink={flexShrink || undefined}
          overflow={overflow ? (overflow as any) : undefined}
        >
          {puck.renderDropZone({ zone: "content" }) as React.ReactNode}
        </Box>
      ),
    },

    VStack: {
      fields: {
        gap: { type: "select", options: spaceOptions },
        padding: { type: "select", options: spaceOptions },
        margin: { type: "select", options: spaceOptions },
        alignItems: { type: "select", options: alignItemsOptions },
        width: { type: "text" },
        maxWidth: { type: "text" },
        height: { type: "text" },
        flexGrow: { type: "number" },
        background: { type: "select", options: backgroundOptions },
      },
      defaultProps: { gap: "2", padding: "0", margin: "", alignItems: "", width: "", maxWidth: "", height: "", flexGrow: 0, background: "" },
      render: ({ gap, padding, margin, alignItems, width, maxWidth, height, flexGrow, background, puck }) => (
        <VStack
          gap={Number(gap) as any}
          padding={padding ? (Number(padding) as any) : undefined}
          margin={margin ? (Number(margin) as any) : undefined}
          alignItems={alignItems ? (alignItems as any) : undefined}
          width={width ? (isNaN(Number(width)) ? width : Number(width)) : undefined}
          maxWidth={maxWidth ? (isNaN(Number(maxWidth)) ? maxWidth : Number(maxWidth)) : undefined}
          height={height ? (isNaN(Number(height)) ? height : Number(height)) : undefined}
          flexGrow={flexGrow || undefined}
          background={background ? (background as any) : undefined}
        >
          {puck.renderDropZone({ zone: "content" }) as React.ReactNode}
        </VStack>
      ),
    },

    HStack: {
      fields: {
        gap: { type: "select", options: spaceOptions },
        padding: { type: "select", options: spaceOptions },
        margin: { type: "select", options: spaceOptions },
        alignItems: { type: "select", options: alignItemsOptions },
        justifyContent: { type: "select", options: justifyContentOptions },
        flexWrap: {
          type: "select",
          options: [
            { label: "No Wrap", value: "nowrap" },
            { label: "Wrap", value: "wrap" },
          ],
        },
        width: { type: "text" },
        maxWidth: { type: "text" },
        height: { type: "text" },
        flexGrow: { type: "number" },
        background: { type: "select", options: backgroundOptions },
      },
      defaultProps: {
        gap: "2", padding: "0", margin: "", alignItems: "center", justifyContent: "flex-start",
        flexWrap: "nowrap", width: "", maxWidth: "", height: "", flexGrow: 0, background: "",
      },
      render: ({ gap, padding, margin, alignItems, justifyContent, flexWrap, width, maxWidth, height, flexGrow, background, puck }) => (
        <HStack
          gap={Number(gap) as any}
          padding={padding ? (Number(padding) as any) : undefined}
          margin={margin ? (Number(margin) as any) : undefined}
          alignItems={alignItems as any}
          justifyContent={justifyContent as any}
          flexWrap={flexWrap as any}
          width={width ? (isNaN(Number(width)) ? width : Number(width)) : undefined}
          maxWidth={maxWidth ? (isNaN(Number(maxWidth)) ? maxWidth : Number(maxWidth)) : undefined}
          height={height ? (isNaN(Number(height)) ? height : Number(height)) : undefined}
          flexGrow={flexGrow || undefined}
          background={background ? (background as any) : undefined}
        >
          {puck.renderDropZone({ zone: "content" }) as React.ReactNode}
        </HStack>
      ),
    },

    Grid: {
      fields: {
        columns: {
          type: "select",
          options: [
            { label: "1", value: "1" },
            { label: "2", value: "2" },
            { label: "3", value: "3" },
            { label: "4", value: "4" },
            { label: "5", value: "5" },
            { label: "6", value: "6" },
          ],
        },
        gap: { type: "select", options: spaceOptions },
        padding: { type: "select", options: spaceOptions },
      },
      defaultProps: { columns: "3", gap: "2", padding: "0" },
      render: ({ columns, gap, padding, puck }) => (
        <Grid
          columns={Number(columns)}
          gap={Number(gap) as any}
          padding={padding ? (Number(padding) as any) : undefined}
        >
          {puck.renderDropZone({ zone: "content" }) as React.ReactNode}
        </Grid>
      ),
    },

    GridColumn: {
      fields: {
        colSpan: {
          type: "select",
          options: [
            { label: "1", value: "1" },
            { label: "2", value: "2" },
            { label: "3", value: "3" },
            { label: "4", value: "4" },
            { label: "5", value: "5" },
            { label: "6", value: "6" },
          ],
        },
      },
      defaultProps: { colSpan: "1" },
      render: ({ colSpan, puck }) => (
        <GridColumn colSpan={Number(colSpan)}>
          {puck.renderDropZone({ zone: "content" }) as React.ReactNode}
        </GridColumn>
      ),
    },

    Divider: {
      fields: {},
      defaultProps: {},
      render: () => <Divider />,
    },

    Spacer: {
      fields: {
        size: {
          type: "select",
          options: [
            { label: "XS (4px)", value: "0.5" },
            { label: "SM (8px)", value: "1" },
            { label: "MD (16px)", value: "2" },
            { label: "LG (24px)", value: "3" },
            { label: "XL (32px)", value: "4" },
            { label: "2XL (40px)", value: "5" },
          ],
        },
      },
      defaultProps: { size: "2" },
      render: ({ size }) => <Spacer vertical={Number(size) as any} />,
    },

    // ─── TYPOGRAPHY ─────────────────────────────────────────────

    Text: {
      fields: {
        content: { type: "textarea" },
        font: { type: "select", options: fontOptions },
        color: { type: "select", options: colorOptions },
        as: {
          type: "select",
          options: [
            { label: "Paragraph", value: "p" },
            { label: "Heading 1", value: "h1" },
            { label: "Heading 2", value: "h2" },
            { label: "Heading 3", value: "h3" },
            { label: "Heading 4", value: "h4" },
            { label: "Span", value: "span" },
          ],
        },
        numberOfLines: {
          type: "number",
        },
      },
      defaultProps: {
        content: "Lorem ipsum dolor sit amet",
        font: "body",
        color: "",
        as: "p",
        numberOfLines: 0,
      },
      render: ({ content, font, color, as: asTag, numberOfLines }) => (
        <Text
          font={font as any}
          as={asTag as any}
          color={color ? (color as any) : undefined}
          numberOfLines={numberOfLines ? numberOfLines : undefined}
        >
          {content}
        </Text>
      ),
    },

    Link: {
      fields: {
        content: { type: "text" },
        href: { type: "text" },
        font: { type: "select", options: fontOptions },
        openInNewWindow: { type: "radio", options: boolOptions },
        underline: { type: "radio", options: boolOptions },
      },
      defaultProps: {
        content: "Learn more",
        href: "#",
        font: "body",
        openInNewWindow: "false",
        underline: "true",
      },
      render: ({ content, href, font, openInNewWindow, underline }) => (
        <Link
          href={href}
          font={font as any}
          openInNewWindow={openInNewWindow === "true"}
          underline={underline === "true"}
        >
          {content}
        </Link>
      ),
    },

    // ─── BUTTONS ────────────────────────────────────────────────

    Button: {
      fields: {
        label: { type: "text" },
        variant: { type: "select", options: buttonVariantOptions },
        block: { type: "radio", options: boolOptions },
        compact: { type: "radio", options: boolOptions },
        disabled: { type: "radio", options: boolOptions },
      },
      defaultProps: {
        label: "Get started",
        variant: "primary",
        block: "false",
        compact: "false",
        disabled: "false",
      },
      render: ({ label, variant, block, compact, disabled }) => (
        <Button
          variant={variant as any}
          block={block === "true"}
          compact={compact === "true"}
          disabled={disabled === "true"}
        >
          {label}
        </Button>
      ),
    },

    IconButton: {
      fields: {
        name: { type: "text" },
        variant: {
          type: "select",
          options: [
            { label: "Primary", value: "primary" },
            { label: "Secondary", value: "secondary" },
            { label: "Tertiary", value: "tertiary" },
            { label: "Foreground Muted", value: "foregroundMuted" },
            { label: "Overlay", value: "overlay" },
          ],
        },
        compact: { type: "radio", options: boolOptions },
        disabled: { type: "radio", options: boolOptions },
        accessibilityLabel: { type: "text" },
      },
      defaultProps: {
        name: "close",
        variant: "secondary",
        compact: "false",
        disabled: "false",
        accessibilityLabel: "Icon button",
      },
      render: ({ name, variant, compact, disabled, accessibilityLabel }) => (
        <IconButton
          name={name as any}
          variant={variant as any}
          compact={compact === "true"}
          disabled={disabled === "true"}
          accessibilityLabel={accessibilityLabel}
        />
      ),
    },

    ButtonGroup: {
      fields: {
        direction: {
          type: "select",
          options: [
            { label: "Horizontal", value: "horizontal" },
            { label: "Vertical", value: "vertical" },
          ],
        },
        block: { type: "radio", options: boolOptions },
      },
      defaultProps: { direction: "horizontal", block: "false" },
      render: ({ direction, block, puck }) => (
        <ButtonGroup direction={direction as any} block={block === "true"}>
          {puck.renderDropZone({ zone: "content" }) as React.ReactNode}
        </ButtonGroup>
      ),
    },

    // ─── INPUTS ─────────────────────────────────────────────────

    TextInput: {
      fields: {
        label: { type: "text" },
        placeholder: { type: "text" },
        helperText: { type: "text" },
        variant: {
          type: "select",
          options: [
            { label: "Default", value: "default" },
            { label: "Negative", value: "negative" },
            { label: "Positive", value: "positive" },
          ],
        },
        disabled: { type: "radio", options: boolOptions },
        compact: { type: "radio", options: boolOptions },
      },
      defaultProps: {
        label: "Email address",
        placeholder: "Enter your email",
        helperText: "",
        variant: "default",
        disabled: "false",
        compact: "false",
      },
      render: ({ label, placeholder, helperText, variant, disabled, compact }) => (
        <TextInput
          label={label}
          placeholder={placeholder}
          helperText={helperText || undefined}
          variant={variant !== "default" ? (variant as any) : undefined}
          disabled={disabled === "true"}
          compact={compact === "true"}
          value=""
          onChange={() => {}}
        />
      ),
    },

    SearchInput: {
      fields: {
        placeholder: { type: "text" },
        compact: { type: "radio", options: boolOptions },
        disabled: { type: "radio", options: boolOptions },
      },
      defaultProps: {
        placeholder: "Search...",
        compact: "false",
        disabled: "false",
      },
      render: ({ placeholder, compact, disabled }) => (
        <SearchInput
          placeholder={placeholder}
          compact={compact === "true"}
          disabled={disabled === "true"}
          value=""
          onChange={() => {}}
        />
      ),
    },

    Checkbox: {
      fields: {
        label: { type: "text" },
        checked: { type: "radio", options: boolOptions },
        disabled: { type: "radio", options: boolOptions },
      },
      defaultProps: {
        label: "I agree to the terms",
        checked: "false",
        disabled: "false",
      },
      render: ({ label, checked, disabled }) => (
        <Checkbox
          checked={checked === "true"}
          disabled={disabled === "true"}
          onChange={() => {}}
        >
          {label}
        </Checkbox>
      ),
    },

    Radio: {
      fields: {
        label: { type: "text" },
        checked: { type: "radio", options: boolOptions },
        disabled: { type: "radio", options: boolOptions },
      },
      defaultProps: {
        label: "Option A",
        checked: "false",
        disabled: "false",
      },
      render: ({ label, checked, disabled }) => (
        <Radio
          checked={checked === "true"}
          disabled={disabled === "true"}
          onChange={() => {}}
        >
          {label}
        </Radio>
      ),
    },

    Select: {
      fields: {
        label: { type: "text" },
        placeholder: { type: "text" },
        disabled: { type: "radio", options: boolOptions },
        optionsList: { type: "textarea" },
      },
      defaultProps: {
        label: "Choose option",
        placeholder: "Select...",
        disabled: "false",
        optionsList: "Option 1\nOption 2\nOption 3",
      },
      render: ({ label, placeholder, disabled, optionsList }) => {
        const options = (optionsList as string).split("\n").filter(Boolean);
        return (
          <Select
            label={label}
            placeholder={placeholder}
            disabled={disabled === "true"}
            value=""
            onChange={() => {}}
          >
            {options.map((opt: string) => (
              <SelectOption key={opt} value={opt}>
                {opt}
              </SelectOption>
            ))}
          </Select>
        );
      },
    },

    SegmentedControl: {
      fields: {
        optionsList: { type: "textarea" },
        block: { type: "radio", options: boolOptions },
        disabled: { type: "radio", options: boolOptions },
      },
      defaultProps: {
        optionsList: "Tab 1\nTab 2\nTab 3",
        block: "false",
        disabled: "false",
      },
      render: ({ optionsList, block, disabled }) => {
        const opts = (optionsList as string)
          .split("\n")
          .filter(Boolean)
          .map((label: string) => ({ label, value: label }));
        return (
          <SegmentedControl
            options={opts as any}
            value={opts[0]?.value}
            block={block === "true"}
            disabled={disabled === "true"}
            onChange={() => {}}
          />
        );
      },
    },

    // ─── CHIPS ──────────────────────────────────────────────────

    Chip: {
      fields: {
        label: { type: "text" },
        compact: { type: "radio", options: boolOptions },
        selected: { type: "radio", options: boolOptions },
      },
      defaultProps: { label: "Chip", compact: "false", selected: "false" },
      render: ({ label, compact, selected }) => (
        <Chip
          compact={compact === "true"}
          selected={selected === "true"}
          onClick={() => {}}
        >
          {label}
        </Chip>
      ),
    },

    InputChip: {
      fields: {
        label: { type: "text" },
      },
      defaultProps: { label: "Tag value" },
      render: ({ label }) => (
        <InputChip onRemove={() => {}}>{label}</InputChip>
      ),
    },

    // ─── CARDS ──────────────────────────────────────────────────

    ContentCard: {
      fields: {
        padding: { type: "select", options: spaceOptions },
        gap: { type: "select", options: spaceOptions },
      },
      defaultProps: { padding: "3", gap: "2" },
      render: ({ padding, gap, puck }) => (
        <ContentCard
          padding={Number(padding) as any}
          gap={Number(gap) as any}
        >
          {puck.renderDropZone({ zone: "content" }) as React.ReactNode}
        </ContentCard>
      ),
    },

    // DataCard removed — deprecated in CDS, use alpha version

    // ─── CELLS ──────────────────────────────────────────────────

    ListCell: {
      fields: {
        title: { type: "text" },
        description: { type: "text" },
        subtitle: { type: "text" },
        spacingVariant: {
          type: "select",
          options: [
            { label: "Normal", value: "normal" },
            { label: "Condensed", value: "condensed" },
          ],
        },
      },
      defaultProps: {
        title: "List item",
        description: "Description text",
        subtitle: "",
        spacingVariant: "normal",
      },
      render: ({ title, description, subtitle, spacingVariant }) => (
        <ListCell
          title={title}
          description={description || undefined}
          subtitle={subtitle || undefined}
          spacingVariant={spacingVariant as any}
        />
      ),
    },

    ContentCell: {
      fields: {
        title: { type: "text" },
        description: { type: "text" },
        subtitle: { type: "text" },
        spacingVariant: {
          type: "select",
          options: [
            { label: "Normal", value: "normal" },
            { label: "Condensed", value: "condensed" },
          ],
        },
      },
      defaultProps: {
        title: "Content cell",
        description: "Supporting description",
        subtitle: "",
        spacingVariant: "normal",
      },
      render: ({ title, description, subtitle, spacingVariant }) => (
        <ContentCell
          title={title}
          description={description || undefined}
          subtitle={subtitle || undefined}
          spacingVariant={spacingVariant as any}
        />
      ),
    },

    // ─── ACCORDION ──────────────────────────────────────────────

    Accordion: {
      fields: {},
      defaultProps: {},
      render: ({ puck }) => (
        <Accordion>
          {puck.renderDropZone({ zone: "content" }) as React.ReactNode}
        </Accordion>
      ),
    },

    AccordionItem: {
      fields: {
        title: { type: "text" },
        subtitle: { type: "text" },
        bodyText: { type: "textarea" },
        itemKey: { type: "text" },
      },
      defaultProps: {
        title: "Accordion item",
        subtitle: "",
        bodyText: "Accordion content goes here.",
        itemKey: "item-1",
      },
      render: ({ title, subtitle, bodyText, itemKey }) => (
        <AccordionItem
          title={title}
          subtitle={subtitle || undefined}
          itemKey={itemKey}
        >
          <Text font="body" as="p">{bodyText}</Text>
        </AccordionItem>
      ),
    },

    // ─── DATA DISPLAY ───────────────────────────────────────────

    Tag: {
      fields: {
        label: { type: "text" },
        intent: {
          type: "select",
          options: [
            { label: "Informational", value: "informational" },
            { label: "Promotional", value: "promotional" },
          ],
        },
        emphasis: {
          type: "select",
          options: [
            { label: "Low", value: "low" },
            { label: "High", value: "high" },
          ],
        },
        colorScheme: {
          type: "select",
          options: [
            { label: "Blue", value: "blue" },
            { label: "Green", value: "green" },
            { label: "Red", value: "red" },
            { label: "Yellow", value: "yellow" },
            { label: "Purple", value: "purple" },
            { label: "Gray", value: "gray" },
          ],
        },
      },
      defaultProps: {
        label: "New",
        intent: "informational",
        emphasis: "low",
        colorScheme: "blue",
      },
      render: ({ label, intent, emphasis, colorScheme }) => (
        <Tag
          intent={intent as any}
          emphasis={emphasis as any}
          colorScheme={colorScheme as any}
        >
          {label}
        </Tag>
      ),
    },

    SectionHeader: {
      fields: {
        title: { type: "text" },
        description: { type: "text" },
      },
      defaultProps: {
        title: "Section title",
        description: "",
      },
      render: ({ title, description }) => (
        <SectionHeader
          title={title}
          description={description || undefined}
        />
      ),
    },

    Table: {
      fields: {
        caption: { type: "text" },
        headerCols: { type: "textarea" },
        rows: { type: "textarea" },
      },
      defaultProps: {
        caption: "Data table",
        headerCols: "Name\nStatus\nAmount",
        rows: "Alice,Active,$100\nBob,Pending,$250\nCharlie,Inactive,$50",
      },
      render: ({ caption, headerCols, rows }) => {
        const headers = (headerCols as string).split("\n").filter(Boolean);
        const dataRows = (rows as string)
          .split("\n")
          .filter(Boolean)
          .map((row: string) => row.split(","));
        return (
          <Table>
            <TableHeader>
              <TableRow>
                {headers.map((h: string) => (
                  <TCell key={h} header>
                    {h}
                  </TCell>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {dataRows.map((cells: string[], rowIdx: number) => (
                <TableRow key={rowIdx}>
                  {cells.map((cell: string, cellIdx: number) => (
                    <TCell key={cellIdx}>{cell.trim()}</TCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        );
      },
    },

    DotCount: {
      fields: {
        count: { type: "number" },
        max: { type: "number" },
        variant: {
          type: "select",
          options: [
            { label: "Negative", value: "negative" },
            { label: "Primary", value: "primary" },
            { label: "Positive", value: "positive" },
          ],
        },
      },
      defaultProps: {
        count: 5,
        max: 99,
        variant: "negative",
      },
      render: ({ count, max, variant }) => (
        <DotCount
          count={count}
          max={max}
          variant={variant as any}
        />
      ),
    },

    // ─── FEEDBACK ───────────────────────────────────────────────

    Banner: {
      fields: {
        text: { type: "text" },
        title: { type: "text" },
        variant: {
          type: "select",
          options: [
            { label: "Warning", value: "warning" },
            { label: "Promotional", value: "promotional" },
            { label: "Informational", value: "informational" },
            { label: "Error", value: "error" },
          ],
        },
        showDismiss: { type: "radio", options: boolOptions },
      },
      defaultProps: {
        text: "This is an informational banner.",
        title: "",
        variant: "informational",
        showDismiss: "true",
      },
      render: ({ text, title, variant, showDismiss }) => (
        <Banner
          variant={variant as any}
          startIcon="info"
          title={title || undefined}
          showDismiss={showDismiss === "true"}
        >
          {text}
        </Banner>
      ),
    },

    ProgressBar: {
      fields: {
        progress: { type: "number" },
        weight: {
          type: "select",
          options: [
            { label: "Normal", value: "normal" },
            { label: "Semiheavy", value: "semiheavy" },
            { label: "Heavy", value: "heavy" },
          ],
        },
        color: {
          type: "select",
          options: [
            { label: "Primary", value: "primary" },
            { label: "Positive", value: "positive" },
            { label: "Negative", value: "negative" },
            { label: "Warning", value: "warning" },
          ],
        },
        disabled: { type: "radio", options: boolOptions },
      },
      defaultProps: {
        progress: 0.6,
        weight: "normal",
        color: "primary",
        disabled: "false",
      },
      render: ({ progress, weight, color, disabled }) => (
        <ProgressBar
          progress={progress}
          weight={weight as any}
          color={color as any}
          disabled={disabled === "true"}
          accessibilityLabel={`${Math.round(progress * 100)}% progress`}
        />
      ),
    },

    ProgressCircle: {
      fields: {
        progress: { type: "number" },
        size: { type: "number" },
        weight: {
          type: "select",
          options: [
            { label: "Normal", value: "normal" },
            { label: "Semiheavy", value: "semiheavy" },
            { label: "Heavy", value: "heavy" },
          ],
        },
        color: {
          type: "select",
          options: [
            { label: "Primary", value: "primary" },
            { label: "Positive", value: "positive" },
            { label: "Negative", value: "negative" },
            { label: "Warning", value: "warning" },
          ],
        },
        hideContent: { type: "radio", options: boolOptions },
      },
      defaultProps: {
        progress: 0.65,
        size: 80,
        weight: "normal",
        color: "primary",
        hideContent: "false",
      },
      render: ({ progress, size, weight, color, hideContent }) => (
        <ProgressCircle
          progress={progress}
          size={size}
          weight={weight as any}
          color={color as any}
          hideContent={hideContent === "true"}
          accessibilityLabel={`${Math.round(progress * 100)}% progress`}
        />
      ),
    },

    Spinner: {
      fields: {
        size: {
          type: "select",
          options: [
            { label: "Small (16px)", value: "16" },
            { label: "Medium (24px)", value: "24" },
            { label: "Large (32px)", value: "32" },
            { label: "XL (48px)", value: "48" },
          ],
        },
      },
      defaultProps: { size: "24" },
      render: ({ size }) => (
        <Spinner size={Number(size)} accessibilityLabel="Loading" />
      ),
    },

    // ─── MEDIA ──────────────────────────────────────────────────

    Avatar: {
      fields: {
        src: { type: "text" },
        name: { type: "text" },
        size: {
          type: "select",
          options: [
            { label: "XS", value: "xs" },
            { label: "S", value: "s" },
            { label: "M", value: "m" },
            { label: "L", value: "l" },
            { label: "XL", value: "xl" },
          ],
        },
        shape: {
          type: "select",
          options: [
            { label: "Circle", value: "circle" },
            { label: "Square", value: "square" },
          ],
        },
      },
      defaultProps: {
        src: "",
        name: "User",
        size: "m",
        shape: "circle",
      },
      render: ({ src, name, size, shape }) => (
        <Avatar
          src={src || undefined}
          name={name}
          size={size as any}
          shape={shape as any}
          alt={name}
        />
      ),
    },

    RemoteImage: {
      fields: {
        source: { type: "text" },
        alt: { type: "text" },
        shape: {
          type: "select",
          options: [
            { label: "Square", value: "square" },
            { label: "Circle", value: "circle" },
            { label: "Rounded", value: "rounded" },
          ],
        },
        size: {
          type: "select",
          options: [
            { label: "XS", value: "xs" },
            { label: "S", value: "s" },
            { label: "M", value: "m" },
            { label: "L", value: "l" },
            { label: "XL", value: "xl" },
          ],
        },
        resizeMode: {
          type: "select",
          options: [
            { label: "Cover", value: "cover" },
            { label: "Contain", value: "contain" },
          ],
        },
      },
      defaultProps: {
        source: "https://placehold.co/200x200",
        alt: "Image",
        shape: "square",
        size: "m",
        resizeMode: "cover",
      },
      render: ({ source, alt, shape, size, resizeMode }) => (
        <RemoteImage
          source={source}
          alt={alt}
          shape={shape as any}
          size={size as any}
          resizeMode={resizeMode as any}
        />
      ),
    },

    Icon: {
      fields: {
        name: { type: "text" },
        size: {
          type: "select",
          options: [
            { label: "S", value: "s" },
            { label: "M", value: "m" },
            { label: "L", value: "l" },
          ],
        },
        color: { type: "select", options: colorOptions },
      },
      defaultProps: {
        name: "info",
        size: "m",
        color: "",
      },
      render: ({ name, size, color }) => (
        <Icon
          name={name as any}
          size={size as any}
          color={color ? (color as any) : undefined}
        />
      ),
    },

    // ─── OVERLAY ────────────────────────────────────────────────

    Alert: {
      fields: {
        title: { type: "text" },
        body: { type: "textarea" },
        preferredActionLabel: { type: "text" },
        dismissActionLabel: { type: "text" },
        preferredActionVariant: {
          type: "select",
          options: [
            { label: "Primary", value: "primary" },
            { label: "Negative", value: "negative" },
          ],
        },
        visible: { type: "radio", options: boolOptions },
      },
      defaultProps: {
        title: "Are you sure?",
        body: "This action cannot be undone.",
        preferredActionLabel: "Confirm",
        dismissActionLabel: "Cancel",
        preferredActionVariant: "primary",
        visible: "true",
      },
      render: ({
        title,
        body,
        preferredActionLabel,
        dismissActionLabel,
        preferredActionVariant,
        visible,
      }) => (
        <Alert
          title={title}
          body={body}
          preferredActionLabel={preferredActionLabel}
          dismissActionLabel={dismissActionLabel || undefined}
          preferredActionVariant={preferredActionVariant as any}
          visible={visible === "true"}
          onRequestClose={() => {}}
        />
      ),
    },

    Toast: {
      fields: {
        title: { type: "text" },
        description: { type: "text" },
        variant: {
          type: "select",
          options: [
            { label: "Informational", value: "informational" },
            { label: "Positive", value: "positive" },
            { label: "Negative", value: "negative" },
            { label: "Warning", value: "warning" },
          ],
        },
        visible: { type: "radio", options: boolOptions },
      },
      defaultProps: {
        title: "Success",
        description: "Your changes have been saved.",
        variant: "positive",
        visible: "true",
      },
      render: ({ title, description, variant, visible }) => (
        <Toast
          title={title}
          description={description}
          variant={variant as any}
          visible={visible === "true"}
          onRequestClose={() => {}}
        />
      ),
    },

    // ─── NAVIGATION ─────────────────────────────────────────────

    NavigationBar: {
      fields: {
        title: { type: "text" },
        accessibilityLabel: { type: "text" },
      },
      defaultProps: {
        title: "Page Title",
        accessibilityLabel: "main navigation",
      },
      render: ({ title, accessibilityLabel, puck }) => (
        <NavigationBar
          accessibilityLabel={accessibilityLabel}
        >
          <Text font="headline" as="span">{title}</Text>
        </NavigationBar>
      ),
    },

    PageHeader: {
      fields: {
        title: { type: "text" },
        background: {
          type: "select",
          options: backgroundOptions,
        },
      },
      defaultProps: {
        title: "Page Title",
        background: "background",
      },
      render: ({ title, background }) => (
        <PageHeader
          title={<Text font="title2" as="h1">{title}</Text>}
          background={background as any}
        />
      ),
    },

    PageFooter: {
      fields: {
        actionLabel: { type: "text" },
        actionVariant: { type: "select", options: buttonVariantOptions },
        background: {
          type: "select",
          options: backgroundOptions,
        },
      },
      defaultProps: {
        actionLabel: "Continue",
        actionVariant: "primary",
        background: "background",
      },
      render: ({ actionLabel, actionVariant, background }) => (
        <PageFooter
          action={
            <Button variant={actionVariant as any}>{actionLabel}</Button>
          }
          background={background as any}
        />
      ),
    },

    Collapsible: {
      fields: {
        collapsed: { type: "radio", options: boolOptions },
        direction: {
          type: "select",
          options: [
            { label: "Vertical", value: "vertical" },
            { label: "Horizontal", value: "horizontal" },
          ],
        },
      },
      defaultProps: {
        collapsed: "false",
        direction: "vertical",
      },
      render: ({ collapsed, direction, puck }) => (
        <Collapsible
          collapsed={collapsed === "true"}
          direction={direction as any}
        >
          {puck.renderDropZone({ zone: "content" }) as React.ReactNode}
        </Collapsible>
      ),
    },

    Dropdown: {
      fields: {
        triggerLabel: { type: "text" },
        optionsList: { type: "textarea" },
      },
      defaultProps: {
        triggerLabel: "Select option",
        optionsList: "Option 1\nOption 2\nOption 3",
      },
      render: ({ triggerLabel, optionsList }) => {
        const options = (optionsList as string).split("\n").filter(Boolean);
        return (
          <Dropdown
            content={
              <>
                {options.map((opt: string) => (
                  <MenuItem key={opt} value={opt}>
                    {opt}
                  </MenuItem>
                ))}
              </>
            }
            onChange={() => {}}
          >
            <Button variant="secondary">{triggerLabel}</Button>
          </Dropdown>
        );
      },
    },

    // ─── TABS ───────────────────────────────────────────────────

    SegmentedTabs: {
      fields: {
        tabsList: { type: "textarea" },
      },
      defaultProps: {
        tabsList: "Tab 1\nTab 2\nTab 3",
      },
      render: ({ tabsList }) => {
        const tabs = (tabsList as string)
          .split("\n")
          .filter(Boolean)
          .map((label: string) => ({ label, value: label }));
        return (
          <SegmentedTabs
            tabs={tabs as any}
            value={tabs[0]?.value}
            onChange={() => {}}
            TabComponent={({ label }: any) => <span>{label}</span>}
            TabsActiveIndicatorComponent={() => null}
          />
        );
      },
    },

    // ─── CAROUSEL ───────────────────────────────────────────────

    Carousel: {
      fields: {
        itemCount: { type: "number" },
      },
      defaultProps: { itemCount: 3 },
      render: ({ itemCount, puck }) => (
        <Carousel>
          {Array.from({ length: itemCount || 3 }, (_, i) => (
            <CarouselItem key={i} index={i}>
              {puck.renderDropZone({ zone: `carousel-item-${i}` }) as React.ReactNode}
            </CarouselItem>
          ))}
        </Carousel>
      ),
    },

    // ─── NUMBERS ────────────────────────────────────────────────

    Pagination: {
      fields: {
        totalPages: { type: "number" },
        activePage: { type: "number" },
        showFirstLastButtons: { type: "radio", options: boolOptions },
      },
      defaultProps: {
        totalPages: 10,
        activePage: 1,
        showFirstLastButtons: "false",
      },
      render: ({ totalPages, activePage, showFirstLastButtons }) => (
        <Pagination
          totalPages={totalPages}
          activePage={activePage}
          showFirstLastButtons={showFirstLastButtons === "true"}
          onPageChange={() => {}}
        />
      ),
    },

    Stepper: {
      fields: {
        stepsList: { type: "textarea" },
        activeStepId: { type: "text" },
        direction: {
          type: "select",
          options: [
            { label: "Horizontal", value: "horizontal" },
            { label: "Vertical", value: "vertical" },
          ],
        },
      },
      defaultProps: {
        stepsList: "Step 1\nStep 2\nStep 3",
        activeStepId: "step-0",
        direction: "horizontal",
      },
      render: ({ stepsList, activeStepId, direction }) => {
        const steps = (stepsList as string)
          .split("\n")
          .filter(Boolean)
          .map((label: string, idx: number) => ({
            id: `step-${idx}`,
            label,
          }));
        return (
          <Stepper
            steps={steps}
            activeStepId={activeStepId}
            direction={direction as any}
          />
        );
      },
    },

    // ─── OTHER ──────────────────────────────────────────────────

    MultiContentModule: {
      fields: {
        title: { type: "text" },
        description: { type: "textarea" },
        actionLabel: { type: "text" },
      },
      defaultProps: {
        title: "Get started",
        description: "Follow these steps to set up your account and begin trading.",
        actionLabel: "Continue",
      },
      render: ({ title, description, actionLabel, puck }) => (
        <MultiContentModule
          title={title}
          description={description || undefined}
          action={actionLabel ? <Button variant="primary">{actionLabel}</Button> : undefined}
        >
          {puck.renderDropZone({ zone: "content" }) as React.ReactNode}
        </MultiContentModule>
      ),
    },

    // ─── ADDITIONAL CONTROLS ─────────────────────────────────────

    Switch: {
      fields: {
        label: { type: "text" },
        checked: { type: "radio", options: boolOptions },
        disabled: { type: "radio", options: boolOptions },
      },
      defaultProps: {
        label: "Enable notifications",
        checked: "false",
        disabled: "false",
      },
      render: ({ label, checked, disabled }) => (
        <Switch
          checked={checked === "true"}
          disabled={disabled === "true"}
          onChange={() => {}}
        >
          {label}
        </Switch>
      ),
    },

    CheckboxCell: {
      fields: {
        title: { type: "text" },
        description: { type: "text" },
        checked: { type: "radio", options: boolOptions },
        disabled: { type: "radio", options: boolOptions },
        value: { type: "text" },
      },
      defaultProps: {
        title: "Checkbox option",
        description: "Supporting description",
        checked: "false",
        disabled: "false",
        value: "option-1",
      },
      render: ({ title, description, checked, disabled, value }) => (
        <CheckboxCell
          title={title}
          description={description || undefined}
          checked={checked === "true"}
          disabled={disabled === "true"}
          value={value}
          onChange={() => {}}
        />
      ),
    },

    RadioCell: {
      fields: {
        title: { type: "text" },
        description: { type: "text" },
        checked: { type: "radio", options: boolOptions },
        disabled: { type: "radio", options: boolOptions },
        value: { type: "text" },
      },
      defaultProps: {
        title: "Radio option",
        description: "Supporting description",
        checked: "false",
        disabled: "false",
        value: "option-1",
      },
      render: ({ title, description, checked, disabled, value }) => (
        <RadioCell
          title={title}
          description={description || undefined}
          checked={checked === "true"}
          disabled={disabled === "true"}
          value={value}
          onChange={() => {}}
        />
      ),
    },

    ControlGroup: {
      fields: {
        role: {
          type: "select",
          options: [
            { label: "Group (checkboxes)", value: "group" },
            { label: "Radio group", value: "radiogroup" },
          ],
        },
        direction: {
          type: "select",
          options: [
            { label: "Vertical", value: "vertical" },
            { label: "Horizontal", value: "horizontal" },
          ],
        },
        label: { type: "text" },
        optionsList: { type: "textarea" },
      },
      defaultProps: {
        role: "radiogroup",
        direction: "vertical",
        label: "Choose an option",
        optionsList: "Option A\nOption B\nOption C",
      },
      render: ({ role, direction, label, optionsList }) => {
        const opts = (optionsList as string)
          .split("\n")
          .filter(Boolean)
          .map((text: string) => ({ value: text, children: text }));
        return (
          <ControlGroup
            role={role as any}
            direction={direction as any}
            label={label}
            ControlComponent={role === "radiogroup" ? Radio : Checkbox}
            options={opts as any}
            value={role === "radiogroup" ? opts[0]?.value : []}
            onChange={() => {}}
            name="control-group"
          />
        );
      },
    },

    NativeTextArea: {
      fields: {
        placeholder: { type: "text" },
        rows: { type: "number" },
        disabled: { type: "radio", options: boolOptions },
        compact: { type: "radio", options: boolOptions },
      },
      defaultProps: {
        placeholder: "Enter text here...",
        rows: 4,
        disabled: "false",
        compact: "false",
      },
      render: ({ placeholder, rows, disabled, compact }) => (
        <NativeTextArea
          placeholder={placeholder}
          rows={rows}
          disabled={disabled === "true"}
          compact={compact === "true"}
        />
      ),
    },

    // ─── ADDITIONAL BUTTONS ──────────────────────────────────────

    TileButton: {
      fields: {
        title: { type: "text" },
        disabled: { type: "radio", options: boolOptions },
      },
      defaultProps: {
        title: "Tile option",
        disabled: "false",
      },
      render: ({ title, disabled }) => (
        <TileButton
          title={title}
          disabled={disabled === "true"}
        />
      ),
    },

    AvatarButton: {
      fields: {
        name: { type: "text" },
        src: { type: "text" },
        compact: { type: "radio", options: boolOptions },
        shape: {
          type: "select",
          options: [
            { label: "Circle", value: "circle" },
            { label: "Square", value: "square" },
          ],
        },
      },
      defaultProps: {
        name: "User",
        src: "",
        compact: "false",
        shape: "circle",
      },
      render: ({ name, src, compact, shape }) => (
        <AvatarButton
          name={name}
          src={src || undefined}
          compact={compact === "true"}
          shape={shape as any}
          alt={name}
        />
      ),
    },

    IconCounterButton: {
      fields: {
        icon: { type: "text" },
        count: { type: "number" },
        active: { type: "radio", options: boolOptions },
        size: {
          type: "select",
          options: [
            { label: "S", value: "s" },
            { label: "M", value: "m" },
            { label: "L", value: "l" },
          ],
        },
      },
      defaultProps: {
        icon: "heart",
        count: 5,
        active: "false",
        size: "m",
      },
      render: ({ icon, count, active, size }) => (
        <IconCounterButton
          icon={icon as any}
          count={count}
          active={active === "true"}
          size={size as any}
          accessibilityLabel="Counter button"
        />
      ),
    },

    // ─── ADDITIONAL CHIPS ────────────────────────────────────────

    MediaChip: {
      fields: {
        label: { type: "text" },
        compact: { type: "radio", options: boolOptions },
        selected: { type: "radio", options: boolOptions },
      },
      defaultProps: { label: "Media", compact: "false", selected: "false" },
      render: ({ label, compact, selected }) => (
        <MediaChip
          compact={compact === "true"}
          selected={selected === "true"}
          onClick={() => {}}
        >
          {label}
        </MediaChip>
      ),
    },

    // ─── ADDITIONAL CARDS ────────────────────────────────────────

    ContentCardHeader: {
      fields: {
        title: { type: "text" },
        subtitle: { type: "text" },
      },
      defaultProps: {
        title: "Card Header Title",
        subtitle: "Subtitle",
      },
      render: ({ title, subtitle }) => (
        <ContentCardHeader
          title={title}
          subtitle={subtitle || undefined}
        />
      ),
    },

    ContentCardBody: {
      fields: {
        title: { type: "text" },
        description: { type: "textarea" },
        mediaPlacement: {
          type: "select",
          options: [
            { label: "Top", value: "top" },
            { label: "Bottom", value: "bottom" },
            { label: "Start", value: "start" },
            { label: "End", value: "end" },
          ],
        },
      },
      defaultProps: {
        title: "Card Body Title",
        description: "Card body description text goes here.",
        mediaPlacement: "top",
      },
      render: ({ title, description, mediaPlacement, puck }) => (
        <ContentCardBody
          title={title}
          description={description || undefined}
          mediaPlacement={mediaPlacement as any}
        >
          {puck.renderDropZone({ zone: "content" }) as React.ReactNode}
        </ContentCardBody>
      ),
    },

    ContentCardFooter: {
      fields: {},
      defaultProps: {},
      render: ({ puck }) => (
        <ContentCardFooter>
          {puck.renderDropZone({ zone: "content" }) as React.ReactNode}
        </ContentCardFooter>
      ),
    },

    Card: {
      fields: {
        size: {
          type: "select",
          options: [
            { label: "Small", value: "small" },
            { label: "Medium", value: "medium" },
            { label: "Large", value: "large" },
          ],
        },
        background: {
          type: "select",
          options: backgroundOptions,
        },
      },
      defaultProps: {
        size: "large",
        background: "background",
      },
      render: ({ size, background, puck }) => (
        <Card size={size as any} background={background as any}>
          {puck.renderDropZone({ zone: "content" }) as React.ReactNode}
        </Card>
      ),
    },

    CardBody: {
      fields: {
        title: { type: "text" },
        description: { type: "textarea" },
        actionLabel: { type: "text" },
        mediaPlacement: {
          type: "select",
          options: [
            { label: "Above", value: "above" },
            { label: "Start", value: "start" },
            { label: "End", value: "end" },
          ],
        },
        compact: { type: "radio", options: boolOptions },
      },
      defaultProps: {
        title: "Card Title",
        description: "Description of the card content.",
        actionLabel: "",
        mediaPlacement: "end",
        compact: "false",
      },
      render: ({ title, description, actionLabel, mediaPlacement, compact }) => (
        <CardBody
          title={title}
          description={description || undefined}
          actionLabel={actionLabel || undefined}
          mediaPlacement={mediaPlacement as any}
          compact={compact === "true"}
        />
      ),
    },

    CardHeader: {
      fields: {
        description: { type: "text" },
        metaData: { type: "text" },
        avatar: { type: "text" },
      },
      defaultProps: {
        description: "Card description",
        metaData: "",
        avatar: "",
      },
      render: ({ description, metaData, avatar }) => (
        <CardHeader
          description={description || undefined}
          metaData={metaData || undefined}
          avatar={avatar || undefined}
        />
      ),
    },

    CardFooter: {
      fields: {},
      defaultProps: {},
      render: ({ puck }) => (
        <CardFooter>
          {puck.renderDropZone({ zone: "content" }) as React.ReactNode}
        </CardFooter>
      ),
    },

    CardGroup: {
      fields: {},
      defaultProps: {},
      render: ({ puck }) => (
        <CardGroup>
          {puck.renderDropZone({ zone: "content" }) as React.ReactNode}
        </CardGroup>
      ),
    },

    MediaCard: {
      fields: {
        title: { type: "text" },
        subtitle: { type: "text" },
        description: { type: "textarea" },
        mediaPlacement: {
          type: "select",
          options: [
            { label: "Start", value: "start" },
            { label: "End", value: "end" },
          ],
        },
      },
      defaultProps: {
        title: "Media Card",
        subtitle: "Subtitle",
        description: "Description of the media card.",
        mediaPlacement: "end",
      },
      render: ({ title, subtitle, description, mediaPlacement }) => (
        <MediaCard
          title={title}
          subtitle={subtitle || undefined}
          description={description || undefined}
          thumbnail={<SpotSquare name={"abstractCrypto01" as any} />}
          mediaPlacement={mediaPlacement as any}
        />
      ),
    },

    MessagingCard: {
      fields: {
        type: {
          type: "select",
          options: [
            { label: "Upsell", value: "upsell" },
            { label: "Nudge", value: "nudge" },
          ],
        },
        title: { type: "text" },
        description: { type: "textarea" },
        actionLabel: { type: "text" },
        mediaPlacement: {
          type: "select",
          options: [
            { label: "Start", value: "start" },
            { label: "End", value: "end" },
          ],
        },
      },
      defaultProps: {
        type: "upsell",
        title: "Upgrade your account",
        description: "Get access to premium features and benefits.",
        actionLabel: "Learn more",
        mediaPlacement: "end",
      },
      render: ({ type, title, description, actionLabel, mediaPlacement }) => (
        <MessagingCard
          type={type as any}
          title={title}
          description={description || undefined}
          action={actionLabel || undefined}
          mediaPlacement={mediaPlacement as any}
        />
      ),
    },

    // ─── ADDITIONAL OVERLAYS ─────────────────────────────────────

    Tooltip: {
      fields: {
        content: { type: "text" },
        placement: {
          type: "select",
          options: [
            { label: "Top", value: "top" },
            { label: "Bottom", value: "bottom" },
            { label: "Left", value: "left" },
            { label: "Right", value: "right" },
          ],
        },
        triggerLabel: { type: "text" },
      },
      defaultProps: {
        content: "Tooltip text",
        placement: "top",
        triggerLabel: "Hover me",
      },
      render: ({ content, placement, triggerLabel }) => (
        <Tooltip
          content={content}
          placement={placement as any}
        >
          <Button variant="secondary">{triggerLabel}</Button>
        </Tooltip>
      ),
    },

    Modal: {
      fields: {
        title: { type: "text" },
        bodyText: { type: "textarea" },
        primaryActionLabel: { type: "text" },
        secondaryActionLabel: { type: "text" },
        visible: { type: "radio", options: boolOptions },
      },
      defaultProps: {
        title: "Modal Title",
        bodyText: "This is the modal body content.",
        primaryActionLabel: "Confirm",
        secondaryActionLabel: "Cancel",
        visible: "true",
      },
      render: ({ title, bodyText, primaryActionLabel, secondaryActionLabel, visible }) => (
        <Modal
          visible={visible === "true"}
          onRequestClose={() => {}}
          accessibilityLabel={title}
        >
          <ModalHeader title={title} />
          <ModalBody padding={3 as any}>
            <Text font="body" as="p">{bodyText}</Text>
          </ModalBody>
          <ModalFooter
            primaryAction={<Button variant="primary">{primaryActionLabel}</Button>}
            secondaryAction={secondaryActionLabel ? <Button variant="secondary">{secondaryActionLabel}</Button> : undefined}
          />
        </Modal>
      ),
    },

    Tray: {
      fields: {
        title: { type: "text" },
        pin: {
          type: "select",
          options: [
            { label: "Bottom", value: "bottom" },
            { label: "Left", value: "left" },
            { label: "Right", value: "right" },
            { label: "Top", value: "top" },
          ],
        },
      },
      defaultProps: {
        title: "Tray Title",
        pin: "bottom",
      },
      render: ({ title, pin, puck }) => (
        <Tray
          title={title}
          pin={pin as any}
          onCloseComplete={() => {}}
          accessibilityLabel={title}
        >
          {puck.renderDropZone({ zone: "content" }) as React.ReactNode}
        </Tray>
      ),
    },

    FullscreenAlert: {
      fields: {
        title: { type: "text" },
        body: { type: "textarea" },
        preferredActionLabel: { type: "text" },
        dismissActionLabel: { type: "text" },
        visible: { type: "radio", options: boolOptions },
      },
      defaultProps: {
        title: "Fullscreen Alert",
        body: "This is a fullscreen alert message.",
        preferredActionLabel: "Got it",
        dismissActionLabel: "Dismiss",
        visible: "true",
      },
      render: ({ title, body, preferredActionLabel, dismissActionLabel, visible }) => (
        <FullscreenAlert
          title={title}
          body={body}
          preferredActionLabel={preferredActionLabel}
          dismissActionLabel={dismissActionLabel || undefined}
          visible={visible === "true"}
          onRequestClose={() => {}}
        />
      ),
    },

    // ─── ADDITIONAL TABS ─────────────────────────────────────────

    TabLabel: {
      fields: {
        label: { type: "text" },
        active: { type: "radio", options: boolOptions },
      },
      defaultProps: {
        label: "Tab",
        active: "false",
      },
      render: ({ label, active }) => (
        <TabLabel
          id="tab-1"
          active={active === "true"}
          onPress={() => {}}
        >
          {label}
        </TabLabel>
      ),
    },

    TabIndicator: {
      fields: {
        width: { type: "number" },
        x: { type: "number" },
        background: { type: "select", options: backgroundOptions },
      },
      defaultProps: {
        width: 80,
        x: 0,
        background: "primary",
      },
      render: ({ width, x, background }) => (
        <TabIndicator
          width={width}
          x={x}
          background={background as any}
        />
      ),
    },

    // ─── ICONS & LOGOS ───────────────────────────────────────────

    LogoMark: {
      fields: {
        size: {
          type: "select",
          options: [
            { label: "16", value: "16" },
            { label: "24", value: "24" },
            { label: "32", value: "32" },
            { label: "48", value: "48" },
            { label: "64", value: "64" },
          ],
        },
      },
      defaultProps: { size: "32" },
      render: ({ size }) => <LogoMark size={Number(size) as any} />,
    },

    LogoWordmark: {
      fields: {},
      defaultProps: {},
      render: () => <LogoWordmark />,
    },

    // ─── ILLUSTRATIONS ───────────────────────────────────────────

    HeroSquare: {
      fields: {
        name: { type: "text" },
        dimension: {
          type: "select",
          options: [
            { label: "240x240", value: "240x240" },
          ],
        },
      },
      defaultProps: {
        name: "cryptoBuilding01",
        dimension: "240x240",
      },
      render: ({ name, dimension }) => (
        <HeroSquare name={name as any} dimension={dimension as any} />
      ),
    },

    Pictogram: {
      fields: {
        name: { type: "text" },
        dimension: {
          type: "select",
          options: [
            { label: "48x48", value: "48x48" },
          ],
        },
      },
      defaultProps: {
        name: "wallet",
        dimension: "48x48",
      },
      render: ({ name, dimension }) => (
        <Pictogram name={name as any} dimension={dimension as any} />
      ),
    },

    SpotIcon: {
      fields: {
        name: { type: "text" },
        dimension: {
          type: "select",
          options: [
            { label: "32x32", value: "32x32" },
          ],
        },
      },
      defaultProps: {
        name: "checkmark",
        dimension: "32x32",
      },
      render: ({ name, dimension }) => (
        <SpotIcon name={name as any} dimension={dimension as any} />
      ),
    },

    SpotRectangle: {
      fields: {
        name: { type: "text" },
        dimension: {
          type: "select",
          options: [
            { label: "240x120", value: "240x120" },
          ],
        },
      },
      defaultProps: {
        name: "cryptoBuilding01",
        dimension: "240x120",
      },
      render: ({ name, dimension }) => (
        <SpotRectangle name={name as any} dimension={dimension as any} />
      ),
    },

    SpotSquare: {
      fields: {
        name: { type: "text" },
        dimension: {
          type: "select",
          options: [
            { label: "96x96", value: "96x96" },
          ],
        },
      },
      defaultProps: {
        name: "abstractCrypto01",
        dimension: "96x96",
      },
      render: ({ name, dimension }) => (
        <SpotSquare name={name as any} dimension={dimension as any} />
      ),
    },

    // ─── DATES ───────────────────────────────────────────────────

    Calendar: {
      fields: {
        disabled: { type: "radio", options: boolOptions },
        hideControls: { type: "radio", options: boolOptions },
      },
      defaultProps: {
        disabled: "false",
        hideControls: "false",
      },
      render: ({ disabled, hideControls }) => (
        <Calendar
          selectedDate={new Date()}
          onPressDate={() => {}}
          disabled={disabled === "true"}
          hideControls={hideControls === "true"}
        />
      ),
    },

    DateInput: {
      fields: {
        label: { type: "text" },
        placeholder: { type: "text" },
        disabled: { type: "radio", options: boolOptions },
      },
      defaultProps: {
        label: "Date",
        placeholder: "MM/DD/YYYY",
        disabled: "false",
      },
      render: ({ label, placeholder, disabled }) => (
        <DateInput
          label={label}
          placeholder={placeholder}
          disabled={disabled === "true"}
          date={null}
          onChangeDate={() => {}}
        />
      ),
    },

    DatePicker: {
      fields: {
        label: { type: "text" },
        disabled: { type: "radio", options: boolOptions },
      },
      defaultProps: {
        label: "Select date",
        disabled: "false",
      },
      render: ({ label, disabled }) => (
        <DatePicker
          label={label}
          date={null}
          onChangeDate={() => {}}
          error={null}
          onErrorDate={() => {}}
          disabled={disabled === "true"}
        />
      ),
    },

    // ─── LAYOUT (ADDITIONAL) ─────────────────────────────────────

    Fallback: {
      fields: {
        width: { type: "number" },
        height: { type: "number" },
        shape: {
          type: "select",
          options: [
            { label: "Rectangle", value: "rectangle" },
            { label: "Circle", value: "circle" },
          ],
        },
      },
      defaultProps: {
        width: 200,
        height: 24,
        shape: "rectangle",
      },
      render: ({ width, height, shape }) => (
        <Fallback
          width={width}
          height={height}
          shape={shape as any}
        />
      ),
    },

    // ─── NUMBERS (ADDITIONAL) ────────────────────────────────────

    RollingNumber: {
      fields: {
        value: { type: "number" },
        font: { type: "select", options: fontOptions },
        color: { type: "select", options: colorOptions },
        prefix: { type: "text" },
        suffix: { type: "text" },
        colorPulseOnUpdate: { type: "radio", options: boolOptions },
      },
      defaultProps: {
        value: 1234.56,
        font: "title2",
        color: "",
        prefix: "$",
        suffix: "",
        colorPulseOnUpdate: "false",
      },
      render: ({ value, font, color, prefix, suffix, colorPulseOnUpdate }) => (
        <RollingNumber
          value={value}
          font={font as any}
          color={color ? (color as any) : undefined}
          prefix={prefix || undefined}
          suffix={suffix || undefined}
          colorPulseOnUpdate={colorPulseOnUpdate === "true"}
        />
      ),
    },

    // ─── NAVIGATION (ADDITIONAL) ─────────────────────────────────

    Sidebar: {
      fields: {
        collapsed: { type: "radio", options: boolOptions },
        variant: {
          type: "select",
          options: [
            { label: "Default", value: "default" },
            { label: "Condensed", value: "condensed" },
          ],
        },
      },
      defaultProps: {
        collapsed: "false",
        variant: "default",
      },
      render: ({ collapsed, variant, puck }) => (
        <Sidebar
          collapsed={collapsed === "true"}
          variant={variant as any}
        >
          {[puck.renderDropZone({ zone: "content" }) as React.ReactNode]}
        </Sidebar>
      ),
    },

    SidebarItem: {
      fields: {
        icon: { type: "text" },
        title: { type: "text" },
        active: { type: "radio", options: boolOptions },
        collapsed: { type: "radio", options: boolOptions },
      },
      defaultProps: {
        icon: "home",
        title: "Home",
        active: "false",
        collapsed: "false",
      },
      render: ({ icon, title, active, collapsed }) => (
        <SidebarItem
          icon={icon as any}
          title={title}
          active={active === "true"}
          collapsed={collapsed === "true"}
        />
      ),
    },

    NavLink: {
      fields: {
        label: { type: "text" },
        href: { type: "text" },
        active: { type: "radio", options: boolOptions },
      },
      defaultProps: {
        label: "Nav link",
        href: "#",
        active: "false",
      },
      render: ({ label, href, active }) => (
        <NavLink
          href={href}
          active={active === "true"}
        >
          {label}
        </NavLink>
      ),
    },

    // ─── DOTS (ADDITIONAL) ───────────────────────────────────────

    DotStatusColor: {
      fields: {
        variant: {
          type: "select",
          options: [
            { label: "Positive", value: "positive" },
            { label: "Negative", value: "negative" },
            { label: "Warning", value: "warning" },
            { label: "Primary", value: "primary" },
          ],
        },
        size: {
          type: "select",
          options: [
            { label: "Small", value: "small" },
            { label: "Large", value: "large" },
          ],
        },
      },
      defaultProps: {
        variant: "positive",
        size: "small",
      },
      render: ({ variant, size }) => (
        <DotStatusColor
          variant={variant as any}
          size={size as any}
          accessibilityLabel="Status indicator"
        />
      ),
    },

    DotSymbol: {
      fields: {
        iconName: { type: "text" },
        size: {
          type: "select",
          options: [
            { label: "Small", value: "small" },
            { label: "Large", value: "large" },
          ],
        },
        active: { type: "radio", options: boolOptions },
      },
      defaultProps: {
        iconName: "checkmark",
        size: "small",
        active: "false",
      },
      render: ({ iconName, size, active }) => (
        <DotSymbol
          iconName={iconName as any}
          size={size as any}
          active={active === "true"}
          accessibilityLabel="Symbol indicator"
        />
      ),
    },

    // ─── MEDIA (ADDITIONAL) ──────────────────────────────────────

    RemoteImageGroup: {
      fields: {},
      defaultProps: {},
      render: ({ puck }) => (
        <RemoteImageGroup>
          {puck.renderDropZone({ zone: "content" }) as React.ReactNode}
        </RemoteImageGroup>
      ),
    },

    // ─── COACHMARK ───────────────────────────────────────────────

    Coachmark: {
      fields: {
        title: { type: "text" },
        content: { type: "textarea" },
        actionLabel: { type: "text" },
      },
      defaultProps: {
        title: "Did you know?",
        content: "This feature helps you manage your portfolio more effectively.",
        actionLabel: "Got it",
      },
      render: ({ title, content, actionLabel }) => (
        <Coachmark
          title={title}
          content={<Text font="body" as="p">{content}</Text>}
          action={<Button variant="primary" compact>{actionLabel}</Button>}
          onClose={() => {}}
        />
      ),
    },

    // ─── LAYOUT HELPERS (quick-start containers) ─────────────────

    Wrapper: {
      fields: {
        width: { type: "text" },
        maxWidth: { type: "text" },
        height: { type: "text" },
        margin: { type: "select", options: spaceOptions },
        marginX: { type: "select", options: spaceOptions },
        marginY: { type: "select", options: spaceOptions },
        padding: { type: "select", options: spaceOptions },
        alignSelf: {
          type: "select",
          options: [
            { label: "Auto", value: "" },
            { label: "Start", value: "flex-start" },
            { label: "Center", value: "center" },
            { label: "End", value: "flex-end" },
            { label: "Stretch", value: "stretch" },
          ],
        },
        textAlign: {
          type: "select",
          options: [
            { label: "Left", value: "" },
            { label: "Center", value: "center" },
            { label: "Right", value: "right" },
          ],
        },
        position: {
          type: "select",
          options: [
            { label: "Static (default)", value: "" },
            { label: "Relative", value: "relative" },
            { label: "Absolute", value: "absolute" },
            { label: "Fixed", value: "fixed" },
            { label: "Sticky", value: "sticky" },
          ],
        },
        top: { type: "text" },
        left: { type: "text" },
        right: { type: "text" },
        bottom: { type: "text" },
        zIndex: { type: "number" },
        background: { type: "select", options: backgroundOptions },
        borderRadius: { type: "select", options: borderRadiusOptions },
        bordered: { type: "radio", options: boolOptions },
        overflow: {
          type: "select",
          options: [
            { label: "Visible", value: "" },
            { label: "Hidden", value: "hidden" },
            { label: "Scroll", value: "scroll" },
            { label: "Auto", value: "auto" },
          ],
        },
      },
      defaultProps: {
        width: "", maxWidth: "", height: "",
        margin: "", marginX: "", marginY: "", padding: "",
        alignSelf: "", textAlign: "",
        position: "", top: "", left: "", right: "", bottom: "", zIndex: 0,
        background: "", borderRadius: "0", bordered: "false", overflow: "",
      },
      render: ({
        width, maxWidth, height,
        margin, marginX, marginY, padding,
        alignSelf, textAlign,
        position, top, left, right, bottom, zIndex,
        background, borderRadius, bordered, overflow,
        puck,
      }) => {
        const parseVal = (v: any) => v ? (isNaN(Number(v)) ? v : Number(v)) : undefined;
        return (
          <Box
            width={parseVal(width)}
            maxWidth={parseVal(maxWidth)}
            height={parseVal(height)}
            margin={margin ? (Number(margin) as any) : undefined}
            marginX={marginX ? (Number(marginX) as any) : undefined}
            marginY={marginY ? (Number(marginY) as any) : undefined}
            padding={padding ? (Number(padding) as any) : undefined}
            alignSelf={alignSelf ? (alignSelf as any) : undefined}
            background={background ? (background as any) : undefined}
            borderRadius={borderRadius as any}
            bordered={bordered === "true"}
            overflow={overflow ? (overflow as any) : undefined}
            display="flex"
            flexDirection="column"
            style={{
              ...(textAlign ? { textAlign } : {}),
              ...(position ? { position } : {}),
              ...(top ? { top: parseVal(top) } : {}),
              ...(left ? { left: parseVal(left) } : {}),
              ...(right ? { right: parseVal(right) } : {}),
              ...(bottom ? { bottom: parseVal(bottom) } : {}),
              ...(zIndex ? { zIndex } : {}),
            } as any}
          >
            {puck.renderDropZone({ zone: "content" }) as React.ReactNode}
          </Box>
        );
      },
    },

    Row: {
      fields: {
        gap: { type: "select", options: spaceOptions },
        alignItems: { type: "select", options: alignItemsOptions },
        justifyContent: { type: "select", options: justifyContentOptions },
        padding: { type: "select", options: spaceOptions },
        flexWrap: {
          type: "select",
          options: [
            { label: "No Wrap", value: "nowrap" },
            { label: "Wrap", value: "wrap" },
          ],
        },
        background: { type: "select", options: backgroundOptions },
      },
      defaultProps: { gap: "2", alignItems: "center", justifyContent: "flex-start", padding: "0", flexWrap: "nowrap", background: "" },
      render: ({ gap, alignItems, justifyContent, padding, flexWrap, background, puck }) => (
        <HStack
          gap={Number(gap) as any}
          alignItems={alignItems as any}
          justifyContent={justifyContent as any}
          padding={padding ? (Number(padding) as any) : undefined}
          flexWrap={flexWrap as any}
          background={background ? (background as any) : undefined}
        >
          {puck.renderDropZone({ zone: "content" }) as React.ReactNode}
        </HStack>
      ),
    },

    TwoColumns: {
      fields: {
        gap: { type: "select", options: spaceOptions },
        padding: { type: "select", options: spaceOptions },
        leftWidth: { type: "text" },
        rightWidth: { type: "text" },
      },
      defaultProps: { gap: "3", padding: "0", leftWidth: "", rightWidth: "" },
      render: ({ gap, padding, leftWidth, rightWidth, puck }) => (
        <HStack
          gap={Number(gap) as any}
          padding={padding ? (Number(padding) as any) : undefined}
          alignItems="stretch"
        >
          <Box flexGrow={1} width={leftWidth || undefined} display="flex" flexDirection="column">
            {puck.renderDropZone({ zone: "left" }) as React.ReactNode}
          </Box>
          <Box flexGrow={1} width={rightWidth || undefined} display="flex" flexDirection="column">
            {puck.renderDropZone({ zone: "right" }) as React.ReactNode}
          </Box>
        </HStack>
      ),
    },

    ThreeColumns: {
      fields: {
        gap: { type: "select", options: spaceOptions },
        padding: { type: "select", options: spaceOptions },
      },
      defaultProps: { gap: "3", padding: "0" },
      render: ({ gap, padding, puck }) => (
        <HStack
          gap={Number(gap) as any}
          padding={padding ? (Number(padding) as any) : undefined}
          alignItems="stretch"
        >
          <Box flexGrow={1} display="flex" flexDirection="column">
            {puck.renderDropZone({ zone: "col1" }) as React.ReactNode}
          </Box>
          <Box flexGrow={1} display="flex" flexDirection="column">
            {puck.renderDropZone({ zone: "col2" }) as React.ReactNode}
          </Box>
          <Box flexGrow={1} display="flex" flexDirection="column">
            {puck.renderDropZone({ zone: "col3" }) as React.ReactNode}
          </Box>
        </HStack>
      ),
    },

    Section: {
      fields: {
        maxWidth: {
          type: "select",
          options: [
            { label: "Full", value: "" },
            { label: "Small (640px)", value: "640" },
            { label: "Medium (960px)", value: "960" },
            { label: "Large (1200px)", value: "1200" },
            { label: "XL (1440px)", value: "1440" },
          ],
        },
        padding: { type: "select", options: spaceOptions },
        paddingY: { type: "select", options: spaceOptions },
        background: { type: "select", options: backgroundOptions },
        centered: { type: "radio", options: boolOptions },
      },
      defaultProps: { maxWidth: "1200", padding: "3", paddingY: "4", background: "background", centered: "true" },
      render: ({ maxWidth, padding, paddingY, background, centered, puck }) => (
        <Box
          background={background as any}
          paddingX={padding ? (Number(padding) as any) : undefined}
          paddingY={paddingY ? (Number(paddingY) as any) : undefined}
          width="100%"
        >
          <Box
            maxWidth={maxWidth ? Number(maxWidth) : undefined}
            width="100%"
            marginX={centered === "true" ? ("auto" as any) : undefined}
            display="flex"
            flexDirection="column"
          >
            {puck.renderDropZone({ zone: "content" }) as React.ReactNode}
          </Box>
        </Box>
      ),
    },

    // ─── SECTIONS (composite) ───────────────────────────────────

    NavBar: {
      fields: {
        logoText: { type: "text" },
        links: { type: "text" },
        ctaText: { type: "text" },
      },
      defaultProps: {
        logoText: "coinbase",
        links: "Explore,Learn,Individuals,Businesses,Developers",
        ctaText: "Sign up",
      },
      render: ({ logoText, links, ctaText }) => {
        const linkArray = (links as string).split(",").map((l: string) => l.trim());
        return (
          <Box
            as="nav"
            padding={2 as any}
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between"
            bordered
          >
            <HStack gap={1 as any} alignItems="center">
              <svg width="28" height="28" viewBox="0 0 1024 1024" fill="none">
                <rect width="1024" height="1024" rx="200" fill="#0052FF" />
                <circle cx="512" cy="512" r="256" fill="white" />
              </svg>
              <Text font="headline" as="span">{logoText}</Text>
            </HStack>
            <HStack gap={3 as any} alignItems="center">
              {linkArray.map((link: string) => (
                <Text key={link} font="label1" as="span" color={"foregroundMuted" as any}>
                  {link}
                </Text>
              ))}
            </HStack>
            <HStack gap={2 as any} alignItems="center">
              <Text font="label1" as="span">Sign in</Text>
              <Button variant="primary" compact>
                {ctaText}
              </Button>
            </HStack>
          </Box>
        );
      },
    },

    HeroSection: {
      fields: {
        heading: { type: "textarea" },
        subheading: { type: "textarea" },
        ctaText: { type: "text" },
        secondaryCta: { type: "text" },
      },
      defaultProps: {
        heading: "Jump start your crypto portfolio",
        subheading:
          "Coinbase is the easiest place to buy and sell cryptocurrency. Sign up and get started today.",
        ctaText: "Get started",
        secondaryCta: "Learn more",
      },
      render: ({ heading, subheading, ctaText, secondaryCta }) => (
        <Box padding={4 as any}>
          <VStack gap={3 as any}>
            <Text font="display2" as="h1">
              {heading}
            </Text>
            <Text font="body" as="p" color={"foregroundMuted" as any}>
              {subheading}
            </Text>
            <HStack gap={2 as any}>
              <Button variant="primary">{ctaText}</Button>
              {secondaryCta && (
                <Button variant="secondary">{secondaryCta}</Button>
              )}
            </HStack>
          </VStack>
        </Box>
      ),
    },

    AssetRow: {
      fields: {
        name: { type: "text" },
        symbol: { type: "text" },
        price: { type: "text" },
        change: { type: "text" },
        positive: {
          type: "radio",
          options: [
            { label: "Up", value: "true" },
            { label: "Down", value: "false" },
          ],
        },
      },
      defaultProps: {
        name: "Bitcoin",
        symbol: "BTC",
        price: "$43,567.89",
        change: "+2.34%",
        positive: "true",
      },
      render: ({ name, symbol, price, change, positive }) => (
        <Box
          padding={2 as any}
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
          bordered
          borderRadius={200 as any}
        >
          <HStack gap={1.5 as any} alignItems="center">
            <Box
              background="primary"
              borderRadius="full"
              width={36}
              height={36}
              alignItems="center"
              justifyContent="center"
            >
              <Text font="label1" as="span" color={"white" as any}>
                {(symbol as string).charAt(0)}
              </Text>
            </Box>
            <VStack gap={0 as any}>
              <Text font="label1" as="span">
                {name}
              </Text>
              <Text font="caption" as="span" color={"foregroundMuted" as any}>
                {symbol}
              </Text>
            </VStack>
          </HStack>
          <VStack gap={0 as any} alignItems="flex-end">
            <Text font="label1" as="span">
              {price}
            </Text>
            <Text
              font="caption"
              as="span"
              color={(positive === "true" ? "positive" : "negative") as any}
            >
              {change}
            </Text>
          </VStack>
        </Box>
      ),
    },

    Footer: {
      fields: {
        companyName: { type: "text" },
      },
      defaultProps: {
        companyName: "Coinbase",
      },
      render: ({ companyName }) => {
        const columns = [
          { title: "Company", links: ["About", "Careers", "Affiliates", "Blog"] },
          { title: "Learn", links: ["Crypto basics", "Tips & tutorials", "Market updates"] },
          {
            title: "Individuals",
            links: ["Buy & sell", "Earn free crypto", "Wallet"],
          },
          {
            title: "Developers",
            links: ["Cloud", "Protocol", "Wallet SDK", "Base"],
          },
        ];
        return (
          <Box as="footer" padding={3 as any} bordered>
            <VStack gap={3 as any}>
              <HStack gap={4 as any} alignItems="flex-start">
                {columns.map((col) => (
                  <VStack key={col.title} gap={1 as any}>
                    <Text font="caption" as="h4">
                      {col.title}
                    </Text>
                    {col.links.map((link) => (
                      <Text
                        key={link}
                        font="caption"
                        as="span"
                        color={"foregroundMuted" as any}
                      >
                        {link}
                      </Text>
                    ))}
                  </VStack>
                ))}
              </HStack>
              <Divider />
              <HStack gap={1 as any} alignItems="center">
                <svg width="20" height="20" viewBox="0 0 1024 1024" fill="none">
                  <rect width="1024" height="1024" rx="200" fill="#0052FF" />
                  <circle cx="512" cy="512" r="200" fill="white" />
                </svg>
                <Text font="legal" as="span" color={"foregroundMuted" as any}>
                  {"\u00A9"} {new Date().getFullYear()} {companyName}
                </Text>
              </HStack>
            </VStack>
          </Box>
        );
      },
    },
  },
};
