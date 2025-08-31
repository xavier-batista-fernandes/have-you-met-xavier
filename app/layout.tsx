import "@/app/globals.css";
import { Roboto_Condensed } from "next/font/google";

const font = Roboto_Condensed({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Xavier Fernandes</title>
        <meta name="description" content="Learn more about our team" />
      </head>
      <body className={font.className}>{children}</body>
    </html>
  );
}
