import { useTranslation } from "react-i18next"

export default function About() {
    const { t } = useTranslation()
    return (
        <>
            <section className="">
                <div className="bg-[#161B22] rounded-2xl w-full py-10 my-3.5">
                    <div className="w-[90%] flex items-center justify-between m-auto">
                        <h1 className="text-4xl text-[#ffff] font-black mb-2.5">{t('about')}</h1>
                        <a href="/about" className="bg-[#242938]  rounded-[10px] text-[18px] font-semibold text-[#D5FF3F] py-2 px-4">
                            <div className="">More...</div>
                        </a>
                    </div>
                </div>
                <div className="text-[#161B22] text-[26px] font-light leading-relaxed bg-[#D5FF3F] rounded-2xl py-8">
                    <p className="w-[90%] m-auto">{t('about_text')}<span className="font-bold">{t('about_text1')}</span>{t('about_text2')}<span className="font-bold">{t('about_text3')}</span>{t('about_text4')}</p>
                </div>
            </section>
        </>
    )
}