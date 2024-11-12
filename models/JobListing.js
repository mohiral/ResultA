const mongoose = require('mongoose');

const jobListingSchema = new mongoose.Schema({
  listingTitle: { type: String, required: true },
  applyLink: { type: String, required: true },
});

module.exports = mongoose.model('JobListing', jobListingSchema);
 