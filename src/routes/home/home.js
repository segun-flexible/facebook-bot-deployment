const { getHome } = require("../../controllers/home/home")

const homeRouter = require("express").Router()

//HOME
homeRouter.route("/").get(getHome)

module.exports = homeRouter