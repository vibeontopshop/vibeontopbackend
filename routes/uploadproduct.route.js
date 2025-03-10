const controller = require("../controllers/uploadproduct.controllers");
const upload = require("../middlewares/cloudinary");

module.exports = function (app) {
    app.use(function (req, res, next) {
      res.header("Access-Control-Allow-Headers", "Origin, Content-Type, Accept");
      next();
    });

    app.post(
        "/api/productdetails/addproduct",
        upload.array("images",6),
        controller.Addproduct
    ),
    app.post(
        "/api/productdetails/addproductdetails",
        controller.AddProductDetails
    ),
    app.post(
        "/api/productdetails/updateproduct",
        upload.array("images",6),
        controller.updateproduct
    ),
    app.get(
        "/api/productdetails/getproduct",
        controller.getProduct
    ),
    app.get(
        "/api/product/:id",controller.FindProductById
    )
}