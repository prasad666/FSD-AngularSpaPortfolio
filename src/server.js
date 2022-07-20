(path = require("path")),
  (mongoose = require("mongoose")),
  (cors = require("cors")),
  (bodyParser = require("body-parser")),
  (mongoDb = require("./backend/data/testimonials"));

let Testimonial = require("./backend/models/Testimonial");

mongoose.Promise = global.Promise;
mongoose
  .connect(mongoDb.db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(
    () => {
      console.log("Database sucessfully connected ");
      Testimonial.findOne({}, async (err, doc) => {
        if (!doc) {
          const testimonial = new Testimonial();
          await testimonial.setInitialData();
        }
      });
    },
    (error) => {
      console.log("Database error: " + error);
    }
  );

const express = require("express");
const app = express();
app.use(cors());

require("dotenv").config();

const PORT = process.env.PORT || 80;

function initTestimonials(data) {}

//server logic
app.listen(PORT, () => {
  console.log(`App listening on ${PORT} port`);
});

app.get("/testimonials", (req, res) => {
  Testimonial.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});
