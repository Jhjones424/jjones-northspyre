// Basic Task component. Reusable for both completed and incomplete tasks with a couple conditionals differentiating cs and copy. 
const Task = ({task: {id, title, description, completed}, changeTaskStatus, deleteTask }) => {
    return (
        <div class={`list-group-item flex-column align-items-start ${completed ? "completed-task": "incomplete-task"}`}>
            <div class="d-flex w-100 justify-content-between" >
                <h2 class="mb-1">{title}</h2>
                <div class="task-buttons">
                    <button class="btn btn-primary complete-btn"   onClick={() => changeTaskStatus(id, !completed)}> 
                        {!completed ? 'Complete task' : 'Readd to list'}
                    </button>
                    <button class="btn btn-danger" onClick={() => deleteTask(id)}>&times;</button>
                </div>
            </div>
            <small>{description}</small>
        </div>
    )
}

export default Task