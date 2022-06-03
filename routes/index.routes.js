const router = require("express").Router();

router.use("/mentors", require('./mentors.routes'))

// router.use("/profile", require('./profile.routes'))

router.use("/", require('./questions.routes'))

router.use("/auth", require('./auth.routes'))

router.use("/upload", require('./upload.routes'))

router.get("/", (req, res, next) => {
  res.json("All good in here");
})

module.exports = router