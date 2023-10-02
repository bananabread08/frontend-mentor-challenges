import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '700', '800'],
});

export default function layout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={
        'min-h-screen bg-nh-offwhite grid place-items-center text-[15px] ' +
        inter.className
      }
    >
      {children}
    </div>
  );
}
