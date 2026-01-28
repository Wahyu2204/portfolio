import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export default function ContactCard({ items }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((item, index) => (
        <Link
          key={index}
          href={item.link}
          target="_blank" // Buka di tab baru
          className="group block border-2 border-black bg-white p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] 
                    hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all cursor-pointer"
        >
          <div className="flex items-start justify-between mb-4">
            {/* ICON (Ambil dari data) */}
            <div className="text-4xl border-2 border-black p-3 bg-slate-50 rounded-none">
              {item.icon}
            </div>

            {/* Panah Pojok Kanan Atas */}
            <FaArrowRight className="text-xl -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
          </div>

          <div>
            <h3 className="font-bold font-mono text-gray-500 text-sm uppercase mb-1">
              {item.social}
            </h3>
            <p className="font-bold font-mono text-lg md:text-xl truncate leading-tight">
              {item.name}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}
