import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col">
        <Link href="/qr-code" className="underline text-blue-600">
          QR-Code
        </Link>
        <Link href="/product-preview" className="underline text-blue-600">
          Product Preview Card
        </Link>
      </div>
    </main>
  );
}
