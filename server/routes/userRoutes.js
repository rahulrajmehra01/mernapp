const express = require("express");
const router = express.Router();

const controllers = require("../controllers/controllers");

router.get("/", controllers.fetchNotes);
router.get("/:id", controllers.fetchNote);
router.post("/", controllers.createNote);
router.put("/:id", controllers.updateNote);
router.delete("/:id", controllers.deleteNote);

module.exports = router;
