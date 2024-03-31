const controllers = require('../controllers');
const express = require('express');
const router = express.Router();

router.post('/create', controllers.eventUserController.createEventUser);
router.get('/event/:id', controllers.eventUserController.getEventUsersByEventId);
router.get('/user/:id', controllers.eventUserController.getEventUsersByUserId);
router.get('/:id', controllers.eventUserController.getEventUserById);
router.delete('/:id', controllers.eventUserController.deleteEventUser);
router.put('/:id', controllers.eventUserController.updateEventUser);
module.exports = router;