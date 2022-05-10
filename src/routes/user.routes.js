const router = require("express").Router();

const userController = require("../controllers/user.controllers");

module.exports = (app) => {
  // Create A New User
  router.post("/", userController.create);

  // Retrieve All Users
  router.get("/", userController.findAll);

  //Retrieve A Single user  with id
  router.get("/:id", userController.findOne);

  // Update A User With Id
  router.put("/:id", userController.update);

  //Delete A User With Id
  router.delete("/:id", userController.delete);

  app.use("/api/users", router);
  //response on insonia // Cannot GET /api/users

  // error handler
  app.use((err, req, res, next) => {
    res.status(err.statusCode || 500).send({
      message: err.message,
    });
    next();
  });
};
