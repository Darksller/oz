import { cn } from '../lib/utils'

type LayoutProps = {
	children: React.ReactNode
	className?: string
}

export const Layout = ({ children, className }: LayoutProps) => {
	return (
		<div
			className={cn(
				'max-w-[1370px] w-full m-auto mt-5 flex justify-center items-center flex-col',
				className
			)}
		>
			{children}
		</div>
	)
}
