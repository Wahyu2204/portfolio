import Link from "next/link";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import IconMapper from "@/components/icon-mapper";

export default function ProjectCard({ items }) {
  return (
    <div className="flex flex-col gap-6">
      {items.map((item, index) => (
        <div
          key={index}
          style={{
            animationDelay: `${index * 150}ms`,
          }}
          className="animate-in fade-in slide-in-from-bottom-8 duration-500 fill-mode-both ease-out 
                    group border-2 border-black bg-white hover:bg-slate-50 transition-all 
                    shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] 
                    hover:translate-y-[2px] hover:shadow-none overflow-hidden flex flex-col md:flex-row"
        >
          {/* Bagian Gambar */}
          <Link
            href={`/projects/${item.slug}`}
            className="relative w-full md:w-2/5 h-48 md:h-auto border-b-2 md:border-b-0 md:border-r-2 border-black cursor-pointer"
          >
            <div className="relative w-full h-48 md:h-full">
              <Image
                src={item.gambar}
                alt={item.name}
                fill
                className="object-cover"
              />
            </div>
          </Link>

          {/* Bagian Konten */}
          <div className="p-5 flex flex-col justify-between w-full md:w-3/5">
            <div>
              <div className="flex justify-between items-start">
                <span className="text-[10px] font-bold bg-black text-white px-2 py-1 mb-2 inline-block uppercase tracking-wider">
                  {item.category}
                </span>
                <span className="text-xs font-mono font-bold text-gray-500">
                  {item.duration}
                </span>
              </div>

              <Link
                href={`/projects/${item.slug}`}
                className="hover:underline hover:text-blue-600 transition-colors"
              >
                <h4 className="font-bold font-mono text-xl leading-tight mb-2">
                  {item.name}
                </h4>
              </Link>

              <p className="text-sm text-gray-600 font-mono mb-4 line-clamp-3 leading-relaxed">
                {item.desc}
              </p>
            </div>

            <div className="pt-4 border-t-2 border-dashed border-gray-300 flex items-center justify-between mt-auto">
              <div className="flex gap-3 text-xl text-gray-700">
                {item.techStack?.map((iconName, idx) => (
                  <IconMapper key={idx} name={iconName} className="text-2xl" />
                ))}
              </div>

              <div className="flex gap-3 text-xs font-mono font-bold">
                <Link
                  href={`/projects/${item.slug}`}
                  className="group flex items-center justify-center gap-2 w-full text-black py-3 font-mono font-bold text-xs md:text-sm"
                >
                  LIHAT DETAIL
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
