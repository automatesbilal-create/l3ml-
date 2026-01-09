// app/layout.tsx
import "./globals.css";

export const metadata = {
  title: "Vynora Voice – AI Receptionist for Gyms",
  description: "AI receptionist built for gym owners who never want to miss calls.",
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
