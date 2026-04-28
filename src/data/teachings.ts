export interface Teaching {
  id: string
  title: string
  description: string
  date: string // ISO format: 'YYYY-MM-DD'
  dateLabel?: string
  series?: string
  videoUrl: string
  type: 'youtube' | 'video' | 'audio'
  thumbnail?: string
}

// To add a new video: copy the MP4 into public/videos/teachings/ and add
// a matching entry here. The Watch page displays entries oldest first.
export const teachings: Teaching[] = [
  {
    id: 'march-29-2026-palm-sunday',
    title: 'March 29, 2026 Palm Sunday',
    description: 'Palm Sunday teaching from Harvest House Christian Fellowship.',
    date: '2026-03-29',
    videoUrl: '/videos/teachings/march-29-2026-palm-sunday.mp4',
    type: 'video',
    thumbnail: '/images/teachings/march-29-2026-palm-sunday.jpg',
  },
  {
    id: 'because-of-the-resurrection',
    title: 'Because of the Resurrection',
    description: 'A teaching on the power and meaning of the resurrection.',
    date: '2026-04-05',
    videoUrl: '/videos/teachings/because-of-the-resurrection.mp4',
    type: 'video',
    thumbnail: '/images/teachings/because-of-the-resurrection.jpg',
  },
  {
    id: 'overcoming-oppression',
    title: 'Overcoming Oppression',
    description: 'A teaching on walking in freedom through Christ.',
    date: '2026-04-12',
    videoUrl: '/videos/teachings/overcoming-oppression.mp4',
    type: 'video',
    thumbnail: '/images/teachings/overcoming-oppression.jpg',
  },
  {
    id: 'understanding-the-kingdom-of-god',
    title: 'Understanding the Kingdom of God',
    description: 'A teaching on understanding the Kingdom of God.',
    date: '2026-04-19',
    videoUrl: '/videos/teachings/understanding-the-kingdom-of-god.mp4',
    type: 'video',
    thumbnail: '/images/teachings/understanding-the-kingdom-of-god.jpg',
  },
  {
    id: 'go-deep',
    title: 'Go Deep',
    description: 'A teaching encouraging deeper faith and discipleship.',
    date: '2026-04-26',
    videoUrl: '/videos/teachings/go-deep.mp4',
    type: 'video',
    thumbnail: '/images/teachings/go-deep.jpg',
  },
  {
    id: 'the-kingdom-of-god-part-2',
    title: 'The Kingdom of God - Part 2',
    description: 'Part two of the Kingdom of God teaching series.',
    date: '2026-04-27',
    dateLabel: 'Recently added',
    series: 'The Kingdom of God',
    videoUrl: '/videos/teachings/the-kingdom-of-god-part-2.mp4',
    type: 'video',
    thumbnail: '/images/teachings/the-kingdom-of-god-part-2.jpg',
  },
  {
    id: 'the-kingdom-of-god-and-its-influence',
    title: 'The Kingdom of God and Its Influence',
    description: 'A teaching on the influence of the Kingdom of God.',
    date: '2026-04-28',
    dateLabel: 'Recently added',
    series: 'The Kingdom of God',
    videoUrl: '/videos/teachings/the-kingdom-of-god-and-its-influence.mp4',
    type: 'video',
    thumbnail: '/images/teachings/the-kingdom-of-god-and-its-influence.jpg',
  },
]
