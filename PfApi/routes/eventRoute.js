const controllers = require("../controllers");
const express = require("express");
const router = express.Router();

router.get('/',(req, res)=>{ controllers.eventController.getEvents(req, res)});
router.get('/:id',(req, res)=>{ controllers.eventController.getEventById(req, res)});
router.post('/',(req, res)=>{ controllers.eventController.createEvent(req, res)});
router.put('/:id',(req, res)=>{ controllers.eventController.updateEvent(req, res)});
router.delete('/:id',(req, res)=>{ controllers.eventController.cancelEvent(req, res)});

module.exports = router;