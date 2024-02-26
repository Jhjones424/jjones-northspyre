import {React, useState} from 'react';


const TaskForm = ({createTask}) => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    createTask(title, description)
  }

  return (
    <form class="form-horizontal" onSubmit={handleSubmit}>
      <div class="form-group">
        <label class="d-flex justify-content-between">
          Title:
          <input class="btn btn-primary btn-sm create-btn margin" type="submit" value="Create task"/>
        </label>
        <input
          class="form-control"
          name="title"
          type="text"
          maxLength="100"
          size="20"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)} />
      </div>
      <div class="form-group">
        <label> Description:</label>
        <textarea
          class="form-control"
          name="description"
          type="textarea"
          maxLength="200"
          rows="3"
          cols="20"
          value={description}
          onChange={(e) => setDescription(e.target.value)} />
        </div>
    </form>
  );
}

export default TaskForm