'use client';
import Link from 'next/link';
import Image from 'next/image';
import blueLogo from '@/../../public/Logoblue.png';
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

  return (
    <header>
      <navbar className={header ? 'navbar flex justify-between items-center px-[5%] py-2 fixed top-0 left-0 right-0 z-[99999] bg-[#D2E4FF]' : 'navbar flex justify-between items-center px-[5%] py-2 fixed top-0 left-0 right-0 z-[99] bg-transparent'}>
        <div className="navLogo">
          <Image src={blueLogo} width={150} alt="Logo EduStreet" />
        </div>
        <div className="navMenu"></div>
        <div className="navLink text-dopeEdu2 text-xl font-semibold ">
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
        <div className="navExtra text-dopeEdu2 text-xl font-semibold">
          <Link href="/Regis" className=" px-2 py-2 hover:text-bluEdu">
            Sign Up
          </Link>
          <Link href="/Login" className=" px-2 py-2 bg-orangeEdu rounded-lg hover:text-white">
            Login
          </Link>
        </div>
      </navbar>
    </header>
  );
}
