import { Button } from '@/shared/ui'
import { Product } from '../types/product'
import bonusIcon from '@/shared/assets/icons/product/product-card/bonus-icon.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@/shared/assets/icons'
import { cn } from '@/shared/lib/utils'
type ProductCardProps = {
	data: Product
	className?: string
	variant?: 'default' | 'half'
}

export const ProductCard = ({
	className,
	data,
	variant = 'default',
}: ProductCardProps) => {
	return (
		<div className={cn(className)}>
			<div className={cn(variant === 'half' && 'grid grid-cols-2')}>
				<div className='row-span-3 flex justify-center items-center'>
					<img src={data.image} />
				</div>
				<div
					className={cn(
						'flex items-center justify-center font-bold flex-col',
						variant === 'half' && 'pl-[15px] w-[100px]'
					)}
				>
					<div
						className={cn(
							'max-w-full text-center',
							variant === 'default' && 'text-ellipsis truncate',
							variant === 'half' && 'leading-5 text-xs'
						)}
					>
						{data.name}
					</div>
					<div
						className={cn(
							'text-secondary text-xs px-4 max-w-full text-center',
							variant === 'default' && 'text-ellipsis truncate',
							variant === 'half' && 'leading-5 text-xs'
						)}
					>
						{data.description}
					</div>
				</div>
			</div>
			<div className='flex items-end justify-between'>
				<div className='flex flex-col justify-center'>
					<div
						className={cn(
							'text-xl font-black flex',
							variant === 'default' && 'pt-[9px]',
							variant === 'half' && 'pt-[5px]'
						)}
					>
						{data.price} р.
					</div>
					<div
						className={cn(
							'font-black rounded-[10px] bg-muted text-primary text-[10px] max-w-[60px] flex items-center px-[7px]',
							variant === 'default' && 'mt-[2px]'
						)}
					>
						<img src={bonusIcon} className='pr-2' />
						<div className='mb-[1px]'>{data.bonus}</div>
					</div>
				</div>
				<Button variant='icon'>
					<FontAwesomeIcon icon={faCartShopping} className='size-[20px]' />
				</Button>
			</div>
		</div>
	)
}
