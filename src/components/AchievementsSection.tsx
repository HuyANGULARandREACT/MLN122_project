import React from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";

const achievements = [
  {
    icon: "public",
    title: "Quy mô Hội nhập",
    description:
      "Thiết lập quan hệ ngoại giao với 187 quốc gia, tham gia hơn 500 hiệp định song phương và đa phương.",
  },
  {
    icon: "workspace_premium",
    title: "Cột mốc Đa phương",
    description:
      "Gia nhập ASEAN (1995), APEC (1998) và WTO (2007), mở ra kỷ nguyên bùng nổ thương mại quốc tế.",
  },
  {
    icon: "account_balance",
    title: "Chính phủ Điện tử",
    description:
      "Đổi mới phương thức quản trị hành chính, đẩy mạnh dịch vụ công trực tuyến và xây dựng hạ tầng dữ liệu số.",
  },
  {
    icon: "diversity_3",
    title: "Phát triển Xã hội",
    description:
      "Tận dụng nguồn vốn FDI để giải quyết việc làm, nâng cao chất lượng đời sống và trình độ lao động dân cư.",
  },
];

const AchievementsSection: React.FC = () => {
  const { visibleItems, setRevealRef } = useScrollReveal(achievements.length);

  const getRevealClass = (index: number) => {
    if (visibleItems[index]) {
      return "opacity-100 translate-x-0 translate-y-0 scale-100";
    }

    if (index % 4 === 0) return "opacity-0 translate-y-12";
    if (index % 4 === 1) return "opacity-0 translate-x-16";
    if (index % 4 === 2) return "opacity-0 -translate-x-16";
    return "opacity-0 scale-95";
  };

  return (
    <section className="py-32 bg-[#f4faff]">
      <div className="max-w-screen-2xl mx-auto px-8">
        <div className="mb-16">
          <h2 className="text-5xl font-black text-[#0d1e25] tracking-tighter uppercase mb-4">
            Những Thành tựu Nổi bật
          </h2>
          <p className="text-[#5b403d] text-lg max-w-2xl font-medium">
            Khẳng định vị thế quốc gia thông qua hội nhập kinh tế quốc tế sâu
            rộng và hiện đại hóa quản trị.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              ref={setRevealRef(index)}
              style={{ transitionDelay: `${index * 100}ms` }}
              className={`p-8 bg-white rounded-xl shadow-sm border border-[#8f706c]/10 hover:shadow-lg transition-all duration-700 ease-out transform-gpu hover:translate-y-[-4px] ${getRevealClass(
                index,
              )}`}
            >
              <span className="material-symbols-outlined text-[#a20513] text-4xl mb-6 block">
                {achievement.icon}
              </span>
              <h3 className="text-xl font-black mb-3 uppercase text-[#0d1e25]">
                {achievement.title}
              </h3>
              <p className="text-[#5b403d] text-sm leading-relaxed">
                {achievement.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
