import { Educations } from "@/lib/edu";
import EduCard from "@/components/card/eduCard";

export default function Edu() {
  return (
    <main className="h-screen flex flex-col justify-center px-6 max-w-5xl mx-auto">
      {/* Header Halaman */}
      <h1 className="text-5xl md:text-5xl font-black text-start mb-10 uppercase tracking-tighter">
        Educations
      </h1>

      {/* Render 3 Kategori */}
      <EduCard items={Educations} />
    </main>
  );
}
