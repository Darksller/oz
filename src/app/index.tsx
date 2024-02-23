import { Header } from '@/widgets/header'
import './styles/index.css'
import { Home } from '@/pages/home'
import { Footer } from '@/widgets/footer'
export const App = () => {
	return (
		<div className='font-inter'>
			<Header />
			<Home />
			<Footer />
		</div>
	)
}
