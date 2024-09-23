const mongoose = require('mongoose');

const memberSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

<<<<<<< HEAD
const Member = mongoose.model('Member', memberSchema);
module.exports = Member;
=======
module.exports = mongoose.model('Member', memberSchema);
>>>>>>> c62f0791693352ac59bf9146ceb028ddacc5a67b
