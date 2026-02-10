import {
  FaReact,
  FaLaravel,
  FaBootstrap,
  FaNodeJs,
  FaGithub,
  FaLinkedin,
  FaFigma,
} from "react-icons/fa";
import { SiTailwindcss, SiMysql, SiGmail , SiSupabase, SiPostman, SiPostgresql, SiShadcnui} from "react-icons/si";

import { RiNextjsFill } from "react-icons/ri";

// Tambahin icon lain di sini kalau lu nambah skill baru di Sanity
const iconMap = {
  FaReact,
  FaLaravel,
  FaBootstrap,
  FaNodeJs,
  FaGithub,
  FaLinkedin,
  SiTailwindcss,
  SiMysql,
  SiGmail,
  RiNextjsFill,
  SiSupabase,
  SiPostman,
  FaFigma,
  SiPostgresql,
  SiShadcnui,
};

export default function IconMapper({ name, className }) {
  const IconComponent = iconMap[name];

  if (!IconComponent) {
    // Return null atau icon default kalau namanya gak ketemu
    return null;
  }

  return <IconComponent className={className} />;
}
