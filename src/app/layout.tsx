import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Coinbase Page Builder",
  description: "Drag-and-drop page builder using the real Coinbase Design System",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
