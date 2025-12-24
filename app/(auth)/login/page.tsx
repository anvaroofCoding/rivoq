import { Button } from '@/components/ui/button'
import { InteractiveGridPattern } from '@/components/ui/interactive-grid-pattern'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { ShineBorderDemo } from './auth'

const Page = () => {
	return (
		<div className='relative'>
			<InteractiveGridPattern
				className={cn(
					'[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]'
				)}
				width={15}
				height={15}
				squares={[80, 80]}
				squaresClassName='hover:fill-blue-500'
			/>
			<Link href={'/'}>
				<div className='absolute flex items-center justify-between p-5'>
					<Button className='px-3 py-1 mr-1'>R</Button>
					<h1 className='text-white font-bold'>Rivoq</h1>
				</div>
			</Link>
			<div className='bg-black w-full h-screen'>
				<div className=' w-full h-full flex items-center justify-center'>
					<ShineBorderDemo />
				</div>
			</div>
		</div>
	)
}

export default Page
