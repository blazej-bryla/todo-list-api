class MockDataStore {
  constructor(data) {
    this.data = data;
  }

  getAllTasks() {
    return new Promise((resolve, reject) => {
      resolve(this.data);
    });
  }

  addNewTask(task) {
    return new Promise((resolve, reject) => {
      this.data = [...this.data, task];
      resolve(this.data);
    });
  }
  deleteTask(taskId) {
    return new Promise((resolve, reject) => {
      this.data = this.data.filter((item) => item.id !== taskId);
      resolve(this.data);
    });
  }

  modifyTask(taskId, newTask) {
    return new Promise((resolve, reject) => {
      this.data = this.data.reduce((acc, cur) => {
        if (cur.id === taskId) {
          cur.task = newTask;
          acc.push(cur);
        } else {
          acc.push(cur);
        }

        return acc;
      }, []);

      resolve(this.data);
    });
  }
  markRealized(taskId) {
    return new Promise((resolve, reject) => {
      this.data = this.data.reduce((acc, cur) => {
        if (cur.id === taskId) {
          cur.isRealized = 1;
          acc.push(cur);
        } else {
          acc.push(cur);
        }

        return acc;
      }, []);

      resolve(this.data);
    });
  }
  revertRealized(taskId) {
    return new Promise((resolve, reject) => {
      this.data = this.data.reduce((acc, cur) => {
        if (cur.id === taskId) {
          cur.isRealized = cur.isRealized === 1 ? 0 : 1;
          acc.push(cur);
        } else {
          acc.push(cur);
        }

        return acc;
      }, []);

      resolve(this.data);
    });
  }
}
module.exports = MockDataStore;
