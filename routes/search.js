const router = require('express').Router();
const searchController = require('../controllers/search.controller');

router.post('/search', searchController.searchByQuery);

module.exports = router;