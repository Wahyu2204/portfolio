import { feSkills } from "@/lib/skills/fe";
import { beSkills } from "@/lib/skills/be";
import { toolsSkills } from "@/lib/skills/tools";
import SkillCard from "@/components/card/techStackCard";

export default function TechStack() {
  return (
    <main className="min-h-screen pt-24 md:pt-32 px-6 pb-20 max-w-5xl mx-auto">
      {/* Header Halaman */}
      <h1 className="text-5xl md:text-7xl font-black text-center mb-16 uppercase tracking-tighter">
        Tech <span className="text-stroke-2">Stack</span>
      </h1>

      {/* Render 3 Kategori */}
      <SkillCard title="FRONTEND // ARSENAL" items={feSkills} />
      <SkillCard title="BACKEND // ENGINE" items={beSkills} />
      <SkillCard title="TOOLS // UTILITY" items={toolsSkills} />
    </main>
  );
}
