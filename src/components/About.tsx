import { useTranslation } from "react-i18next"

export default function About() {
    const {t} = useTranslation()
    return (
        <>
         <section className="bg-[#D5FF3F] flex items-center justify-center py-7 rounded-4xl">
            <div className="w-[90%] text-black text-[26px] font-light">
               {t('about_text')}<span className="font-bold">{t('about_text1')}</span>{t('about_text2')}<span className="font-bold">{t('about_text3')}</span>{t('about_text4')}
            </div>
         </section>
        </>
    )
}