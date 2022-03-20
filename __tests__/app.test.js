const ToDoApp = require("../src/app.js");
const allNames = ['Piotr', 'Piotr', 'Blazej'];

describe('App.js', () => {
  let App = null;

  beforeEach(() => {
    App = new ToDoApp(allNames);
  });

  test('Should get all names', () => {
    const names = App.getNames();
    expect(names.length).toBe(allNames.length);
  });

  test('Should add given name', () => {
    App.setName("Blazej");
    const names = App.getNames();
  });

  test('Should delete all given names', () => {
    App.deleteName("Piotr");
    const names = App.getNames();

    expect(names.length).toBe(1);
    expect(names[0]).not.toBe('Piotr');
  });

  test('Should update all names with new value', () => {
    App.modifyName('Piotr', 'Maciej');
    const names = App.getNames();

    const piotrs = names.filter((n) => n === 'Piotr');
    const maciejs = names.filter((n) => n === 'Maciej');

    expect(piotrs.length).toBe(0);
    expect(maciejs.length).toBe(2);
  });

  test('Should return true if value is found', () => {
    expect(App.hasName('Piotr')).toBe(true);
    expect(App.hasName('Maciej')).toBe(false);
  })

});