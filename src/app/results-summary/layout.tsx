import { Hanken_Grotesk } from 'next/font/google';

const hanken = Hanken_Grotesk({
  subsets: ['latin'],
  display: 'swap',
});

export default function ResultsSummaryLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <main
      className={`bg-white min-h-screen grid md:place-items-center text-[18px] ${hanken.className}`}
    >
      {children}
    </main>
  );
}
