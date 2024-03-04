import { Contacts } from '../model/contacts'
import { Downloads } from '../model/download'
import { Большой_ПРАВОславный_текст } from '../model/Большой ПРАВОславный текст'
import { Маленький_текстик_левый_утютю } from '../model/Маленький текстик левый утютю'

export const Footer = () => {
	return (
		<footer className='grid grid-cols-4 h-[140px] w-full gap-[9px] pt-[18px] pb-[11px] items-end px-[15px]'>
			<div className='font-black text-primary text-[16px]'>
				<div>Следите за акциями и новостями</div>
				<div className='flex gap-[6px] pl-[2px]'>
					{Contacts.map(contact => (
						<a key={contact.name} href={contact.href} target={'_blank'}>
							<img src={contact.icon} alt={contact.name} />
						</a>
					))}
				</div>
				<div className='pt-[10px]'>Скачайте мобильное приложение</div>
				<div className='flex gap-[6px] pl-[2px]'>
					{Downloads.map(download => (
						<a key={download.name} href={download.href} target={'_blank'}>
							<img src={download.icon} alt={download.name} />
						</a>
					))}
				</div>
			</div>
			<div className='flex self-start items-end text-white font-bold flex-col text-end pl-[80px]'>
				{Маленький_текстик_левый_утютю.map(item => (
					<a key={item.name} href={item.href} className='w-fit'>
						{item.name}
					</a>
				))}
			</div>
			<div className='text-white font-bold flex flex-col self-start'>
				{Большой_ПРАВОславный_текст.map(item => (
					<a key={item.name} href={item.href} className='w-fit'>
						{item.name}
					</a>
				))}
			</div>
			<div className='flex items-end font-bold text-xs text-primary flex-col'>
				<div>OZ.by, ООО “Приносим радость”, 1999-2024</div>
				<div>В торговом реестре Республики Беларусь с 17</div>
				<div> августа 2022 года</div>
			</div>
		</footer>
	)
}
