import React from "react";
import { MdGroups2 } from "react-icons/md";
import { useScrollReveal } from "../hooks/useScrollReveal";

const members = [
  {
    name: "Nguyễn Gia Huy",
    id: "SE190048",
    role: "Phát triển website: xây dựng giao diện, tách component, xử lý điều hướng và tích hợp toàn bộ nội dung lên trang.",
  },
  {
    name: "Nguyễn Quí Đức",
    id: "SE182087",
    role: "Thiết kế và biên soạn phần Quiz: xây dựng bộ câu hỏi, đáp án, và kịch bản tương tác để kiểm tra mức độ nắm bài.",
  },
  {
    name: "Đỗ Đoàn Duy Phương",
    id: "SE180235",
    role: "Phân tích sự khác biệt giữa mô hình công nghiệp hóa truyền thống và hiện đại.",
  },
  {
    name: "Võ Yến Như",
    id: "SS181417",
    role: "Phân tích các giai đoạn chính trong lộ trình CNH-HĐH từ 1986 đến nay, nêu thành tựu nổi bật và các thách thức.",
  },
  {
    name: "Hoàng Thị Dịu Hồng",
    id: "SS180170",
    role: "Phân tích các giai đoạn chính trong lộ trình CNH-HĐH từ 1986 đến nay, nêu thành tựu nổi bật và các thách thức.",
  },
  {
    name: "Nguyễn Ngọc Duy",
    id: "SA180252",
    role: "Đề xuất định hướng phát triển cho Việt Nam trong giai đoạn tiếp theo.",
  },
];

const AboutUsSection: React.FC = () => {
  const { visibleItems, setRevealRef } = useScrollReveal(members.length);

  return (
    <section
      id="about-us"
      className="py-24 bg-[#f4faff] border-t border-[#8f706c]/10"
    >
      <div className="max-w-screen-2xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#154ba5]/25 text-[#154ba5] bg-white text-xs font-bold tracking-widest uppercase">
            <MdGroups2 />
            Nhóm thực hiện
          </span>
          <h2 className="mt-5 text-4xl md:text-5xl font-black tracking-tight text-[#0d1e25] uppercase">
            Thành viên dự án
          </h2>
          <p className="mt-4 text-base md:text-lg text-[#5b403d] max-w-2xl mx-auto">
            Danh sách thành viên và vai trò phụ trách trong dự án MLN122.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {members.map((member, index) => (
            <article
              key={member.id}
              ref={setRevealRef(index)}
              style={{ transitionDelay: `${index * 100}ms` }}
              className={`relative rounded-2xl border border-[#8f706c]/15 bg-white p-6 shadow-sm hover:shadow-lg hover:translate-y-[-4px] duration-700 ease-out transform-gpu ${
                visibleItems[index]
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-16"
              }`}
            >
              <div className="absolute top-4 right-4 h-8 min-w-8 px-2 rounded-full bg-[#ffdad6] text-[#a20513] text-xs font-black flex items-center justify-center">
                {String(index + 1).padStart(2, "0")}
              </div>
              <p className="text-lg font-black text-[#0d1e25] pr-12 leading-snug">
                {member.name}
              </p>
              <p className="mt-3 inline-block text-sm font-bold tracking-wide text-[#795900] bg-[#ffdea0]/50 px-3 py-1 rounded-full">
                {member.id}
              </p>
              <div className="mt-4 pt-4 border-t border-[#8f706c]/15">
                <p className="text-xs font-black tracking-widest uppercase text-[#154ba5]">
                  Vai trò
                </p>
                <p className="mt-2 text-sm text-[#5b403d] leading-relaxed">
                  {member.role}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
