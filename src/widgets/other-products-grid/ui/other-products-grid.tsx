import { ProductCard, ProductsGridProps } from '@/entities/product'
import { cn } from '@/shared/lib/utils'
import Autoplay from 'embla-carousel-autoplay'
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
} from '@/shared/ui'
import React from 'react'

export const OtherProductsGrid = ({
	className,
	category,
	data,
	additionalData,
	additionalCategory,
}: ProductsGridProps) => {
	const plugin = React.useRef(
		Autoplay({ delay: 1000, stopOnInteraction: true })
	)
	return (
		<div className={cn('h-[195px] w-full flex relative', className)}>
			<div className='bg-white/70 px-[30px] rounded-[20px] h-full w-[785px] absolute z-[3]' />
			<div className='bg-white/50 px-[30px] rounded-[20px] h-full w-[1305px] absolute z-[2]' />
			<div className='bg-white/30 w-full absolute h-full rounded-[20px] z-[1]' />

			<div className='z-[4] flex justify-center items-center max-w-[785px] flex-col w-full px-[30px]'>
				<div className='flex w-full justify-center items-center bg-muted text-primary mb-[15px] font-black h-[30px] rounded-[20px] text-lg'>
					{category}
				</div>
				<div className='flex gap-[30px]'>
					{data.map((item, index) => (
						<ProductCard key={index} data={item} variant='half' />
					))}
				</div>
			</div>

			<div className='z-[4] max-w-[520px] w-full justify-center flex items-center px-[30px] flex-col'>
				<div className='w-full flex justify-center items-center bg-muted/70 text-primary mb-[15px] font-black h-[30px] rounded-[20px] text-lg'>
					{additionalCategory}
				</div>
				<Carousel
					plugins={[plugin.current]}
					onMouseEnter={plugin.current.stop}
					onMouseOut={plugin.current.play}
					className='w-full relative'
					opts={{
						align: 'start',
					}}
				>
					<CarouselContent>
						{additionalData?.map((item, index) => (
							<CarouselItem key={index} className='basis-1/2'>
								<div className=''>
									<ProductCard data={item} variant='half' />
								</div>
							</CarouselItem>
						))}
					</CarouselContent>

					<CarouselNext
						variant={'ghost'}
						size={'default'}
						className='text-primary hover:bg-white/0 right-[-110px] top-[42px]'
					/>
				</Carousel>
			</div>
		</div>
	)
}
