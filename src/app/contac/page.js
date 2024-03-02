import Image from 'next/image';
import mailImg from '@/../../public/icon/mail.svg';
import phoneImg from '@/../../public/icon/phone.svg';

export default function contac() {
  return (
    <div>
      <div className=" flex justify-center items-center h-[700px] gap-9 bg-gradient-to-b from-[#D2E4FF] from-5% via-[#448EFE] via-60% to-[#FAFBFC]">
        <div className=" w-[450px] p-4 bg-gray-400 rounded-xl bottom-2 border-[#F0E8E8] shadow-xl">
          <h1 className=" pb-2 font-bold text-xl">Butuh Bantuan dan Dukungan</h1>
          <p className=" text-xs">Jangan ragu untuk menghubungi kami kapan saja. kami akan membalas Anda sesegera mungkin!</p>
          <div className="flex p-8 cursor-pointer">
            <Image src={mailImg} width={22} />
            <p className=" pl-4">edustreetid@gmail.com</p>
          </div>
          <div className="flex p-8 cursor-pointer">
            <Image src={phoneImg} width={22} />
            <p className=" pl-4">+62 555-6666-4444</p>
          </div>
        </div>
        <div className=" flex flex-col justify-center items-center w-[500px]">
          <h1 className=" pb-4 font-extrabold text-4xl">Ada Pertanyaan?</h1>
          <input type="email" className=" p-2 m-2 w-80 rounded-lg border-none "></input>
          <input type="text" className=" p-2 m-2 w-80 rounded-lg border-none "></input>
          <button className=" w-80 p-2 font-bold text-xl bg-white rounded-xl border-2 hover:bg-orangeEdu hover:text-white">Kirim</button>
        </div>
      </div>
    </div>
  );
}
