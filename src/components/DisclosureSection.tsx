import React from "react";
import {
  MdAutoAwesome,
  MdCheckCircle,
  MdDesignServices,
  MdEditNote,
  MdGavel,
  MdGroups,
  MdMenuBook,
  MdOutlineChecklist,
  MdPsychology,
  MdSchool,
} from "react-icons/md";
import { useScrollReveal } from "../hooks/useScrollReveal";

const tools = [
  {
    name: "NoteBookLM",
    use: "Tổng hợp tài liệu tham khảo và gợi ý cấu trúc luận điểm",
    outcome: "Bản khung nội dung theo chủ đề và từ khóa",
    revise: "Nhóm biên tập lại, chuẩn hóa thuật ngữ và đối chiếu nguồn",
    icon: MdMenuBook,
  },
  {
    name: "Claude AI",
    use: "Hỗ trợ diễn đạt nội dung và tổ chức lập luận",
    outcome: "Bản nháp nội dung theo từng phần trình bày",
    revise: "Nhóm chỉnh văn phong học thuật và tinh gọn thông điệp",
    icon: MdEditNote,
  },
  {
    name: "Google Stitch",
    use: "Gợi ý hướng UI/UX cho bố cục trình bày",
    outcome: "Prototype giao diện và phân cấp thị giác",
    revise: "Nhóm hoàn thiện layout, nhịp đọc và trải nghiệm người xem",
    icon: MdDesignServices,
  },
];

const sourceChecks = [
  "Giáo trình Triết học Mác-Lênin (Bộ GD&ĐT)",
  "Giáo trình/đề cương môn học do giảng viên cung cấp",
  "Văn bản định hướng phát triển kinh tế - xã hội của Việt Nam",
  "Nguồn dữ liệu mở từ tổ chức quốc tế (World Bank, UN Data)",
  "Báo cáo thống kê chính thức từ cơ quan nhà nước",
];

const aiDoes = [
  "Đề xuất dàn ý và gợi ý cách sắp xếp ý chính",
  "Hỗ trợ tạo bản nháp mở đầu cho từng phần",
  "Gợi ý cách trực quan hóa thông tin phức tạp",
  "Hỗ trợ rà lỗi diễn đạt và độ mạch lạc",
];

const teamDoes = [
  "Biên soạn phiên bản cuối theo tiêu chí học thuật",
  "Đối chiếu số liệu và kiểm tra độ tin cậy nguồn",
  "Bổ sung phân tích độc lập và quan điểm nhóm",
  "Chịu trách nhiệm hoàn toàn về nội dung công bố",
];

