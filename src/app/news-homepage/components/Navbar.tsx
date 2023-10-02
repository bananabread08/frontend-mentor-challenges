'use client';

import Image from 'next/image';
import Link from 'next/link';
import logo from '../news-homepage-main/assets/images/logo.svg';
import hamburger from '../news-homepage-main/assets/images/icon-menu.svg';
import close from '../news-homepage-main/assets/images/icon-menu-close.svg';
import { useState } from 'react';

const navLinks: string[] = ['Home', 'New', 'Popular', 'Trending', 'Categories'];

export const Navbar = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <nav className="flex justify-between items-center">
      <div>
        <Image src={logo} alt="w logo" width={50} height={50} />
      </div>
      <div className="hidden sm:flex justify-between items-center gap-4">
        {navLinks.map((link) => (
          <div key={link}>
            <Link href="#" className="text-nh-grayblue-100 text-lg">
              {link}
            </Link>
          </div>
        ))}
      </div>
      <div className="sm:hidden relative flex justify-between items-center">
        <button onClick={() => setShowNav(true)}>
          <Image src={hamburger} alt="menu button" />
        </button>
      </div>
      <div
        className={
          showNav
            ? 'sm:hidden flex flex-col absolute top-0 right-0 bg-nh-offwhite w-[300px] min-h-screen drop-shadow-2xl shadow-2xl '
            : 'hidden'
        }
      >
        <Image
          src={close}
          alt="menu button"
          onClick={() => setShowNav(false)}
          className="self-end my-12 mx-8"
        />
        <div className="flex flex-col p-8 gap-4">
          {navLinks.map((link) => (
            <div key={link}>
              <Link href="#" className=" text-lg">
                {link}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};
