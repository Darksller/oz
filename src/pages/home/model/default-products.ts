import { Product } from '@/entities/product'
import first from '@/shared/assets/images/items/1.png'
import second from '@/shared/assets/images/items/2.png'
import third from '@/shared/assets/images/items/3.png'
import fourth from '@/shared/assets/images/items/4.png'
import fifth from '@/shared/assets/images/items/5.png'
import six from '@/shared/assets/images/items/6.png'
import seven from '@/shared/assets/images/items/7.png'
import eight from '@/shared/assets/images/items/8.png'
import nine from '@/shared/assets/images/items/9.png'
import ten from '@/shared/assets/images/items/10.png'

export const DefaultProducts: Product[] = [
	{
		name: 'Счастье среди лаванды',
		description: 'Аня Матвеева, 2023',
		image: first,
		price: 23.23,
		bonus: 0.23,
	},
	{
		name: 'Мастер и Маргарита',
		description: 'Михаил Булгаков, 2022',
		image: second,
		price: 9.71,
		bonus: 0.23,
	},
	{
		name: 'Мартин Иден',
		description: 'Джек Лондон, 2015',
		image: third,
		price: 10.52,
		bonus: 0.23,
	},
	{
		name: 'Спеши любить',
		description: 'Николас Спаркс, 2023',
		image: fourth,
		price: 23.23,
		bonus: 0.23,
	},
	{
		name: 'Поднятие уровня в одиночку',
		description: 'Чхугон, 2024',
		image: fifth,
		price: 22.19,
		bonus: 0.23,
	},
	{
		name: 'Четвертое Крыло',
		description: 'Ребекка Яррос, 2023',
		image: six,
		price: 33.97,
		bonus: 0.23,
	},
	{
		name: 'Каласы пад сярпом тваiм',
		description: 'Уладзiмiр Караткевiч, 2023',
		image: seven,
		price: 42.8,
		bonus: 0.23,
	},
	{
		name: 'Кристальный пик',
		description: 'Анастасия Гор, 2023',
		image: eight,
		price: 22.29,
		bonus: 0.23,
	},
	{
		name: 'Грядущая буря',
		description: 'Роберт Джордан, Брендон Сандерсон, 2023',
		image: nine,
		price: 38.66,
		bonus: 0.23,
	},
	{
		name: 'Маленький принц',
		description: 'Антуан де Сент-Экзюпери, 2019',
		image: ten,
		price: 38.66,
		bonus: 0.23,
	},
]
