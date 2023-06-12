import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin-ext'],
  weight: ['400', '700', '800'],
});

export default function AgeCalculatorLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <main
      className={`bg-ac-offwhite min-h-screen grid place-items-center ${poppins.className}`}
    >
      {children}
    </main>
  );
}
