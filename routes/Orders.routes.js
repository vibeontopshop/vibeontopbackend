const controller = require("../controllers/Orders.controller");
const {authJwt} = require("../middlewares/index")

module.exports = function(app) {
    app.use(function(req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "Origin, Content-Type, Accept"
        );
        next();
    });
    app.post("/api/Orders/createOrders",[authJwt.verifyToken],controller.createOrder);
}