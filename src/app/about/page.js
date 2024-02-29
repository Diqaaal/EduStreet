import Image from 'next/image';

export default function About() {
  return (
    <div>
      <div className="heroAbout heroHome flex justify-center h-[700px] px-[6%] gap-9 bg-gradient-to-b from-[#D2E4FF] from-5% via-[#448EFE] via-60% to-[#FAFBFC]">
        <h1>
          Tentang <span>EDUSTREET</span>
        </h1>
        <p>
          Bersama EduStreet, pembelajaran menjadi lebih lancar dan berkolaborasi. Kami tidak hanya menyediakan pengalaman belajar yang bersahabat, tetapi juga memberikan kekuatan kepada pengguna untuk menjadi pengajar dengan kemudahan melalui
          pembuatan dan manajemen kelas pribadi. Fokus kami pada interaksi dan sinergi menghasilkan ruang diskusi dan proyek bersama, menciptakan komunitas pembelajaran yang hidup dan saling mendukung. Sertai kami dalam perjalanan pembelajaran yang
          inovatif dan memberdayakan di EduStreet.
        </p>
      </div>
    </div>
  );
}
