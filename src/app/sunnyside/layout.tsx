import { Fraunces } from 'next/font/google';
import { Barlow } from 'next/font/google';
const fraunces = Fraunces({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-fraunces',
});

const barlow = Barlow({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-barlow',
});

export default function SunnysideLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <main
      className={`bg-ac-offwhite min-h-screen flex flex-col ${fraunces.variable} ${barlow.variable}`}
    >
      {children}
    </main>
  );
}
