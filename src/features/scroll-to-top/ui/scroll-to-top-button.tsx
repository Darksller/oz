import { Button } from '@/shared/ui'

type ScrollToTopButtonProps = {
	className?: string
}

export const ScrollToTopButton = ({ className }: ScrollToTopButtonProps) => {
	const onClick = () => {
		window.scrollTo(0, 0)
	}
	return (
		<Button className={className} onClick={onClick}>
			Наверх
		</Button>
	)
}
