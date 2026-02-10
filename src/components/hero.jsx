import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import CV from "@/components/about/cv";

export default function Hero() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center max-w-7xl mx-auto w-full px-4 sm:px-6 md:px-8">
      
      {/* 1. NAMA */}
      {/* text-3xl di HP, text-5xl di Tablet, text-6xl di Laptop */}
      <h1 className="animate-in fade-in slide-in-from-bottom-4 duration-500 ease-out 
                     text-3xl sm:text-4xl md:text-6xl font-black text-center tracking-tight leading-tight">
        I&apos;m Wahyu Andrianto Wibowo
      </h1>

      {/* 2. DESKRIPSI */}
      {/* Gw ganti text-justify jadi text-center biar di HP gak bolong-bolong spasinya.
          Max-width gw atur biar barisnya gak kepanjangan (bikin pusing baca). */}
      <p className="animate-in fade-in slide-in-from-bottom-8 duration-500 delay-150 fill-mode-both ease-out 
                    text-base sm:text-lg md:text-xl text-center leading-relaxed text-slate-500 
                    mt-4 max-w-full md:max-w-3xl">
        A Frontend Engineer focused on UI/UX, designing user-friendly and
        aesthetically pleasing web interfaces using modern frontend technologies
        and an understanding of full-stack development.
      </p>

      {/* 3. TOMBOL LINK */}
      {/* Flex-wrap biar aman kalau layar super kecil, tombol gak keluar jalur */}
      <div className="animate-in fade-in slide-in-from-bottom-8 duration-500 delay-300 fill-mode-both ease-out 
                      flex flex-wrapjustify-center items-center gap-3 sm:gap-4 mt-6 md:mt-8">
        <Link
          href="/projects"
          className="border-2 border-black py-2 px-4 md:px-6 bg-white hover:bg-slate-50 transition-all font-bold text-sm md:text-base
                      shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none"
        >
          Works -&gt;
        </Link>

        <Link
          href="https://github.com/Wahyu2204"
          target="_blank"
          rel="noopener noreferrer"
          className="border-2 border-black py-2 px-3 md:px-4 bg-white hover:bg-slate-50 transition-all 
                      shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none"
        >
          <FaGithub className="text-xl md:text-2xl" />
        </Link>

        <Link
          href="https://www.linkedin.com/in/waluyo-code/"
          target="_blank"
          rel="noopener noreferrer"
          className="border-2 border-black py-2 px-3 md:px-4 bg-white hover:bg-slate-50 transition-all 
                      shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none"
        >
          <FaLinkedin className="text-xl md:text-2xl" />
        </Link>
      </div>

      {/* 4. CV */}
      <div className="animate-in fade-in slide-in-from-bottom-8 duration-500 delay-500 fill-mode-both ease-out mt-8 md:mt-10">
        <CV />
      </div>
    </div>
  );
}