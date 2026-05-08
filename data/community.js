import { uid } from 'uid'

export const community = [
	{
		id: uid(16),
		name: 'Syntax Summit',
		role: 'Founder',
		img: '/img/syntax-summit.png',
		description:
			'Founded a monthly hands-on developer workshop and meetup serving the South Florida tech community. Brings developers of all levels together for collaborative, skills-based learning on topics ranging from vector search to modern web frameworks.',
		live: 'https://www.syntaxsummit.com/',
		year: '2025',
	},
	{
		id: uid(16),
		name: 'devDive',
		role: 'Founder',
		description:
			'Founded a local developer community focused on deep, hands-on learning sessions. Brings engineers together for technical deep-dives, code-alongs, and collaborative problem solving.',
		year: '2024',
	},
	{
		id: uid(16),
		name: 'Tech Hub South Florida',
		role: 'Speaker',
		img: '/techhub.png',
		description:
			'Spoke at Tech Hub South Florida on building modern web applications and engineering practices. Engaged with the regional tech community of founders, engineers, and innovators driving South Florida\'s tech ecosystem.',
		video: 'https://www.youtube.com/embed/dpK-SIfkunw',
	},
]
