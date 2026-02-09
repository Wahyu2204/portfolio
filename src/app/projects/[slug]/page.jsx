import { client } from "@/sanity/client";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import IconMapper from "@/components/icon-mapper";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

// Fungsi ambil SATU project berdasarkan slug
async function getProject(slug) {
  const query = `*[_type == "project" && slug.current == $slug][0] {
    name,
    "slug": slug.current,
    desc,
    category,
    duration,
    "gambar": image.asset->url, // Ambil URL gambar
    techStack, // Array String ["FaReact", "SiNextdotjs"]
    linkWeb,
    github
  }`;

  return await client.fetch(query, { slug });
}

export default async function ProjectDetail({ params }) {
  const { slug } = await params; // Ambil slug dari URL
  const project = await getProject(slug); // Fetch data dari Sanity

  // Kalau slug gak ketemu di database, return 404
  if (!project) {
    return notFound();
  }

  const animClass = "animate-in fade-in slide-in-from-bottom-8 duration-500 ease-out fill-mode-both";

  return (
    <main className="min-h-screen pt-24 md:pt-48 px-6 pb-20 max-w-5xl mx-auto">
      
      {/* 1. Tombol Back */}
      <Link
        href="/projects"
        className="animate-in fade-in slide-in-from-bottom-4 duration-500 ease-out inline-flex gap-2 mb-8 items-center font-mono font-bold text-gray-500 hover:text-black transition-colors"
      >
        <FaArrowLeft /> BACK TO PROJECTS
      </Link>

      {/* 2. Header Project */}
      <div className={`border-b-4 border-black pb-6 mb-8 delay-150 ${animClass}`}>
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

      {/* 3. Gambar Besar */}
      <div className={`w-full h-64 md:h-[530px] relative border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-10 delay-300 ${animClass}`}>
        <Image
          src={project.gambar} // Ini sekarang URL dari Sanity
          alt={project.name}
          fill
          className="object-cover"
        />
      </div>

      {/* 4. Grid: Deskripsi & Tech Stack */}
      <div className={`grid grid-cols-1 md:grid-cols-3 gap-10 delay-500 ${animClass}`}>
        
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
                className="inline-flex items-center gap-2 border-2 border-black bg-white px-6 py-3 font-bold font-mono transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none"
              >
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
              {/* 👇 INI BAGIAN PENTING: Pake IconMapper */}
              {project.techStack?.map((iconName, idx) => (
                <div
                  key={idx}
                  className="border-2 border-black p-4 bg-white hover:bg-slate-50 transition-all 
                      shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none text-2xl"
                >
                  <IconMapper name={iconName} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}