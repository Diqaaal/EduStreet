'use client';
import { useRouter } from 'next/navigation';
import data from '@/components/data/courses.json'; // Ubah dengan jalur file JSON yang sesuai
import Image from 'next/image'; // Import Image jika Anda menggunakan Next.js Image component

export default function CardDetail() {
  const router = useRouter();
  const { id } = router.query;
  const course = data.find((course) => course.id === parseInt(id));

  if (!course) {
    return <div>Course not found</div>;
  }

  return (
    <div className=" bg-slate-500">
      <h3>heloo{course.name}</h3>
    </div>
  );
}
