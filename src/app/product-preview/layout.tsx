import { Montserrat, Fraunces } from 'next/font/google';

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
});

const fraunces = Fraunces({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-fraunces',
});
export default function ProductReviewLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section
      className={`bg-pr-cream min-h-screen grid place-content-center p-4 ${montserrat.variable} ${fraunces.variable}`}
    >
      {children}
    </section>
  );
}
