'use client'

import React, { memo } from 'react'

interface AuroraTextProps {
	children: React.ReactNode
	className?: string
	colors?: string[]
	speed?: number
}

export const AuroraText = memo(
	({
		children,
		className = '',
		colors = [
			'oklch(0.623 0.214 259.815)',
			'oklch(0.546 0.245 262.881)',
			'oklch(0.488 0.243 264.376)',
			'oklch(0.424 0.199 265.638)',
		],
		speed = 1,
	}: AuroraTextProps) => {
		const gradientStyle = {
			backgroundImage: `linear-gradient(135deg, ${colors.join(', ')}, ${
				colors[0]
			})`,
			WebkitBackgroundClip: 'text',
			WebkitTextFillColor: 'transparent',
			animationDuration: `${10 / speed}s`,
		}

		return (
			<span className={`relative inline-block ${className}`}>
				<span className='sr-only'>{children}</span>
				<span
					className='animate-aurora relative bg-[length:200%_auto] bg-clip-text text-transparent'
					style={gradientStyle}
					aria-hidden='true'
				>
					{children}
				</span>
			</span>
		)
	}
)

AuroraText.displayName = 'AuroraText'
