import { Toaster } from '@/components/ui/sonner'
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { ReactNode } from 'react'
import './globals.css'
import Providers from './providers'

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
})

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
})

export const metadata: Metadata = {
	title: 'Rivoq | Dasturlash Onlayn Kurslari | Frontend, Backend',

	// Sayt tavsifi (Description) - asosiy kalit soʻzlarni qamrab oladi
	description:
		'Rivoq.uz - Zamonaviy dasturlash kurslari: Frontend, Backend, Python, JavaScript, React, Next.js, Django, HTML, CSS. Dasturlash sohasida noldan professional darajagacha oʻqing va zamonaviy kasb egasi boʻling.',

	// Saytning asosiy manzili
	metadataBase: new URL('https://rivoq.uz'),

	// Kalit soʻzlar (Keywords) - maksimal optimallashtirish uchun
	keywords: [
		'rivoq',
		'rivoq.uz',
		'dasturlash kurslari',
		'onlayn kurslar',
		'frontend kurslari',
		'backend kurslari',
		'python kurslari',
		'javascript kurslari',
		'react kurslari',
		'next.js kurslari',
		'django kurslari',
		'zamonaviy kasb',
		'dasturlashni oʻrganish',
		'html css kurslari',
		'web dasturlash',
	],

	// Muallif/platforma nomi
	authors: [{ name: 'Rivoq Platformasi' }],

	// Open Graph (Ijtimoiy tarmoqlar uchun)
	openGraph: {
		title:
			'Rivoq | Dasturlash Onlayn Kurslari | Frontend, Backend, React, Python',
		description:
			'Rivoq.uz - Dasturlash sohasida noldan professional darajagacha oʻqing. Frontend, Backend, Python, React, Next.js kurslari.',
		url: 'https://rivoq.uz',
		siteName: 'Rivoq',
		images: [
			{
				url: '/og-image.png', // Saytni ulashishda chiqadigan rasm manzili
				width: 1200,
				height: 630,
				alt: 'Rivoq Dasturlash Kurslari',
			},
		],
		locale: 'uz_UZ',
		type: 'website',
	},

	// Twitter (Twitter/X ijtimoiy tarmog'i uchun)
	twitter: {
		card: 'summary_large_image',
		title: 'Rivoq | Dasturlash Onlayn Kurslari',
		description:
			'Rivoq.uz - Zamonaviy dasturlash kurslari: Frontend, Backend, Python, JavaScript, React, Next.js.',
		creator: '@RivoqPlatformasi', // Agar Twitter akkauntingiz bo'lsa
		images: ['/og-image.png'],
	},

	// Qoʻshimcha ma'lumotlar
	generator: 'Next.js', // Agar Next.js ishlatilgan bo'lsa
	icons: {
		icon: [
			{
				url: '/icon-light-32x32.png',
				media: '(prefers-color-scheme: light)',
			},
			{
				url: '/icon-dark-32x32.png',
				media: '(prefers-color-scheme: dark)',
			},
			{
				url: '/icon.svg',
				type: 'image/svg+xml',
			},
		],
		apple: '/apple-icon.png',
	},
}

// app/layout.tsx
export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang='en'>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				<Providers>
					{children}
					<Toaster position='bottom-right' />
				</Providers>
			</body>
		</html>
	)
}
