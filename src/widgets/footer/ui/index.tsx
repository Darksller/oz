import { Layout } from '@/shared/ui/layout'

export const Footer = () => {
	return (
		<footer>
			<Layout>
				<div className='grid grid-cols-3 w-full'>
					<div>Следите за акциями и новостями</div>
					<div className='flex'>
						<div className='flex flex-col items-center justify-end'>
							<div>Оплата</div>
							<div>Оплата</div>
							<div>Оплата</div>
							<div>Оплата</div>
							<div>Оплата</div>
						</div>
						<div className='flex flex-col'>
							<div>Вакансии</div>
						</div>
					</div>
					<div className=''>OZ.by</div>
				</div>
			</Layout>
		</footer>
	)
}
