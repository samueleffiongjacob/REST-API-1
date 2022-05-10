const User = require("../models/user.models");

// Create and Save a new User.

exports.create = (req, res) => {
  //validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }

  // Create message:a User.

  const { id, email, phone_number } = req.body;
  const user = new User(id, email, phone_number);

  //Save User In the Database.

  User.create(user, (err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Some Error Occured While Creating The Users",
      });
    else res.send(data);
  });
};

//Retrieve ALL Users From database

exports.findAll = (req, res) => {
  User.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Some Error Occured While Creating The Users",
      });
    else res.send(data);
  });
};

// Find a Single User By Id

exports.findOne = (req, res) => {
  User.findById(Number(req.params.id), (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not Found User With Id ${req.params.id}.`,
        });
      } else {
        res.status(500).send({
          message: "Error retriving user with id" + req.params.id,
        });
      }
    } else res.send(data);
  });
};

//Update a User Identified by the Id in the request

exports.update = (req, res) => {
  //Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content Can Not be Empty",
    });
  }

  const { id, email, phone_number } = req.body;
  User.updateById(
    Number(req.params.id),
    new User(id, email, phone_number),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not Found User With Id ${req.params.id}.`,
          });
        } else {
          res.status(500).send({
            message: "Error Updating  user with id" + req.params.id,
          });
        }
      } else res.send(data);
    }
  );
};

// Delete a user with a specified Id in the request
exports.delete = (req, res) => {
  User.delete(Number(req.params.id), (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not Found User With Id ${req.params.id}.`,
        });
      } else {
        res.status(500).send({
          message: "Error could not Delete user with id" + req.params.id,
        });
      }
    } else res.send({ message: `user Was Sucessfully Deleted` });
  });
};
