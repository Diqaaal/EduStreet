import Image from 'next/image';
import bookImg from '@/../../public/image/book.jpg';

const createCourseListTemplate = (course) => {
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
};

export default createCourseListTemplate;
