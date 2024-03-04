import { ScrollToTopButton } from '@/features/scroll-to-top'
import { BannersPanel, OtherProductsGrid } from '@/widgets'
import { CategoryPanel } from '@/widgets'
import { DefaultProductsGrid } from '@/widgets'
import { DefaultProducts } from '../model/default-products'
import { AdditionalOtherProducts, OtherProducts } from '../model/other-products'

export const Home = () => {
	return (
		<>
			<BannersPanel />
			<CategoryPanel />
			<DefaultProductsGrid
				category='Книги. Бестселлеры'
				data={DefaultProducts}
				className='mt-5'
			/>
			<DefaultProductsGrid
				data={DefaultProducts}
				category='Развлечения, творчество. Бестселлеры'
				className='mt-5'
			/>
			<OtherProductsGrid
				additionalCategory='Канцтовары, для учебы'
				additionalData={AdditionalOtherProducts}
				data={OtherProducts}
				category='Сувениры, галантерея, одежда. Бестселлеры.'
				className='mt-5'
			/>
			<ScrollToTopButton className='mt-5 font-black text-xl w-[200px] h-[35px]' />
		</>
	)
}
