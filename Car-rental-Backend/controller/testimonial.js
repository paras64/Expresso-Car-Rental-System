const model = require("../model/testimonial.js");
const Testimonial = model.Testimonial;

exports.getTestimonialData = (req, res) => {
  if (req.query && req.query.limit) {
    const testimonials = Testimonial.find().limit(req.query.limit);
    testimonials
      .then((data) => {
        res.status(200).json(data);
      })
      .catch((err) => {
        res
          .status(200)
          .json({ message: "Something went wrong, please again later", err });
      });
  } else {
    const testimonials = Testimonial.find();
    testimonials
      .then((data) => {
        res.status(200).json(data);
      })
      .catch((err) => {
        res.status(200).json({ message: "Something went wrong" });
      });
  }
};
exports.createTestimonial = (req, res) => {
  const testimonial = new Testimonial(req.body);
  testimonial
    .save()
    .then((data) => {
      res
        .status(201)
        .json({ message: "Feedback has been recieved, Thankyou!!" });
    })
    .catch((err) => {
      res.status(400).json({ message: "Something went wrong" });
    });
};
exports.deleteTestimonial = async (req, res) => {
  try {
    const { ID } = req.params;
    const doc = await Testimonial.findByIdAndDelete(ID);
    res.status(200).json({ message: "User has been deleted" });
  } catch (err) {
    res.status(400).json({ message: "Something went wrong, deleteing failed" });
  }
};
