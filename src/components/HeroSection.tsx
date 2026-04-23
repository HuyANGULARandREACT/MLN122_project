import React from "react";

const HeroSection: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative h-screen flex items-center justify-start overflow-hidden bg-[#0d1e25] pt-16"
    >
      <div className="absolute inset-0 z-0">
        <img
          className="w-full h-full object-cover opacity-40"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAeOZ86E4FCIlnRFWp-bAm_fBe9ii0cSeo_B9Gx7tFB3XGeASs0o0PygWI5EPq04m6qO4w_3GRUzo9xznOuSEpZMdvWK0h7CQIxSKNfRbyL6J2yww5mlvM8fUgKgalmCq31kXIsXkbrfZXu6Qx2OSCT7kV8ojhvO3E16MU580Tlq6vlgo7_bKfSS4CBE5bbVYWAia4u540VEz3ub1c2WMM-wXXjb3AYmLRjz_mgb5-mo29QGnpEUQ159s0oRBvZ4kXtDxtoqlw1nt0"
          alt="Manufacturing plant"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d1e25] via-[#0d1e25]/60 to-transparent"></div>
      </div>
      <div className="relative z-10 max-w-screen-2xl mx-auto px-8 w-full">
        <div className="max-w-3xl">
          <span className="inline-block px-4 py-1 mb-6 bg-[#795900] text-white text-xs font-bold tracking-[0.2em] uppercase rounded-sm animate-fade-in">
            Hành trình vươn tầm thế giới
          </span>
          <h1 className="text-7xl md:text-8xl font-black text-white tracking-tighter leading-none mb-6 animate-fade-in animation-delay-100">
            LỘ TRÌNH <br />
            <span className="text-[#c62828]">CNH-HĐH</span> <br />
            1986 — 2045
          </h1>
          <p className="text-xl text-[#d9ebf5] font-medium leading-relaxed mb-10 max-w-xl animate-fade-in animation-delay-200">
            Từ bước ngoặt Đổi Mới đến kỷ nguyên số 4.0, Việt Nam đang định vị
            lại bản đồ kinh tế toàn cầu thông qua tiến trình công nghiệp hóa
            hiện đại và bền vững.
          </p>
          <div className="flex gap-4">
            <button className="px-8 py-4 bg-[#a20513] text-white font-bold uppercase tracking-widest text-sm rounded-md shadow-2xl hover:bg-[#c62828] transition-all active:scale-95 hover:translate-y-[-2px] duration-300">
              Khám phá ngay
            </button>
            <button className="px-8 py-4 border border-[#e4beba]/30 text-white font-bold uppercase tracking-widest text-sm rounded-md backdrop-blur-sm hover:bg-white/10 transition-all hover:translate-y-[-2px] duration-300">
              Xem Tài Liệu
            </button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-12 right-12 hidden md:block">
        <div className="text-[#d9ebf5]/40 rotate-90 origin-right text-xs tracking-[0.5em] uppercase font-bold">
          Scroll to archive — 01 / 05
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
