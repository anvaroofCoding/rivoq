'use client'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { cn } from '@/lib/utils'
import { Bell, ChevronDown, Menu, User } from 'lucide-react'
import { useTheme } from 'next-themes'
import Link from 'next/link'
import * as React from 'react'
import { ThemeTogglerDemo } from './dakr-mode-toogle'

interface NavItem {
	title: string
	href?: string
	items?: {
		title: string
		href: string
		description: string
	}[]
}

const navigationItems: NavItem[] = [
	{
		title: 'Biz haqimizda',
		items: [
			{
				title: 'Portfolio',
				href: '/products/analytics',
				description: "Real-vaqt ma'lumotlar bilan biznesingizni o'stiring",
			},
			{
				title: 'Automation',
				href: '/products/automation',
				description: 'Streamline workflows with powerful automation',
			},
			{
				title: 'Integrations',
				href: '/products/integrations',
				description: 'Connect with your favorite tools and services',
			},
			{
				title: 'Security',
				href: '/products/security',
				description: 'Enterprise-grade security and compliance',
			},
		],
	},
	{
		title: 'Solutions',
		items: [
			{
				title: 'Enterprise',
				href: '/solutions/enterprise',
				description: 'Scalable solutions for large organizations',
			},
			{
				title: 'Startups',
				href: '/solutions/startups',
				description: 'Fast and flexible tools for growing teams',
			},
			{
				title: 'Agencies',
				href: '/solutions/agencies',
				description: 'Manage multiple clients with ease',
			},
		],
	},
	{
		title: 'Resources',
		items: [
			{
				title: 'Documentation',
				href: '/resources/docs',
				description: 'Comprehensive guides and API references',
			},
			{
				title: 'Blog',
				href: '/resources/blog',
				description: 'Latest news, updates, and best practices',
			},
			{
				title: 'Community',
				href: '/resources/community',
				description: 'Join our community of developers',
			},
			{
				title: 'Support',
				href: '/resources/support',
				description: 'Get help from our support team',
			},
		],
	},
	{
		title: 'Pricing',
		href: '/pricing',
	},
]

const notifications = [
	{ id: 1, title: 'New feature released', time: '5m ago', unread: true },
	{ id: 2, title: 'System update completed', time: '1h ago', unread: true },
	{ id: 3, title: 'Monthly report ready', time: '3h ago', unread: false },
]

