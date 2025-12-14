'use client'

import { DotPattern } from '@/components/ui/dot-pattern'
import { cn } from '@/lib/utils'

export function Home() {
	return (
		<div className='bg-background relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border'>
			<h1>Hello world</h1>
			<DotPattern
				className={cn(
					'[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]'
				)}
			/>
		</div>
	)
}
