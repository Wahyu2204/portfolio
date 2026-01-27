import Link from "next/link";
import Image from "next/image";

import Music from "@/components/bgMusicPlay";
export default function Header() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 block w-full max-w-7xl px-4 py-2 mx-auto text-white bg-[#f2f2f2] shadow-md rounded-md lg:px-8 lg:py-3 mt-10">
      <div className="container flex flex-wrap items-center justify-between mx-auto text-slate-800">
        <Link
          href="/"
          className="mr-4 inline-flex items-center gap-2 cursor-pointer py-1.5 text-base text-slate-800 font-semibold"
        >
          <Image src="logo.svg" alt="Wazys Logo" width={28} height={28} />
          Wahyu.labs
        </Link>

        <div className="hidden lg:block">
          <ul className="flex flex-col gap-2 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <li className="flex items-center p-1 text-sm gap-x-2 text-slate-600">
              <Link href="/about" className="flex items-center">
                About
              </Link>
            </li>
            <li className="flex items-center p-1 text-sm gap-x-2 text-slate-600">
              <Link href="/skills" className="flex items-center">
                Project
              </Link>
            </li>
            <li className="flex items-center p-1 text-sm gap-x-2 text-slate-600">
              <Link href="/projects" className="flex items-center">
                Contact
              </Link>
            </li>
            <li className="flex items-center p-1 text-sm gap-x-2 text-slate-600">
              <Music />
            </li>
          </ul>
        </div>

        <button
          className="relative ml-auto h-6 max-h-10 w-6 max-w-10 select-none rounded-lg text-center align-middle text-xs font-medium uppercase text-inherit transition-all hover:bg-transparent focus:bg-transparent active:bg-transparent disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:hidden"
          type="button"
        >
          <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </span>
        </button>
      </div>
    </nav>
  );
}
