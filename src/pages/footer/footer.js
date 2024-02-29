import Image from 'next/image';
import blueLogo from '@/../../public/Logoblue.png';
import insLogo from '@/../../public/icon/instagram.png';
import twiLogo from '@/../../public/icon/twitter.png';
import linkLogo from '@/../../public/icon/linkedin.png';
import tikLogo from '@/../../public/icon/tik-tok.png';
import youLogo from '@/../../public/icon/youtube.png';

export default function Footer() {
  return (
    <footer className=" px-[6%] py-4">
      <div className="container py-8">
        <div className="foot1 ">
          <Image src={blueLogo} width={200} alt="Logo EduStreet" className=" py-2" />
          <h1 className=" w-60 text-xs text-dopeEdu2/70 font-medium">Membangun Jalan Menuju Kesuksesan melalui Pendidikan Bersama EduStreet</h1>
        </div>
        <div className="foot2 flex justify-between">
          <div className=" w-60">
            <h1 className=" py-2 text-lg text-dopeEdu font-bold">PT. EduStreet Indonesia</h1>
            <p className=" text-sm text-dopeEdu2/70 font-medium ">Jl. Batik Kumeli No.50, Sukaluyu, Kec. Cibeunying Kaler, Kota Bandung, Jawa Barat, 40123</p>
          </div>
          <div className=" w-60">
            <h1 className=" py-2 text-lg text-dopeEdu font-bold">EduStreet.ID</h1>
            <div className=" text-sm text-dopeEdu2/70 font-medium cursor-pointer">
              <p>Tentang</p>
              <p>Karir</p>
              <p>Kerjasama</p>
              <p>Blog</p>
            </div>
          </div>
          <div className=" w-60">
            <h1 className=" py-2 text-lg text-dopeEdu font-bold">Produk</h1>
            <div className=" text-sm text-dopeEdu2/70 font-medium cursor-pointer">
              <p>Courses</p>
              <p>Boothcamp & Program</p>
            </div>
          </div>
          <div className=" w-60">
            <h1 className=" py-2 text-lg text-dopeEdu font-bold">Syarat & Kententuan</h1>
            <div className=" text-sm text-dopeEdu2/70 font-medium cursor-pointer">
              <p>Syarat & Ketentuan</p>
              <p>Ketentuan Privasi</p>
            </div>
          </div>
        </div>
        <div className="mediaSosial flex gap-2 cursor-pointer">
          <Image src={insLogo} width={24} alt="icon" />
          <Image src={twiLogo} width={24} alt="icon" />
          <Image src={linkLogo} width={24} alt="icon" />
          <Image src={tikLogo} width={24} alt="icon" />
          <Image src={youLogo} width={24} alt="icon" />
        </div>
      </div>
    </footer>
  );
}
