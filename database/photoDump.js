// This file reserved for Amazon S3 link paths for dummy photos served up to seeding script

const dummyURL = [
  'https://bougiemoreplaces.s3-us-west-1.amazonaws.com/MP1.jpg',
  'https://bougiemoreplaces.s3-us-west-1.amazonaws.com/MP2.jpg',
  'https://bougiemoreplaces.s3-us-west-1.amazonaws.com/MP3.jpg',
  'https://bougiemoreplaces.s3-us-west-1.amazonaws.com/MP4.jpg',
  'https://bougiemoreplaces.s3-us-west-1.amazonaws.com/MP5.jpg',
  'https://bougiemoreplaces.s3-us-west-1.amazonaws.com/MP6.jpg',
  'https://bougiemoreplaces.s3-us-west-1.amazonaws.com/MP7.jpg',
  'https://bougiemoreplaces.s3-us-west-1.amazonaws.com/MP8.jpg',
  'https://bougiemoreplaces.s3-us-west-1.amazonaws.com/MP9.jpg',
  'https://bougiemoreplaces.s3-us-west-1.amazonaws.com/MP10.jpg',
  'https://bougiemoreplaces.s3-us-west-1.amazonaws.com/MP11.jpg',
  'https://bougiemoreplaces.s3-us-west-1.amazonaws.com/MP12.jpg',
  'https://bougiemoreplaces.s3-us-west-1.amazonaws.com/MP13.jpg',
  'https://bougiemoreplaces.s3-us-west-1.amazonaws.com/MP14.jpg',
  'https://bougiemoreplaces.s3-us-west-1.amazonaws.com/MP15.jpg',
  'https://bougiemoreplaces.s3-us-west-1.amazonaws.com/MP16.jpg',
  'https://bougiemoreplaces.s3-us-west-1.amazonaws.com/MP17.jpg',
  'https://bougiemoreplaces.s3-us-west-1.amazonaws.com/MP18.jpg',
  'https://bougiemoreplaces.s3-us-west-1.amazonaws.com/MP19.jpg',
  'https://bougiemoreplaces.s3-us-west-1.amazonaws.com/MP20.jpg',
  'https://bougiemoreplaces.s3-us-west-1.amazonaws.com/MP21.jpg',
  'https://bougiemoreplaces.s3-us-west-1.amazonaws.com/MP22.jpg',
  'https://bougiemoreplaces.s3-us-west-1.amazonaws.com/MP23.jpg',
  'https://bougiemoreplaces.s3-us-west-1.amazonaws.com/MP24.jpg',
  'https://bougiemoreplaces.s3-us-west-1.amazonaws.com/MP25.jpg',
  'https://bougiemoreplaces.s3-us-west-1.amazonaws.com/MP26.jpg',
  'https://bougiemoreplaces.s3-us-west-1.amazonaws.com/MP27.jpg',
  'https://bougiemoreplaces.s3-us-west-1.amazonaws.com/MP28.jpg',
  'https://bougiemoreplaces.s3-us-west-1.amazonaws.com/MP29.jpg',
  'https://bougiemoreplaces.s3-us-west-1.amazonaws.com/MP30.jpg',
  'https://bougiemoreplaces.s3-us-west-1.amazonaws.com/MP31.jpg',
  'https://bougiemoreplaces.s3-us-west-1.amazonaws.com/MP32.jpg',
  'https://bougiemoreplaces.s3-us-west-1.amazonaws.com/MP33.jpg',
  'https://bougiemoreplaces.s3-us-west-1.amazonaws.com/MP34.jpg',
  'https://bougiemoreplaces.s3-us-west-1.amazonaws.com/MP35.jpg',
  'https://bougiemoreplaces.s3-us-west-1.amazonaws.com/MP36.jpg',
  'https://bougiemoreplaces.s3-us-west-1.amazonaws.com/MP37.jpg',
  'https://bougiemoreplaces.s3-us-west-1.amazonaws.com/MP38.jpg',
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
