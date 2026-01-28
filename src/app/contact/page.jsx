import { Contacts } from "@/lib/contact"; // Import data tadi
import ContactCard from "@/components/card/contactCard";

export default function ContactPage() {
  return (
    // Sesuaikan pt-24 dengan tinggi navbar kamu
    <main className="min-h-screen flex flex-col pt-24 px-6 pb-20 items-center justify-center max-w-4xl mx-auto">
      {/* Header Halaman */}
      <div className="mb-12 border-b-4 border-black pb-6">
        <h1 className="text-5xl md:text-6xl font-black uppercase tracking-tighter mb-4">
          Get in Touch
        </h1>
        <p className="text-lg font-mono text-gray-700 max-w-4xl">
          Interested in collaborating or just want to say hello? Feel free to
          contact me via the platforms below.
        </p>
      </div>

      {/* Render Card */}
      <ContactCard items={Contacts} />
    </main>
  );
}
