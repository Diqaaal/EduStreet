import Image from 'next/image';
import homeimg1 from '@/../../public/image/homeimg1.png';
import homeimg2 from '@/../../public/image/homeimg2.png';
import bookImg from '@/../../public/image/book.jpg';
import Courses from '@/../../src/components/data/courses.json';

export default function Home() {
  return (
    <main className=" ">
      <div className="heroHome flex justify-center items-center h-[700px] px-[6%] gap-9 bg-gradient-to-b from-[#D2E4FF] from-5% via-[#448EFE] via-60% to-[#FAFBFC]">
        <div className="herodes w-[50rem] m-5">
          <h1 className=" py-4 text-4xl font-bold">Membangun Jalan Menuju Kesuksesan Melalui Pendidikan</h1>
          <h3 className=" py-4 text-xl font-medium">Raih Pengalaman Belajar Berkualitas, Melalui Pendekatan Pendidikan yang Penuh Inovasi</h3>
          <button className=" p-4 text-white text-lg font-bold bg-orangeEdu rounded-xl">Explore Courses</button>
        </div>
        <div className="img1">
          <Image src={homeimg1} width={365} alt="homeimg1" />
        </div>
      </div>
      <div className="homeBenefit px-[6%]">
        <h3 className=" text-center text-lg font-bold text-dopeEdu2/70">E-Learning</h3>
        <h1 className=" text-center text-2xl font-black text-dopeEdu">Menjadi Solusi Buat Kamu Yang Ingin Meningkatkan Kemampuan Diri</h1>
        <div className="benContainer flex flex-wrap justify-center items-center py-4 ">
          <div className="benCard w-[544px] p-4 m-2 border-2 border-[#F0E8E8] rounded-lg bg-white shadow-xl">
            <h1 className=" text-xl font-bold text-dopeEdu">Fleksibelitas Pembelajaran</h1>
            <p className=" font-medium">Dapatkan fleksibilitas dalam pembelajaran! Akses mudah dan waktu yang bisa disesuaikan untuk belajar sesuai dengan kebutuhan Anda.</p>
          </div>
          <div className="benCard w-[544px] p-4 m-2 border-2 border-[#F0E8E8] rounded-lg bg-white shadow-xl">
            <h1 className=" text-xl font-bold text-dopeEdu">Fleksibelitas Pembelajaran</h1>
            <p className=" font-medium">Dapatkan fleksibilitas dalam pembelajaran! Akses mudah dan waktu yang bisa disesuaikan untuk belajar sesuai dengan kebutuhan Anda.</p>
          </div>
          <div className="benCard w-[544px] p-4 m-2 border-2 border-[#F0E8E8] rounded-lg bg-white shadow-xl">
            <h1 className=" text-xl font-bold text-dopeEdu">Fleksibelitas Pembelajaran</h1>
            <p className=" font-medium">Dapatkan fleksibilitas dalam pembelajaran! Akses mudah dan waktu yang bisa disesuaikan untuk belajar sesuai dengan kebutuhan Anda.</p>
          </div>
          <div className="benCard w-[544px] p-4 m-2 border-2 border-[#F0E8E8] rounded-lg bg-white shadow-xl">
            <h1 className=" text-xl font-bold text-dopeEdu">Fleksibelitas Pembelajaran</h1>
            <p className=" font-medium">Dapatkan fleksibilitas dalam pembelajaran! Akses mudah dan waktu yang bisa disesuaikan untuk belajar sesuai dengan kebutuhan Anda.</p>
          </div>
          <div className="benCard w-[544px] p-4 m-2 border-2 border-[#F0E8E8] rounded-lg bg-white shadow-xl">
            <h1 className=" text-xl font-bold text-dopeEdu">Fleksibelitas Pembelajaran</h1>
            <p className=" font-medium">Dapatkan fleksibilitas dalam pembelajaran! Akses mudah dan waktu yang bisa disesuaikan untuk belajar sesuai dengan kebutuhan Anda.</p>
          </div>
          <div className="benCard w-[544px] p-4 m-2 border-2 border-[#F0E8E8] rounded-lg bg-white shadow-xl">
            <h1 className=" text-xl font-bold text-dopeEdu">Fleksibelitas Pembelajaran</h1>
            <p className=" font-medium">Dapatkan fleksibilitas dalam pembelajaran! Akses mudah dan waktu yang bisa disesuaikan untuk belajar sesuai dengan kebutuhan Anda.</p>
          </div>
        </div>
      </div>
      <div className="homeCoerses px-[6%] my-4">
        <h1 className=" text-center text-2xl font-black text-dopeEdu">Daftar Learning Path</h1>
        <div id="coursesList" className="courContainer flex justify-center items-center py-4  ">
          {Courses.map((course) => {
            return (
              <div className="courCard w-64 h-96 p-4 m-5 bg-white rounded-lg border-2 border-[#F0E8E8] shadow-xl overflow-hidden" key={course.id}>
                <div className=" flex justify-center">
                  <Image src={bookImg} width="150" alt="cover" />
                </div>
                <div className=" text-center relative">
                  <h1 className=" text-xl font-bold text-dopeEdu">{course.name}</h1>
                  <div className=" text-sm text-dopeEdu2/70 absolute right-0 left-0 top-20">
                    <h3>{course.modul} Modul</h3>
                    <h3>{course.siswa} Siswa</h3>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="hero2 flex justify-center items-center px-[6%] py-4 gap-9 bg-blue-200">
        <div className="hero2Img m-5">
          <Image src={homeimg2} width={1000} alt="homeimg2" />
        </div>
        <div className="hero2des ">
          <h1 className="py-4 text-4xl font-bold">Pendidikan dan Pelatihan Daring untuk Perusahaan</h1>
          <p className="py-4 text-l font-medium">
            Nikmati akses ke berbagai konten pembelajaran daring EduStreet serta dukungan pelatihan korporat untuk perusahaan. Tersedia juga beragam fitur khusus untuk meningkatkan kinerja dan pengembangan karyawan.
          </p>
        </div>
      </div>
    </main>
  );
}
