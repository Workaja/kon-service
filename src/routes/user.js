const router = require("express").Router()
const UserController = require("../controller/user-controller")

router.get("/login", UserController.create)

module.exports = router