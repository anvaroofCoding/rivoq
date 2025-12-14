import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

import {
	ThemeToggler,
	type Resolved,
	type ThemeSelection,
} from '@/components/animate-ui/primitives/effects/theme-toggler'

export const ThemeNew = () => {
	const { theme, resolvedTheme, setTheme } = useTheme()

	return (
		<ThemeToggler
			theme={theme as ThemeSelection}
			resolvedTheme={resolvedTheme as Resolved}
			setTheme={setTheme}
			// ❌ direction YO‘Q
		>
			{({ effective, toggleTheme }) => {
				const nextTheme = effective === 'dark' ? 'light' : 'dark'

				return (
					<button
						onClick={() => toggleTheme(nextTheme)}
						className='
							h-9 w-9
							rounded-full
							flex items-center justify-center
							bg-transparent
							transition-all
							hover:scale-105
							active:scale-95
						'
					>
						{effective === 'dark' ? (
							<Moon className='h-4 w-4 transition-all duration-300' />
						) : (
							<Sun className='h-4 w-4 transition-all duration-300' />
						)}
					</button>
				)
			}}
		</ThemeToggler>
	)
}
