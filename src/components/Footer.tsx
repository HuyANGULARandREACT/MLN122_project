import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0d1e25] w-full relative bottom-0 border-t border-[#8f706c]/20">
      <div className="flex flex-col md:flex-row justify-between items-center w-full px-12 py-10 gap-6">
        <div className="text-lg font-bold text-white hover:text-[#fcc340] transition-colors duration-300">
          VIỆT NAM: INDUSTRIAL ARCHIVE
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          <a
            className="font-['Inter'] text-xs tracking-widest uppercase text-[#cbdde7]/60 hover:text-white cursor-pointer transition-all duration-300 hover:underline decoration-[#795900] underline-offset-4"
            href="#"
          >
            Chính sách
          </a>
          <a
            className="font-['Inter'] text-xs tracking-widest uppercase text-[#cbdde7]/60 hover:text-white cursor-pointer transition-all duration-300 hover:underline decoration-[#795900] underline-offset-4"
            href="#"
          >
            Điều khoản
          </a>
          <a
            className="font-['Inter'] text-xs tracking-widest uppercase text-[#cbdde7]/60 hover:text-white cursor-pointer transition-all duration-300 hover:underline decoration-[#795900] underline-offset-4 text-[#f6be3b] font-bold"
            href="#"
          >
            Liên hệ
          </a>
          <a
            className="font-['Inter'] text-xs tracking-widest uppercase text-[#cbdde7]/60 hover:text-white cursor-pointer transition-all duration-300 hover:underline decoration-[#795900] underline-offset-4"
            href="#"
          >
            Thư viện
          </a>
        </div>
        <div className="font-['Inter'] text-xs tracking-widest uppercase text-[#cbdde7]/40 text-center md:text-right max-w-md">
          © 2024 Lộ trình Công nghiệp hóa Việt Nam. Tài liệu lưu trữ quốc gia.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
