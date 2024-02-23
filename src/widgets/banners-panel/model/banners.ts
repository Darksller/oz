import first from '@/shared/assets/images/first.png'
import second from '@/shared/assets/images/second.jpg'
import third from '@/shared/assets/images/third.png'
export type Banner = {
	title: string
	description?: string
	image: string
	buttonText: string
	variant?: 'default' | 'half'
}

export const banners: Banner[] = [
	{
		title: 'Подарки ко Дню всех влюблённых до -60%',
		buttonText: 'Выбрать товары',
		description: 'Для нее и для него',
		image: first,
		variant: 'half',
	},
	{
		title: 'Подарки на 14 февраля до 30 рублей',
		buttonText: 'Выбрать подарки',
		image: second,
	},
	{
		title: 'Готовые подарочные наборы',
		buttonText: 'Выбрать товары',
		description: 'Дарите с любовью!',
		image: third,
		variant: 'half',
	},
]
