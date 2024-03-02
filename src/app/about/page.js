import Image from 'next/image';

export default function About() {
  return (
    <div>
      <div className="heroAbout heroHome flex flex-col h-[500px] px-[6%] pt-32 gap-9 bg-gradient-to-b from-[#D2E4FF] from-5% via-[#448EFE] via-60% to-[#FAFBFC]">
        <h1 className=" font-extrabold text-4xl">
          Tentang <span className=" text-bluEdu">EDUSTREET</span>
        </h1>
        <p className=" font-medium text-xl text-justify">
          Bersama EduStreet, pembelajaran menjadi lebih lancar dan berkolaborasi. Kami tidak hanya menyediakan pengalaman belajar yang bersahabat, tetapi juga memberikan kekuatan kepada pengguna untuk menjadi pengajar dengan kemudahan melalui
          pembuatan dan manajemen kelas pribadi. Fokus kami pada interaksi dan sinergi menghasilkan ruang diskusi dan proyek bersama, menciptakan komunitas pembelajaran yang hidup dan saling mendukung. Sertai kami dalam perjalanan pembelajaran yang
          inovatif dan memberdayakan di EduStreet.
        </p>
      </div>
      <div className="reviewPel px-[6%]">
        <h1 className=" py-12 font-extrabold text-4xl text-center">Testimoni Para Pengguna EduStreet</h1>
        <div className="container">
          <div className="cards flex justify-center items-center">
            <div className="card w-[544px] p-4 m-5 text-justify bg-white rounded-lg border-2 border-[#F0E8E8] shadow-xl">
              <p className=" pb-4">
                "Edustreet telah mengubah cara saya belajar! Platform yang inovatif dan ramah pengguna, memudahkan saya membuat dan mengelola kelas. Kolaborasi dengan sesama pengguna membuat pengalaman belajar lebih mendalam. Terima kasih Edustreet,
                membuka pintu bagi pembelajaran yang dinamis!"
              </p>
              <p className=" font-bold text-sm">Agung Mulyo</p>
              <p className=" text-xs">Pengguna</p>
            </div>
            <div className="card w-[544px] p-4 m-5 text-justify bg-white rounded-lg border-2 border-[#F0E8E8] shadow-xl">
              <p className=" pb-4">
                "Edustreet telah mengubah cara saya belajar! Platform yang inovatif dan ramah pengguna, memudahkan saya membuat dan mengelola kelas. Kolaborasi dengan sesama pengguna membuat pengalaman belajar lebih mendalam. Terima kasih Edustreet,
                membuka pintu bagi pembelajaran yang dinamis!"
              </p>
              <p className=" font-bold text-sm">Agung Mulyo</p>
              <p className=" text-xs">Pengguna</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
