import React, { useEffect, useRef, useState } from "react";

const phases = [
  {
    number: 1,
    title: "Giai đoạn 1: Tạo lập tiền đề (Từ 1986)",
    tag: "#STAGE_01",
    color: "border-[#795900]",
    description:
      "Chuyển đổi từ kinh tế kế hoạch hóa tập trung sang kinh tế thị trường, xóa bỏ bao cấp và bắt đầu mở cửa hội nhập, tạo nền móng cho sản xuất hàng hóa.",
  },
  {
    number: 2,
    title: 'Giai đoạn 2: Mô hình "Rút ngắn" (20-30 năm)',
    tag: "#STAGE_02",
    color: "border-[#a20513]",
    description:
      "Tận dụng lợi thế của nước đi sau để thực hiện CNH-HĐH với tốc độ nhanh, bỏ qua các bước tuần tự truyền thống thông qua thu hút FDI và xuất khẩu.",
  },
  {
    number: 3,
    title: "Giai đoạn 3: Gắn với Kinh tế tri thức",
    tag: "#STAGE_03",
    color: "border-[#154ba5]",
    description:
      "Đẩy mạnh vai trò của khoa học công nghệ và giáo dục, coi trí thức là động lực chính của giá trị gia tăng trong sản xuất công nghiệp hiện đại.",
  },
  {
    number: 4,
    title: "Giai đoạn 4: Thích ứng CMCN 4.0",
    tag: "#STAGE_04",
    color: "border-[#0d1e25]",
    description:
      "Chuyển đổi số toàn diện, làm chủ công nghệ lõi và phát triển nền công nghiệp thông minh, bền vững trong bối cảnh toàn cầu hóa số.",
  },
];

const StrategicRoadmap: React.FC = () => {
  const [visibleCards, setVisibleCards] = useState<boolean[]>(() =>
    phases.map(() => false),
  );
  const cardRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const indexAttr = entry.target.getAttribute("data-index");
            const index = indexAttr ? Number(indexAttr) : -1;

            if (index >= 0) {
              setVisibleCards((prev) => {
                const next = [...prev];
                next[index] = true;
                return next;
              });
              observer.unobserve(entry.target);
            }
          }
        });
      },
      {
        threshold: 0.25,
        rootMargin: "0px 0px -10% 0px",
      },
    );

    const nodes = cardRefs.current;
    nodes.forEach((node) => {
      if (node) observer.observe(node);
    });

    return () => {
      nodes.forEach((node) => {
        if (node) observer.unobserve(node);
      });
      observer.disconnect();
    };
  }, []);

  const getRevealClass = (index: number) => {
    if (visibleCards[index]) {
      return "opacity-100 translate-x-0 translate-y-0 scale-100 rotate-0";
    }

    if (index % 3 === 0) return "opacity-0 translate-x-16";
    if (index % 3 === 1) return "opacity-0 -translate-x-14";
    return "opacity-0 translate-y-10 scale-95";
  };

  return (
    <section id="roadmap" className="py-32 bg-[#e7f6ff]">
      <div className="max-w-screen-2xl mx-auto px-8">
        <div className="flex flex-col md:flex-row gap-20">
          <div className="w-full md:w-1/3 sticky top-32 h-fit">
            <h2 className="text-5xl font-black text-[#0d1e25] tracking-tighter leading-tight mb-8">
              LỘ TRÌNH &amp; <br />
              <span className="text-[#a20513]">CHIẾN LƯỢC</span>
            </h2>
            <div className="h-1 w-20 bg-[#a20513] mb-8"></div>
            <p className="text-[#5b403d] leading-relaxed text-lg">
              Phân tích bốn giai đoạn then chốt trong tiến trình công nghiệp
              hóa, hiện đại hóa đất nước từ dấu mốc Đổi Mới đến kỷ nguyên số.
            </p>
          </div>
          <div className="w-full md:w-2/3 space-y-12">
            {phases.map((phase, index) => (
              <div
                key={phase.number}
                ref={(el) => {
                  cardRefs.current[index] = el;
                }}
                data-index={index}
                style={{ transitionDelay: `${index * 120}ms` }}
                className={`group relative bg-white p-10 rounded-lg border-l-4 ${phase.color} duration-700 ease-out transform-gpu hover:shadow-lg hover:-translate-y-1 ${getRevealClass(
                  index,
                )}`}
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-black text-[#0d1e25] uppercase tracking-tight">
                    {phase.title}
                  </h3>
                  <span className="text-[#5b403d] font-bold text-lg">
                    {phase.tag}
                  </span>
                </div>
                <p className="text-[#5b403d] font-medium leading-relaxed">
                  {phase.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StrategicRoadmap;
