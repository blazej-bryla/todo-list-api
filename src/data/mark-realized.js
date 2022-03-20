const markRealizedQuery = (taskId) => `
UPDATE tasks SET isRealized=1 WHERE id=${taskId}
`;

module.exports = markRealizedQuery;
