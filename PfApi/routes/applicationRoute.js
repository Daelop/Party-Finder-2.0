const controllers = require('../controllers');
const express = require('express');
const router = express.Router();

router.post('/create', controllers.applicationController.createApplication);
router.get('/event/:id', controllers.applicationController.getApplicationsByEventId);
router.get('/user/:id', controllers.applicationController.getApplicationsByUserId);
router.delete('/delete/:id', controllers.applicationController.deleteApplication);
router.post('/accept', controllers.applicationController.acceptApplication);
module.exports = router;