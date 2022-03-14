const express = require("express");
const Router = express.Router();
const userController = require("./../controller/userController");
Router.route("/").get(userController.getUsers).post(userController.postUser);
Router.route("/:userId").patch(userController.updateFields);
module.exports = Router;
