import { useTranslation } from "react-i18next"

export default function About() {
    const { t } = useTranslation()
    return (
        <>
            <section className="web-container py-14">
                <div className="text-[#161B22] text-[26px] font-light leading-relaxed max-[500px]:leading-6 bg-[#D5FF3F] rounded-2xl py-8">
                    <h2 className="text-center max-[400px]:text-[25px] text-3xl font-black uppercase mb-1.5">{t('about')}</h2>
                    <p className="w-[90%] max-[600px]:text-[18px] m-auto text-center">{t('about_text')}<span className="font-bold">{t('about_text1')}</span>{t('about_text2')}<span className="font-bold">{t('about_text3')}</span>{t('about_text4')}</p>
                    <div className="text-center mt-4 max-[500px]:mt-5">
                        <a href="/about" className="px-6 py-2 bg-[#131313] text-white rounded-2xl hover:bg-[#131330] transition-all duration-300">{t('more')}</a>
                    </div>
                </div>
            </section>
        </>
    )
}