import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

import {
	ThemeToggler,
	type Direction,
	type Resolved,
	type ThemeSelection,
} from '@/components/animate-ui/primitives/effects/theme-toggler'

interface ThemeTogglerDemoProps {
	direction: Direction
}

export const ThemeNew = ({ direction }: ThemeTogglerDemoProps) => {
	const { theme, resolvedTheme, setTheme } = useTheme()

	return (
		<ThemeToggler
			theme={theme as ThemeSelection}
			resolvedTheme={resolvedTheme as Resolved}
			setTheme={setTheme}
			direction={direction}
		>
			{({ effective, toggleTheme }) => {
				const nextTheme = effective === 'dark' ? 'light' : 'dark'

				return (
					<button onClick={() => toggleTheme(nextTheme)}>
						{effective === 'dark' ? (
							<Moon className='h-4 w-4 transition-all' />
						) : (
							<Sun className='h-4 w-4 transition-all' />
						)}
					</button>
				)
			}}
		</ThemeToggler>
	)
}
