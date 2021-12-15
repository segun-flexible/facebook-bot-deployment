const { getHome, webhookGet, webhookPost } = require("../../controllers/home/home")

const homeRouter = require("express").Router()

//HOME
homeRouter.route("/").get(getHome)

//WEBHOOK
homeRouter.route("/webhook").get(webhookGet).post(webhookPost)

module.exports = homeRouter