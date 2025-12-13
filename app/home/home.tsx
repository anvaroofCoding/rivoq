'use client'
import { HexagonBackground } from '@/components/ui/shadcn-io/hexagon-background'

const Home = () => {
	return (
		<div className='relative h-screen w-full'>
			<HexagonBackground
				hexagonSize={75}
				hexagonMargin={3}
				className='absolute inset-0'
			>
				<div className='relative z-10 flex items-center justify-center h-full'>
					<div className='text-center'>
						<h1 className='text-4xl font-bold mb-4'>Engineering Dashboard</h1>
						<p className='text-xl text-muted-foreground'>Precision by design</p>
					</div>
				</div>
			</HexagonBackground>
		</div>
	)
}

export default Home
