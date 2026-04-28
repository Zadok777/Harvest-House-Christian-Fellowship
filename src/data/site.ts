export interface SiteAddress {
  street: string
  city: string
  state: string
  zip: string
}

export interface Service {
  name: string
  time: string
  note?: string
  location?: string
}

export interface SiteConfig {
  name: string
  shortName: string
  address: SiteAddress
  foodPantryAddress: SiteAddress
  phone: string
  phoneFoodPantry: string
  email: string
  emailFoodPantry: string
  services: Service[]
  donationUrl: string
  googleMapsUrl: string
}

export const SITE: SiteConfig = {
  name: 'Harvest House Christian Fellowship',
  shortName: 'HHCF',
  address: {
    street: '9 N 3rd St.',
    city: 'Lewisburg',
    state: 'PA',
    zip: '17837',
  },
  foodPantryAddress: {
    street: '310 Market St, #2',
    city: 'Lewisburg',
    state: 'PA',
    zip: '17837',
  },
  phone: '(570) 713-1693',
  phoneFoodPantry: '(570) 490-3321',
  email: 'hhcf2@yahoo.com',
  emailFoodPantry: 'ht.food4u@yahoo.com',
  services: [
    { name: 'Sunday Morning Service', time: '10:00 AM' },
    { name: 'Wednesday Night Bible Study', time: '7:00 PM', note: 'Currently studying Romans' },
    { name: 'Food Pantry', time: 'Wednesdays 5:45–6:45 PM', location: '310 Market St, #2' },
  ],
  donationUrl: 'https://harvesthousechristianfellowsh.betterworld.org/donate',
  googleMapsUrl: 'https://www.google.com/maps/place/Harvest+House+Christian+Fellowship/@40.9646839,-76.8878103,17z/',
}
