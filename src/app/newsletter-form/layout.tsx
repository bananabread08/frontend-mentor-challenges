import { Roboto } from 'next/font/google';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700'],
});

export default function layout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <main
      className={
        'min-h-screen bg-nf-slate-700 grid md:place-items-center ' +
        roboto.className
      }
    >
      {children}
    </main>
  );
}
