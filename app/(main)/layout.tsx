import { PremiumNavbar } from '@/components/premium-navbar'
import { ThemeProvider } from '@/components/theme-provider'

export default function MainLayout({
	children,
}: {
	children: React.ReactNode
}) {
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
