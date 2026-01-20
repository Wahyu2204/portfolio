import {
  FaBootstrap,
  FaReact,
} from "react-icons/fa";

import { SiTailwindcss } from "react-icons/si";

import { RiNextjsFill } from "react-icons/ri";

export const feSkills = [
  {
    name: "Bootstrap",
    icon: <FaBootstrap />,
    colorClass: "text-purple-600",
    hoverBorderClass: "hover:border-purple-600/50"
  },
  {
    name: "Tailwind",
    icon: <SiTailwindcss />,
    colorClass: "text-teal-400",
    hoverBorderClass: "hover:border-teal-400/50"
  },
  {
    name: "React",
    icon: <FaReact />,
    colorClass: "text-blue-400",
    hoverBorderClass: "hover:border-blue-400/50"
  },
  {
    name: "Next.js",
    icon: <RiNextjsFill />,
    colorClass: "text-black",
    hoverBorderClass: "hover:border-black/50"
  },
];