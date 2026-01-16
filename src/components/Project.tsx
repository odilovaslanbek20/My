import { useState } from 'react'
import { useTranslation } from 'react-i18next'

export default function LensCard() {
	const { t } = useTranslation()
	const [pos, setPos] = useState({ x: 0, y: 0 })

	return (
		<section className='web-container'>
			<div className='md:col-span-4 mb-12'>
				<h2 className='text-5xl md:text-6xl font-black leading-tight text-white/70'>
					{t('project')}
				</h2>
				<div className='mt-6 w-20 h-0.75 bg-[#D5FF3F]' />
			</div>

			<div className='grid grid-cols-3 gap-6'>
				<div className='max-w-md rounded-2xl overflow-hidden bg-[#0a0a0a] border border-[#D5FF3F]/30'>
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
							src='https://images.unsplash.com/photo-1736606355698-5efdb410fe93?q=80&w=2071&auto=format&fit=crop'
							alt='camp'
							className='w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105'
						/>

						<div
							className='pointer-events-none absolute w-40 h-40 rounded-full border border-[#D5FF3F]
          opacity-0 group-hover:opacity-100 transition'
							style={{
								left: pos.x - 80,
								top: pos.y - 80,
								backgroundImage:
									'url(https://images.unsplash.com/photo-1736606355698-5efdb410fe93?q=80&w=2071&auto=format&fit=crop)',
								backgroundRepeat: 'no-repeat',
								backgroundSize: '300%',
								backgroundPosition: `${-(pos.x * 2)}px ${-(pos.y * 2)}px`,
							}}
						/>
					</div>

					<div className='p-6'>
						<h3 className='text-2xl font-bold text-[#D5FF3F]'>
							Your next camp
						</h3>

						<p className='mt-3 text-white/70 text-sm leading-relaxed'>
							See our latest and best camp destinations all across the five
							continents of the globe.
						</p>
					</div>

					<div className='px-6 pb-6 flex gap-4'>
						<button
							className='px-5 py-2 rounded-xl bg-[#D5FF3F] text-black font-semibold
          hover:scale-105 transition'
						>
							Let&apos;s go
						</button>

						<button
							className='px-5 py-2 rounded-xl border border-[#D5FF3F]/50
          text-[#D5FF3F] hover:bg-[#D5FF3F] hover:text-black transition'
						>
							Another time
						</button>
					</div>
				</div>

				<div className='max-w-md rounded-2xl overflow-hidden bg-[#0a0a0a] border border-[#D5FF3F]/30'>
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
							src='https://images.unsplash.com/photo-1736606355698-5efdb410fe93?q=80&w=2071&auto=format&fit=crop'
							alt='camp'
							className='w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105'
						/>

						<div
							className='pointer-events-none absolute w-40 h-40 rounded-full border border-[#D5FF3F]
          opacity-0 group-hover:opacity-100 transition'
							style={{
								left: pos.x - 80,
								top: pos.y - 80,
								backgroundImage:
									'url(https://images.unsplash.com/photo-1736606355698-5efdb410fe93?q=80&w=2071&auto=format&fit=crop)',
								backgroundRepeat: 'no-repeat',
								backgroundSize: '300%',
								backgroundPosition: `${-(pos.x * 2)}px ${-(pos.y * 2)}px`,
							}}
						/>
					</div>

					<div className='p-6'>
						<h3 className='text-2xl font-bold text-[#D5FF3F]'>
							Your next camp
						</h3>

						<p className='mt-3 text-white/70 text-sm leading-relaxed'>
							See our latest and best camp destinations all across the five
							continents of the globe.
						</p>
					</div>

					<div className='px-6 pb-6 flex gap-4'>
						<button
							className='px-5 py-2 rounded-xl bg-[#D5FF3F] text-black font-semibold
          hover:scale-105 transition'
						>
							Let&apos;s go
						</button>

						<button
							className='px-5 py-2 rounded-xl border border-[#D5FF3F]/50
          text-[#D5FF3F] hover:bg-[#D5FF3F] hover:text-black transition'
						>
							Another time
						</button>
					</div>
				</div>

				<div className='max-w-md rounded-2xl overflow-hidden bg-[#0a0a0a] border border-[#D5FF3F]/30'>
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
							src='https://images.unsplash.com/photo-1736606355698-5efdb410fe93?q=80&w=2071&auto=format&fit=crop'
							alt='camp'
							className='w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105'
						/>

						<div
							className='pointer-events-none absolute w-40 h-40 rounded-full border border-[#D5FF3F]
          opacity-0 group-hover:opacity-100 transition'
							style={{
								left: pos.x - 80,
								top: pos.y - 80,
								backgroundImage:
									'url(https://images.unsplash.com/photo-1736606355698-5efdb410fe93?q=80&w=2071&auto=format&fit=crop)',
								backgroundRepeat: 'no-repeat',
								backgroundSize: '300%',
								backgroundPosition: `${-(pos.x * 2)}px ${-(pos.y * 2)}px`,
							}}
						/>
					</div>

					<div className='p-6'>
						<h3 className='text-2xl font-bold text-[#D5FF3F]'>
							Your next camp
						</h3>

						<p className='mt-3 text-white/70 text-sm leading-relaxed'>
							See our latest and best camp destinations all across the five
							continents of the globe.
						</p>
					</div>

					<div className='px-6 pb-6 flex gap-4'>
						<button
							className='px-5 py-2 rounded-xl bg-[#D5FF3F] text-black font-semibold
          hover:scale-105 transition'
						>
							Let&apos;s go
						</button>

						<button
							className='px-5 py-2 rounded-xl border border-[#D5FF3F]/50
          text-[#D5FF3F] hover:bg-[#D5FF3F] hover:text-black transition'
						>
							Another time
						</button>
					</div>
				</div>

				<div className='max-w-md rounded-2xl overflow-hidden bg-[#0a0a0a] border border-[#D5FF3F]/30'>
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
							src='https://images.unsplash.com/photo-1736606355698-5efdb410fe93?q=80&w=2071&auto=format&fit=crop'
							alt='camp'
							className='w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105'
						/>

						<div
							className='pointer-events-none absolute w-40 h-40 rounded-full border border-[#D5FF3F]
          opacity-0 group-hover:opacity-100 transition'
							style={{
								left: pos.x - 80,
								top: pos.y - 80,
								backgroundImage:
									'url(https://images.unsplash.com/photo-1736606355698-5efdb410fe93?q=80&w=2071&auto=format&fit=crop)',
								backgroundRepeat: 'no-repeat',
								backgroundSize: '300%',
								backgroundPosition: `${-(pos.x * 2)}px ${-(pos.y * 2)}px`,
							}}
						/>
					</div>

					<div className='p-6'>
						<h3 className='text-2xl font-bold text-[#D5FF3F]'>
							Your next camp
						</h3>

						<p className='mt-3 text-white/70 text-sm leading-relaxed'>
							See our latest and best camp destinations all across the five
							continents of the globe.
						</p>
					</div>

					<div className='px-6 pb-6 flex gap-4'>
						<button
							className='px-5 py-2 rounded-xl bg-[#D5FF3F] text-black font-semibold
          hover:scale-105 transition'
						>
							Let&apos;s go
						</button>

						<button
							className='px-5 py-2 rounded-xl border border-[#D5FF3F]/50
          text-[#D5FF3F] hover:bg-[#D5FF3F] hover:text-black transition'
						>
							Another time
						</button>
					</div>
				</div>

				<div className='max-w-md rounded-2xl overflow-hidden bg-[#0a0a0a] border border-[#D5FF3F]/30'>
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
							src='https://images.unsplash.com/photo-1736606355698-5efdb410fe93?q=80&w=2071&auto=format&fit=crop'
							alt='camp'
							className='w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105'
						/>

						<div
							className='pointer-events-none absolute w-40 h-40 rounded-full border border-[#D5FF3F]
          opacity-0 group-hover:opacity-100 transition'
							style={{
								left: pos.x - 80,
								top: pos.y - 80,
								backgroundImage:
									'url(https://images.unsplash.com/photo-1736606355698-5efdb410fe93?q=80&w=2071&auto=format&fit=crop)',
								backgroundRepeat: 'no-repeat',
								backgroundSize: '300%',
								backgroundPosition: `${-(pos.x * 2)}px ${-(pos.y * 2)}px`,
							}}
						/>
					</div>

					<div className='p-6'>
						<h3 className='text-2xl font-bold text-[#D5FF3F]'>
							Your next camp
						</h3>

						<p className='mt-3 text-white/70 text-sm leading-relaxed'>
							See our latest and best camp destinations all across the five
							continents of the globe.
						</p>
					</div>

					<div className='px-6 pb-6 flex gap-4'>
						<button
							className='px-5 py-2 rounded-xl bg-[#D5FF3F] text-black font-semibold
          hover:scale-105 transition'
						>
							Let&apos;s go
						</button>

						<button
							className='px-5 py-2 rounded-xl border border-[#D5FF3F]/50
          text-[#D5FF3F] hover:bg-[#D5FF3F] hover:text-black transition'
						>
							Another time
						</button>
					</div>
				</div>

				<div className='max-w-md rounded-2xl overflow-hidden bg-[#0a0a0a] border border-[#D5FF3F]/30'>
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
							src='https://images.unsplash.com/photo-1736606355698-5efdb410fe93?q=80&w=2071&auto=format&fit=crop'
							alt='camp'
							className='w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105'
						/>

						<div
							className='pointer-events-none absolute w-40 h-40 rounded-full border border-[#D5FF3F]
          opacity-0 group-hover:opacity-100 transition'
							style={{
								left: pos.x - 80,
								top: pos.y - 80,
								backgroundImage:
									'url(https://images.unsplash.com/photo-1736606355698-5efdb410fe93?q=80&w=2071&auto=format&fit=crop)',
								backgroundRepeat: 'no-repeat',
								backgroundSize: '300%',
								backgroundPosition: `${-(pos.x * 2)}px ${-(pos.y * 2)}px`,
							}}
						/>
					</div>

					<div className='p-6'>
						<h3 className='text-2xl font-bold text-[#D5FF3F]'>
							Your next camp
						</h3>

						<p className='mt-3 text-white/70 text-sm leading-relaxed'>
							See our latest and best camp destinations all across the five
							continents of the globe.
						</p>
					</div>

					<div className='px-6 pb-6 flex gap-4'>
						<button
							className='px-5 py-2 rounded-xl bg-[#D5FF3F] text-black font-semibold
          hover:scale-105 transition'
						>
							Let&apos;s go
						</button>

						<button
							className='px-5 py-2 rounded-xl border border-[#D5FF3F]/50
          text-[#D5FF3F] hover:bg-[#D5FF3F] hover:text-black transition'
						>
							Another time
						</button>
					</div>
				</div>
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
