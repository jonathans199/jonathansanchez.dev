import { uid } from 'uid'

export const contributions = [
	{
		id: uid(16),
		img: '/img/imagynate.jpg',
		title: 'Imagynate - Mobile App',
		description: 'Photo management app to favorite based on geolocation and managed personalized albums.',
		tech: 'React Native | Node.js',
		// ios: 'https://apps.apple.com/us/app/pedals-app/id1604093440',?
		private: true,
	},
	{
		id: uid(16),
		img: '/img/ecommerce.jpg',
		title: 'Ecommerce Platform',
		description: 'Ecommerce Shopping application using NEXTJS and TAILWINDCSS',
		github: 'https://github.com/Ahsan-Ehtesham/Ecommerce-Store-using-NextJS',
		tech: 'Next.js | Tailwind | Mongo',
	},
]
