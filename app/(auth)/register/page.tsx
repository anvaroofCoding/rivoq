'use client'
import { Button } from '@/components/ui/button'
import { InteractiveGridPattern } from '@/components/ui/interactive-grid-pattern'
import { cn } from '@/lib/utils'
import { LogIn } from 'lucide-react'
import Link from 'next/link'
import { Register } from './register'

const Page = () => {
	return (
		<div className='relative'>
			<InteractiveGridPattern
				className={cn(
					'[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]'
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
			<Link href={'/login'}>
				<div className='absolute flex items-center justify-between right-0 p-5'>
					<Button size={'sm'} variant={'link'} className='px-3 py-1 mr-1'>
						Login <LogIn className='ml-1 w-4' />
					</Button>
				</div>
			</Link>
			<div className='bg-black w-full h-screen'>
				<div className=' w-full h-full flex items-center justify-center'>
					<Register />
				</div>
			</div>
		</div>
	)
}

export default Page
