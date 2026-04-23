import React, { useState, useEffect } from "react";

interface NavItem {
  label: string;
  id: string;
}

const navItems: NavItem[] = [
  { label: "Lịch sử", id: "hero" },
  { label: "Kinh tế", id: "metrics" },
  { label: "Công nghệ", id: "roadmap" },
  { label: "Dữ liệu", id: "challenges" },
  { label: "Tầm nhìn", id: "vision" },
];

const Header: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("hero");

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.id);

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-[#f4faff]/80 backdrop-blur-md dark:bg-[#0d1e25]/80 shadow-[0_12px_32px_rgba(13,30,37,0.06)]">
      <div className="flex justify-between items-center w-full px-8 py-4 max-w-screen-2xl mx-auto">
        <div className="text-xl font-black tracking-tighter text-[#0d1e25] dark:text-[#ffffff]">
          VIỆT NAM: INDUSTRIAL ARCHIVE
        </div>
        <nav className="hidden md:flex gap-8 items-center">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`font-['Inter'] tracking-tight text-sm uppercase font-bold transition-all duration-300 ${
                activeSection === item.id
                  ? "text-[#a20513] border-b-2 border-[#a20513] pb-1"
                  : "text-[#5b403d] dark:text-[#cbdde7] hover:text-[#a20513]"
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>
      
      </div>
    </header>
  );
};

export default Header;
