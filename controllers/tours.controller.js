const Tour = require('../models/tour');
const {
  getTourService,
  createTourService,
  getATourService,
  updateATourService,
  trendingTourService,
  cheapestTourService,
} = require('../services/tour.service');

exports.getTours = async (req, res) => {
  try {
    const filters = req.query;
    const queries = {};

    if (filters.fields) {
      const fields = filters.fields.split(',').join(' ');
      queries.fields = fields;
    }
    const { page = 1, limit = 3 } = filters;
    const skip = (parseInt(page) - 1) * parseInt(limit);
    queries.skip = skip;
    queries.limit = parseInt(limit);
    const { tour, totalTour, pageCount } = await getTourService(queries);
    res.status(200).json({
      status: 'Success',
      totalTour,
      pageCount,
      data: tour,
    });
  } catch (error) {
    res.status(400).json({
      status: 'Failed',
      error: error.message,
    });
  }
};
exports.getATour = async (req, res) => {
  try {
    const { id } = req.params;
    const tour = await getATourService(id);

    res.status(200).json({
      status: 'Success',
      data: tour,
    });
  } catch (error) {
    res.status(400).json({
      status: 'Failed',
      error: error.message,
    });
  }
};
exports.createTour = async (req, res) => {
  try {
    const data = req.body;
    const result = await createTourService(data);
    res.status(200).json({
      status: 'success',
      message: 'Successfully added tour ',
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: 'failed',
      error: error.message,
    });
  }
};
exports.updateATour = async (req, res) => {
  try {
    const data = req.body;
    const { id } = req.params;
    const result = await updateATourService(id, data);
    res.status(200).json({
      status: 'success',
      message: 'Successfully added tour ',
    });
  } catch (error) {
    res.status(400).json({
      status: 'failed',
      error: error.message,
    });
  }
};
exports.trendingTour = async (req, res) => {
  try {
    const result = await trendingTourService();
    res.status(200).json({
      status: 'Success',
      message: 'Successfully get the data',
      data: result,
    });
  } catch (error) {
    req.status(400).json({
      status: 'failed',
      error: error.message,
    });
  }
};
exports.cheapestTour = async (req, res) => {
  try {
    const result = await cheapestTourService();
    res.status(200).json({
      status: 'Success',
      message: 'Successfully get the data',
      data: result,
    });
  } catch (error) {
    req.status(400).json({
      status: 'failed',
      error: error.message,
    });
  }
};
