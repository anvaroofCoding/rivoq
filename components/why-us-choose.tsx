import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'
import { Clock, Heart, Users, Zap } from 'lucide-react'

interface FeatureItem {
	icon: React.ComponentType<{ className?: string }>
	title: string
	description: string
}

const features: FeatureItem[] = [
	{
		icon: Heart,
		title: 'Sifat',
		description:
			"Biz sifatga ishonamiz va barcha kurslar o'z standart talablarga javob berishini ta'minlaymiz.",
	},
	{
		icon: Zap,
		title: 'Asosiy Tezlik',
		description:
			"Sizga o'rgatmoqchi bo'lgan ko'nikmalarimiz real loyhalarda qo'llaniladi va bu bilan tez natijalarga erishasiz.",
	},
	{
		icon: Clock,
		title: 'Vaqtsiz dasrlar',
		description:
			"Xoxlagan payt va xoxlagancha platformada o'rganish imkonini beramiz. Bepul xizmatlar va doimiy yangilanishlar bilan.",
	},
	{
		icon: Users,
		title: "Jamoa Qo'llab-quvvatlashi",
		description:
			"Bizning jamoamiz har doim sizga yordam berishga tayyor, savollaringizga javob beradi va o'rganish jarayonida yo'l-yo'riq ko'rsatadi.",
	},
]

interface Feature2Props extends React.HTMLAttributes<HTMLElement> {
	className?: string
}

export default function Feature2({ className, ...props }: Feature2Props) {
	return (
		<section
			className={cn(
				'container mx-auto px-4 py-12 sm:px-6 md:py-16 lg:px-8',
				className
			)}
			{...props}
		>
			<div>
				<div className='grid gap-12 lg:grid-cols-2 lg:gap-16'>
					<div className='space-y-10'>
						<header className='space-y-4'>
							<h2 className='text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-5xl'>
								Nima uchun bizni tanlashadi?
							</h2>
							<p className='text-muted-foreground text-base text-pretty md:text-md'>
								Bizni boshqalardan ajratib turadigan ajoyib sifat va xizmatni
								taqdim etamiz. Bizning fidoyi yondashuvimiz bilan farqni his
								eting.
							</p>
						</header>

						<div className='grid gap-6 sm:grid-cols-2 sm:gap-8'>
							{features.map(({ icon: Icon, title, description }) => (
								<div
									key={title}
									className='group flex flex-col items-start gap-3 rounded-lg'
								>
									<Badge
										variant='secondary'
										className='inline-flex items-center justify-center rounded-full p-3'
									>
										<Icon className='!size-5' aria-hidden='true' />
									</Badge>
									<div className='space-y-1.5'>
										<h3 className='text-foreground text-base font-semibold md:text-lg'>
											{title}
										</h3>
										<p className='text-muted-foreground text-sm text-balance'>
											{description}
										</p>
									</div>
								</div>
							))}
						</div>
					</div>

					<div className='relative'>
						<div className='bg-muted relative z-10 overflow-hidden rounded-lg shadow-sm transition-all duration-300 hover:shadow-md'>
							<div className='aspect-[4/3] w-full'>
								<img
									src='/code.jpg'
									alt='Nima uchun bizni tanlashadi?'
									className='size-full object-cover grayscale'
									loading='lazy'
									decoding='async'
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
