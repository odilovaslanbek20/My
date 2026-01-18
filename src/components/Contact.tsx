import { FaEnvelope, FaTelegramPlane, FaLinkedinIn } from "react-icons/fa"
import { useTranslation } from "react-i18next"

export default function Contact() {
    const { t } = useTranslation()

    return (
        <section className="web-container min-h-screen max-[900px]:min-h-auto pt-20">
            <div className="max-w-3xl mb-12">
                <div className='md:col-span-4 mb-12'>
                    <h2 className='text-5xl md:text-6xl max-[340px]:text-4xl font-black leading-tight text-white/70'>
                        {t('contact1')}
                    </h2>
                    <div className='mt-2 w-20 h-0.75 bg-[#D5FF3F]' />
                </div>
                <p className="mt-0 text-white/70 leading-relaxed">
                    {t("contactText1")}
                </p>
            </div>

            <div className="grid grid-cols-2 gap-12 max-[900px]:grid-cols-1">
                <div className="space-y-6">
                    <div className="p-6 rounded-2xl bg-[#0a0a0a] border border-[#D5FF3F]/30">
                        <h3 className="text-xl font-bold text-[#D5FF3F] mb-4">
                            {t("contactInfo")}
                        </h3>

                        <div className="space-y-4 text-white/80">
                            <p className="flex items-center gap-3">
                                <FaEnvelope className="text-[#D5FF3F]" />
                                aslanbekodilov524@gmail.com
                            </p>

                            <p className="flex items-center gap-3">
                                <FaTelegramPlane className="text-[#D5FF3F]" />
                                @USERNAME
                            </p>

                            <p className="flex items-center gap-3">
                                <FaLinkedinIn className="text-[#D5FF3F]" />
                                linkedin.com/in/USERNAME
                            </p>
                        </div>
                    </div>
                </div>

                <form
                    className="p-8 rounded-2xl bg-[#0a0a0a] border border-[#D5FF3F]/30 space-y-6"
                    onSubmit={(e) => e.preventDefault()}
                >
                    <h3 className="text-xl font-bold text-[#D5FF3F]">
                        {t("sendMessage")}
                    </h3>

                    <input
                        type="text"
                        placeholder={t("name1")}
                        className="w-full px-4 py-3 rounded-xl bg-black border border-white/10
            text-white focus:outline-none focus:border-[#D5FF3F]"
                    />

                    <input
                        type="email"
                        placeholder={t("email")}
                        className="w-full px-4 py-3 rounded-xl bg-black border border-white/10
            text-white focus:outline-none focus:border-[#D5FF3F]"
                    />

                    <textarea
                        rows={5}
                        placeholder={t("message")}
                        className="w-full px-4 py-3 rounded-xl bg-black border border-white/10
            text-white resize-none focus:outline-none focus:border-[#D5FF3F]"
                    />

                    <button
                        type="submit"
                        className="w-full py-3 rounded-xl bg-[#D5FF3F] text-black font-semibold
            hover:scale-[1.02] transition"
                    >
                        {t("send")}
                    </button>
                </form>
            </div>
        </section>
    )
}
