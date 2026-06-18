export type FaqItem = {
  question: string
  answer: string
}

export type FaqCategory = {
  id: string
  title: string
  items: FaqItem[]
}

export const FAQ_CATEGORIES: FaqCategory[] = [
  {
    id: 'getting-started',
    title: 'Getting Started',
    items: [
      {
        question: 'What is Worldener?',
        answer:
          'Worldener is a travel planning app that helps adventurous travelers discover personalized trips through swiping, categories, group chats, and collaborative planning tools.',
      },
      {
        question: 'Is Worldener available on iOS and Android?',
        answer:
          'Yes. Worldener is available on both the App Store and Google Play. Download links will be available on this website once the app launches in your region.',
      },
      {
        question: 'Is Worldener free to use?',
        answer:
          'Browsing Adverts and exploring travel options on the Platform is free of charge. Booking and premium features may involve fees set by Providers.',
      },
    ],
  },
  {
    id: 'planning',
    title: 'Planning & Features',
    items: [
      {
        question: 'How does the swipe functionality work?',
        answer:
          'Similar to dating apps, you swipe through travel options that match your interests. Swipe right on experiences you love and build your itinerary as you go.',
      },
      {
        question: 'Can I plan trips with a group?',
        answer:
          'Absolutely. Create travel groups, use interactive chat to collaborate, and compare different plans side by side until everyone agrees.',
      },
      {
        question: 'What are categories?',
        answer:
          'Categories let you browse travel options by type — adventure, culture, food, relaxation, and more — and add them directly to your itinerary without swiping.',
      },
    ],
  },
  {
    id: 'accounts',
    title: 'Accounts',
    items: [
      {
        question: 'What is the difference between a Customer and a Provider?',
        answer:
          'Customers use the mobile app to discover and book travel experiences. Providers (hotels, restaurants, etc.) register via the desktop platform to publish Adverts after verification.',
      },
      {
        question: 'How do I delete my account?',
        answer:
          'You can terminate your account at any time through the app settings. Note that deleting the app from your device does not delete your account — you must delete it explicitly.',
      },
    ],
  },
  {
    id: 'privacy',
    title: 'Privacy & Data',
    items: [
      {
        question: 'What personal data does Worldener collect?',
        answer:
          'We collect names, email addresses, profile details, interests, age, and gender to personalize your travel suggestions. See our Privacy Policy for full details.',
      },
      {
        question: 'How is my data protected?',
        answer:
          'We use appropriate technical and organizational measures in accordance with Swiss data protection legislation and GDPR. See our Privacy Policy for more information.',
      },
    ],
  },
  {
    id: 'support',
    title: 'Support',
    items: [
      {
        question: 'How do I contact Worldener?',
        answer:
          'Reach us at info@worldener.com. We aim to respond to all inquiries within 2 business days.',
      },
      {
        question: 'Where is Worldener based?',
        answer:
          'Worldener GmbH is headquartered at Rebenstrasse 12, 4112 Bättwil, Solothurn, Switzerland.',
      },
    ],
  },
]

export const ALL_FAQS = FAQ_CATEGORIES.flatMap((cat) =>
  cat.items.map((item) => ({ ...item, category: cat.title })),
)
