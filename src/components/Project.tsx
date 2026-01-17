import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { data } from './data'
import { GiWorld } from 'react-icons/gi'
import { FaCode } from 'react-icons/fa'

export default function LensCard() {
	const { t } = useTranslation()
	const [pos, setPos] = useState({ x: 0, y: 0 })
	const [openId, setOpenId] = useState<number | null>(null);

	return (
		<section className='web-container'>
			<div className='md:col-span-4 mb-12'>
				<h2 className='text-5xl md:text-6xl font-black leading-tight text-white/70'>
					{t('project')}
				</h2>
				<div className='mt-6 w-20 h-0.75 bg-[#D5FF3F]' />
			</div>

			<div className='grid grid-cols-3 gap-6 max-[1060px]:grid-cols-2 max-[700px]:grid-cols-1'>
				{data.map(item => {
					return (
						<div className='max-w-full rounded-2xl overflow-hidden bg-[#0a0a0a] border border-[#D5FF3F]/30'>
							<div
								className='relative group overflow-hidden'
								onMouseMove={e => {
									const rect = e.currentTarget.getBoundingClientRect()
									setPos({
										x: e.clientX - rect.left,
										y: e.clientY - rect.top,
									})
								}}
							>
								<img
									src={item.image}
									alt='camp'
									className='w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105'
								/>

								<div
									className='pointer-events-none absolute w-40 h-40 rounded-full border border-[#D5FF3F]
          opacity-0 group-hover:opacity-100 transition'
									style={{
										left: pos.x - 80,
										top: pos.y - 80,
										backgroundImage: `url(${item.image})`,
										backgroundRepeat: 'no-repeat',
										backgroundSize: '300%',
										backgroundPosition: `${-(pos.x * 2)}px ${-(pos.y * 2)}px`,
									}}
								/>
							</div>

							<div className='p-6'>
								<h3 className='text-2xl font-bold text-[#D5FF3F]'>
									{item.name}
								</h3>

								<p className='mt-3 text-white/70 text-sm leading-relaxed'>
									{item.body}
								</p>
							</div>

							<div className='px-6 pb-6 relative'>
								<button
									onClick={() =>
										setOpenId(openId === item.id ? null : item.id)
									}
									className='w-full px-5 py-2 rounded-xl bg-[#D5FF3F] text-black font-semibold
    flex items-center justify-between'
								>
									{t('actions')}
									<span
										className={`transition ${openId === item.id ? 'rotate-180' : ''
											}`}
									>
										▼
									</span>
								</button>

								{openId === item.id && (
									<div className='absolute left-6 right-6 bottom-17 bg-[#0a0a0a] border border-[#D5FF3F]/40 rounded-xl overflow-hidden z-10'>
										<a
											href={item.site}
											target='_blank'
											className='px-4 py-3 flex items-center gap-2 text-[#D5FF3F] group hover:bg-[#D5FF3F] hover:text-black transition'
										>
											<GiWorld className='text-white/70 text-2xl group-hover:text-black'/> {t('site')}
										</a>

										<a
											href={item.code}
											target='_blank'
											className='px-4 py-3 flex items-center gap-2 text-[#D5FF3F] group hover:bg-[#D5FF3F] hover:text-black transition'
										>
											<FaCode className='text-white/70 text-2xl group-hover:text-black'/> {t('code')}
										</a>
									</div>
								)}
							</div>

						</div>
					)
				})}
			</div>

			<div className='md:col-span-12 flex justify-end mt-8'>
				<a
					href='/projects'
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
		</section>
	)
}