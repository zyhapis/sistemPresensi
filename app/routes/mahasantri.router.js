const mahasantriController = require("../controllers/mahasantri.controller");
const router = require("express").Router();

router.get("/", mahasantriController.index);
router.get("/:id", mahasantriController.show);
router.post("/", mahasantriController.create);
router.put("/:id", mahasantriController.update);
router.delete("/:id", mahasantriController.destroy);

module.exports = router;