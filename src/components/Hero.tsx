import { useTranslation } from "react-i18next";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

export default function Hero() {
  const {t} =  useTranslation();
  return (
    <section className="relative min-h-[800px] max-[1440px]:min-h-screen max-[500px]:min-h-auto max-[500px]:pt-24 flex items-center justify-center overflow-hidden">

      <div className="relative z-10 text-center px-6">
        <p className="text-white/70 text-sm md:text-base tracking-[0.3em] uppercase mb-4">
          {t('hero_hi')}
        </p>

        <h1
          className="text-9xl stroke-text opacity-70 max-[625px]:text-8xl max-[500px]:text-7xl max-[380px]:text-6xl font-extrabold leading-none
          bg-linear-to-b from-[#E9FF6A] 
          bg-clip-text text-transparent drop-shadow-[0_0_40px_rgba(207,255,69,0.35)]"
        >
          {t('lastName')} <br />
          {t('name')}
        </h1>

        <p className="mt-6 text-white/70 max-w-2xl mx-auto text-lg leading-relaxed">
           {t('hero_text')}<span className="text-[#cfff45] font-semibold">{t('hero_text1')}</span>{t('hero_text2')}
        </p>

        <div className="mt-10 flex items-center justify-center gap-5">
          <a
            target='_blank'
            href="https://www.linkedin.com/in/aslanbek-odilov-27136a378/"
            className="flex items-center gap-2 px-6 py-3 rounded-xl
            bg-[#CFFF45] text-black font-semibold
            hover:scale-105 transition"
          >
            <FaLinkedinIn /> LinkedIn
          </a>

          <a
            target='_blank'
            href="https://github.com/odilovaslanbek20"
            className="flex items-center gap-2 px-6 py-3 rounded-xl
            border border-[#CFFF45] text-white/70
            hover:bg-[#CFFF45] hover:text-black transition"
          >
            <FaGithub /> GitHub
          </a>
        </div>
      </div>

      <div
        className="absolute w-150 h-150 rounded-full
        bg-[#CFFF45]/10 blur-[120px] top-1/2 left-1/2
        -translate-x-1/2 -translate-y-1/2 max-[500px]:hidden"
      />
    </section>
  );
}
