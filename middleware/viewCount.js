const Tour = require('../models/tour');

exports.viewCount = async (req, res, next) => {
  const { id } = req.params;
  await Tour.updateOne({ _id: id }, { $inc: { viewed: 1 } });
  next();
};
