// роуты для мероприятий

const express = require('express');
const {createEvent, getEventByID, deleteEventByID, changeEventByID, searchEvents} = require('../controllers/event-controller');

const router = express.Router();
const jsonParser = express.json();

router.get('/events/search/', jsonParser, searchEvents);
//router.get('/events', jsonParser, getEvents);
router.post('/events', jsonParser, createEvent);
router.get('/events/:id', jsonParser, getEventByID);
router.delete('/events/:id', jsonParser, deleteEventByID);
router.put('/events/:id', jsonParser, changeEventByID);

module.exports = router;