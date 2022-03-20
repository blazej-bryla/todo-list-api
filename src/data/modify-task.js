const modifyTaskQuery = (taskId, newTask) => `
UPDATE tasks SET task='${newTask} 'WHERE id=${taskId}
`;

module.exports = modifyTaskQuery;
