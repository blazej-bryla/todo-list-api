const addTaskQuery = (task) => `
INSERT INTO tasks
(task, isRealized)
VALUES('${task}', false)
`

module.exports = addTaskQuery;