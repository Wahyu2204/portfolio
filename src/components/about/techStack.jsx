import { client } from "@/sanity/client";
import SkillCard from "@/components/card/techStackCard";

// 1. Fungsi Fetch Data Sanity
async function getSkills() {
  const query = `*[_type == "skill"] {
    name,
    category,
    iconName // Kita ambil string nama icon-nya (misal: FaReact)
  }`;
  
  return await client.fetch(query);
}

export default async function TechStack() {
  // 2. Tunggu data dateng
  const skills = await getSkills();

  // 3. Filter manual sesuai kategori (sesuai value dropdown di Sanity lu)
  // Note: Kalau lu pake schema "fe", ganti "frontend" jadi "fe" di sini
  const feSkills = skills.filter((s) => s.category === "frontend");
  const beSkills = skills.filter((s) => s.category === "backend");
  const toolsSkills = skills.filter((s) => s.category === "tools");

  return (
    <main className="min-h-screen flex flex-col justify-center px-4 max-w-5xl mx-auto py-20">
      
      {/* Header Tetap Sama */}
      <h1 className="animate-in fade-in slide-in-from-bottom-4 duration-500 ease-out text-5xl md:text-5xl font-black text-start mb-10 uppercase tracking-tighter">
        Tech <span className="text-stroke-2">Stack</span>
      </h1>

      <div className="flex flex-col gap-4">
        
        {/* 2. FRONTEND */}
        <div className="animate-in fade-in slide-in-from-bottom-8 duration-500 delay-150 fill-mode-both ease-out">
          {/* Kita lempar data feSkills yang udah difilter */}
          <SkillCard title="FRONTEND // ARSENAL" items={feSkills} />
        </div>

        {/* 3. BACKEND */}
        <div className="animate-in fade-in slide-in-from-bottom-8 duration-500 delay-300 fill-mode-both ease-out">
          <SkillCard title="BACKEND // ENGINE" items={beSkills} />
        </div>

        {/* 4. TOOLS */}
        <div className="animate-in fade-in slide-in-from-bottom-8 duration-500 delay-500 fill-mode-both ease-out">
          <SkillCard title="TOOLS // UTILITY" items={toolsSkills} />
        </div>

      </div>
    </main>
  );
}