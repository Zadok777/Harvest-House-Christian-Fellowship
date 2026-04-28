export interface MinistryVerse {
  reference: string
  text: string
}

export interface MinistryContact {
  phone?: string
  email?: string
  hours?: string
  address?: string
  note?: string
}

export interface Ministry {
  id: string
  title: string
  tagline?: string
  teaser: string
  description: string[]
  verse: MinistryVerse
  contact?: MinistryContact
  affiliation?: string
  iconKey: 'wheat' | 'lock'
  imageUrl?: string
}

export const ministries: Ministry[] = [
  {
    id: 'food-pantry',
    title: 'Harvest Time Food Pantry',
    tagline: 'Feeding People, Changing Lives',
    teaser:
      'Free weekly food packages for anyone in need — Wednesdays 5:45–6:45 PM at 310 Market St, Lewisburg.',
    description: [
      'The Harvest Time Food Pantry provides food for whoever has a need. Simply call the church office and provide us with your household size and the ages of those you live with.',
      'We will provide a free and healthy food package to be picked up on Wednesdays between 5:45 PM and 6:45 PM.',
      'Remember — it’s not a "hand-out," it’s a "helping hand."',
    ],
    verse: {
      reference: 'Matthew 25:35',
      text: '"For I was hungry and you gave me something to eat, I was thirsty and you gave me something to drink, I was a stranger and you invited me in."',
    },
    contact: {
      phone: '(570) 490-3321',
      email: 'ht.food4u@yahoo.com',
      hours: 'Wednesdays, 5:45–6:45 PM',
      address: '310 Market St, #2, Lewisburg, PA 17837',
    },
    affiliation: 'An authorized agency of the Central PA Food Bank',
    iconKey: 'wheat',
    // TODO: REPLACE with a high-resolution ministry photo from the church
    imageUrl: undefined,
  },
  {
    id: 'jail-ministry',
    title: 'Jail Ministry',
    tagline: 'Bringing the Gospel Inside',
    teaser:
      'Weekly meetings that bring the Gospel of Jesus Christ to inmates inside Union County Jail.',
    description: [
      'Weekly meetings held in Union County Jail that minister the Gospel of Jesus Christ to inmates.',
      'Through prayer, teaching, and pastoral presence, this ministry walks alongside men and women who are incarcerated, reminding them that no one is beyond the reach of God’s grace.',
    ],
    verse: {
      reference: 'Matthew 25:36',
      text: '"I needed clothes and you clothed me, I was sick and you looked after me, I was in prison and you came to visit me."',
    },
    contact: {
      note: 'To learn more or get involved, contact the church office.',
      phone: '(570) 713-1693',
      email: 'hhcf2@yahoo.com',
    },
    iconKey: 'lock',
    // TODO: REPLACE with a high-resolution ministry photo from the church
    imageUrl: undefined,
  },
]
