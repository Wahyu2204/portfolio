import {
  FaLaravel,
} from "react-icons/fa";

import { SiSupabase, SiMysql } from "react-icons/si";

export const beSkills = [
  {
    name: "Laravel",
    icon: <FaLaravel />,
    colorClass: "text-red-500",
    hoverBorderClass: "hover:border-red-500/50"
  },
  {
    name: "Supabase",
    icon: <SiSupabase />,
    colorClass: "text-green-500",
    hoverBorderClass: "hover:border-green-500/50"
  },
  {
    name: "MySQL",
    icon: <SiMysql />,
    colorClass: "text-blue-500",
    hoverBorderClass: "hover:border-blue-500/50"
  },
];