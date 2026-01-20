import Images from "next/image";

export default function Projects() {
  return (
    <div className="grow flex flex-col items-center max-w-7xl mx-auto w-full mt-4">
      <p className="text-sm font-semibold tracking-wider uppercase text-slate-600 mb-4">
        [ PROJECTS ]
      </p>

      <Images
        src="/assets/projects.png"
        alt="Wazys..."
        width={850}
        height={850}
        className="rounded-lg"
      />

      <p className="text-sm font-semibold tracking-wider uppercase italic text-slate-600 mt-4">
        {'"Welcome to my creative space — let\'s collaborate."'}
      </p>
    </div>
  );
}
