import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center  p-24">
      <h1>My Solutions</h1>
      <ul className="flex flex-col list-decimal">
        <li>
          <Link
            href="/qr-code"
            className="underline text-blue-600 hover:text-blue-400"
          >
            QR-Code
          </Link>
        </li>
        <li>
          <Link
            href="/product-preview"
            className="underline text-blue-600 hover:text-blue-400"
          >
            Product Preview Card
          </Link>
        </li>
        <li>
          <Link
            href="/results-summary"
            className="underline text-blue-600 hover:text-blue-400"
          >
            Results Summary Component
          </Link>
        </li>
        <li>
          <Link
            href="/age-calculator"
            className="underline text-blue-600 hover:text-blue-400"
          >
            Age Calculator App
          </Link>
        </li>
        <li>
          <Link
            href="/sunnyside"
            className="underline text-blue-600 hover:text-blue-400"
          >
            Sunnyside Landing Page
          </Link>
        </li>
      </ul>
    </main>
  );
}
