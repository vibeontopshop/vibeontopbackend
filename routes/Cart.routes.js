const controller = require("../controllers/cart.controller");
const {authJwt} = require("../middlewares/index");

module.exports = function(app){
    app.use(function(req,res,next){
        res.header(
            "Access-Control-Allow-Headers",
            "Origin, Content-Type, Accept"
        );
        next();
    });
    app.post("/api/cart/addtocart",[authJwt.verifyToken],controller.AddToCart)
    app.get('/api/cart',[authJwt.verifyToken],controller.getCart);
    app.delete('/api/Cart/remove',[authJwt.verifyToken],controller.RemoveFromCart)
}