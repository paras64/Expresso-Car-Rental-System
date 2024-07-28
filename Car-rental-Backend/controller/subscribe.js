const model = require("../model/subscribe.js");
const Subscribe = model.Subscribe;

exports.createSubscribe = async (req, res) => {
  const subscribe = await new Subscribe(req.body);
  subscribe
    .save()
    .then((data) => {
      res.status(201).send(data);
    })
    .catch((err) => {
      res.status(401).json(err);
    });
};
exports.getSubscribers = async (req, res) => {
  
  try {
    const doc = await Subscribe.find();
    res.status(200).json({ doc });
  } catch (err) {
    res.status(401).json({ nessage: "No message has been found" });
  }
};
