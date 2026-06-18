export type BlogLayout = 'editorial' | 'feature'

export type BlogPost = {
  slug: string
  title: string
  excerpt: string
  coverImage: string
  layout: BlogLayout
  publishedAt: string
  author: string
  /** Editorial layout: markdown-style paragraphs */
  body?: string[]
  /** Feature layout: numbered sections with optional image */
  sections?: {
    title: string
    content: string
    image?: string
  }[]
  pullQuote?: string
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'hidden-gems-lisbon',
    title: '5 Hidden Gems in Lisbon for First-Time Social Travelers',
    excerpt:
      'Beyond the tram lines and pastel de nata queues, Lisbon hides neighborhoods and viewpoints perfect for travelers planning together.',
    coverImage: '/images/about_img5.jpeg',
    layout: 'editorial',
    publishedAt: '2025-03-15',
    author: 'Worldener Team',
    pullQuote:
      'The best Lisbon moments often happen when you follow a local tip instead of a guidebook checklist.',
    body: [
      'Lisbon rewards the curious. While most first-time visitors flock to Belém and Alfama, social travelers — those planning trips with friends or new connections — find the city\'s magic in quieter corners.',
      'Start in Graça, where terrace bars offer sunset views without the Bairro Alto crowds. The Miradouro da Senhora do Monte is free, spacious, and ideal for group photos. Arrive an hour before sunset and bring a bottle of vinho verde.',
      'For food, skip the tourist traps on Rua Augusta. Instead, head to Mercado de Campo de Ourique, where locals lunch on fresh seafood and you can split small plates as a group. It\'s less chaotic than Time Out Market and feels genuinely Lisboan.',
      'LX Factory is well-known, but the nearby Village Underground — a creative hub built from shipping containers — is where Lisbon\'s young creatives gather. Street art, pop-up events, and coworking spaces make it a natural meetup spot for travel groups.',
      'Finally, take the ferry to Cacilhas across the river. The 10-minute crossing costs less than a coffee, and the waterfront promenade offers one of the best unobstructed views of the city skyline. Perfect for a lazy group afternoon.',
      'Planning a group trip to Lisbon? Use Worldener to match interests, compare itineraries, and keep everyone on the same page before you even pack.',
    ],
  },
  {
    slug: 'plan-group-trip-without-losing-spark',
    title: 'How to Plan a Group Trip Without Losing the Spark',
    excerpt:
      'Group travel is rewarding — until planning becomes a spreadsheet nightmare. Here is how to keep the excitement alive.',
    coverImage: '/images/about_img3.png',
    layout: 'feature',
    publishedAt: '2025-02-20',
    author: 'Worldener Team',
    sections: [
      {
        title: 'Start with shared interests, not destinations',
        content:
          'Before debating cities, align on what kind of trip you want — adventure, culture, relaxation, or food. Worldener\'s interest-based profiles help groups discover overlap before anyone opens a booking tab.',
        image: '/images/about_img1.png',
      },
      {
        title: 'Use swipe to surface preferences fast',
        content:
          'Instead of endless group chats, let each person swipe through options independently. Aggregated preferences reveal consensus quickly and reduce decision fatigue.',
        image: '/images/screenshot2.jpeg',
      },
      {
        title: 'Compare plans side by side',
        content:
          'When two itineraries compete, lay them out visually. Compare costs, travel time, and highlights so the group can vote with clarity instead of emotion.',
        image: '/images/screenshot5.jpeg',
      },
      {
        title: 'Keep one shared planning space',
        content:
          'Interactive group chat keeps ideas, links, and decisions in one thread. No more hunting through WhatsApp history for that restaurant someone mentioned three weeks ago.',
        image: '/images/screenshot4.jpeg',
      },
      {
        title: 'Leave room for spontaneity',
        content:
          'The best group trips build structure around flights and accommodation, then leave afternoons open. Over-planning kills the spark — flexible frameworks preserve it.',
        image: '/images/about_img6.jpeg',
      },
    ],
  },
  {
    slug: 'photo-spots-coastal-escape',
    title: 'Photo Spots Worth the Detour on Your Next Coastal Escape',
    excerpt:
      'From cliffside lookouts to hidden coves, these coastal photo spots reward travelers willing to go slightly off the main route.',
    coverImage: '/images/about_img4.png',
    layout: 'editorial',
    publishedAt: '2025-01-10',
    author: 'Worldener Team',
    body: [
      'Coastal destinations photograph beautifully at golden hour — but the iconic spots are often overcrowded. The detours worth taking are usually 20 minutes off the main road.',
      'Look for secondary viewpoints. Most famous cliffs have a lesser-known trail 500 meters away with identical views and a fraction of the foot traffic. Ask locals or check Worldener community tips.',
      'Tide timing matters. Beaches at low tide reveal rock pools and reflections that disappear entirely at high tide. Plan your photo walk around the tide chart, not just the sunset.',
      'Weather creates mood. Overcast coastal days produce dramatic, even lighting that flat midday sun never will. Do not cancel a coastal trip because of clouds — embrace them.',
      'Finally, put the camera down sometimes. The best travel photos often come after you have stopped hunting for them and started actually being present with your crew.',
    ],
  },
  {
    slug: 'swiss-alps-weekend-guide',
    title: 'A Weekend in the Swiss Alps: A Feature Guide for Worldeners',
    excerpt:
      'Two days, four stops, and zero wasted hours — a structured guide for travelers who want alpine beauty without the planning chaos.',
    coverImage: '/images/about_img2.png',
    layout: 'feature',
    publishedAt: '2024-12-05',
    author: 'Worldener Team',
    sections: [
      {
        title: 'Day 1 Morning — Lucerne lakeside',
        content:
          'Start with a walk along the Kapellbrücke and a coffee at a lakeside café. Lucerne is the perfect gateway — compact, beautiful, and well connected by rail.',
        image: '/images/about_img2.png',
      },
      {
        title: 'Day 1 Afternoon — Mount Pilatus',
        content:
          'Take the world\'s steepest cogwheel railway up Mount Pilatus. The summit offers 360-degree alpine views. Allow three hours including the descent.',
        image: '/images/about_img1.png',
      },
      {
        title: 'Day 2 Morning — Interlaken',
        content:
          'An hour by train from Lucerne, Interlaken sits between two lakes and serves as the adventure capital of the Bernese Oberland.',
        image: '/images/about_img5.jpeg',
      },
      {
        title: 'Day 2 Afternoon — Lauterbrunnen Valley',
        content:
          'End your weekend in the Lauterbrunnen Valley, where waterfalls cascade from cliff faces above storybook villages. It is the photo finish your group will talk about for years.',
        image: '/images/about_img6.jpeg',
      },
    ],
  },
]

export function getPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug)
}
