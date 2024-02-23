import { cn } from '@/shared/lib/utils'
import { Input } from '@/shared/ui'
import { MagnifyingGlassIcon } from '@radix-ui/react-icons'

type SearchBarProps = {
	className?: string
}

export const SearchBar = ({ className }: SearchBarProps) => {
	return (
		<div className={cn('w-full', className)}>
			<MagnifyingGlassIcon className='absolute max-sm:ml-3.5 ml-2 z-[9] my-1.5 size-7 text-secondary' />
			<Input
				placeholder='Введите название товара'
				className='h-[40px] border-2 placeholder:italic  placeholder:text-base placeholder:font-semibold pl-10 font-semibold placeholder:text-secondary bg-card/50'
			/>
		</div>
	)
}
