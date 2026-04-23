import React from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";

const challengeItems = [
  {
    title: "Tính Độc lập tự chủ",
    description:
      "Thách thức lớn nhất trong việc xây dựng nền kinh tế tự cường, tránh phụ thuộc quá sâu vào chuỗi cung ứng ngoại khối.",
  },
  {
    title: "Sự lệ thuộc kinh tế",
    description:
      "Tỷ trọng FDI lớn nhưng sự liên kết với doanh nghiệp nội địa còn yếu, giá trị gia tăng thuần Việt chưa cao.",
  },
  {
    title: "Nguy cơ tụt hậu",
    description:
      "Áp lực từ cuộc đua công nghệ toàn cầu và bẫy thu nhập trung bình nếu không kịp thời đổi mới mô hình tăng trưởng.",
  },
];

const ChallengesSection: React.FC = () => {
  const { visibleItems, setRevealRef } = useScrollReveal(
    challengeItems.length + 1,
  );

  return (
    <section id="challenges" className="py-32 bg-[#d9ebf5]/30">
      <div className="max-w-screen-2xl mx-auto px-8">
        <div className="flex flex-col md:flex-row gap-20">
          <div className="md:w-1/2">
            <h2 className="text-5xl font-black text-[#0d1e25] tracking-tighter uppercase mb-8">
              Hạn chế &amp; <br />
              <span className="text-[#ba1a1a]">Thách thức</span>
            </h2>
            <p className="text-[#5b403d] text-lg mb-12 font-medium">
              Nhận diện những rào cản và nguy cơ thực tế trong quá trình phát
              triển để có chiến lược ứng phó kịp thời.
            </p>
            <div className="space-y-8">
              {challengeItems.map((item, index) => (
                <div
                  key={item.title}
                  ref={setRevealRef(index)}
                  style={{ transitionDelay: `${index * 120}ms` }}
                  className={`flex gap-6 hover:translate-x-2 duration-700 ease-out transform-gpu ${
                    visibleItems[index]
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 translate-x-16"
                  }`}
                >
                  <div className="shrink-0 w-12 h-12 bg-[#ba1a1a]/10 text-[#ba1a1a] rounded-full flex items-center justify-center font-bold">
                    !
                  </div>
                  <div>
                    <h4 className="text-xl font-black uppercase mb-2 text-[#0d1e25]">
                      {item.title}
                    </h4>
                    <p className="text-[#5b403d] text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div
            ref={setRevealRef(challengeItems.length)}
            style={{ transitionDelay: "300ms" }}
            className={`md:w-1/2 bg-[#0d1e25] text-white p-12 rounded-2xl flex flex-col justify-center hover:shadow-xl transition-all duration-700 ease-out transform-gpu ${
              visibleItems[challengeItems.length]
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-16"
            }`}
          >
            <div className="space-y-10">
              <div>
                <h4 className="text-[#fcc340] font-black uppercase tracking-widest text-xs mb-4">
                  An ninh phi truyền thống
                </h4>
                <p className="text-[#d9ebf5] leading-relaxed italic">
                  Biến đổi khí hậu, an ninh mạng, dịch bệnh và đứt gãy chuỗi
                  cung ứng toàn cầu đang trở thành những biến số khó lường cho
                  mục tiêu CNH.
                </p>
              </div>
              <div className="h-px bg-white/10 w-full"></div>
              <div>
                <h4 className="text-[#fcc340] font-black uppercase tracking-widest text-xs mb-4">
                  Phân hóa xã hội
                </h4>
                <p className="text-[#d9ebf5] leading-relaxed italic">
                  Khoảng cách giàu nghèo và sự chênh lệch phát triển giữa các
                  vùng miền đòi hỏi chính sách công bằng và bao trùm hơn.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChallengesSection;
