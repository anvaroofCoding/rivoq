'use client'
import { Button } from '@/components/ui/button'
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { ShineBorder } from '@/components/ui/shine-border'
import { useLoginMutation } from '@/services/auth.api'
import { IconBrandGithub, IconBrandGoogle } from '@tabler/icons-react'
import { ChevronRight, Eye, EyeOff } from 'lucide-react'
import React from 'react'
import { toast } from 'sonner'

export function ShineBorderDemo() {
	const [show, setShow] = React.useState(false)
	const [password, setPassword] = React.useState('')
	const [email, setEmail] = React.useState('')
	const [goLogin] = useLoginMutation()

	const submit = async () => {
		const body = { email, password }

		try {
			// 1️⃣ loading toastni BIRINCHI chiqaramiz
			toast.loading('Kirilmoqda...', {
				id: 'otp',
				style: {
					'--normal-bg':
						'light-dark(var(--color-sky-600), var(--color-sky-400))',
					'--normal-text': 'var(--color-white)',
					'--normal-border':
						'light-dark(var(--color-sky-600), var(--color-sky-400))',
				} as React.CSSProperties,
			})

			// 2️⃣ promise yaratamiz va await qilamiz
			const res = await goLogin(body).unwrap()
			console.log(res)

			// 3️⃣ success toast (loading o‘rnini bosadi)
			toast.success('Kirish muvaffaqiyatli tasdiqlandi!', {
				id: 'otp',
				style: {
					'--normal-bg':
						'light-dark(var(--color-green-600), var(--color-green-400))',
					'--normal-text': 'var(--color-white)',
					'--normal-border':
						'light-dark(var(--color-green-600), var(--color-green-400))',
				} as React.CSSProperties,
			})

			setPassword('')
			setEmail('')
		} catch (err: any) {
			toast.error(err?.data?.detail || err?.message || 'Xatolik yuz berdi', {
				id: 'otp',
				style: {
					'--normal-bg':
						'light-dark(var(--destructive), color-mix(in oklab, var(--destructive) 60%, var(--background)))',
					'--normal-text': 'var(--color-white)',
					'--normal-border': 'transparent',
				} as React.CSSProperties,
			})
		}
	}

	return (
		<Card className='relative w-full max-w-[350px] overflow-hidden bg-black border-none'>
			<ShineBorder shineColor={['#A07CFE', '#FE8FB5', '#FFBE7B']} />
			<CardHeader>
				<CardTitle className='text-white'>Rivoq platformasiga kirish</CardTitle>
				<CardDescription>
					Xush kelibsiz! Davom etish uchun tizimga kiring.
				</CardDescription>
			</CardHeader>
			<CardContent>
				<form>
					<div className='grid gap-4'>
						<div className='grid grid-cols-2 gap-2'>
							<Button className='bg-gray-800 hover:bg-gray-700 duration-200'>
								<IconBrandGithub stroke={2} />
								Git hub
							</Button>
							<Button className='bg-gray-800 hover:bg-gray-700 duration-200'>
								<IconBrandGoogle stroke={2} />
								Google
							</Button>
						</div>
						<div className='grid gap-4'>
							<div className='grid gap-1'>
								<Label htmlFor='email' className='text-white'>
									Email
								</Label>
								<Input
									id='email'
									type='email'
									placeholder='name@gmail.com'
									className='bg-black border border-gray-700 text-white'
									onChange={v => {
										setEmail(v?.target?.value)
									}}
								/>
							</div>
							<div className='relative grid gap-1'>
								<Label htmlFor='password' className='text-white'>
									Parol
								</Label>
								<Input
									id='password'
									type={show ? 'text' : 'password'}
									placeholder='parol'
									className='bg-black border text-white border-gray-700 pr-10'
									onChange={v => {
										setPassword(v?.target?.value)
									}}
								/>
								{show ? (
									<Button
										className='absolute right-1 top-4.5'
										variant={'link'}
										onClick={e => {
											e.preventDefault()
											setShow(false)
										}}
									>
										<EyeOff className='text-gray-500' />
									</Button>
								) : (
									<Button
										className='absolute right-1 top-4.5'
										variant={'link'}
										onClick={e => {
											e.preventDefault()
											setShow(true)
										}}
									>
										<Eye className='text-gray-500' />
									</Button>
								)}
							</div>
						</div>
					</div>
				</form>
			</CardContent>
			<CardFooter>
				<Button onClick={submit} className='w-full'>
					Kirish <ChevronRight />
				</Button>
			</CardFooter>
		</Card>
	)
}
