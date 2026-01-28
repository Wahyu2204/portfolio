import { Projects } from "@/lib/projects";
import ProjectCard from "@/components/card/projectCard";

export default function Project() {
  return (
    <main className="h-screen pt-30 md:pt-48 px-6 pb-20 max-w-5xl mx-auto">
      {/* Header Halaman */}
      <h1 className="text-5xl md:text-5xl font-black text-start mb-10 uppercase tracking-tighter">
        Projects
      </h1>

      {/* Render 3 Kategori */}
      <ProjectCard items={Projects} />
    </main>
  );
}
