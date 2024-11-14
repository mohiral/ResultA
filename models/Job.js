const mongoose = require('mongoose');

// Job schema definition
const jobSchema = new mongoose.Schema({
  jobTitle: { type: String, required: true },
  salaryRange: { type: String },
  applyLink: { type: String },
  notifications: [
    {
      nameOfPost: { type: String },
      postDate: { type: String, required: true },
      shortInfo: { type: String },
      requirementTitle: { type: String },
      examTitle: { type: String },
      websiteLink: { type: String },
      applicationBegin: { type: String },
      lastDateApply: { type: String },
      lastDatePayExamFee: { type: String },
      examDate: { type: String },
      admitCardAvailable: { type: String },
      generalFee: { type: String },
      scStPhFee: { type: String },
      additionalInfo: { type: String },
      Title: { type: String },
      StartDate: { type: String },
      EndDate: { type: String },
      AgeRelaxation: { type: String }
    }
  ]
});

// Job model definition
const Job = mongoose.model('Job', jobSchema);

module.exports = Job;
