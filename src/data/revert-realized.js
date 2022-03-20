const revertRealizedQuery = (taskId) => `
UPDATE tasks SET isRealized=0 WHERE id=${taskId}
`;

module.exports = revertRealizedQuery;
