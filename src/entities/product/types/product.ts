export type Product = {
	name: string
	description: string
	image: string
	price: number
	bonus: number
	//category: string
}

export type ProductsGridProps = {
	className?: string
	category: string
	additionalCategory?: string
	data: Product[]
	additionalData?: Product[]
}
