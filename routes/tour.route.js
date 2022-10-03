const express = require('express');
const tourController = require('../controllers/tours.controller');
const { viewCount } = require('../middleware/viewCount');

const router = express.Router();

router.route('/trending').get(tourController.trendingTour);
router.route('/cheapest').get(tourController.cheapestTour);

router.route('/').get(tourController.getTours).post(tourController.createTour);

router
  .route('/:id')
  .get(viewCount, tourController.getATour)
  .patch(tourController.updateATour);

module.exports = router;
