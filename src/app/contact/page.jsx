import { Contacts } from "@/lib/contact";
import ContactCard from "@/components/card/contactCard";

export default function ContactPage() {
  const animClass = "animate-in fade-in slide-in-from-bottom-8 duration-500 ease-out fill-mode-both";

  return (
    <main className="min-h-screen flex flex-col pt-24 px-6 pb-20 items-center justify-center max-w-4xl mx-auto">
      
      {/* 1. Header Halaman (Muncul Duluan - Jarak Pendek) */}
      <div className="mb-12 border-b-4 border-black pb-6 animate-in fade-in slide-in-from-bottom-4 duration-500 ease-out">
        <h1 className="text-5xl md:text-6xl font-black uppercase tracking-tighter mb-4">
          Get in Touch
        </h1>
        <p className="text-lg font-mono text-gray-700 max-w-4xl">
          Interested in collaborating or just want to say hello? Feel free to
          contact me via the platforms below.
        </p>
      </div>

      {/* 2. Contact Card Container (Muncul Belakangan - Delay 150ms) */}
      <div className={`w-full delay-150 ${animClass}`}>
        <ContactCard items={Contacts} />
      </div>
      
    </main>
  );
}