export function PremiumNavbar() {
	const [isScrolled, setIsScrolled] = React.useState(false)
	const [mobileOpen, setMobileOpen] = React.useState(false)
	const { theme, setTheme } = useTheme()
	const [mounted, setMounted] = React.useState(false)

	React.useEffect(() => {
		setMounted(true)
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 10)
		}
		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	const unreadCount = notifications.filter(n => n.unread).length

	return (
		<header
			className={cn(
				'sticky top-0 z-50 w-full transition-all duration-300',
				isScrolled
					? 'bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-sm'
					: 'bg-background/60 backdrop-blur-md'
			)}
		>
			<div className='mx-auto max-w-screen-2xl'>
				<nav className='flex h-16 items-center justify-between px-4 md:px-6 lg:px-8'>
					{/* Logo */}
					<div className='flex items-center gap-8'>
						<Link href='/' className='flex items-center gap-2 group'>
							<div className='h-8 w-8 rounded-lg bg-primary flex items-center justify-center transition-transform group-hover:scale-105'>
								<span className='text-primary-foreground font-bold text-lg'>
									R
								</span>
							</div>
							<span className='font-semibold text-lg hidden sm:inline-block'>
								Rivoq
							</span>
						</Link>

						{/* Desktop Navigation */}
						<div className='hidden lg:flex'>
							<NavigationMenu>
								<NavigationMenuList>
									{navigationItems.map(item => (
										<NavigationMenuItem key={item.title}>
											{item.items ? (
												<>
													<NavigationMenuTrigger className='h-9 text-sm font-medium transition-colors hover:text-primary'>
														{item.title}
													</NavigationMenuTrigger>
													<NavigationMenuContent>
														<ul className='grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]'>
															{item.items.map(subItem => (
																<li key={subItem.title}>
																	<NavigationMenuLink asChild>
																		<Link
																			href={subItem.href}
																			className='block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground group'
																		>
																			<div className='text-sm font-medium leading-none group-hover:text-primary transition-colors'>
																				{subItem.title}
																			</div>
																			<p className='line-clamp-2 text-sm leading-snug text-muted-foreground'>
																				{subItem.description}
																			</p>
																		</Link>
																	</NavigationMenuLink>
																</li>
															))}
														</ul>
													</NavigationMenuContent>
												</>
											) : (
												<Link href={item.href || '#'} legacyBehavior passHref>
													<NavigationMenuLink className='group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50'>
														{item.title}
													</NavigationMenuLink>
												</Link>
											)}
										</NavigationMenuItem>
									))}
								</NavigationMenuList>
							</NavigationMenu>
						</div>
					</div>

					{/* Right Side Actions */}
					<div className='flex items-center gap-2'>
						{/* Theme Toggle */}
						{/* <Button
							variant='ghost'
							size='icon'
							onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
							className='h-9 w-9 transition-transform hover:scale-105'
							aria-label='Toggle theme'
						>
							{mounted && (
								<>
									{theme === 'dark' ? (
										<Sun className='h-4 w-4 transition-all' />
									) : (
										<Moon className='h-4 w-4 transition-all' />
									)}
								</>
							)}
						</Button> */}
						<ThemeTogglerDemo />

						{/* Notifications */}
						<DropdownMenu>
							<DropdownMenuTrigger asChild>
								<Button
									variant='ghost'
									size='icon'
									className='relative h-9 w-9 transition-transform hover:scale-105'
									aria-label='Notifications'
								>
									<Bell className='h-4 w-4' />
									{unreadCount > 0 && (
										<Badge
											variant='destructive'
											className='absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 flex items-center justify-center text-[10px] animate-in zoom-in'
										>
											{unreadCount}
										</Badge>
									)}
								</Button>
							</DropdownMenuTrigger>
							<DropdownMenuContent
								align='end'
								className='w-80 animate-in fade-in slide-in-from-top-2'
							>
								<DropdownMenuLabel className='font-semibold'>
									Notifications
								</DropdownMenuLabel>
								<DropdownMenuSeparator />
								<div className='max-h-[300px] overflow-y-auto'>
									{notifications.map(notification => (
										<DropdownMenuItem
											key={notification.id}
											className='flex flex-col items-start gap-1 p-3 cursor-pointer'
										>
											<div className='flex items-center gap-2 w-full'>
												{notification.unread && (
													<div className='h-2 w-2 rounded-full bg-primary' />
												)}
												<span className='text-sm font-medium flex-1'>
													{notification.title}
												</span>
											</div>
											<span className='text-xs text-muted-foreground ml-4'>
												{notification.time}
											</span>
										</DropdownMenuItem>
									))}
								</div>
								<DropdownMenuSeparator />
								<DropdownMenuItem className='text-center justify-center text-sm text-primary cursor-pointer'>
									View all notifications
								</DropdownMenuItem>
							</DropdownMenuContent>
						</DropdownMenu>

						{/* User Menu */}
						<DropdownMenu>
							<DropdownMenuTrigger asChild>
								<Button
									variant='ghost'
									className='relative h-9 gap-2 px-2 transition-transform hover:scale-105'
								>
									<Avatar className='h-7 w-7'>
										<AvatarImage src='/user-avatar.jpg' alt='User' />
										<AvatarFallback>JD</AvatarFallback>
									</Avatar>
									<span className='hidden md:inline-block text-sm font-medium'>
										John Doe
									</span>
									<ChevronDown className='h-3 w-3 opacity-50' />
								</Button>
							</DropdownMenuTrigger>
							<DropdownMenuContent
								align='end'
								className='w-56 animate-in fade-in slide-in-from-top-2'
							>
								<DropdownMenuLabel>
									<div className='flex flex-col space-y-1'>
										<p className='text-sm font-medium leading-none'>John Doe</p>
										<p className='text-xs leading-none text-muted-foreground'>
											john.doe@example.com
										</p>
									</div>
								</DropdownMenuLabel>
								<DropdownMenuSeparator />
								<DropdownMenuItem className='cursor-pointer'>
									<User className='mr-2 h-4 w-4' />
									<span>Profile</span>
								</DropdownMenuItem>
								<DropdownMenuItem className='cursor-pointer'>
									<span className='mr-2'>⚙️</span>
									<span>Settings</span>
								</DropdownMenuItem>
								<DropdownMenuItem className='cursor-pointer'>
									<span className='mr-2'>💳</span>
									<span>Billing</span>
								</DropdownMenuItem>
								<DropdownMenuSeparator />
								<DropdownMenuItem className='cursor-pointer text-destructive focus:text-destructive'>
									<span className='mr-2'>🚪</span>
									<span>Log out</span>
								</DropdownMenuItem>
							</DropdownMenuContent>
						</DropdownMenu>

						{/* Mobile Menu */}
						<div className='lg:hidden'>
							<Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
								<SheetTrigger asChild>
									<Button
										variant='ghost'
										size='icon'
										className='h-9 w-9'
										aria-label='Toggle menu'
									>
										<Menu className='h-5 w-5' />
									</Button>
								</SheetTrigger>
								<SheetContent
									side='right'
									className='w-[300px] sm:w-[400px] p-0'
								>
									<div className='flex flex-col h-full'>
										<div className='flex items-center justify-between p-6 border-b'>
											<span className='font-semibold text-lg'>Menu</span>
										</div>
										<div className='flex-1 overflow-y-auto py-6'>
											<nav className='flex flex-col gap-2 px-4'>
												{navigationItems.map(item => (
													<div key={item.title} className='space-y-2'>
														{item.items ? (
															<div>
																<button className='flex items-center justify-between w-full py-2 text-sm font-medium'>
																	{item.title}
																	<ChevronDown className='h-4 w-4' />
																</button>
																<div className='ml-4 space-y-1 border-l-2 border-border pl-4 mt-2'>
																	{item.items.map(subItem => (
																		<Link
																			key={subItem.title}
																			href={subItem.href}
																			onClick={() => setMobileOpen(false)}
																			className='block py-2 text-sm text-muted-foreground hover:text-foreground transition-colors'
																		>
																			{subItem.title}
																		</Link>
																	))}
																</div>
															</div>
														) : (
															<Link
																href={item.href || '#'}
																onClick={() => setMobileOpen(false)}
																className='block py-2 text-sm font-medium hover:text-primary transition-colors'
															>
																{item.title}
															</Link>
														)}
													</div>
												))}
											</nav>
										</div>
									</div>
								</SheetContent>
							</Sheet>
						</div>
					</div>
				</nav>
			</div>
		</header>
	)
}
