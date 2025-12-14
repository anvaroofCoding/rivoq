// import HeaderText from '@/components/header-text'
// import { DotPattern } from '@/components/ui/dot-pattern'
// import { ScrollProgress } from '@/components/ui/scroll-progress'
// import { ShimmerButton } from '@/components/ui/shimmer-button'
// import { VideoText } from '@/components/ui/video-text'
// import { cn } from '@/lib/utils'
// import { ArrowRight } from 'lucide-react'

'use client'
import { ParticlesDemo } from '@/components/Particles-Onclick'
import { AnimatedShinyText } from '@/components/ui/animated-shiny-text'
import { AuroraText } from '@/components/ui/aurora-text'
import { Highlighter } from '@/components/ui/highlighter'
import { LineShadowText } from '@/components/ui/line-shadow-text'
import { Particles } from '@/components/ui/particles'
import { ScrollProgress } from '@/components/ui/scroll-progress'
import { ShimmerButton } from '@/components/ui/shimmer-button'
import { WordRotate } from '@/components/ui/word-rotate'
import { cn } from '@/lib/utils'
import { ArrowRight, ArrowRightIcon } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

// const Home = () => {
// 	return (
// 		<div className='container'>
// 			<ScrollProgress className='top-[65px]' />
// 			<div className='bg-background relative border-10 h-auto w-full items-center justify-center overflow-hidden rounded-lg grid xl:grid-cols-2 gap-4 grid-col-1'>
// 				<div className='w-full  h-full flex justify-center flex-col items-start gap-6 '>
// 					<HeaderText />
// 					<ShimmerButton className='font-bold'>
// 						O'qishni boshlash <ArrowRight className='ml-2' />
// 					</ShimmerButton>
// 				</div>

// 				<div className='w-full  h-full flex justify-center items-center '></div>
// 				<DotPattern
// 					className={cn(
// 						'[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]'
// 					)}
// 				/>
// 			</div>
// 			<div className='relative h-[300px] w-full overflow-hidden my-10'>
// 				<VideoText src='video/tiny.mp4'>Rivoq</VideoText>
// 			</div>
// 		</div>
// 	)
// }

// export default Home

const Home = () => {
	const [key, setKey] = useState(0)
	const { resolvedTheme } = useTheme()
	const theme = useTheme()
	const [color, setColor] = useState('#ffffff')

	useEffect(() => {
		setColor(resolvedTheme === 'dark' ? '#ffffff' : '#000000')
	}, [resolvedTheme])
	const shadowColor = theme.resolvedTheme === 'dark' ? 'white' : 'black'

	return (
		<div>
			<ParticlesDemo />
			<ScrollProgress className='top-[65px]' />
			<div className='container h-auto py-25 lg:px-20 p-0  flex justify-center items-center flex-col relative z-10'>
				<div className='z-10 flex items-center justify-center'>
					<div
						className={cn(
							'group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800'
						)}
					>
						<AnimatedShinyText className='inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400 xl:text-md text-xs w-55'>
							<span>✨ Bizning loyhalarni ko'rish</span>
							<ArrowRightIcon className='ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5' />
						</AnimatedShinyText>
					</div>
				</div>
				<h1 className='text-4xl font-bold tracking-tighter md:text-5xl lg:text-7xl 2xl:text-8xl text-center mt-6'>
					<AuroraText>Rivoq</AuroraText> onlayn ta'lim{' '}
					<LineShadowText className='italic' shadowColor={shadowColor}>
						platformasida
					</LineShadowText>{' '}
					siz o'rganishingiz mumkin
					<WordRotate
						words={['Java scriptni', 'Nextni', 'Node.jsni', 'Reactni']}
					/>{' '}
				</h1>
				<div className='text-center xl:mt-5 mt-3'>
					<p className='leading-relaxed xl:w-150 w-90 text-xs'>
						Har doimgidan{' '}
						<Highlighter action='underline' color='#FF9800'>
							juda tez
						</Highlighter>{' '}
						o'rganish. Qulay interfeysga ega bo'lgan platformada va{' '}
						mutaxassislar tomonidan tayyorlangan kurslar orqali.
					</p>
				</div>
				<ShimmerButton className='font-bold mt-6'>
					O'qishni boshlash <ArrowRight className='ml-2' />
				</ShimmerButton>
			</div>
			<div>
				<Particles
					className='absolute inset-0 z-0'
					quantity={100}
					ease={80}
					color={color}
					refresh
				/>
			</div>
			<div className='h-1000'></div>
		</div>
	)
}

export default Home
