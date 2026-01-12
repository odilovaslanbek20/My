import { useTranslation } from "react-i18next";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

export default function Hero() {
  const {t} =  useTranslation();
  return (
    <section className="relative min-h-screen bg-[#0a0a0a] flex items-center justify-center overflow-hidden">

      <div className="absolute inset-0 max-[500px]:-mt-52 max-[365px]:-mt-56 flex flex-col items-center justify-center gap-10 select-none">
        <span className="text-[14vw] font-black uppercase tracking-widest
          text-transparent stroke-text opacity-20">
          ODILOV
        </span>
        <span className="text-[14vw] font-black uppercase tracking-widest
          text-transparent stroke-text opacity-20">
          ASLANBEK
        </span>
      </div>

      <div className="relative z-10 text-center px-6">
        <p className="text-[#CFFF45] text-sm md:text-base tracking-[0.3em] uppercase mb-4">
          {t('hero_hi')}
        </p>

        <h1
          className="text-9xl max-[625px]:text-8xl max-[500px]:text-7xl max-[380px]:text-6xl font-extrabold leading-none
          bg-linear-to-b from-[#E9FF6A] to-[#9FBF1A]
          bg-clip-text text-transparent drop-shadow-[0_0_40px_rgba(207,255,69,0.35)]"
        >
          <span className="text-white">{t('name')}</span>{t('name1')}
        </h1>

        <p className="mt-6 text-[#cfff45]/80 max-w-2xl mx-auto text-lg leading-relaxed">
           {t('hero_text')}<span className="text-[#ffff] font-semibold">{t('hero_text1')}</span>{t('hero_text2')}
        </p>

        <div className="mt-10 flex items-center justify-center gap-5">
          <a
            href="https://www.linkedin.com/in/aslanbek-odilov-27136a378/"
            className="flex items-center gap-2 px-6 py-3 rounded-xl
            bg-[#CFFF45] text-black font-semibold
            hover:scale-105 transition"
          >
            <FaLinkedinIn /> LinkedIn
          </a>

          <a
            href="https://github.com/odilovaslanbek20"
            className="flex items-center gap-2 px-6 py-3 rounded-xl
            border border-[#CFFF45] text-[#CFFF45]
            hover:bg-[#CFFF45] hover:text-black transition"
          >
            <FaGithub /> GitHub
          </a>
        </div>
      </div>

      <div
        className="absolute w-150 h-150 rounded-full
        bg-[#CFFF45]/10 blur-[120px] top-1/2 left-1/2
        -translate-x-1/2 -translate-y-1/2"
      />
    </section>
  );
}
