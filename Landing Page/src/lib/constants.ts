export const APP_LINKS = {
  appStore: '#',
  googlePlay: '#',
} as const

export const COOKIEBOT_ID = '9b3e962a-8d0d-4fac-bd3f-ba58ea0688b1'

export const COMPANY = {
  name: 'Worldener GmbH',
  address: 'Rebenstrasse 12, 4112 Bättwil, Solothurn, Switzerland',
  email: 'info@worldener.com',
  uid: 'CHE-357.050.681',
} as const

export const NAV_LINKS = [
  { label: 'About', href: '/#about' },
  { label: 'How It Works', href: '/#how-it-works' },
  { label: 'Sneak Peek', href: '/#sneak-peek' },
  { label: 'Team', href: '/#team' },
  { label: 'Blog', href: '/blog' },
  { label: 'FAQs', href: '/faqs' },
] as const

export const FOOTER_LINKS = [
  { label: 'About Us', href: '/#about' },
  { label: 'How It Works', href: '/#how-it-works' },
  { label: 'Sneak Peek', href: '/#sneak-peek' },
  { label: 'Blog', href: '/blog' },
  { label: 'Terms of Service', href: '/terms-of-service' },
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'FAQs', href: '/faqs' },
] as const

export const STATS = [
  { value: '6+', label: 'Core planning features' },
  { value: 'Group', label: 'Collaborative trip chats' },
  { value: 'Swiss', label: 'Built in Switzerland' },
] as const

export const HOW_IT_WORKS = [
  {
    step: '01',
    title: 'Swipe functionality',
    description:
      'Browse travel options with an intuitive swipe mechanism — similar to dating apps — to quickly find experiences that match your interests.',
    icon: '/images/swipe-left.png',
  },
  {
    step: '02',
    title: 'Categories',
    description:
      'Explore travel categories directly and add options to your itinerary without swiping, for a more organized planning approach.',
    icon: '/images/work_image.png',
  },
  {
    step: '03',
    title: 'Interactive chat',
    description:
      'Share ideas, get feedback, and collaborate on travel plans with interactive group chats that keep everyone aligned.',
    icon: '/images/camera.png',
  },
  {
    step: '04',
    title: 'Book & enjoy',
    description:
      'Compare plans with your group, reach consensus, and book every aspect of your trip seamlessly within the app.',
    icon: '/images/app.jpeg',
  },
] as const

export const FEATURES = [
  {
    title: 'Personalized travel planning',
    description:
      'Algorithms assess your preferences and interests to craft bespoke itineraries tailored to your tastes.',
  },
  {
    title: 'Swipe to discover',
    description:
      'Effortlessly browse and select travel options that appeal to you, making planning enjoyable and fast.',
  },
  {
    title: 'Shared planning boards',
    description:
      'Create and manage travel groups with collaborative itinerary planning and decision-making tools.',
  },
  {
    title: 'Compare plans',
    description:
      'Evaluate different travel plans side by side to reach consensus — especially useful for larger groups.',
  },
  {
    title: 'Interactive group chat',
    description:
      'Communicate with fellow travelers in real time to share ideas and refine your perfect trip.',
  },
  {
    title: 'Hidden gems',
    description:
      'Discover not only the obvious attractions but also the secret spots each destination has to offer.',
  },
] as const

export const TEAM = [
  {
    name: 'Thanusan Thangarajah',
    role: 'Operations',
    bio: 'The thinker and driver of Worldener, bringing creativity and customer-oriented thinking to every decision.',
    image: '/images/team1.jpg',
  },
  {
    name: 'Nandor Frey',
    role: 'Sales & Relationship',
    bio: 'Leads the relationship team with networked thinking, group collaboration, and negotiation skills.',
    image: '/images/team2.jpg',
  },
  {
    name: 'Nico Gallati',
    role: 'IT & Product Development',
    bio: 'Passionate about the technical aspects of complex applications and simplifying people\'s lives through technology.',
    image: '/images/team3.jpg',
  },
  {
    name: 'Timothy Langer',
    role: 'Marketing',
    bio: 'Brings imagination, creativity, and a deep understanding of human nature to Worldener\'s marketing.',
    image: '/images/team4.jpg',
  },
] as const

export const SCREENSHOTS = [
  { src: '/images/screenshot1.jpeg', label: 'Discover' },
  { src: '/images/screenshot2.jpeg', label: 'Swipe' },
  { src: '/images/screenshot3.jpeg', label: 'Plan' },
  { src: '/images/screenshot4.jpeg', label: 'Groups' },
  { src: '/images/screenshot5.jpeg', label: 'Trips' },
  { src: '/images/screenshot6.jpeg', label: 'Explore Cities' },
] as const

export const ABOUT_IMAGES = [
  '/images/about_img1.png',
  '/images/about_img2.png',
  '/images/about_img3.png',
  '/images/about_img4.png',
  '/images/about_img5.jpeg',
  '/images/about_img6.jpeg',
] as const

export const HOME_SECTIONS = [
  { id: 'about', label: 'About' },
  { id: 'how-it-works', label: 'How It Works' },
  { id: 'sneak-peek', label: 'Sneak Peek' },
  { id: 'team', label: 'Team' },
  { id: 'features', label: 'Features' },
  { id: 'cta', label: 'Download' },
] as const
