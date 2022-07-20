const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Testimonial = new Schema(
  {
    name: {
      type: String,
    },
    website: {
      type: String,
    },
    comments: {
      type: String,
    },
    photo: {
      type: String,
    },
  },
  {
    collection: "testimonials",
  }
);

Testimonial.methods.setInitialData = async function () {
  return this.collection.insertMany(mongoDb.seedData, (err) => {
    if (err) {
      return console.error(err);
    }
    console.log("Initial documents inserted to Category Collection");
  });
};
module.exports = mongoose.model("Testimonial", Testimonial);
