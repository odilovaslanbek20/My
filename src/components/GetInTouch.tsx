import { FaEnvelope, FaTelegramPlane, FaLinkedinIn } from "react-icons/fa"
import { useTranslation } from "react-i18next"

export default function GetInTouch() {
    const { t } = useTranslation()

    return (
        <section
            id="contact"
            className="web-container pt-20"
        >
            <div className="bg-[#0a0a0a] border border-[#D5FF3F]/30 rounded-3xl p-10 max-[640px]:p-6">
                <div className='md:col-span-4 mb-12'>
				<h2 className='text-5xl md:text-6xl max-[340px]:text-4xl font-black leading-tight text-white/70'>
					{t('getInTouch')}
				</h2>
				<div className='mt-6 max-[400px]:mt-4 w-20 h-0.75 bg-[#D5FF3F]' />
			</div>

                <p className="mt-4 max-w-2xl text-white/70 leading-relaxed">
                    {t("contactText")}
                </p>

                <div className="mt-10 flex flex-wrap gap-4">
                    <a
                        href="mailto:aslanbekodilov524@gmail.com"
                        className="flex items-center max-[387px]:min-w-full gap-3 px-6 py-3 rounded-xl
          bg-[#D5FF3F] text-black font-semibold
          hover:scale-105 transition"
                    >
                        <FaEnvelope />
                        Email
                    </a>

                    <a
                        href="/contact"
                        className="flex items-center gap-3 max-[387px]:min-w-full px-6 py-3 rounded-xl
          border border-[#D5FF3F]/50 text-[#D5FF3F]
          hover:bg-[#D5FF3F] hover:text-black transition"
                    >
                        <FaTelegramPlane />
                        {t('contact')}
                    </a>

                    <a
                        href="https://www.linkedin.com/in/aslanbek-odilov-27136a378/"
                        target="_blank"
                        className="flex items-center gap-3 px-6 max-[387px]:min-w-full py-3 rounded-xl
          border border-[#D5FF3F]/50 text-[#D5FF3F]
          hover:bg-[#D5FF3F] hover:text-black transition"
                    >
                        <FaLinkedinIn />
                        LinkedIn
                    </a>
                </div>
            </div>
        </section>
    )
}
