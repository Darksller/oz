import { BannerCard } from '@/shared/ui/card'
import { banners } from '../model/banners'

export const BannersPanel = () => {
	return (
		<div className='bg-white rounded-[20px] h-[170px] flex items-center gap-6 px-[30px] py-10 w-full'>
			{banners.map(banner => (
				<BannerCard
					key={banner.title}
					title={banner.title}
					image={banner.image}
					description={banner.description}
					variant={banner.variant}
				>
					{banner.buttonText}
				</BannerCard>
			))}
		</div>
	)
}
