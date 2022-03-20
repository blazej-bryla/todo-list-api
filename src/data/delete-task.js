const deleteTaskQuery = (taskId) => `
DELETE FROM tasks WHERE id=${taskId}
`;

module.exports = deleteTaskQuery;
