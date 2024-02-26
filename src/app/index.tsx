import { Header } from '@/widgets/header'
import './styles/index.css'
import { Home } from '@/pages/home'
import { Footer } from '@/widgets/footer'
import { Layout } from '@/shared/ui/layout'
export const App = () => {
	return (
		<div className='font-inter bg-contain bg-body'>
			<Header />
			<Layout>
				<Home />
				<Footer />
			</Layout>
		</div>
	)
}
