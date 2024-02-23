import { Button } from '.'
import { cn } from '../lib/utils'
import {} from './shadcn/input'
type CardProps = {
	className?: string
	title: string
	description?: string
	children: string
	image: string
	variant?: 'default' | 'half'
}

export const Card = ({
	className,
	title,
	children,
	description,
	image,
	variant = 'default',
}: CardProps) => {
	return (
		<div
			style={
				variant === 'default' ? { backgroundImage: `url(${image})` } : undefined
			}
			className={cn(
				`w-[420px] h-[130px] text-white rounded-[20px] border border-black overflow-hidden`,
				variant === 'default' && `bg-cover flex items-center justify-center`,
				variant === 'half' && `grid grid-cols-2 bg-[#F7A4B4]`,
				className
			)}
		>
			<div
				style={
					variant === 'half' ? { backgroundImage: `url(${image})` } : undefined
				}
				className='bg-cover'
			/>
			<div
				className={cn(
					'flex flex-col justify-center',
					variant === 'half' && 'pr-12',
					variant === 'default' && 'items-center justify-center'
				)}
			>
				<div
					className={cn(
						variant === 'half' && 'text-sm font-bold leading-4',
						variant === 'default' &&
							'text-xl leading-5 text-center px-[76px] font-bold mb-3'
					)}
				>
					{title}
				</div>
				<div className={cn('text-[8px]', variant === 'half' && 'pt-2 pb-3')}>
					{description}
				</div>
				<Button className='bg-[#FFEE00] rounded-[1px] text-black w-[85px] h-[20px] text-[8px] shadow-xl font-medium'>
					{children}
				</Button>
			</div>
		</div>
	)
}
