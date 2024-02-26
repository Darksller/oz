import { Layout } from '@/shared/ui/layout'
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
		</>
	)
}
