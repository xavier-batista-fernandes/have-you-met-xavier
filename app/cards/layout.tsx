import '@/app/cards/globals.css'
import { Nunito_Sans } from 'next/font/google'

const font = Nunito_Sans({
  weight: ['400', '700'],
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <title>Xavier Fernandes</title>
      </head>
      <body className={`${font.className} bg-black`}>{children}</body>
    </html>
  )
}
