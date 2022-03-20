class ToDoApp {
  constructor(dataStore) {
    this.dataStore = dataStore;
  }

  async getAllTasks() {
    const allTasks = await this.dataStore.getAllTasks();
    return allTasks;
  }

  async addTask(task) {
    const addTask = await this.dataStore.addNewTask(task);
    return addTask;
  }

  async deleteTask(taskId) {
    const deleteTask = await this.dataStore.deleteTask(taskId);
    return deleteTask;
  }

  async modifyTask(taskId, newTask) {
    const modifyTask = await this.dataStore.modifyTask(taskId, newTask);
    return modifyTask;
  }
  async markRealized(taskId){
    const markRealized = await this.dataStore.markRealized(taskId);
    return markRealized
  }
  async revertRealized(taskId){
    const revertRealized = await this.dataStore.revertRealized(taskId);
    return revertRealized
  }
}

module.exports = ToDoApp;
