const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const cors = require("cors");
const { dbConfig } = require("./config");
const ToDoApp = require("./src/app");
const ToDoData = require("./src/data/ToDoData");

const app = express();
const port = 3000;

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const dbConn = mysql.createConnection(dbConfig);
dbConn.connect(function (err) {
  if (err) throw err;
  console.log("Connected to database!");
});

const toDoData = new ToDoData(dbConn);
const toDoApp = new ToDoApp([], toDoData);

app.get("/tasks", async (req, res) => {
  try {
    const allNames = await toDoApp.getAllTasks();
    res.json({ data: allNames }).status(200);
  } catch (err) {
    res.json({ data: [], error: "Something went wrong..." }).status(500);
  }
});

app.post("/task", async (req, res) => {
  const { task } = req.body;
  try {
    const addTask = await toDoApp.addTask(task);
    const newTasks = await toDoApp.getAllTasks();
    res.json({ success: true, info: addTask, data: { newTasks } }).status(201);
  } catch (err) {
    res.json({ data: [], error: "Something went wrong..." }).status(500);
  }
});

app.delete("/task", async (req, res) => {
  const taskId = req.body;
  try {
    const deleteTask = await toDoApp.deleteTask(taskId);
    const newTasks = await toDoApp.getAllTasks();
    res
      .json({ succes: true, info: deleteTask, data: { newTasks } })
      .status(200);
  } catch (err) {
    res.json({ data: [], error: "Something went wrong..." }).status(500);
  }
});

app.patch("/task", async (req, res) => {
  const taskId = req.body.taskId;
  const newTask = req.body.newTask;
  try {
    const modifyTask = await toDoApp.modifyTask(taskId, newTask);
    const newTasks = await toDoApp.getAllTasks();
    res
      .json({ succes: true, info: modifyTask, data: { newTasks } })
      .status(200);
  } catch (err) {
    res.json({ data: [], error: "Something went wrong..." }).status(500);
  }
});

app.patch("/realized", async (req, res) => {
  const taskId = req.body.taskId;
  try {
    const markRealized = await toDoApp.markRealized(taskId);
    const newTasks = await toDoApp.getAllTasks();
    res
      .json({ succes: true, info: markRealized, data: { newTasks } })
      .status(200);
  } catch (err) {
    res.json({ data: [], error: "Something went wrong..." }).status(500);
  }
});

app.patch("/revert", async (req, res) => {
  const taskId = req.body.taskId;
  try {
    const revertRealized = await toDoApp.revertRealized(taskId);
    const newTasks = await toDoApp.getAllTasks();
    res
      .json({ succes: true, info: revertRealized, data: { newTasks } })
      .status(200);
  } catch (err) {
    res.json({ data: [], error: "Something went wrong..." }).status(500);
  }
});

app.get("/*", (req, res) => {
  res.send({ error: "Nie ma takiej metody!", data: {} });
});

app.post("*", (req, res) => {
  res.json({ error: "Nie ma takiej metody!", data: {} });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
