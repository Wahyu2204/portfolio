import Image from "next/image";
import CV from "@/components/about/cv";

export default function MySelf() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start md:justify-center max-w-7xl mx-auto w-full px-6 pt-32 pb-20 md:pt-0 md:pb-0">
      <h1
        className="animate-in fade-in slide-in-from-bottom-4 duration-500 ease-out 
                     text-3xl sm:text-4xl md:text-6xl font-black text-center tracking-tight leading-tight"
      >
        I&apos;m Wahyu Andrianto Wibowo
      </h1>

      <div className="animate-in fade-in slide-in-from-bottom-8 duration-500 delay-100 fill-mode-both ease-out text-sm leading-relaxed text-justify text-slate-400 mt-4 max-w-7xl">
        
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8">
          <Image
            src="/assets/about/me.jpeg"
            alt="Wahyu Andrianto Wibowo"
            width={200}
            height={200}
            // shrink-0 = Anti Gepeng di Desktop
            className="rounded-lg shrink-0 w-40 h-40 md:w-[200px] md:h-[200px] object-cover"
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

      <div className="animate-in fade-in slide-in-from-bottom-8 duration-500 delay-300 fill-mode-both ease-out flex items-center gap-3 mt-4">
        <CV />
      </div>
    </div>
  );
}
