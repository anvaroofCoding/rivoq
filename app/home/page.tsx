import { DotPattern } from '@/components/ui/dot-pattern'
import { TypingAnimation } from '@/components/ui/typing-animation'
import { VideoText } from '@/components/ui/video-text'
import { cn } from '@/lib/utils'

const Page = () => {
	return (
		<div className='bg-background relative  h-screen w-full items-center justify-center overflow-hidden rounded-lg grid grid-cols-2 gap-4 container'>
			<div className='w-full border-5 h-full flex justify-center items-center'>
				<div>
					<TypingAnimation className='text-2xl'>
						Rivoqga xush kelibsiz
					</TypingAnimation>
				</div>
			</div>
			<div className='relative h-[300px] w-full overflow-hidden '>
				<VideoText src='video/tiny.mp4'>OCEAN</VideoText>
			</div>
			<div className='w-full border h-full'></div>
			<DotPattern
				className={cn(
					'[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]'
				)}
			/>
		</div>
	)
}

export default Page
