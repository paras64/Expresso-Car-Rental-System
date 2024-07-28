const Model = require("../model/faq");
const FaqModel = Model.FaqModel;

exports.CreateFaq = async (req, res) => {
  const { FaqData } = req.body;
  const faq = await new FaqModel(FaqData);
  faq
    .save()
    .then((data) => {
      res.status(201).json({ message: "New Faq has been created", data: data });
    })
    .catch((err) => {
      console.log(err);
      res.json({ message: "Something went wrong", err: err });
    });
};
exports.getAllFaq = async (req, res) => {
  const faq = FaqModel.find();
  faq
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.json({ message: "Something went wrong", err: err });
    });
};

exports.ModifyFaq = async (req, res) => {
  try {
    const { Index, FaqBox } = req.body;
    const doc = await FaqModel.findByIdAndUpdate(
      { _id: Index },
      { $set: FaqBox },
      { new: true }
    );
    res.status(201).json({ message: "FAQ has been updated" });
  } catch (err) {
    res.status(400).json({ message: "Updating failed" });
  }
};
exports.DeleteFaq = async (req, res) => {
  try {
    const Index = req.params.Index;
    const doc = await await FaqModel.findByIdAndDelete({ _id: Index });
    res.status(201).json({ message: "FAQ has been deleted" });
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: "Deleting failed" });
  }
};
