const mongoose = require('mongoose');

// Custom date format function
const formatDate = (date) => {
  const d = new Date(date);
  let day = d.getDate();
  let month = d.getMonth() + 1; // Months are 0-indexed
  const year = d.getFullYear();
 
  // Add leading zeros if day or month is a single digit
  if (day < 10) day = '0' + day;
  if (month < 10) month = '0' + month;

  return `${day}-${month}-${year}`;
}

// Job schema definition
const jobSchema = new mongoose.Schema({
  jobTitle: { type: String, required: true },
  salaryRange: { type: String },
  applyLink: { type: String },
  notifications: [
    {
      nameOfPost: { type: String },
      postDate: { 
        type: Date, 
        required: true, 
        set: (value) => {
          // Format and return date as string
          return formatDate(value); 
        }
      },
      shortInfo: { type: String },
      requirementTitle: { type: String },
      examTitle: { type: String },
      websiteLink: { type: String },
      applicationBegin: { 
        type: Date, 
        set: (value) => {
          return formatDate(value);
        }
      },
      lastDateApply: { 
        type: Date, 
        set: (value) => {
          return formatDate(value);
        }
      },
      lastDatePayExamFee: { 
        type: Date, 
        set: (value) => {
          return formatDate(value);
        }
      },
      examDate: { 
        type: String,
      },
      admitCardAvailable: { type: String },
      generalFee: { type: String },
      scStPhFee: { type: String },
      additionalInfo: { type: String },
      Title: { type: String },
      StartDate: {  type: String, 
       
      },
      EndDate: { 
        type: String, 
        
      },
      AgeRelaxation: { type: String }
    }
  ]
});

// Job model definition
const Job = mongoose.model('Job', jobSchema);

module.exports = Job;
