const ToDoApp = require("../src/app.js");
const MockDataStore = require("../mocks/mock.datastore");

const mockData = [
  {
    id: 1,
    task: "Zadanie1",
    isRealized: 0,
  },
  {
    id: 2,
    task: "Zadanie2",
    isRealized: 0,
  },
  {
    id: 3,
    task: "Zadanie3",
    isRealized: 0,
  },
];



describe("App.js", () => {
  let App = null;
  let mockDataStore = null;

  beforeEach(() => {
    mockDataStore = new MockDataStore(mockData);
    App = new ToDoApp(mockDataStore);
  });

  test("Should get all tasks", async () => {
    const tasks = await App.getAllTasks();
    expect(tasks.length).toBe(mockData.length);
  });

  test("Should add given task", async () => {
    const allTasks = await App.addTask({id: 4, task: "Blazej", isRealized: 0});
    expect(allTasks.length).toBe(mockData.length + 1)
  });

  test("Should delete all given tasks", async () => {
    const allTasks = await App.deleteTask(1);
    
    expect(allTasks.length).toBe(mockData.length - 1); 
    expect(allTasks[0].id).not.toBe(1);
  });

  test("Should update task with the new value", async () => {
    const allTasks =  await App.modifyTask(1, "Maciej");
    expect(allTasks[0].task).toBe("Maciej");
  });
});
