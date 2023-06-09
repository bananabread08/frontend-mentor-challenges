import { Outfit } from 'next/font/google';
const outfit = Outfit({ subsets: ['latin'] });

export default function QRLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section
      className={`bg-qr-light-gray min-h-screen flex items-center justify-center px-6 ${outfit.className}`}
    >
      {children}
    </section>
  );
}
