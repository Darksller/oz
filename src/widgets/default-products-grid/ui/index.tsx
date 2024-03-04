import { cn } from '@/shared/lib/utils'
import { ProductCard, ProductsGridProps } from '@/entities/product'

export const DefaultProductsGrid = ({
	category,
	className,
	data,
}: ProductsGridProps) => {
	return (
		<div
			className={cn(
				'w-full bg-white rounded-[20px] flex justify-center',
				className
			)}
		>
			<div className='max-w-[1310px] w-full pb-5'>
				<div className='flex justify-center items-center bg-muted text-primary px-[30px] mt-[10px] mb-[20px] font-black h-[30px] rounded-[20px] text-lg'>
					{category}
				</div>
				<div className='bg-secondary/50 grid grid-cols-5 gap-[1px]'>
					{data.map(item => (
						<ProductCard
							key={item.name}
							data={item}
							className='bg-white py-[7px] px-[10px]'
						/>
					))}
				</div>
			</div>
		</div>
	)
}
