import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Neriva | Financiamiento para negocios",
  description:
    "Financiamiento para negocios de $100 mil hasta $20 millones de pesos. Neriva impulsa a las empresas mexicanas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-MX">
      <body>{children}</body>
    </html>
  );
}
