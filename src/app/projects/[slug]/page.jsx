import { Projects } from "@/lib/projects"; // Import data
import { notFound } from "next/navigation"; // Buat handle kalau slug ngawur
import Image from "next/image";
import Link from "next/link";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

// "params" itu otomatis dikasih sama Next.js, isinya { slug: 'nama-slug' }
export default async function ProjectDetail({ params }) {
  // 1. AMBIL SLUG DARI URL
  const { slug } = await params;

  // 2. CARI DATA YANG COCOK (Filter Logic)
  // "Cari di array Projects, yang p.slug-nya sama dengan slug di URL"
  const project = Projects.find((p) => p.slug === slug);

  // 3. KALAU DATA GAK KETEMU (Misal user ngetik URL asal)
  if (!project) {
    return notFound(); // Otomatis nampilin halaman 404
  }

  // 4. TAMPILAN DETAILNYA
  return (
    <main className="min-h-screen pt-24 md:pt-48 px-6 pb-20 max-w-5xl mx-auto">
      {/* Tombol Back */}
      <Link
        href="/projects"
        className="inline-flex gap-2 mb-8 items-center font-mono font-bold text-gray-500 hover:text-black transition-colors duration-300"
      >
        <FaArrowLeft /> BACK TO PROJECTS
      </Link>

      {/* Header Project */}
      <div className="border-b-4 border-black pb-6 mb-8">
        <div className="flex flex-wrap gap-4 items-center mb-4">
          <span className="bg-black text-white px-3 py-1 font-bold font-mono text-sm uppercase">
            {project.category}
          </span>
          <span className="font-mono font-bold text-gray-500">
            {project.duration}
          </span>
        </div>
        <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none">
          {project.name}
        </h1>
      </div>

      {/* Gambar Besar */}
      <div className="w-full h-64 md:h-[530px] relative border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-10">
        <Image
          src={project.gambar}
          alt={project.name}
          fill
          className="object-cover"
        />
      </div>

      {/* Grid: Deskripsi & Tech Stack */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Kolom Kiri: Deskripsi Panjang */}
        <div className="md:col-span-2">
          <h3 className="font-bold text-2xl mb-4 font-mono">ABOUT PROJECT</h3>
          <p className="text-lg text-gray-700 leading-relaxed font-mono text-justify">
            {project.desc}
          </p>

          {/* Tombol Action */}
          <div className="flex gap-4 mt-4 pt-4 border-t-2 border-dashed border-gray-300">
            {project.linkWeb && (
              <Link
                href={project.linkWeb}
                target="_blank"
                // 👇 Tambahin shadow kasar & efek translate pas hover
                className="inline-flex bg-black text-white px-6 py-3 gap-2 items-center font-bold font-mono transition-all border-2 border-transparent 
                            shadow-[4px_4px_0px_0px_rgba(100,100,100,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none hover:bg-gray-900"
              >
                VISIT WEBSITE <FaArrowRight />
              </Link>
            )}
            {project.github && (
              <Link
                href={project.github}
                target="_blank"
                // 👇 Tambahin shadow kasar & efek translate (Wajib tambah bg-white biar bayangannya gak tembus)
                className="inline-flex items-center gap-2 border-2 border-black bg-white px-6 py-3 font-bold font-mono transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none"
              >
                {/* (Optional) Tambah Icon biar cakep */}
                <FaGithub className="text-xl" />
                GITHUB REPO
              </Link>
            )}
          </div>
        </div>

        {/* Kolom Kanan: Tech Stack */}
        <div className="md:col-span-1">
          <div className="border-2 border-black p-6 bg-slate-50">
            <h3 className="font-bold text-xl mb-4 font-mono">TECH STACK</h3>
            <div className="flex flex-wrap gap-3">
              {project.techStack.map((Icon, idx) => (
                <div
                  key={idx}
                  className="border-2 border-black p-4 bg-white hover:bg-slate-50 transition-all 
                      shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none"
                >
                  <Icon />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
