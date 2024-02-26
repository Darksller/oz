import { ReactNode } from 'react'
import { cn } from '../lib/utils'

type ButtonProps = {
	children: ReactNode
	className?: string
	variant?: 'default' | 'small' | 'icon'
}
export const Button = ({
	children,
	className,
	variant = 'default',
}: ButtonProps) => {
	return (
		<button
			className={cn(
				'inline-flex justify-center items-center bg-white border-opacity-50 rounded-[10px] text-primary',
				variant === 'default' && 'w-[150px] h-[34px] font-semibold text-sm',
				variant === 'small' &&
					'w-[90px] h-[20px] leading-[15px] text-[12px]  font-black tracking-normal',
				variant === 'icon' &&
					'w-[50px] h-[30px] font-semibold border-[0.5px] border-primary',
				className
			)}
		>
			{children}
		</button>
	)
}
