"use client"; // Wajib karena pake useState & useEffect

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

import Music from "@/components/bgMusicPlay";

// Icons
import { FaChevronDown, FaMapMarkerAlt } from "react-icons/fa";
import { WiDayCloudy } from "react-icons/wi"; // Icon cuaca

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [time, setTime] = useState(new Date());

  const pathname = usePathname();

  // Logic Jam Realtime
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Format Tanggal (Contoh: Rabu, 28 Jan 2026)
  const formatDate = (date) => {
    return new Intl.DateTimeFormat("id-ID", {
      weekday: "long",
      day: "numeric",
      month: "short",
      year: "numeric",
    }).format(date);
  };

  // Format Jam (Contoh: 14:30:05)
  const formatTime = (date) => {
    return date.toLocaleTimeString("id-ID", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const getLinkClass = (path) => {
    // Style Dasar (Semua tombol punya ini)
    const baseStyle =
      "text-sm font-medium px-3 py-1 rounded-md transition-all border-2";

    // Logic:
    // - Home ('/'): Harus persis sama.
    // - Lainnya: Cek apakah URL diawali path itu (biar pas buka detail project, menu 'Project' tetep nyala)
    const isActive =
      path === "/" ? pathname === "/" : pathname.startsWith(path);

    if (isActive) {
      // Style kalau AKTIF (Pake Border Hitam & Shadow ala style kamu)
      return `${baseStyle} border-black text-black font-bold bg-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]`;
    } else {
      // Style kalau TIDAK AKTIF (Polos, border transparan)
      return `${baseStyle} border-transparent text-slate-600 hover:text-black hover:bg-slate-200`;
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 block w-full max-w-7xl px-4 py-2 mx-auto mt-10">
      {/* NOTE: Container utama nav saya buat transparan/invisible 
         supaya "kotak" logo dan "kotak" menu terlihat terpisah.
      */}
      <div className="container flex flex-wrap items-center justify-center gap-4 mx-auto">
        {/* BAGIAN KIRI: LOGO + DROPDOWN WIDGET */}
        <div className="relative">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center gap-3 px-4 py-3 bg-[#f2f2f2] shadow-md rounded-md hover:bg-white transition-all border border-transparent hover:border-slate-200"
          >
            {/* Logo */}
            <Image src="/logo.svg" alt="Logo" width={32} height={32} />

            <div className="text-left flex flex-col">
              <span className="text-sm font-bold text-slate-800 leading-none">
                Wahyu.labs
              </span>
              <span className="text-[10px] text-slate-500 font-mono">
                JKT, ID
              </span>
            </div>

            {/* Icon Panah Kecil */}
            <FaChevronDown
              className={`text-xs text-slate-400 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
            />
          </button>

          {/* ISI DROPDOWN */}
          {isOpen && (
            <div className="absolute top-full left-0 mt-3 w-72 bg-white rounded-xl shadow-xl border border-slate-100 p-4 animate-in fade-in slide-in-from-top-2 overflow-hidden">
              {/* 1. Header Profil */}
              <div className="flex items-center gap-4 mb-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-slate-200">
                  {/* Ganti src ini dengan foto profil kamu */}
                  <Image
                    src="/assets/about/me.jpeg"
                    alt="Wahyu Profile"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 text-sm">
                    Wahyu Andrianto
                  </h4>
                  <p className="text-xs text-slate-500 font-mono">
                    Frontend Developer
                  </p>
                </div>
              </div>

              <hr className="border-dashed border-slate-200 my-3" />

              {/* 2. Widget Info (Weather & Time) */}
              <div className="grid grid-cols-2 gap-2">
                {/* Cuaca (Static Demo) */}
                <div className="bg-slate-50 p-3 rounded-lg flex flex-col items-center justify-center text-center">
                  <WiDayCloudy className="text-3xl text-orange-400 mb-1" />
                  <span className="text-lg font-bold text-slate-700 leading-none">
                    29°C
                  </span>
                  <span className="text-[10px] text-slate-500 mt-1">
                    Berawan
                  </span>
                </div>

                {/* Jam & Tanggal */}
                <div className="bg-slate-50 p-3 rounded-lg flex flex-col items-center justify-center text-center">
                  <span className="text-lg font-mono font-bold text-slate-800 leading-none">
                    {formatTime(time)}
                  </span>
                  <span className="text-[10px] text-slate-500 mt-1 leading-tight">
                    {formatDate(time)}
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* BAGIAN TENGAH/KANAN: MENU NAVBAR (Dikasih Background Sendiri) */}
        <div className="bg-[#f2f2f2] shadow-md rounded-md px-6 py-2 hidden lg:block">
          <ul className="flex items-center gap-4">
            {" "}
            {/* Gap dikurangin dikit biar muat border */}
            <li>
              <Link href="/" className={getLinkClass("/")}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className={getLinkClass("/about")}>
                About
              </Link>
            </li>
            <li>
              <Link href="/projects" className={getLinkClass("/projects")}>
                Project
              </Link>
            </li>
            <li>
              <Link href="/contact" className={getLinkClass("/contact")}>
                Contact
              </Link>
            </li>
            <li className="pl-4 border-l border-slate-300">
              <Music />
            </li>
          </ul>
        </div>

        {/* MOBILE TOGGLE (Tetap ada) */}
        <button
          className="lg:hidden p-2 bg-[#f2f2f2] rounded-md shadow-md text-slate-800"
          type="button"
        >
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
        </button>
      </div>
    </nav>
  );
}
