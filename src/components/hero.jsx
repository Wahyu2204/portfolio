import Link from "next/link";
import { FaGithub, FaLinkedin} from "react-icons/fa";

import CV from "@/components/about/cv"

export default function Hero() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center max-w-7xl mx-auto w-full mt-4">
      <h1 className="font-[Unbounded] text-4xl font-semibold">
        I&apos;m Wahyu Andrianto Wibowo
      </h1>
      <p className="text-lg leading-relaxed text-center text-slate-400 mt-4 max-w-4xl px-4">
        A Frontend Engineer focused on UI/UX, designing user-friendly and
        aesthetically pleasing web interfaces using modern frontend technologies
        and an understanding of full-stack development.
      </p>

      <div className="flex items-center gap-3 mt-4">
        <Link
          href="/projects"
          className="border-2 border-black py-2 px-4 bg-white hover:bg-slate-50 transition-all 
                      shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none"
        >
          Works -&gt;
        </Link>

        <Link
          href="https://github.com/Wahyu2204"
          target="_blank"
          rel="noopener noreferrer"
          width={50}
          className="border-2 border-black py-2 px-4 bg-white hover:bg-slate-50 transition-all 
                      shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none"
        >
          <FaGithub className="text-2xl" />
        </Link>

        <Link
          href="https://www.linkedin.com/in/waluyo-code/"
          target="_blank"
          rel="noopener noreferrer"
          width={50}
          className="border-2 border-black py-2 px-4 bg-white hover:bg-slate-50 transition-all 
                      shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none"
        >
          <FaLinkedin className="text-2xl" />
        </Link>
      </div>

      <CV />
    </div>
  );
}