const DisclosureSection: React.FC = () => {
  const { visibleItems, setRevealRef } = useScrollReveal(6);

  return (
    <section className="py-20 bg-[#e7f6ff] border-t border-[#8f706c]/15">
      <div className="max-w-screen-2xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#795900]/25 text-[#795900] bg-white text-xs font-bold tracking-widest uppercase">
            <MdGavel />
            Cam kết học thuật
          </span>
          <h2 className="mt-5 text-4xl md:text-6xl font-black tracking-tight text-[#0d1e25]">
            AI Usage &amp; Academic Integrity
          </h2>
          <p className="mt-4 text-base md:text-lg text-[#5b403d] max-w-3xl mx-auto leading-relaxed">
            Phần này mô tả rõ cách nhóm sử dụng AI như công cụ hỗ trợ học tập.
            Mọi kết luận, nội dung cuối cùng và trách nhiệm học thuật vẫn thuộc
            về nhóm thực hiện.
          </p>
        </div>

        <div className="rounded-2xl border border-[#8f706c]/20 bg-white p-5 md:p-7 shadow-sm">
          <div className="flex items-center gap-3 mb-6 text-[#0d1e25]">
            <div className="h-10 w-10 rounded-full bg-[#d9e2ff] border border-[#154ba5]/30 flex items-center justify-center text-[#154ba5]">
              <MdAutoAwesome />
            </div>
            <div>
              <p className="font-black text-xl">AI Workflow Canvas</p>
              <p className="text-sm text-[#5b403d]">
                Hành trình từ gợi ý AI đến phiên bản học thuật do nhóm hoàn
                thiện
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {tools.map((tool, index) => {
              const Icon = tool.icon;
              return (
                <article
                  key={tool.name}
                  ref={setRevealRef(index)}
                  style={{ transitionDelay: `${index * 120}ms` }}
                  className={`relative rounded-xl border border-[#8f706c]/20 bg-[#f4faff] p-5 hover:shadow-md transition-all duration-700 ease-out transform-gpu ${
                    visibleItems[index]
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 translate-x-16"
                  }`}
                >
                  <span className="absolute -top-3 left-4 h-7 min-w-7 px-2 rounded-full bg-[#a20513] text-white text-xs font-bold flex items-center justify-center">
                    0{index + 1}
                  </span>
                  <div className="flex items-center gap-2 mt-1 mb-4">
                    <Icon className="text-[#a20513]" />
                    <h3 className="font-black text-[#0d1e25]">{tool.name}</h3>
                  </div>
                  <div className="space-y-3 text-sm">
                    <div>
                      <p className="font-bold text-[#795900]">Vai trò</p>
                      <p className="text-[#5b403d]">{tool.use}</p>
                    </div>
                    <div>
                      <p className="font-bold text-[#154ba5]">Đầu ra</p>
                      <p className="text-[#5b403d]">{tool.outcome}</p>
                    </div>
                    <div className="rounded-lg border border-[#ffdad6] bg-[#fff6f5] p-3">
                      <p className="font-bold text-[#a20513]">Nhóm xử lý</p>
                      <p className="text-[#5b403d]">{tool.revise}</p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 xl:grid-cols-12 gap-6">
          <div
            ref={setRevealRef(3)}
            style={{ transitionDelay: "120ms" }}
            className={`xl:col-span-5 rounded-2xl border border-[#8f706c]/20 bg-white p-6 shadow-sm duration-700 ease-out transform-gpu ${
              visibleItems[3]
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-16"
            }`}
          >
            <div className="flex items-center gap-3 mb-4 text-[#0d1e25]">
              <MdOutlineChecklist className="text-[#795900] text-2xl" />
              <h3 className="text-2xl font-black">Nguồn Và Kiểm Chứng</h3>
            </div>
            <div className="space-y-2">
              {sourceChecks.map((item) => (
                <div key={item} className="flex gap-2 text-[#5b403d] text-sm">
                  <MdCheckCircle className="text-[#795900] mt-0.5 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div
            ref={setRevealRef(4)}
            style={{ transitionDelay: "220ms" }}
            className={`xl:col-span-7 rounded-2xl border border-[#154ba5]/20 bg-white p-6 shadow-sm duration-700 ease-out transform-gpu ${
              visibleItems[4]
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-16"
            }`}
          >
            <div className="flex items-center gap-3 mb-4 text-[#0d1e25]">
              <MdPsychology className="text-[#154ba5] text-2xl" />
              <h3 className="text-2xl font-black">Phân Vai Rõ Ràng</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="rounded-xl border border-[#8f706c]/20 bg-[#f4faff] p-4">
                <p className="font-bold text-[#154ba5] mb-3">AI hỗ trợ</p>
                <div className="space-y-2">
                  {aiDoes.map((item) => (
                    <div
                      key={item}
                      className="flex gap-2 text-[#5b403d] text-sm"
                    >
                      <MdSchool className="text-[#154ba5] mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-xl border border-[#ffdad6] bg-[#fff6f5] p-4">
                <p className="font-bold text-[#a20513] mb-3">Nhóm thực hiện</p>
                <div className="space-y-2">
                  {teamDoes.map((item) => (
                    <div
                      key={item}
                      className="flex gap-2 text-[#5b403d] text-sm"
                    >
                      <MdGroups className="text-[#a20513] mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          ref={setRevealRef(5)}
          style={{ transitionDelay: "320ms" }}
          className={`mt-6 rounded-2xl border border-[#8f706c]/20 bg-gradient-to-r from-[#ffdad6]/45 via-[#ffdea0]/35 to-[#d9e2ff]/40 p-8 text-center duration-700 ease-out transform-gpu ${
            visibleItems[5]
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-16"
          }`}
        >
          <MdGavel className="mx-auto text-2xl text-[#F9A825]" />
          <p className="mt-3 text-xl italic font-semibold text-[#0d1e25]">
            "Nhóm xác nhận sản phẩm là kết quả của quá trình học tập nghiêm túc.
            AI được sử dụng có kiểm soát để hỗ trợ, không thay thế phân tích độc
            lập và trách nhiệm học thuật của người thực hiện."
          </p>
          <p className="mt-2 text-[#795900] font-bold">- Nhóm thực hiện</p>
        </div>
      </div>
    </section>
  );
};

export default DisclosureSection;
