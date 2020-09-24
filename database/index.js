const mongoose = require('mongoose');
const faker = require('faker');

mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  // we're connected!
  console.log(db.readyState);
});

// ========= CREATE DB SCHEMA =============
const Listing = mongoose.Schema({
  id: Number,
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
});

// =========== CREATE MODEL BASED ON SCHEMA ==============
const singleListing = mongoose.model('singleListing', Listing);

// =========== CREATE RECORDS==============

const listingRecord = new singleListing({
  id: faker.random.number(),
  description: null,
  photo: null,
  popularity: {
    newListing: null,
    noReviews: null,
    stars: null,
    reviewCount: null,
  },
  type: null,
  heart: true,
  beds: 4,
  rate: 295.00,
  label: {
    superhost: null,
    plus: null,
  },
});

listingRecord.save((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(listingRecord);
    console.log('Record saved to DB!');
  }
});

module.exports = {
};

/*
const Listing = new schema({
  id: Number,
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
});
*/
