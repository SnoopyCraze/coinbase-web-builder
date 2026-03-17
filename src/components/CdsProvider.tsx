"use client";

import React from "react";

// CDS global CSS — loaded as side effects
import "@coinbase/cds-web/globalStyles";
import "@coinbase/cds-web/defaultFontStyles";

// CDS providers
import { ThemeProvider, MediaQueryProvider } from "@coinbase/cds-web/system";
import { defaultTheme } from "@coinbase/cds-web/themes/defaultTheme";

export function CdsProvider({ children }: { children: React.ReactNode }) {
  return (
    <MediaQueryProvider>
      <ThemeProvider theme={defaultTheme} activeColorScheme="light">
        {children}
      </ThemeProvider>
    </MediaQueryProvider>
  );
}
