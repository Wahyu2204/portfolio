import Image from "next/image";

import CV from "@/components/about/cv";

export default function MySelf() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center max-w-7xl mx-auto w-full mt-4 md:pt-2 lg:pt-4 px-6">
      <h1 className="font-[Unbounded] text-6xl font-semibold">
        Wahyu Andrianto Wibowo
      </h1>

      <div className="text-sm leading-relaxed text-justify text-slate-400 mt-10 max-w-5xl">
        <div className="flex items-center gap-3">
          <Image
            src="/assets/about/me.jpeg"
            alt="Wahyu Andrianto Wibowo"
            width={200}
            height={200}
            className="rounded-lg"
          />
          <div>
            <p>
              I am a UI/UX Designer and Frontend Engineer focused on developing
              user interfaces that are both easy to use and aesthetically
              pleasing. I have a comprehensive understanding of Full-Stack
              Development, enabling me to implement designs into systems that
              are fully integrated with backend and database components. I
              thrive at the intersection of design and technology, where optimal
              user experience meets robust, clean, and scalable code.
            </p>

            <p className="mt-4">
              Currently, I am a Computer Science student specializing in
              Software Engineering. Throughout my academic and personal
              development journey, I have gained experience in designing
              end-to-end digital solutions, from user requirement analysis and
              UI/UX design to interface implementation using modern web
              technologies.
            </p>
          </div>
        </div>

        <p className="mt-4">
          I am passionate about creating digital products that not only function
          well but also provide an intuitive and consistent user experience.
          Through various projects I have worked on, I continue to hone my
          ability to translate user needs into effective designs and structured,
          easily developable frontend implementations.
        </p>

        <p className="mt-4">
          Looking ahead, I am open to internship opportunities or entry-level
          positions in UI/UX Design and Frontend Development, within a work
          environment that fosters collaboration between design and technology
          development.
        </p>
      </div>
      <CV />
    </div>
  );
}
