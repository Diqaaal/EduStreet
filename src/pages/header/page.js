'use client';
import Link from 'next/link';
import Image from 'next/image';
import blueLogo from '@/../../public/Logoblue.png';
import menu from '@/../../public/icon/menu.svg';
import { useEffect, useState } from 'react';

export default function Navbar() {
  // change navbar color
  const [header, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 10) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeColor);

    return () => {
      window.addEventListener('scroll', changeColor);
    };
  });

  const [menuIcon, setIcon] = useState(false);
  const handleMenu = () => {
    setIcon(!menuIcon);
  };

  return (
    <header>
      <navbar className={header ? 'navbar flex justify-between items-center px-[5%] py-2 fixed top-0 left-0 right-0 z-[99999] bg-[#D2E4FF]' : 'navbar flex justify-between items-center px-[5%] py-2 fixed top-0 left-0 right-0 z-[99] bg-transparent'}>
        <div className="navLogo">
          <Image src={blueLogo} width={150} alt="Logo EduStreet" />
        </div>

        <div className="navLink hidden lg:flex text-dopeEdu2 text-xl font-semibold">
          <Link href="/" className=" px-2 py-2 hover:text-bluEdu">
            Home
          </Link>
          <Link href="/courses" className=" px-2 py-2 hover:text-bluEdu">
            Courses
          </Link>
          <Link href="/about" className=" px-2 py-2 hover:text-bluEdu">
            About Us
          </Link>
          <Link href="/contac" className=" px-2 py-2 hover:text-bluEdu">
            Contact Us
          </Link>
        </div>
        <div className="navExtra hidden lg:flex text-dopeEdu2 text-xl font-semibold">
          <Link href="/Regis" className=" px-2 py-2 hover:text-bluEdu">
            Sign Up
          </Link>
          <Link href="/Login" className=" px-2 py-2 bg-orangeEdu rounded-lg hover:text-white">
            Login
          </Link>
        </div>
        <div onClick={handleMenu} className="navMenu flex lg:hidden">
          {menuIcon ? <Image src={menu} width={44} className="" /> : <Image src={menu} width={44} className="" />}
        </div>
        <div
          className={
            menuIcon
              ? 'md:hidden absolute top-0 left-[-100%] flex justify-center items-center w-[200px] h-screen bg-blue-100 text-white  duration-300'
              : 'md:hidden absolute top-0 left-0 flex justify-center items-center w-[200px] h-screen bg-blue-100 text-white  duration-300'
          }
        >
          Hello
        </div>
      </navbar>
    </header>
  );
}
