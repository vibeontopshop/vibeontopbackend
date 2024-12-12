const { verifySignUp, authJwt } = require("../middlewares");
const controller = require("../controllers/auth.controllers");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, Content-Type, Accept"
    );
    next();
  });

  app.post(
    "/api/auth/signin",
    controller.signin
  );

  app.post("/api/auth/signup", controller.signup);
  app.get('/api/auth/getuser', [authJwt.verifyToken], controller.getusers);
};