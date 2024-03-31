const express = require("express");
const controllers = require("../controllers");
const app = express();
const router = express.Router();
app.use(express.json());

router.post("/", (req,res)=>{controllers.userController.getUserFromDiscord(req, res)});
router.put("/:id",(req, res)=>{ controllers.userController.updateUser(req, res)});
router.get("/:id", (req, res)=>{controllers.userController.getUser(req, res)});

module.exports = router;
