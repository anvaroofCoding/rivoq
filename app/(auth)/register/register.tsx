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
import { Field, FieldDescription, FieldGroup } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import {
	InputOTP,
	InputOTPGroup,
	InputOTPSlot,
} from '@/components/ui/input-otp'
import { Label } from '@/components/ui/label'
import { ShineBorder } from '@/components/ui/shine-border'
import { useAgreeOtpMutation, useSendOtpMutation } from '@/services/auth.api'
import { IconBrandTelegram } from '@tabler/icons-react'
import { Eye, EyeOff } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React from 'react'
import { toast } from 'sonner'

export function Register() {
	const [timeLeft, setTimeLeft] = React.useState(600) // 10:00 = 600s
	const [show, setShow] = React.useState(false)
	const [otpShow, setOtpShow] = React.useState(false)
	const [password, setPassword] = React.useState('')
	const [email, setEmail] = React.useState('')
	const [otp, setOtp] = React.useState('')
	const [sendOtp] = useSendOtpMutation()
	const [agreeOtp, { error: errp }] = useAgreeOtpMutation()
	const router = useRouter()
	const submit = async () => {
		const body = { email, password }

		try {
			const promise = sendOtp(body).unwrap()

			toast.loading('OTP yuborilmoqda...', {
				id: 'otp', // toastni keyinchalik update qilish uchun
				style: {
					'--normal-bg':
						'light-dark(var(--color-sky-600), var(--color-sky-400))',
					'--normal-text': 'var(--color-white)',
					'--normal-border':
						'light-dark(var(--color-sky-600), var(--color-sky-400))',
				} as React.CSSProperties,
			})
			await promise
			toast.success('Kod emailga muvaffaqiyatli yuborildi!', {
				id: 'otp', // oldingi loading toastni update qiladi
				style: {
					'--normal-bg':
						'light-dark(var(--color-green-600), var(--color-green-400))',
					'--normal-text': 'var(--color-white)',
					'--normal-border':
						'light-dark(var(--color-green-600), var(--color-green-400))',
				} as React.CSSProperties,
			})
			setOtpShow(true)
		} catch (err: any) {
			toast.error(`${err?.data?.detail}`, {
				id: 'otp', // oldingi loading toastni update qiladi
				style: {
					'--normal-bg':
						'light-dark(var(--destructive), color-mix(in oklab, var(--destructive) 60%, var(--background)))',
					'--normal-text': 'var(--color-white)',
					'--normal-border': 'transparent',
				} as React.CSSProperties,
			})
		}
	}
	const submitOtp = async () => {
		const body = { email, otp }
		try {
			const promise = agreeOtp(body).unwrap()
			toast.loading('Kodning tastiqlanishi kutilmoqda...', {
				id: 'otp', // toastni keyinchalik update qilish uchun
				style: {
					'--normal-bg':
						'light-dark(var(--color-sky-600), var(--color-sky-400))',
					'--normal-text': 'var(--color-white)',
					'--normal-border':
						'light-dark(var(--color-sky-600), var(--color-sky-400))',
				} as React.CSSProperties,
			})
			await promise
			toast.success('Kod mufavvaqiyatli tastiqlandi!', {
				id: 'otp', // oldingi loading toastni update qiladi
				style: {
					'--normal-bg':
						'light-dark(var(--color-green-600), var(--color-green-400))',
					'--normal-text': 'var(--color-white)',
					'--normal-border':
						'light-dark(var(--color-green-600), var(--color-green-400))',
				} as React.CSSProperties,
			})
			setOtpShow(false)
			setPassword('')
			setEmail('')
			setOtp('')
			router.push('/login')
		} catch (err: any) {
			toast.error(`${err?.data?.detail}`, {
				id: 'otp', // oldingi loading toastni update qiladi
				style: {
					'--normal-bg':
						'light-dark(var(--destructive), color-mix(in oklab, var(--destructive) 60%, var(--background)))',
					'--normal-text': 'var(--color-white)',
					'--normal-border': 'transparent',
				} as React.CSSProperties,
			})
		}
	}
	React.useEffect(() => {
		if (!otpShow) return

		if (timeLeft === 0) return

		const interval = setInterval(() => {
			setTimeLeft(prev => prev - 1)
		}, 1000)

		return () => clearInterval(interval)
	}, [otpShow, timeLeft])
	const formatTime = (seconds: number) => {
		const m = Math.floor(seconds / 60)
		const s = seconds % 60
		return `${m}:${s.toString().padStart(2, '0')}`
	}
	return (
		<Card className='relative w-full max-w-[350px] overflow-hidden bg-black border-none'>
			<ShineBorder shineColor={['#A07CFE', '#FE8FB5', '#FFBE7B']} />
			<CardHeader>
				<CardTitle className='text-white'>
					Rivoq platformasidan ro'yxatdan o'tish
				</CardTitle>
				<CardDescription>
					Xush kelibsiz! Davom etish uchun tizimdan ro'yxatdan o'tishingiz kerak
				</CardDescription>
			</CardHeader>
			<CardContent>
				{otpShow ? (
					<form>
						<div className='grid'>
							<FieldGroup>
								<Field>
									<InputOTP
										value={otp}
										onChange={setOtp}
										maxLength={6}
										id='otp'
										required
									>
										<InputOTPGroup
											className={`
			gap-2.5
			*:data-[slot=input-otp-slot]:rounded-md
			*:data-[slot=input-otp-slot]:border
			${
				errp
					? '*:data-[slot=input-otp-slot]:border-red-500 *:data-[slot=input-otp-slot]:text-red-500'
					: '*:data-[slot=input-otp-slot]:border-gray-700'
			}
		`}
										>
											<InputOTPSlot className='text-white' index={0} />
											<InputOTPSlot className='text-white' index={1} />
											<InputOTPSlot className='text-white' index={2} />
											<InputOTPSlot className='text-white' index={3} />
											<InputOTPSlot className='text-white' index={4} />
											<InputOTPSlot className='text-white' index={5} />
										</InputOTPGroup>
									</InputOTP>
									<FieldDescription className='flex items-center gap-2'>
										<span>Emailga yuborilgan kod yuborilgan:</span>

										<span
											className={`font-mono text-sm ml-2 ${
												timeLeft <= 30 ? 'text-red-400' : 'text-sky-400'
											}`}
										>
											{formatTime(timeLeft)}
										</span>
									</FieldDescription>
								</Field>
							</FieldGroup>
						</div>
					</form>
				) : (
					<form>
						<div className='grid gap-4'>
							<div className='grid gap-2'>
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
							<div className='relative grid gap-2'>
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
										className='absolute right-1 top-5.5'
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
										className='absolute right-1 top-5.5'
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
					</form>
				)}
			</CardContent>
			<CardFooter>
				{otpShow ? (
					<Button
						className='w-full bg-green-700 hover:bg-green-800 duration-200'
						onClick={submitOtp}
					>
						Kodni tastiqlash <IconBrandTelegram stroke={2} />
					</Button>
				) : (
					<Button className='w-full' onClick={submit}>
						Kodni jo'natish <IconBrandTelegram stroke={2} />
					</Button>
				)}
			</CardFooter>
		</Card>
	)
}
