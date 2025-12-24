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
import {
	IconBrandGithub,
	IconBrandGoogle,
	IconBrandTelegram,
} from '@tabler/icons-react'

export function ShineBorderDemo() {
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
						<div className='grid gap-2'>
							<Label htmlFor='email'>Email</Label>
							<Input
								id='email'
								type='email'
								placeholder='name@gmail.com'
								className='bg-black border border-gray-700'
							/>
						</div>
					</div>
				</form>
			</CardContent>
			<CardFooter>
				<Button className='w-full'>
					Kodni jo'natish <IconBrandTelegram stroke={2} />
				</Button>
			</CardFooter>
		</Card>
	)
}
