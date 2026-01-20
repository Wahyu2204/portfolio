// components/SocialLinks.js
import React from "react";

// 1. Impor ikon yang kamu butuhkan dari 'react-icons'
// 'Fa' = Font Awesome, 'Si' = Simple Icons
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

// 2. Data Sosial Media
// Ganti URL (href) dengan link profil kamu!
const socialMedia = [
  {
    name: "GitHub",
    href: "https://github.com/username-kamu", // <-- GANTI INI
    icon: FaGithub,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/username-kamu", // <-- GANTI INI
    icon: FaLinkedin,
  },
  {
    name: "Twitter",
    href: "https://twitter.com/username-kamu", // <-- GANTI INI
    icon: FaTwitter,
  },
  {
    name: "Instagram",
    href: "https://instagram.com/username-kamu", // <-- GANTI INI
    icon: FaInstagram,
  },
];

export default function SocialMedia() {
  return (
    <div className="flex items-center space-x-4">
      {socialMedia.map((social) => (
        <a
          key={social.name}
          href={social.href}
          target="_blank" // Membuka link di tab baru
          rel="noopener noreferrer" // Keamanan untuk tab baru
          aria-label={`Link ke ${social.name} saya`}
          className="
            text-slate-500 
            transition-colors duration-200 ease-in-out
            hover:text-blue-500
          "
        >
          {/* Render ikon sebagai komponen */}
          <social.icon className="w-6 h-6" />
        </a>
      ))}
    </div>
  );
}
