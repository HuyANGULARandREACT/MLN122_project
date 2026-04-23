import React from "react";

const MetricsSection: React.FC = () => {
  return (
    <section id="metrics" className="py-24 bg-[#f4faff] relative z-10 -mt-20">
      <div className="max-w-screen-2xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="md:col-span-2 bg-white p-10 rounded-xl shadow-[0_12px_32px_rgba(13,30,37,0.06)] border-l-4 border-[#a20513] hover:shadow-lg transition-shadow duration-300">
            <div className="text-sm font-bold text-[#8f706c] tracking-widest uppercase mb-2">
              Quy mô GDP 2023
            </div>
            <div className="text-6xl font-black text-[#0d1e25] tracking-tighter mb-4">
              $430B+
            </div>
            <p className="text-[#5b403d] leading-relaxed">
              Tăng trưởng vượt bậc so với giai đoạn tiền Đổi Mới, đưa Việt Nam
              vào nhóm các nền kinh tế năng động nhất khu vực.
            </p>
          </div>
          <div className="bg-[#3764bf] p-10 rounded-xl text-white shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <div className="text-sm font-bold text-[#b0c6ff] tracking-widest uppercase mb-2">
              Giai đoạn hiện tại
            </div>
            <div className="text-5xl font-black tracking-tighter mb-4">4.0</div>
            <p className="text-[#d9e2ff]/80">
              Tập trung vào chuyển đổi số, kinh tế tuần hoàn và sản xuất thông
              minh.
            </p>
          </div>
          <div className="bg-[#fcc340] p-10 rounded-xl text-[#6f5100] shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <div className="text-sm font-bold text-[#5c4300] tracking-widest uppercase mb-2">
              Mục tiêu 2045
            </div>
            <div className="text-5xl font-black tracking-tighter mb-4">
              HIGHTECH
            </div>
            <p className="text-[#5c4300]/80">
              Trở thành nước phát triển, thu nhập cao với nền công nghiệp hiện
              đại.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MetricsSection;
