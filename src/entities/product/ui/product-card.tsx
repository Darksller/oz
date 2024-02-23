import { Button } from '@/shared/ui'
import { Product } from '../types/product'
import bonusIcon from '@/shared/assets/icons/product/product-card/bonus-icon.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@/shared/assets/icons'
type ProductCardProps = {
	data: Product
	className?: string
}

export const ProductCard = ({ data }: ProductCardProps) => {
	return (
		<div className='w-full h-full bg-white px-[10px] py-[7px]'>
			<div className='h-[130px] row-span-3 flex justify-center items-center'>
				<img src={data.image} />
			</div>
			<div className='flex items-center justify-center font-bold flex-col text-ellipsis truncate max-w-full'>
				{data.name}
				<div className='text-secondary text-xs text-ellipsis truncate max-w-full px-4'>
					{data.description}
				</div>
			</div>
			<div className='flex items-end justify-between'>
				<div className='font-black flex flex-col justify-center'>
					<div className='text-xl pt-[9px]'>{data.price} р.</div>
					<div className='rounded-[20px] bg-muted text-primary text-[10px] max-w-[60px] w-full flex items-center px-[7px]'>
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
