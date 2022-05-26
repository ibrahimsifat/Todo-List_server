// external import
const Todo = require("../../models/todoModel");
// router controller
const getTodoDB = async (_req, res) => {
  // const todos = await todo.find({ category: "women-fashion" }).exec();
  try {
    const todos = await Todo.find({}).exec();
    res.json(todos);
  } catch {
    (err) => {
      console.log(err);
    };
  }
};

const addTodoDB = (req, res) => {
  const todoObject = {
    title: req.body.title,
    description: req.body.description,
    category: req.body.category,
  };
  const newTodo = new Todo(todoObject);
  newTodo.save((err) => {
    if (err) {
      res.status(500).json({
        error: err.massage,
      });
    } else {
      res.status(200).json({
        massage: "successfully added the user",
      });
    }
  });
};

const getTodoByIdDB = async (req, res) => {
  const id = req.params.id;
  const user = await Todo.findById(id);
  console.log(id);
  res.json(user);
};
/// add many todos addManyTodosDB

const addManyTodoDB = (req, res) => {
  Todo.insertMany(req.body, (err) => {
    if (err) {
      res.status(500).json({
        error: err.massage,
      });
    } else {
      res.status(200).json({
        massage: "successfully added the users",
      });
    }
  });
};

const updateATodo = async (req, res) => {
  try {
    const userId = req.params.id;
    const filter = { _id: userId };
    const update = {
      title: req.body.title,
      description: req.body.description,
    };
    const option = { new: true };
    console.log(req.body.title, req.body.description);
    const result = await Todo.findOneAndUpdate(filter, update, option);
  } catch {
    (err) => {
      console.log(err);
    };
  }
  res.send("updated successfully");
};

const deleteOneDB = async (req, res) => {
  const userId = req.params.id;
  const todo = await Todo.findByIdAndRemove(userId);
  res.send(todo);
};

const deleteMany = async (req, res) => {
  Todo.deleteMany({ category: { $in: "men-fashion" } })
    .then(function () {
      console.log("Data deleted"); // Success
    })
    .catch(function (error) {
      console.log(error); // Failure
    });
};
module.exports = {
  deleteOneDB,
  updateATodo,
  addTodoDB,
  getTodoDB,
  addManyTodoDB,
  getTodoByIdDB,
  deleteMany,
};
