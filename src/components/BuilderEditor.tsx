"use client";

import React, { useState, useCallback } from "react";
import { Puck, type Data } from "@measured/puck";
import "@measured/puck/puck.css";
import { puckConfig } from "./puck-config";
import { CdsProvider } from "./CdsProvider";
import { KeyboardShortcuts } from "./KeyboardShortcuts";
import { generateTSX, generateJS, downloadFile } from "../lib/code-generator";

const initialData: Data = {
  content: [],
  root: { props: {} },
};

function ExportMenu({ data }: { data: Data }) {
  const [open, setOpen] = useState(false);

  const exportAs = (format: string) => {
    setOpen(false);
    switch (format) {
      case "json":
        downloadFile(JSON.stringify(data, null, 2), "page-layout.json");
        break;
      case "tsx":
        downloadFile(generateTSX(data), "Page.tsx");
        break;
      case "jsx":
        downloadFile(generateJS(data), "Page.jsx");
        break;
    }
  };

  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          padding: "6px 12px",
          fontSize: "13px",
          fontWeight: 500,
          background: "#0052FF",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Export ▾
      </button>
      {open && (
        <div
          style={{
            position: "absolute",
            top: "100%",
            right: 0,
            marginTop: 4,
            background: "white",
            border: "1px solid #ddd",
            borderRadius: 8,
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            zIndex: 9999,
            minWidth: 160,
            overflow: "hidden",
          }}
        >
          {[
            { label: "Download .tsx", format: "tsx", desc: "React TypeScript" },
            { label: "Download .jsx", format: "jsx", desc: "React JavaScript" },
            { label: "Download .json", format: "json", desc: "Puck layout data" },
          ].map(({ label, format, desc }) => (
            <button
              key={format}
              onClick={() => exportAs(format)}
              style={{
                display: "block",
                width: "100%",
                textAlign: "left",
                padding: "10px 14px",
                border: "none",
                background: "none",
                cursor: "pointer",
                fontSize: "13px",
                borderBottom: "1px solid #f0f0f0",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#f5f5f5")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "none")}
            >
              <strong>{label}</strong>
              <br />
              <span style={{ fontSize: "11px", color: "#666" }}>{desc}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export function BuilderEditor() {
  const [data, setData] = useState<Data>(initialData);

  const handlePublish = useCallback((publishData: Data) => {
    localStorage.setItem("coinbase-builder-data", JSON.stringify(publishData));
    downloadFile(JSON.stringify(publishData, null, 2), "page-layout.json");
  }, []);

  return (
    <CdsProvider>
      <Puck
        config={puckConfig}
        data={data}
        onPublish={handlePublish}
        onChange={setData}
        iframe={{ enabled: false }}
        overrides={{
          preview: ({ children }: any) => (
            <>
              <KeyboardShortcuts />
              {children}
            </>
          ),
          headerActions: ({ children }: any) => (
            <>
              {children}
              <ExportMenu data={data} />
            </>
          ),
        }}
      />
    </CdsProvider>
  );
}
