import React from "react";
import Task from "./Task";



const TaskList = ({tasks, changeTaskStatus, deleteTask}) => {
    /* Utilizes reduce to filter the Tasks array into incomplete and completed tasks. Easier method would be to just filter by completed, 
       but I wanted to try something cool and it saves 1/2 the time. In production code I would do something much simpler like this:

       const completedTasks = tasks.filter((task) => task.completed == true)
       const incompleteTasks = tasks.filter((task) => task.completed == false)
    */
    const [incompleteTasks, completedTasks] = tasks.reduce(([incompleteTasks, completedTasks], currentTask) => {
            return currentTask.completed ? [incompleteTasks, [...completedTasks, currentTask]] 
            : [[...incompleteTasks, currentTask], completedTasks]
        }, [[], []]);

    // Sorts completed tasks so the most recently completed/updated task appears at the top of the completed list. 
    const sortedCompleteTasks = completedTasks.sort((a, b) => Date.parse(b.updatedAt) - Date.parse(a.updatedAt))

    return (
        <div class="task-list">
        <div class="task-box">
            <div class="incomplete-task-header h4">Incomplete Tasks</div>
            <div class="list-group">
                {incompleteTasks.map(task => ( <Task task={task} key={task.id} changeTaskStatus={changeTaskStatus} deleteTask={deleteTask}></Task>))}
            </div>
        </div>
        <div class="task-box">
            <div class="complete-task-header h4">Completed Tasks</div>
            <div class="list-group">
                {sortedCompleteTasks.map(task => ( <Task task={task} key={task.id} changeTaskStatus={changeTaskStatus} deleteTask={deleteTask}></Task>))}
            </div>
        </div>
        </div>
    )
}

export default TaskList