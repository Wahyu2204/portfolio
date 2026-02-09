import { client } from "@/sanity/client";
import ProjectCard from "@/components/card/projectCard";

async function getProjects() {
  // Query GROQ (Mirip SQL)
  const query = `*[_type == "project"] | order(_createdAt desc) {
    name,
    "slug": slug.current,
    desc,
    category,
    duration,
    "gambar": image.asset->url, // Ambil URL gambar
    techStack, // Ini isinya array string ["FaReact", "SiTailwind"]
    linkWeb,
    github
  }`;

  return await client.fetch(query);
}

export default async function Project() {
  // Ambil data (Async/Await)
  const projects = await getProjects();

  return (
    <main className="min-h-screen pt-30 md:pt-48 px-6 pb-20 max-w-5xl mx-auto">
      <h1 className="animate-in fade-in slide-in-from-bottom-4 duration-500 ease-out text-5xl md:text-5xl font-black text-start mb-10 uppercase tracking-tighter">
        Projects
      </h1>

      <div className="animate-in fade-in slide-in-from-bottom-8 duration-500 delay-150 fill-mode-both ease-out">
        <ProjectCard items={projects} />
      </div>
    </main>
  );
}
