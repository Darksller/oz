import { cn } from '@/shared/lib/utils'
import { products } from '../model/items'
import { ProductCard } from '@/entities/product'

type CategoryItemsProps = {
	className?: string
	category: string
}
export const CategoryItems = ({ category, className }: CategoryItemsProps) => {
	return (
		<div
			className={cn(
				'w-full bg-white rounded-[20px] flex justify-center',
				className
			)}
		>
			<div className='max-w-[1310px] w-full pb-5'>
				<div className='flex justify-center items-center bg-muted text-primary px-[30px] mt-[10px] mb-[20px] font-black h-[30px] rounded-[20px]'>
					{category}
				</div>
				<div className='bg-secondary/50 grid grid-cols-5 gap-[1px]'>
					{products.map(product => (
						<ProductCard key={product.name} data={product} />
					))}
				</div>
			</div>
		</div>
	)
}
