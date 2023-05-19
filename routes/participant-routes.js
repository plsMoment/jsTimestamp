// роуты для участников

const express = require('express');
const { createParticipant } = require('../controllers/participant-controller');

const router = express.Router();
const jsonParser = express.json();

router.post('/events/:id/participants', jsonParser, createParticipant);

module.exports = router;