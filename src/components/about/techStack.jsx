import { feSkills } from "@/lib/skills/fe";
import { beSkills } from "@/lib/skills/be";
import { toolsSkills } from "@/lib/skills/tools";
import SkillCard from "@/components/card/techStackCard";

export default function TechStack() {
  return (
    <main className="h-screen flex flex-col justify-center px-6 max-w-5xl mx-auto">
      {/* Header Halaman */}
      <h1 className="text-5xl md:text-5xl font-black text-start mb-10 uppercase tracking-tighter">
        Tech <span className="text-stroke-2">Stack</span>
      </h1>

      {/* Render 3 Kategori */}
      <SkillCard title="FRONTEND // ARSENAL" items={feSkills} />
      <SkillCard title="BACKEND // ENGINE" items={beSkills} />
      <SkillCard title="TOOLS // UTILITY" items={toolsSkills} />
    </main>
  );
}
