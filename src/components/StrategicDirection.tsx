import React from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";

const pillars = [
  {
    number: "01",
    title: "Công nghiệp Nền tảng & Hỗ trợ",
    description:
      'Ưu tiên vật liệu, cơ khí chính xác, bán dẫn, năng lượng. Giải quyết bài toán "lắp ráp nhiều - nội địa hóa thấp" và tự chủ chuỗi cung ứng.',
  },
  {
    number: "02",
    title: "CNH dựa trên Tri thức",
    description:
      'Khoa học - công nghệ và đổi mới sáng tạo đóng vai trò quyết định. "Đi tắt đón đầu" công nghệ để rút ngắn khoảng cách phát triển.',
  },
  {
    number: "03",
    title: "Con người là Trung tâm",
    description:
      "Chuyển mạnh sang đào tạo kỹ năng số, STEM và tư duy sáng tạo để thích ứng linh hoạt với kỷ nguyên tự động hóa.",
  },
];

const StrategicDirection: React.FC = () => {
  const { visibleItems, setRevealRef } = useScrollReveal(pillars.length);

  return (
    <section className="py-32 bg-[#e7f6ff] border-t border-[#8f706c]/10">
      <div className="max-w-screen-2xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4">
            <h2 className="text-5xl font-black text-[#0d1e25] tracking-tighter uppercase leading-tight mb-8">
              Định hướng Chiến lược <br />
              <span className="text-[#a20513]">Giai đoạn Tới</span>
            </h2>
            <div className="h-1.5 w-24 bg-[#a20513] mb-10"></div>
            <div className="bg-white p-8 rounded-xl shadow-sm border-l-4 border-[#a20513] hover:shadow-lg transition-shadow duration-300">
              <h4 className="text-xs font-bold text-[#8f706c] tracking-[0.2em] uppercase mb-4">
                Phân tích Tổng quan
              </h4>
              <p className="text-[#5b403d] leading-relaxed font-medium">
                Quá trình CNH–HĐH từ 1986 đến nay cho thấy tăng trưởng nhanh
                nhưng chưa bền vững, phụ thuộc FDI, giá trị gia tăng thấp. Trong
                bối cảnh CMCN 4.0, lợi thế lao động giá rẻ đang mất đi. Yêu cầu
                đặt ra là tái cấu trúc theo chiều sâu, dựa trên năng suất, đổi
                mới sáng tạo và tự chủ quốc gia.
              </p>
            </div>
          </div>
          <div className="lg:col-span-8 flex flex-col justify-center">
            <div className="mb-12">
              <h3 className="text-3xl font-black text-[#0d1e25] tracking-tight uppercase mb-2">
                Tái cấu trúc theo Chiều sâu
              </h3>
              <p className="text-[#8f706c] font-bold tracking-widest text-sm uppercase">
                Ba trụ cột chiến lược quyết định tương lai
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {pillars.map((pillar, index) => (
                <div
                  key={index}
                  ref={setRevealRef(index)}
                  style={{ transitionDelay: `${index * 120}ms` }}
                  className={`group bg-white p-8 rounded-lg border border-[#8f706c]/10 hover:border-[#a20513]/30 hover:shadow-lg hover:translate-y-[-4px] duration-700 ease-out transform-gpu ${
                    visibleItems[index]
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 translate-x-16"
                  }`}
                >
                  <div className="text-[#a20513] font-black text-4xl mb-6 opacity-20 group-hover:opacity-100 transition-opacity duration-300">
                    {pillar.number}
                  </div>
                  <h4 className="text-lg font-black text-[#0d1e25] uppercase mb-4 leading-tight">
                    {pillar.title}
                  </h4>
                  <p className="text-sm text-[#5b403d] leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StrategicDirection;
