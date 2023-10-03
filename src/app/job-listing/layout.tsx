import { League_Spartan } from 'next/font/google';

const leagueSpartan = League_Spartan({
  subsets: ['latin'],
  weight: ['500', '700'],
});

export default function layout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={
        'min-h-screen bg-jl-graycyan-100  text-[15px] ' +
        leagueSpartan.className
      }
    >
      {children}
    </div>
  );
}
