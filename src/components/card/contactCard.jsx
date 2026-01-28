"use client";

import Link from "next/link";
import { FaArrowRight, FaCheck } from "react-icons/fa";
import { useState } from "react";

export default function ContactCard({ items }) {
  // State buat nyimpen status "Apakah baru aja di-copy?"
  const [copiedIndex, setCopiedIndex] = useState(null);

  const handleAction = (item, index, e) => {
    // KHUSUS EMAIL: Jangan buka link, tapi Copy text
    if (item.social === "Email") {
      e.preventDefault(); // Stop mailto: biar gak nge-reload/buka app error

      // Logic Copy
      navigator.clipboard.writeText(item.name);

      // Ubah status jadi 'copied' buat index ini
      setCopiedIndex(index);

      // Balikin lagi ke normal setelah 2 detik
      setTimeout(() => setCopiedIndex(null), 2000);
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((item, index) => (
        <Link
          key={index}
          href={item.link}
          target={item.social === "Email" ? "_self" : "_blank"} // Email gak perlu tab baru
          onClick={(e) => handleAction(item, index, e)} // 👈 Pasang event click disini
          className="group block border-2 border-black bg-white p-6 
                     shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] 
                     hover:translate-x-[2px] hover:translate-y-[2px] 
                     hover:shadow-none transition-all cursor-pointer relative"
        >
          <div className="flex items-start justify-between mb-4">
            {/* ICON (Berubah jadi Centang Hijau kalo abis dicopy) */}
            <div
              className={`text-4xl border-2 border-black p-3 transition-colors duration-300 rounded-none ${copiedIndex === index ? "bg-green-400 text-white" : "bg-slate-50"}`}
            >
              {copiedIndex === index ? <FaCheck /> : item.icon}
            </div>

            {/* Panah Pojok Kanan Atas */}
            <FaArrowRight className="text-xl -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
          </div>

          <div>
            <h3 className="font-bold font-mono text-gray-500 text-sm uppercase mb-1">
              {item.social}
            </h3>
            {/* Logic Teks: Kalau dicopy, tulisannya ganti jadi "COPIED!" */}
            <p className="font-bold font-mono text-lg md:text-xl truncate leading-tight">
              {copiedIndex === index ? "COPIED TO CLIPBOARD!" : item.name}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}
