import Image from 'next/image';
import courImg1 from '@/../../public/image/homeimg1.png';

export default function Courses() {
  return (
    <div className="  ">
      <div className="heroCour flex justify-center items-center h-[700px] px-[6%] gap-9 bg-gradient-to-b from-[#D2E4FF] from-5% via-[#448EFE] via-60% to-[#FAFBFC]">
        <div className="">
          <Image src={courImg1} height={400} />
        </div>
      </div>
    </div>
  );
}
