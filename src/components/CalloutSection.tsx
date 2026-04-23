import React from "react";

const CalloutSection: React.FC = () => {
  return (
    <section className="h-[614px] relative flex items-center overflow-hidden">
      <img
        className="absolute inset-0 w-full h-full object-cover"
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCY-Mf-MIhW_kqyFqvI6n3R6bLF--1SZt0fKXwoFC4mZz59E3cCqjloDymmFt7mby9PtWNxKDg0537VBOMh3sMJ-MWKUQhueCaonXoMZfMPQVfdq4xc-cDAq9Xkp_qXX3ioXlpxITUpYcYrLenec0HzUZg-Lo89I_-YJf8ozqk4ztyOq9CKFHy5qi27EbAeqsJW7Pq4lBrqbXXpJQD2pplcAxCvVKAgxoqRpkrg4WBN8QRK30uTtTn26xUBbbIoQSARRrtIXuIngCQ"
        alt="Ho Chi Minh City skyline"
      />
      <div className="absolute inset-0 bg-[#0d1e25]/70 backdrop-blur-sm"></div>
      <div className="relative z-10 max-w-screen-xl mx-auto text-center px-8">
        <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-8 uppercase italic animate-fade-in">
          "Khát vọng vì một Việt Nam hùng cường, thịnh vượng"
        </h2>
        <div className="inline-flex items-center gap-2 text-[#fcc340] font-bold uppercase tracking-[0.3em] hover:scale-105 transition-transform duration-300">
          <span className="h-px w-12 bg-[#fcc340]"></span>
          Chiến lược Quốc gia
          <span className="h-px w-12 bg-[#fcc340]"></span>
        </div>
      </div>
    </section>
  );
};

export default CalloutSection;
