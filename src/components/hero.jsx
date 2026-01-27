import Link from "next/link";
import { FaGithub } from "react-icons/fa";

export default function Hero() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center max-w-7xl mx-auto w-full mt-4">
      <h1 className="font-[Unbounded] text-4xl font-semibold">
        I&apos;m Wahyu Andrianto Wibowo
      </h1>
      <p className="text-sm leading-relaxed text-center text-slate-400 mt-4 max-w-4xl px-4">
        A dedicated Full Stack Web Developer who creates{" "}
        <span className="font-semibold text-blue-600">user-friendly</span>{" "}
        websites with an aesthetic appearance. Combining the performance of{" "}
        <span className="text-red-600 bg-red-100 px-1 rounded">Laravel</span>{" "}
        and the interactivity of{" "}
        <span className="font-mono text-blue-600 bg-blue-100 px-1 rounded">
          React
        </span>{" "}
        to build an optimal web experience.
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
      </div>
    </div>
  );
}
