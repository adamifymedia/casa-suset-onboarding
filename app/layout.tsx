import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Casa Suset",
  description: "Spanish speaking practice with Casa Suset",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
