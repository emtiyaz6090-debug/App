// src/app/layout.tsx
import "./globals.css";

export const metadata = {
  title: "Vigor & Mind",
  description: "Track your health and study progress",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="bn">
      <body>{children}</body>
    </html>
  );
}
