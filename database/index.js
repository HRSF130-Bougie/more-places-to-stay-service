/* eslint-disable no-console */
const mongoose = require('mongoose');
const faker = require('faker');
const dummy = require('./photoDump.js');

mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  // we're connected!
  console.log(db.readyState);
});

// ========= CREATE DB SCHEMA =============
const Listing = mongoose.Schema({
  description: String,
  photo: String,
  popularity: {
    newListing: Boolean,
    noReviews: Boolean,
    stars: Number,
    reviewCount: Number,
  },
  type: String,
  heart: Boolean,
  beds: Number,
  rate: Number,
  label: {
    superhost: Boolean,
    plus: Boolean,
  },
  dreamHome: Number,
  vacationPlaces: Number,
  mobileListings: Number,
});

// =========== CREATE MODEL BASED ON SCHEMA ==============
const SingleListing = mongoose.model('singleListing', Listing);

const awsURL = dummy.dummyURL;
const listingType = dummy.descType;

// faker.lorem.words(),

const initializeData = () => {
  // Drop Database
  db.dropDatabase();

  // =========== CREATE SEEDED RECORDS==============
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < 100; i++) {
    const listingRecord = new SingleListing({
      description: dummy.randomDescription(),
      photo: awsURL[Math.floor(Math.random() * awsURL.length)],
      popularity: {
        newListing: faker.random.boolean(),
        noReviews: faker.random.boolean(),
        stars: faker.finance.amount(3.25, 5, 2),
        reviewCount: faker.random.number({
          min: 12,
          max: 227,
        }),
      },
      type: listingType[Math.floor(Math.random() * listingType.length)],
      heart: false,
      beds: faker.random.number({
        min: 1,
        max: 8,
      }),
      rate: faker.commerce.price(295, 1295),
      label: {
        superhost: faker.random.boolean(),
        plus: faker.random.boolean(),
      },
      dreamHome: faker.random.number({
        min: 0,
        max: 3,
      }),
      vacationPlaces: faker.random.number({
        min: 0,
        max: 3,
      }),
      mobileListings: faker.random.number({
        min: 0,
        max: 3,
      }),

    });

    listingRecord.save((err) => {
      if (err) {
        console.log(err);
      } else {
        console.log('Successfully saved seeded record to DB v2!');
      }
    });
  }
};

// Initialize data call
initializeData();

// ================ RETRIEVE (GET) SAVED DUMY DATA ===============
const retrieveData = (callback) => {
  // initializeData();
  console.log('reached back end side');
  SingleListing.aggregate([{$sample: { size:12 }}]).exec((err, response) => {
  if (err) {
    callback(err);
  } else {
    console.log(response);
    callback(null, response);
  }})

};

module.exports = {
  initializeData,
  retrieveData,
};
