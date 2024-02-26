import AppStore from '@/shared/assets/icons/download/appStore.svg'
import GooglePlay from '@/shared/assets/icons/download/googlePlay.svg'
import { Link } from '../types/iconLink'

export const Downloads: Link[] = [
	{
		name: 'Google Play',
		icon: GooglePlay,
		href: 'https://play.google.com/store/apps/details?id=by.oz.android&hl=ru&gl=US&pli=1',
	},
	{
		name: 'App Store',
		icon: AppStore,
		href: 'https://apps.apple.com/by/app/oz-%D0%BF%D0%BE%D0%BA%D1%83%D0%BF%D0%BA%D0%B8-%D0%B2-%D1%80%D0%B0%D0%B4%D0%BE%D1%81%D1%82%D1%8C/id1224520373',
	},
]
