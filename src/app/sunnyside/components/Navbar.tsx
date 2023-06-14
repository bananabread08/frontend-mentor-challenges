'use client';

import { Menu } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';
export const Navbar = () => {
  const [visibility, setVisibility] = useState(false);

  return (
    <nav className="z-50 fixed w-full">
      <div className="flex justify-between items-center text-white py-6 p-4">
        <h1 className="font-barlow text-3xl font-extrabold">sunnyside</h1>
        <ul className="hidden md:flex items-center justify-center gap-4 text-[18px] font-barlow">
          <li>
            <Link href="#">About</Link>
          </li>
          <li>
            <Link href="#">Services</Link>
          </li>
          <li>
            <Link href="#">Projects</Link>
          </li>
          <li>
            <Link
              href="#"
              className="bg-white text-black font-fraunces font-semibold rounded-full uppercase py-3 px-6 hover:bg-sky-300 active:bg-sky-300 hover:text-white"
            >
              Contact
            </Link>
          </li>
        </ul>
        <Menu
          className="md:hidden z-50"
          size={40}
          onClick={() => setVisibility((prev) => !prev)}
        />
      </div>
      <div className="md:hidden">
        <ul
          className={
            'w-[90vw] p-12 mx-auto flex-col items-center justify-center gap-8 text-[18px] font-barlow bg-white text-ss-darkblue-100 font-semibold speech-bubble ' +
            (visibility ? 'flex' : 'hidden')
          }
        >
          <li>
            <Link href="#">About</Link>
          </li>
          <li>
            <Link href="#">Services</Link>
          </li>
          <li>
            <Link href="#">Projects</Link>
          </li>
          <li>
            <Link
              href="#"
              className="bg-ss-yellow text-black font-fraunces font-semibold rounded-full uppercase py-3 px-6 hover:bg-sky-300 active:bg-sky-300 hover:text-white"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
