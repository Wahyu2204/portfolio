import { client } from "@/sanity/client";
import EduCard from "@/components/card/eduCard";

// 1. Fungsi Fetch Data Education
async function getEducations() {
  // Query data education, diurutkan berdasarkan 'order' (biar STT NF tetep di atas)
  const query = `*[_type == "education"] | order(order asc) {
    name,
    major,
    GPA,
    time
  }`;
  
  return await client.fetch(query);
}

export default async function Edu() {
  // 2. Tunggu data dateng dari Sanity
  const educations = await getEducations();

  return (
    <main className="min-h-screen flex flex-col justify-center px-4 max-w-5xl mx-auto py-20">
      
      {/* Header Halaman */}
      <h1 className="animate-in fade-in slide-in-from-bottom-4 duration-500 ease-out text-5xl md:text-5xl font-black text-start mb-10 uppercase tracking-tighter">
        Educations
      </h1>

      {/* Konten Card */}
      <div className="animate-in fade-in slide-in-from-bottom-8 duration-500 delay-150 fill-mode-both ease-out">
        {/* Lempar data 'educations' yang baru diambil dari Sanity */}
        <EduCard items={educations} />
      </div>
    </main>
  );
}