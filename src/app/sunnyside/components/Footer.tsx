import Link from 'next/link';
import Image from 'next/image';
export const Footer = () => {
  return (
    <footer className="bg-ss-darkcyan-100 flex flex-col items-center justify-center p-14 gap-10 text-ss-darkcyan-500">
      <h1 className="font-barlow text-3xl font-extrabold">sunnyside</h1>
      <ul className="flex flex-row gap-10">
        <li>
          <Link href="#">About</Link>
        </li>
        <li>
          <Link href="#">Services</Link>
        </li>
        <li>
          <Link href="#">Projects</Link>
        </li>
      </ul>
      <ul className="flex flex-row gap-6 mt-6 ">
        <li>
          <Image
            src="/ss_images/icon-facebook.svg"
            alt="fb-icon"
            width={30}
            height={30}
            className="rounded-sm"
          />
        </li>
        <li>
          <Image
            src="/ss_images/icon-instagram.svg"
            alt="fb-icon"
            width={30}
            height={30}
            className="rounded-sm"
          />
        </li>
        <li>
          <Image
            src="/ss_images/icon-twitter.svg"
            alt="fb-icon"
            width={30}
            height={30}
            className="rounded-sm"
          />
        </li>
        <li>
          <Image
            src="/ss_images/icon-pinterest.svg"
            alt="fb-icon"
            width={30}
            height={30}
            className="rounded-sm"
          />
        </li>
      </ul>
    </footer>
  );
};
