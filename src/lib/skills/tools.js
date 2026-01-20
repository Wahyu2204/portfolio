import {
  FaGithub,
  FaFigma,
} from "react-icons/fa";

import { SiPostman } from "react-icons/si";

export const toolsSkills = [
  {
    name: "GitHub",
    icon: <FaGithub />,
    colorClass: "text-slate-300",
    hoverBorderClass: "hover:border-slate-300/50"
  },
  {
    name: "Figma",
    icon: <FaFigma />,
    colorClass: "text-pink-500",
    hoverBorderClass: "hover:border-pink-500/50"
  },
  {
    name: "Postman",
    icon: <SiPostman />,
    colorClass: "text-orange-600",
    hoverBorderClass: "hover:border-orange-600/50"
  },
];