'use client';

import { Menu } from 'lucide-react';
import { useState } from 'react';

export const Navbar = () => {
  const [visibility, setVisibility] = useState(false);

  return (
    <nav className="z-50 fixed w-full">
      <div className=" flex justify-between items-center text-white p-8">
        <h1 className="font-barlow text-3xl font-extrabold">sunnyside</h1>
        <ul className="hidden md:flex items-center justify-center gap-4 text-[18px] font-barlow">
          <li>About</li>
          <li>Services</li>
          <li>Projects</li>
          <li>
            <a
              href="#"
              className="bg-white text-black font-fraunces font-bold rounded-full uppercase py-4 px-6"
            >
              Contact
            </a>
          </li>
        </ul>
        <div className="relative md:hidden">
          <Menu size={40} onClick={() => setVisibility((prev) => !prev)} />
          <ul
            className={
              'absolute flex-col items-center justify-center gap-4 text-[18px] font-barlow font-normal ' +
              (visibility ? 'flex' : 'hidden')
            }
          >
            <li>About</li>
            <li>Services</li>
            <li>Projects</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
