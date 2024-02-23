import { faCartShopping, faQuestionCircle, faUser } from '@/shared/assets/icons'
import { Button } from '@/shared/ui/button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { SearchBar } from '@/features/search-bar'
import Logo from '/logo.svg'

export const Header = () => {
	return (
		<header className='w-full bg-card/50 h-[80px] justify-center items-center inline-flex'>
			<div className='flex justify-center items-center w-full max-w-[1440px] pr-[30px] pl-8'>
				<img src={Logo} className='h-[27.5px] pr-3 lg:pr-9' />
				<SearchBar className='pr-3 lg:pr-[30px]' />
				<div className='flex gap-3 lg:gap-5'>
					<Button variant='icon' className='w-[60px] h-[40px]'>
						<FontAwesomeIcon icon={faQuestionCircle} className='size-[26px]' />
					</Button>
					<Button variant='icon' className='w-[60px] h-[40px]'>
						<FontAwesomeIcon icon={faCartShopping} className='size-[26px]' />
					</Button>
					<Button variant='icon' className='w-[60px] h-[40px]'>
						<FontAwesomeIcon icon={faUser} className='w-[20px] h-[23px]' />
					</Button>
				</div>
			</div>
		</header>
	)
}
