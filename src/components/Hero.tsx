import { useTranslation } from "react-i18next";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";

export default function Hero() {
    const {t} = useTranslation()
    return (
        <>
         <section className="pt-0 mb-40">
            <img src="/starts.png" alt="start" className="w-full h-auto -mt-[100px] max-[900px]:-mt-[50px] max-[500px]:-mt-[10px] max-[450px]:-mt-[20px]"/>
           <div className="translate-y-[-70%] max-[1024px]:translate-y-[-60%] max-[885px]:translate-y-[-50%] max-[740px]:translate-y-[-40%] max-[600px]:translate-y-[-20%] max-[500px]:translate-y-[-10%]">
                <div className="flex items-center justify-center flex-col gap-4">
                    <p className="text-[32px] font-medium max-[400px]:text-[24px]">{t('hero_hi')}</p>
                    <p className="text-[100px] max-[400px]:text-[50px] max-[1230px]:text-[80px] max-[740px]:text-[60px] max-[1230px]:leading-15 max-[400px]:leading-10 leading-25 uppercase font-black">{t('name')}<span className="text-white">{t('name1')}</span></p>
                    <p className="text-[24px] max-[400px]:text-[20px] font-medium w-lg max-[530px]:w-full text-center">{t('hero_text')}<span className="text-white">{t('hero_text1')}</span>{t('hero_text2')}</p>
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