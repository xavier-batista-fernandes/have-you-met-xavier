import "@/app/globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Xavier</title>
        <meta name="description" content="Learn more about our team" />
      </head>
      <body>{children}</body>
    </html>
  );
}
