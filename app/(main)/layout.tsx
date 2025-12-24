import { PremiumNavbar } from '@/components/premium-navbar'
import { ThemeProvider } from '@/components/theme-provider'
import { ReactNode } from 'react'

export default function MainLayout({ children }: { children: ReactNode }) {
	return (
		<ThemeProvider
			attribute='class'
			defaultTheme='system'
			enableSystem
			disableTransitionOnChange
		>
			<PremiumNavbar />
			{children}
		</ThemeProvider>
	)
}
