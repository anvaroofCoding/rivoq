import {
	Particles,
	ParticlesEffect,
	type ParticlesEffectProps,
} from '@/components/animate-ui/primitives/effects/particles'
import { useEffect, useState } from 'react'

export function ParticlesDemo(props: ParticlesEffectProps) {
	const [clicks, setClicks] = useState<{ x: number; y: number; key: number }[]>(
		[]
	)

	const handleClick = (e: MouseEvent) => {
		setClicks(prev => [
			...prev,
			{ x: e.clientX, y: e.clientY, key: prev.length + 1 },
		])
	}

	useEffect(() => {
		document.body.addEventListener('click', handleClick)
		return () => document.body.removeEventListener('click', handleClick)
	}, [])

	return (
		<Particles
			style={{
				position: 'fixed',
				top: 0,
				left: 0,
				width: '100vw',
				height: '100vh',
			}}
		>
			{clicks.map(c => (
				<ParticlesEffect
					key={c.key}
					style={{
						position: 'absolute',
						left: c.x,
						top: c.y,
						pointerEvents: 'none',
					}}
					className='bg-primary size-1 rounded-full'
					{...props}
				/>
			))}
		</Particles>
	)
}
