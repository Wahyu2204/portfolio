import React from "react";
import Images from "next/image";

import { skills } from "@/lib/skills";

export default function Skills() {
  return (
    <div className="grow flex flex-col items-center max-w-7xl mx-auto w-full mt-4">
      <p className="text-sm font-semibold tracking-wider uppercase text-slate-600 mb-4">
        [ SKILLS ]
      </p>

      <Images
        src="/assets/skills.png"
        alt="Wazys..."
        width={850}
        height={850}
        className="rounded-lg"
      />

      <p className="text-sm font-semibold tracking-wider uppercase italic text-slate-600 mt-4">
        {
          '"Driven by code, dedicated to building solutions that make a difference."'
        }
      </p>

      <div className="w-full grid grid-cols-5 gap-6 py-4 px-32">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className={`bg-slate-800/70 backdrop-blur-sm p-2 rounded-xl shadow-lg border border-slate-700 flex flex-col justify-between transition-all ${skill.hoverBorderClass}`}
          >
            <div className="flex items-center">
              <span className="p-2 inline-block">
                {React.cloneElement(skill.icon, {
                  className: `w-6 h-6 ${skill.colorClass}`,
                })}
              </span>
              <h3 className="text-lg font-bold text-white ml-1">
                {skill.name}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
