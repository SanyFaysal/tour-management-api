const Tour = require('../models/tour');

exports.getTourService = async (queries) => {
  const tour = await Tour.find({})
    .skip(queries.skip)
    .limit(queries.limit)
    .select(queries.fields)
    .sort(queries.sort);
  const totalTour = await Tour.countDocuments();
  const pageCount = Math.ceil(totalTour / queries.limit);
  return { tour, totalTour, pageCount };
};
exports.getATourService = async (id) => {
  const tour = await Tour.find({ _id: id });
  return tour;
};
exports.createTourService = async (data) => {
  const result = await Tour.update(data);
  return result;
};
exports.updateATourService = async (id, data) => {
  const result = await Tour.updateOne(
    { _id: id },
    { $set: data },
    { runValidators: true }
  );
  return result;
};
exports.trendingTourService = async () => {
  const result = await Tour.find({}).sort({ viewed: -1 }).limit(3);
  return result;
};
exports.cheapestTourService = async () => {
  const result = await Tour.find({}).sort({ price: 1 }).limit(3);
  return result;
};
