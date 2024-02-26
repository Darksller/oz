import { ScrollToTopButton } from '@/features/scroll-to-top'
import { BannersPanel } from '@/widgets'
import { CategoryPanel } from '@/widgets'
import { CategoryItems } from '@/widgets'

export const Home = () => {
	return (
		<>
			<BannersPanel />
			<CategoryPanel />
			<CategoryItems category='Книги. Бестселлеры' className='mt-5' />
			<CategoryItems
				category='Развлечения, творчество. Бестселлеры'
				className='mt-5'
			/>
			<ScrollToTopButton className='mt-5 font-black text-xl w-[200px] h-[35px]' />
		</>
	)
}
