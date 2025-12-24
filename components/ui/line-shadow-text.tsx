'use client'

import { cn } from '@/lib/utils'
import { motion, MotionProps } from 'framer-motion'
import * as React from 'react'

type LineShadowTextProps = Omit<
	React.HTMLAttributes<HTMLElement>,
	keyof MotionProps
> &
	MotionProps & {
		shadowColor?: string
		as?: 'span' | 'div' | 'p' | 'h1' | 'h2' | 'h3'
	}

export function LineShadowText({
	children,
	shadowColor = 'black',
	className,
	as = 'span',
	...props
}: LineShadowTextProps) {
	// ❗ hydration-safe
	if (typeof children !== 'string') return null

	const MotionComponent = motion(as)

	return (
		<MotionComponent
			data-text={children}
			style={{ '--shadow-color': shadowColor } as React.CSSProperties}
			className={cn(
				'relative z-0 inline-flex',
				'after:absolute after:top-[0.04em] after:left-[0.04em]',
				'after:content-[attr(data-text)]',
				'after:bg-[linear-gradient(45deg,transparent_45%,var(--shadow-color)_45%,var(--shadow-color)_55%,transparent_0)]',
				'after:bg-[length:0.06em_0.06em]',
				'after:bg-clip-text after:text-transparent',
				'after:-z-10 after:animate-line-shadow',
				className
			)}
			{...props}
		>
			{children}
		</MotionComponent>
	)
}
