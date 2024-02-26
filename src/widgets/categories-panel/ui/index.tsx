import { Button } from '@/shared/ui'
import { categories } from '../model/categories'

export const CategoryPanel = () => {
	return (
		<div className='max-w-[1310px] w-full h-[130px] bg-card/50 rounded-b-[20px] backdrop-blur-sm grid grid-cols-6 pt-5 pb-3 px-[30px]'>
			{categories.map(category => (
				<Button className='text-black font-semibold w-[190px] h-[40px] text-sm'>
					{category.name}
				</Button>
			))}
		</div>
	)
}
