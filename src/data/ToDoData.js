const getNamesQuery = require("./get-names");
const addTaskQuery = require("./add-task");
const deleteTaskQuery = require("./delete-task");
const modifyTaskQuery = require("./modify-task");
const markRealizedQuery = require("./mark-realized");
const revertRealizedQuery = require("./revert-realized");
class ToDoData {
  constructor(dbConn) {
    this.dbConn = dbConn;
  }

  getAllTasks() {
    return new Promise((resolve, reject) => {
      this.dbConn.query(getNamesQuery, (err, results, fields) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
  }

  addNewTask(task) {
    return new Promise((resolve, reject) => {
      this.dbConn.query(addTaskQuery(task), (err, results, fields) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
  }
  deleteTask(taskId) {
    return new Promise((resolve, reject) => {
      this.dbConn.query(
        deleteTaskQuery(taskId.taskId),
        (err, results, fields) => {
          if (err) {
            reject(err);
          } else {
            resolve(results);
          }
        }
      );
    });
  }
  modifyTask(taskId, newTask) {
    return new Promise((resolve, reject) => {
      this.dbConn.query(modifyTaskQuery(taskId, newTask), (err, results, fields) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
  }
  markRealized(taskId){
    return new Promise((resolve, reject) => {
      this.dbConn.query(markRealizedQuery(taskId), (err,results,fields) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      })
    })
  }
  revertRealized(taskId){
    return new Promise((resolve, reject) => {
      this.dbConn.query(revertRealizedQuery(taskId), (err,results,fields) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      })
    })
  }
}
module.exports = ToDoData;
