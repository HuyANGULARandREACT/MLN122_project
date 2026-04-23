import React from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";

const visionItems = [
  {
    icon: "hub",
    title: "Công nghệ lõi",
    description:
      "Làm chủ các công nghệ nền tảng: AI, Bán dẫn, CNSH và năng lượng mới để tạo lợi thế cạnh tranh quốc gia.",
    color: "bg-[#ffdea0]",
    iconColor: "text-[#795900]",
    borderColor: "border-[#795900]",
  },
  {
    icon: "groups",
    title: "Nhân lực số",
    description:
      "Đào tạo thế hệ lao động có kỹ năng chuyên môn cao, khả năng thích ứng linh hoạt trong môi trường số toàn cầu.",
    color: "bg-[#ffdad6]",
    iconColor: "text-[#a20513]",
    borderColor: "border-[#a20513]",
  },
  {
    icon: "public",
    title: "Vị thế toàn cầu",
    description:
      "Trở thành mắt xích quan trọng trong chuỗi cung ứng giá trị cao toàn cầu và là trung tâm đổi mới sáng tạo khu vực.",
    color: "bg-[#d9e2ff]",
    iconColor: "text-[#154ba5]",
    borderColor: "border-[#154ba5]",
  },
];

const Vision2045Section: React.FC = () => {
  const { visibleItems, setRevealRef } = useScrollReveal(visionItems.length);

  const getRevealClass = (index: number) => {
    if (visibleItems[index]) {
      return "opacity-100 translate-x-0 translate-y-0 scale-100";
    }

    if (index === 0) return "opacity-0 -translate-x-16";
    if (index === 1) return "opacity-0 translate-y-12 scale-95";
    return "opacity-0 translate-x-16";
  };

  return (
    <section id="vision" className="py-32 bg-[#f4faff]">
      <div className="max-w-screen-2xl mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <h2 className="text-6xl font-black text-[#0d1e25] tracking-tighter uppercase leading-tight">
              Tầm nhìn <span className="text-[#795900]">2045</span>
            </h2>
            <p className="text-[#5b403d] font-medium text-lg mt-4">
              Các cột trụ chiến lược đưa Việt Nam trở thành quốc gia phát triển.
            </p>
          </div>
          <div className="text-[#a20513] font-black text-9xl opacity-10 select-none">
            VISION
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {visionItems.map((item, index) => (
            <div
              key={index}
              ref={setRevealRef(index)}
              style={{ transitionDelay: `${index * 120}ms` }}
              className={`bg-white p-10 rounded-xl hover:shadow-2xl border-t-8 ${item.borderColor} hover:translate-y-[-8px] group duration-700 ease-out transform-gpu ${getRevealClass(
                index,
              )}`}
            >
              <div
                className={`w-16 h-16 ${item.color} mb-8 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
              >
                <span
                  className={`material-symbols-outlined ${item.iconColor} text-3xl`}
                >
                  {item.icon}
                </span>
              </div>
              <h3 className="text-2xl font-black text-[#0d1e25] mb-4 uppercase">
                {item.title}
              </h3>
              <p className="text-[#5b403d] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Vision2045Section;
