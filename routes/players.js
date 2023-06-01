const express = require('express');
const router = express.Router();
const playersController = require('../controllers/players');

// GET /api/players
router.get('/', playersController.getAllPlayers);

// POST /api/players
router.post('/', playersController.createPlayer);

// GET /api/players/:id
router.get('/:id', playersController.getPlayerById);

// PUT /api/players/:id
router.put('/:id', playersController.updatePlayer);

// DELETE /api/players/:id
router.delete('/:id', playersController.deletePlayer);

module.exports = router;
