'use client'
import { useTheme } from 'next-themes'
import { AuroraText } from './ui/aurora-text'
import { LineShadowText } from './ui/line-shadow-text'
import { WordRotate } from './ui/word-rotate'

const HeaderText = () => {
	const theme = useTheme()

	const shadowColor = theme.resolvedTheme === 'dark' ? 'white' : 'black'
	return (
		<div>
			<h1 className='text-4xl font-bold tracking-tighter md:text-5xl lg:text-5xl'>
				<AuroraText className='lg:text-7xl'>Rivoq</AuroraText> onlyan ta'lim
				<LineShadowText className='italic' shadowColor={shadowColor}>
					platformasida
				</LineShadowText>{' '}
				biz bilan{' '}
				<WordRotate
					className='border'
					words={['Java scriptni', 'Nextni', 'Node.jsni', 'Reactni']}
				/>{' '}
				o'rganing
			</h1>
		</div>
	)
}

export default HeaderText
