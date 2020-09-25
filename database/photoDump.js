// This file reserved for Amazon S3 link paths for dummy photos served up to seeding script

const dummyURL = [
  'https://bougiemoreplaces.s3-us-west-1.amazonaws.com/adam-winger-VGs8z60yT2c-unsplash.jpg',
  'https://bougiemoreplaces.s3-us-west-1.amazonaws.com/alexander-kaunas-7ZD_JIwl410-unsplash.jpg',
  'https://bougiemoreplaces.s3-us-west-1.amazonaws.com/andrea-davis-k8WL83m48XY-unsplash.jpg',
  'https://bougiemoreplaces.s3-us-west-1.amazonaws.com/andrea-davis-nbI8gqbBaHo-unsplash.jpg',
  'https://bougiemoreplaces.s3-us-west-1.amazonaws.com/andrea-davis-pK85wI_ZjuY-unsplash.jpg',
  'https://bougiemoreplaces.s3-us-west-1.amazonaws.com/andrea-davis-rY3JwYE4Vko-unsplash.jpg',
  'https://bougiemoreplaces.s3-us-west-1.amazonaws.com/aneta-pawlik-XvyNiNbFsnY-unsplash.jpg',
];

const descType = [
  'Hotel Room',
  'Entire Apartment',
  'Entire Loft',
  'Entire House',
  'Entire Condominium',
  'Entire Villa',
  'Entire Townhouse',
  // 'Private Room',
  // 'Shared Room',
  'Entire Cottage',
];

// =========== RANDOM DESCRIPTION TEXT GENERATOR =======================
const randomElement = (array) => {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
};

const adjectives = [
  'Vibrant', 'Sun-filled', 'Airy', 'Extravagent', 'Lavish', 'Fabulous', 'Artistic', 'Stunning',
  'Charming', 'Fun and Chic', 'Spacious', 'Lush', 'Spotless', 'Modern',
];

const nouns = ['One Bedroom', 'Four Bedroom', 'Estate', 'Loft', 'Haven', 'Apartment', 'Victorian House',
  'McMansion', 'Townhouse',
];

const ending = [
  '- great to relax and unwind', 'perfect for weekend getaway', 'to escape the city',
  'on Main Street', 'on Broadway', 'in the hills', 'by the ocean', 'with amazing nightlife',
  'in the heart of downtown',
];

// eslint-disable-next-line func-names
const randomDescription = function () {
  return [randomElement(adjectives), randomElement(nouns), randomElement(ending)].join(' ');
};

module.exports = {
  dummyURL,
  descType,
  randomDescription,
};
