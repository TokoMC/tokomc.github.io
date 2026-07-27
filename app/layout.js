import "./globals.css";

export const metadata = {
  title: "TokoMC",
  description: "Official TokoMC Minecraft Network",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
