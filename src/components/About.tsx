import { useTranslation } from 'react-i18next'

export default function About() {
	const { t } = useTranslation()

	return (
		<section className='web-container py-20'>
			<div className='relative grid grid-cols-1 md:grid-cols-12 gap-10 items-start'>
				<div className='md:col-span-4'>
					<h2 className='text-5xl md:text-6xl font-black leading-tight text-white/70'>
						{t('about')}
					</h2>
					<div className='mt-6 w-20 h-0.75 bg-[#D5FF3F]' />
				</div>

				<div className='md:col-span-8'>
					<p className='text-lg md:text-xl leading-relaxed text-white/70 max-w-3xl'>
						{t('about_text')}
						<span className='font-semibold text-[#D5FF3F]'>
							{' '}
							{t('about_text1')}{' '}
						</span>
						{t('about_text2')}
						<span className='font-semibold text-[#D5FF3F]'>
							{' '}
							{t('about_text4')}{' '}
						</span>
						{t('about_text3')}
						<span className='font-semibold text-[#D5FF3F]'>
							{t('about_text6')}
						</span>
					</p>
				</div>

				<div className='md:col-span-12 flex justify-end mt-6'>
					<a
						href='/about'
						className='group relative inline-flex items-center gap-3
            px-10 py-3 rounded-full
            text-[#D5FF3F] font-semibold
            border border-[#D5FF3F]
            hover:bg-[#D5FF3F] hover:text-black
            transition'
					>
						{t('more')}
						<span className='group-hover:translate-x-1 transition'>→</span>
					</a>
				</div>
			</div>
		</section>
	)
}
