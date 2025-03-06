const controller = require("../controllers/uploadproduct.controllers");
const upload = require("../middlewares/cloudinary");

module.exports = function (app) {
    app.use(function (req, res, next) {
      res.header("Access-Control-Allow-Headers", "Origin, Content-Type, Accept");
      next();
    });

    app.post(
        "/api/productdetails/addproduct",
        upload.single("image"),
        controller.Addproduct
    ),
    app.post(
        "/api/productdetails/addproductdetails",
        controller.AddProductDetails
    )
}