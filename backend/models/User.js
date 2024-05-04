const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, required: true }
});

const User = mongoose.model('User', userSchema);

const projDetails = new mongoose.Schema({
  fypTitle: { type: String, required: true },
  Supervisor: { type: String, required: true },
  Members: [{ type: String, required: true }],
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
}
}); 

const Project = mongoose.model('Project',projDetails)


const proposalSubmitted = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  proposalFile: { type: String, required: true }, // Store file path or URL
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
}
});

const Proposal = mongoose.model('Proposal', proposalSubmitted); 


const ReportSubmitted = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: false },
  reportFile: { type: String, required: false},
  dateSubmitted: {type: Date, default: Date.now},
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
}
});

const Report = mongoose.model('Report', ReportSubmitted); 

module.exports = {User,Project,Proposal,Report};
