const asyncHandler = require("../../helpers/asyncHandler");

exports.getHome = asyncHandler(async (req, res, next) => {

    res.render("home", {
        title: null
    })
})