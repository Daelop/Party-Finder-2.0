const controllers = require("../controllers");
const express = require("express");
const router = express.Router();

router.get("/discord/redirect", (req,res)=>{controllers.authController.discordAuth(req, res)} );
router.get("/discord/user", (req,res)=>{controllers.authController.checkUserFromToken(req, res)} );
router.get("/check/event/:id", (req,res)=>{controllers.authController.checkEventOwner(req, res)} );
router.get("/check/profile/:id", (req,res)=>{controllers.authController.checkProfileOwner(req, res)} );
module.exports = router;
