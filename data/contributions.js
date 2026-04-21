import { uid } from 'uid'

export const contributions = [
	{
		id: uid(16),
		img: '/img/walky.jpg',
		title: 'Walky - Mobile App',
		description: 'College social networking app helping students connect, discover campus events, join clubs, and build meaningful friendships.',
		tech: 'React Native | Node.js',
		ios: 'https://apps.apple.com/us/app/walky-app/id6448960505',
		live: 'https://walkyapp.com/',
		private: true,
	},
	{
		id: uid(16),
		img: '/img/diyrace.jpg',
		title: 'DIYRace - Race Tracking Platform',
		description: 'Real-time race tracking platform with live leaderboards, featuring native iOS and Android apps, a Node.js API hosted on AWS, and React-based marketing site and back-office.',
		tech: 'Swift | Kotlin | Node.js | React | AWS',
		live: 'https://diyrace.com/',
		private: true,
	},
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
