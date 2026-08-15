export const APP_LINKS = {
  appStore: '#',
  googlePlay: '#',
} as const

export const COOKIEBOT_ID = '9b3e962a-8d0d-4fac-bd3f-ba58ea0688b1'

export const SHOW_TEAM = false

export const COMPANY = {
  name: 'Worldener GmbH',
  address: 'Rebenstrasse 12, 4112 Bättwil, Solothurn, Switzerland',
  email: 'info@worldener.com',
  uid: 'CHE-357.050.681',
} as const

export const NAV_LINKS = [
  { label: 'Features', href: '/#features' },
  { label: 'How it works', href: '/#how-it-works' },
  { label: 'Blog', href: '/blog' },
  { label: 'About us', href: '/#about' },
  { label: 'FAQs', href: '/faqs' },
] as const

export const FOOTER_COLUMNS = [
  {
    title: 'Product',
    links: [
      { label: 'Features', href: '/#features' },
      { label: 'How it works', href: '/#how-it-works' },
      { label: 'Download', href: '/#download' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Blog', href: '/blog' },
      { label: 'FAQs', href: '/faqs' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About us', href: '/#about' },
      { label: 'Contact', href: 'mailto:info@worldener.com' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '/privacy-policy' },
      { label: 'Terms of Service', href: '/terms-of-service' },
    ],
  },
] as const

export const SOCIAL_LINKS = [
  { label: 'Instagram', href: '#', icon: '/icons/instagram.png' },
  { label: 'TikTok', href: '#', icon: '/icons/tik-tok.png' },
  { label: 'YouTube', href: '#', icon: '/icons/youtube.png' },
  { label: 'LinkedIn', href: '#', icon: '/icons/linkedin.png' },
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
    title: 'Discover',
    description: 'Find personalized recommendations',
    icon: '/icons/discover.png',
  },
  {
    title: 'Group Chat',
    description: 'Chat, share ideas, and plan together',
    icon: '/icons/group-chat.png',
  },
  {
    title: 'Compare',
    description: 'Compare options and vote',
    icon: '/icons/compare.png',
  },
  {
    title: 'Plan & Book',
    description: 'Book experiences, hotels, and more',
    icon: '/icons/plan-book.png',
  },
  {
    title: 'Remember',
    description: 'Collect memories and photos',
    icon: '/icons/remember.png',
  },
  {
    title: 'AI Assistant',
    description: 'Get smart suggestions from a personal travel assistant',
    icon: '/icons/ai-assistant.png',
  },
] as const

export const PROBLEM_ICONS = [
  { src: '/icons/whatsapp.png', label: 'WhatsApp', className: 'left-[8%] top-[8%]' },
  { src: '/icons/instagram.png', label: 'Instagram', className: 'right-[12%] top-[4%]' },
  { src: '/icons/tik-tok.png', label: 'TikTok', className: 'left-[42%] top-[28%]' },
  { src: '/icons/google-maps.png', label: 'Google Maps', className: 'left-[4%] bottom-[18%]' },
  { src: '/icons/pinterest.png', label: 'Pinterest', className: 'right-[8%] top-[42%]' },
  { src: '/icons/google-calendar.png', label: 'Google Calendar', className: 'right-[28%] bottom-[8%]' },
] as const

export const CTA_VALUE_PROPS = [
  { title: 'Top activities', icon: '/icons/star.png' },
  { title: 'Secure payments', icon: '/icons/shield.png' },
  { title: 'Travel experiences', icon: '/icons/globe.png' },
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
  { src: '/images/screenshot4.jpeg', label: 'Group' },
  { src: '/images/screenshot5.jpeg', label: 'Trips' },
  { src: '/images/screenshot6.jpeg', label: 'Explore' },
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
  { id: 'features', label: 'Features' },
  { id: 'how-it-works', label: 'How it works' },
  { id: 'blog-preview', label: 'Blog' },
  { id: 'cta', label: 'Download' },
] as const
