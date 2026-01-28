import {
  FaReact,
  FaLaravel,
  FaBootstrap,
  FaNodeJs
} from "react-icons/fa";

import { SiTailwindcss, SiMysql } from "react-icons/si";

export const Projects = [
  {
    name : "Volunteer Management System",
    desc : 
      "RelaOne or Volunteer Activity Manager is a web-based platform that aims to help connect organizations that organize social activities with volunteers who are willing to contribute to community activities. They can search, view activity details, and register directly without having to go through a manual process. All of this is aimed at facilitating the coordination of social activities and access to information.",
    category : "Web App",
    duration : "3 Month",
    techStack : [FaReact, SiTailwindcss, FaLaravel, SiMysql],
    github : "https://github.com/firenzehiga/relaone-fe",
    linkWeb : "https://relaone.vercel.app/",
    gambar : "/assets/projects/relaOne.png",
    slug : "volunteer-management-system"
  },
  {
    name : "Campus Inventary Management System",
    desc : 
      "MyInventory is an inventory management platform specifically designed to simplify the process of borrowing and managing tools or items. This system aims to create an efficient, transparent, and well-structured inventory process for both administrators and borrowers.",
    category : "Web App",
    duration : "3 Month",
    techStack : [FaReact, FaNodeJs, SiTailwindcss, SiMysql],
    github : "https://github.com/Wahyu2204/MYINVENTORY",
    gambar : "/assets/projects/MyInventory.png",
    slug : "campus-inventory-management-system"
  },
  {
    name : "Academic Guidance Management System",
    desc : 
      "TA Planner is a digital platform that helps students and advisors manage the thesis advising process efficiently and in a structured manner. With features such as scheduling, progress tracking, reminders, document collaboration, and communication, TA Planner supports user productivity to complete theses on time.",
    category : "Web App",
    duration : "3 Month",
    techStack : [FaLaravel, FaBootstrap, SiMysql],
    github : "https://github.com/Wahyu2204/TA_PLANNER",
    gambar : "/assets/projects/TA_Planner.png",
    slug : "academic-guidance-management-system"
  },
];