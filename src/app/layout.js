import { Poppins } from 'next/font/google';
import './globals.css';
import Navbar from '@/pages/header/page';
import Footer from '@/pages/footer/page';

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '500', '700'] });

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className=" bg-[#FAFBFC]">
      <body className={poppins.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
