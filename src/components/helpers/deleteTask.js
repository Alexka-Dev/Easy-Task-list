export const deleteTask = (tasks, id) => {
    return tasks.filter(tasks => tasks.id !== id)
}