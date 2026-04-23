import React from "react";

const ComparisonSection: React.FC = () => {
  return (
    <section className="py-32 bg-[#0d1e25] text-white overflow-hidden">
      <div className="max-w-screen-2xl mx-auto px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-5xl font-black tracking-tighter mb-6 uppercase">
            Chuyển đổi Mô hình Công nghiệp
          </h2>
          <p className="text-[#d9ebf5] font-medium text-lg">
            Phân tích so sánh giữa các mô hình truyền thống và chiến lược công
            nghiệp hóa rút ngắn trong kỷ nguyên 4.0.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="bg-white/5 rounded-2xl p-1 overflow-x-auto mb-20">
          <table className="w-full border-collapse min-w-[900px]">
            <thead>
              <tr className="bg-white/10">
                <th className="w-[15%] p-4 text-left border-b border-white/10 font-black uppercase tracking-tighter text-sm">
                  Tiêu chí
                </th>
                <th className="w-[42.5%] p-4 text-left border-b border-white/10 border-l font-black uppercase tracking-tighter text-sm">
                  Mô hình Truyền thống &amp; Xô Viết
                </th>
                <th className="w-[42.5%] p-4 text-left border-b border-white/10 border-l font-black uppercase tracking-tighter text-sm">
                  Mô hình Hiện đại &amp; Rút ngắn (4.0)
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-4 border-b border-white/10 font-bold text-[#ffb4ac]">
                  Định nghĩa &amp; Đại diện
                </td>
                <td className="p-4 border-b border-white/10 border-l text-sm align-top">
                  <div className="mb-4">
                    <span className="text-xs font-bold uppercase tracking-widest text-[#8f706c] block mb-1">
                      Cổ điển (Anh/Pháp):
                    </span>
                    Cách mạng CN lần 1 &amp; 2.
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-[#8f706c] block mb-1">
                      Xô Viết (Liên Xô/VN 1960s):
                    </span>
                    Kế hoạch hóa tập trung, ưu tiên CN nặng.
                  </div>
                </td>
                <td className="p-4 border-b border-white/10 border-l text-sm align-top">
                  <div className="mb-4">
                    <span className="text-xs font-bold uppercase tracking-widest text-[#fcc340] block mb-1">
                      Kiểu Nhật/NICs:
                    </span>
                    Hàn Quốc, Singapore, Đài Loan (Chiến lược rút ngắn).
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-[#fcc340] block mb-1">
                      Việt Nam hiện tại:
                    </span>
                    Công nghiệp hóa gắn với kinh tế tri thức &amp; 4.0.
                  </div>
                </td>
              </tr>
              <tr>
                <td className="p-4 border-b border-white/10 font-bold text-[#ffb4ac]">
                  Thời gian hoàn thành
                </td>
                <td className="p-4 border-b border-white/10 border-l text-sm">
                  Kéo dài từ 60 — 80 năm.
                </td>
                <td className="p-4 border-b border-white/10 border-l text-sm">
                  Rút ngắn đáng kể, chỉ từ 20 — 30 năm.
                </td>
              </tr>
              <tr>
                <td className="p-4 border-b border-white/10 font-bold text-[#ffb4ac]">
                  Thứ tự ưu tiên
                </td>
                <td className="p-4 border-b border-white/10 border-l text-sm text-[#d9ebf5]/80">
                  Tuần tự từ CN nhẹ (Cổ điển) hoặc đột phá thẳng vào CN nặng (Xô
                  Viết) dựa trên nguồn lực nội tại hạn chế.
                </td>
                <td className="p-4 border-b border-white/10 border-l text-sm">
                  Kết hợp linh hoạt thay thế nhập khẩu và hướng về xuất khẩu.
                  Chuyển dịch nhanh sang các ngành giá trị gia tăng cao.
                </td>
              </tr>
              <tr>
                <td className="p-4 border-b border-white/10 font-bold text-[#ffb4ac]">
                  Nguồn lực &amp; Công nghệ
                </td>
                <td className="p-4 border-b border-white/10 border-l text-sm">
                  Khai thác tài nguyên, thâm dụng lao động, tích lũy vốn từ nông
                  nghiệp/thuộc địa. Công nghệ CM CN 1-3.
                </td>
                <td className="p-4 border-b border-white/10 border-l text-sm">
                  Dựa trên Khoa học - Công nghệ, Đổi mới sáng tạo và vốn FDI.
                  Tận dụng thành tựu CM CN 4.0 để \"đi tắt đón đầu\".
                </td>
              </tr>
              <tr>
                <td className="p-4 font-bold text-[#ffb4ac]">
                  Hệ quả &amp; Rủi ro
                </td>
                <td className="p-4 border-l text-sm text-[#ba1a1a]">
                  Ô nhiễm môi trường nặng nề, bộ máy quản lý cứng nhắc, dễ rơi
                  vào trì trệ hoặc khủng hoảng (mô hình Xô Viết).
                </td>
                <td className="p-4 border-l text-sm text-[#fcc340]">
                  Tốc độ tăng trưởng thần tốc, yêu cầu cao về thích ứng số.
                  Thách thức lớn nhất là \"Bẫy thu nhập trung bình\".
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Analysis & Quotes Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="bg-white/5 p-8 rounded-xl border border-white/10 italic relative hover:bg-white/10 transition-all duration-300">
            <span className="material-symbols-outlined absolute -top-4 -left-2 text-[#a20513] opacity-30 text-5xl">
              format_quote
            </span>
            <p className="text-[#d9ebf5] leading-relaxed mb-6">
              "Mô hình Anh Quốc đòi hỏi quá trình tích lũy vốn hàng thế kỷ thông
              qua bóc lột lao động và khai thác thuộc địa. Đây là con đường
              không thể lặp lại trong bối cảnh hiện đại."
            </p>
            <div className="text-xs font-bold tracking-widest uppercase text-[#8f706c]">
              — Phân tích Mô hình Cổ điển
            </div>
          </div>
          <div className="bg-white/5 p-8 rounded-xl border border-white/10 italic relative hover:bg-white/10 transition-all duration-300">
            <span className="material-symbols-outlined absolute -top-4 -left-2 text-[#a20513] opacity-30 text-5xl">
              format_quote
            </span>
            <p className="text-[#d9ebf5] leading-relaxed mb-6">
              "Tính cứng nhắc và thiếu động lực thị trường của mô hình Xô Viết
              đã dẫn đến sự sụp đổ của các chuỗi cung ứng nội khối, để lại bài
              học đắt giá về sự linh hoạt."
            </p>
            <div className="text-xs font-bold tracking-widest uppercase text-[#8f706c]">
              — Kinh nghiệm từ hệ thống Xã hội chủ nghĩa
            </div>
          </div>
          <div className="bg-white/5 p-8 rounded-xl border border-[#fcc340]/20 italic relative hover:bg-white/10 transition-all duration-300">
            <span className="material-symbols-outlined absolute -top-4 -left-2 text-[#fcc340] opacity-30 text-5xl">
              format_quote
            </span>
            <p className="text-[#d9ebf5] leading-relaxed mb-6">
              "Chiến lược 'đi tắt đón đầu' của các NICs cho thấy quốc gia đi sau
              hoàn toàn có thể tận dụng lợi thế về công nghệ và tri thức của thế
              giới để rút ngắn lộ trình."
            </p>
            <div className="text-xs font-bold tracking-widest uppercase text-[#fcc340]">
              — Tư duy Công nghiệp hóa 4.0
            </div>
          </div>
        </div>

        {/* Lessons for Vietnam */}
        <div className="p-12 bg-[#a20513]/10 border-l-8 border-[#a20513] rounded-r-xl">
          <h3 className="text-3xl font-black mb-6 uppercase tracking-tight text-white">
            Bài học cho Việt Nam
          </h3>
          <div className="grid md:grid-cols-2 gap-12">
            <ul className="space-y-4">
              <li className="flex gap-4 hover:translate-x-2 transition-all duration-300">
                <span className="material-symbols-outlined text-[#a20513] shrink-0">
                  warning
                </span>
                <p className="text-[#d9ebf5]">
                  <span className="font-bold text-white">
                    Kiên quyết không rập khuôn:
                  </span>{" "}
                  Tuyệt đối không sao chép các mô hình truyền thống đã lỗi thời,
                  thâm dụng tài nguyên và gây ô nhiễm.
                </p>
              </li>
              <li className="flex gap-4 hover:translate-x-2 transition-all duration-300">
                <span className="material-symbols-outlined text-[#a20513] shrink-0">
                  psychology
                </span>
                <p className="text-[#d9ebf5]">
                  <span className="font-bold text-white">
                    Học hỏi có chọn lọc:
                  </span>{" "}
                  Tiếp thu bài học về quản trị và xuất khẩu của Nhật Bản, Hàn
                  Quốc để áp dụng vào thực tiễn Việt Nam.
                </p>
              </li>
            </ul>
            <ul className="space-y-4">
              <li className="flex gap-4 hover:translate-x-2 transition-all duration-300">
                <span className="material-symbols-outlined text-[#fcc340] shrink-0">
                  rocket_launch
                </span>
                <p className="text-[#d9ebf5]">
                  <span className="font-bold text-white">Đòn bẩy 4.0:</span> Coi
                  chuyển đổi số và công nghệ lõi là động lực then chốt để vượt
                  qua bẫy thu nhập trung bình.
                </p>
              </li>
              <li className="flex gap-4 hover:translate-x-2 transition-all duration-300">
                <span className="material-symbols-outlined text-[#fcc340] shrink-0">
                  eco
                </span>
                <p className="text-[#d9ebf5]">
                  <span className="font-bold text-white">Phát triển xanh:</span>{" "}
                  Công nghiệp hóa phải song hành với hiện đại hóa bền vững,
                  hướng tới Net Zero 2050.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
