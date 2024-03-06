import Image from 'next/image';
import courImg1 from '@/../../public/image/homeimg1.png';
import bookImg from '@/../../public/image/book.jpg';
import data from '@/components/data/courses.json';

export default function Courses() {
  return (
    <div className="  ">
      <div className="heroCour flex justify-center items-center h-[700px] px-[6%] gap-9 bg-gradient-to-b from-[#D2E4FF] from-5% via-[#448EFE] via-60% to-[#FAFBFC]">
        <div className="">
          <Image src={courImg1} height={400} />
        </div>
        <div className=" w-[50rem] m-5">
          <h1 className=" py-4 text-4xl font-bold">Pelajari kursus kami yang membri hasil. Fokus Prakatik dan Portfolio Kamu.</h1>
          <h3 className=" py-4 text-xl font-medium">Full Online dan Dipandu oleh Praktisi Senior. Praktikal, lebih dari sekadar Webinar. Fokus Bantu Kembangkan Skill dan Portfolio Ribuan Alumni.</h3>
          <button className=" p-4 text-white text-lg font-bold bg-orangeEdu rounded-xl">Explore Courses</button>
        </div>
      </div>
      <div className="courContainer flex justify-center items-center py-4  ">
        {data.map((course) => {
          return (
            <div className="courCard w-64 h-96 p-4 m-5 bg-white rounded-lg border-2 border-[#F0E8E8] shadow-xl overflow-hidden" key={course.id}>
              <div className=" flex justify-center">
                <Image src={bookImg} width="150" alt="cover" />
              </div>
              <div className=" text-center relative">
                <h1 className=" text-xl font-bold text-dopeEdu">{data.name}</h1>
                <div className=" text-sm text-dopeEdu2/70 absolute right-0 left-0 top-20">
                  <h3>{data.modul} Modul</h3>
                  <h3>{data.siswa} Siswa</h3>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
