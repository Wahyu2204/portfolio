import { FaDownload } from "react-icons/fa";

export default function DownloadCVButton() {
  return (
    <a
      href="/assets/docs/cv-wahyu-andrianto-wibowo.pdf"
      
      // 👇 Attribute ini wajib biar otomatis download
      // Kamu bisa tentuin nama file pas didownload user
      download="CV_Wahyu_Andrianto_Wibowo.pdf"
      
      target="_blank" // Jaga-jaga biar kebuka di tab baru dulu
      rel="noopener noreferrer"
      
      // 👇 Style Neo-Brutalism
      className="mt-3 inline-flex items-center gap-2 bg-black text-white px-6 py-3 font-bold font-mono border-2 border-transparent 
                 shadow-[4px_4px_0px_0px_rgba(100,100,100,1)] 
                 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none hover:bg-gray-900 transition-all cursor-pointer"
    >
      <FaDownload className="text-lg" />
      DOWNLOAD CV
    </a>
  );
}