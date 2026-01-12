import { useTranslation } from "react-i18next";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";

export default function Hero() {
    const {t} = useTranslation()
    return (
        <>
         <section className="pt-10">
            <div className="">
                <div className="flex items-center justify-center flex-col gap-4">
                    <p className="text-[32px] font-medium">{t('hero_hi')}</p>
                    <p className="text-[150px] leading-35 uppercase font-black">{t('name')}<span className="text-white">{t('name1')}</span></p>
                    <p className="text-[24px] font-medium">{t('hero_text')}<span className="text-white">{t('hero_text1')}</span>{t('hero_text2')}</p>
                    <div className="flex items-center gap-3">
                        <a target="blan_" href="https://www.linkedin.com/in/aslanbek-odilov-27136a378/">
                            <FaLinkedin size={50}/>
                        </a>
                        <a target="blan_" href="https://github.com/odilovaslanbek20">
                            <FaSquareGithub size={50}/>
                        </a>
                    </div>
                </div>
            </div>
         </section>
        </>
    )
}