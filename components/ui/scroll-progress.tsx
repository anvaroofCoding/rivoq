'use client'

import { motion, MotionProps, useScroll } from 'motion/react'

import { cn } from '@/lib/utils'

interface ScrollProgressProps
	extends Omit<React.HTMLAttributes<HTMLElement>, keyof MotionProps> {
	ref?: React.Ref<HTMLDivElement>
}

export function ScrollProgress({
	className,
	ref,
	...props
}: ScrollProgressProps) {
	const { scrollYProgress } = useScroll()

	return (
		<motion.div
			ref={ref}
			className={cn(
				'fixed inset-x-0 top-0 z-50 h-px origin-left bg-gradient-to-r from-[#1e6bf0] via-[#557ce1] to-[#26a1da]',
				className
			)}
			style={{
				scaleX: scrollYProgress,
			}}
			{...props}
		/>
	)
}
