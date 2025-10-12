import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Xavier Fernandes',
  icons: { icon: '/favicon.svg' },
  description: 'The page you are looking for does not exist.',
};

export default function GlobalNotFound() {
  return (
    <html lang="en" className={inter.className}>
      <body className="flex min-h-screen flex-col items-center justify-center gap-4 bg-black p-10 text-center text-white">
        <h1 className="text-5xl font-bold">404</h1>
        <p className="text-xl">How did you end up here?</p>
        <a
          href="/"
          className="underline-[2px] font-thin decoration-[0.5px] underline-offset-4 hover:underline"
        >
          Back
        </a>
      </body>
    </html>
  );
}
