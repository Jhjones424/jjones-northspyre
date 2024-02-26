# Jay's Simple Task List

Hello Northspyre team thanks for the fun little coding exercise. I've gone ahead and added comments throughout the code to hopefully make it as legible as possible, but I 
also look forward to answering any questions you may have. Lets go ahead and dive in. 

To run this application:
Open a terminal > Navigate from the root application folder > frontend > run `npm start` 
Open a separate terminal > Navigate from the root application folder > backend > run `python3 run.py` or `python run.py`

On the backend:
* This was my first time working with flask, I was running into issues w/ circular imports trying to get the routes from tasks.py so rather than bang my head against the wall I moved all of the routing logic into the run.py file.
* Update the routes in run.py to include a POST route for task creation, a PUT route for updating task status, a DELETE route for deleting a specific task and another DELETE route for deleting all of the tasks. 
* I also updated the Task table and model to include createdAt and updatedAt DateTime fields on the tasks. I ended up not using the createdAt field, but updatedAt is used in the sorting of completed tasks. I could have used createdAt

On the frontend:
* I transformed App into a React component. I'm not sure what you all use in your code base so I went ahead and did a basic component at the app level using 0 hooks and and "old school" state management. You'll see that all of my calls to perform operations here simply refetch the task list after a successful api call to keep the app up to date. 
* CreateTaskForm is a simple form. The only caveats is it requires a title to create a task, and both inputs only allow up to the same amount of characters as our DB allows.
* TaskList is pretty simple as well, there are a couple of notes in there but its a component for building the skeleton of our lists and sorting/filtering them. 
* Task is a functional component representing a simple task with a few variations depending on if its incomplete or completed. 

I know it isn't the prettiest app right now, but I understand your time constraints and really wanted to get something back to you today. 

# Northspyre Take-Home Project for React & Flask Web Application

## Welcome!

Thank you for participating in our engineering hiring process! This take-home test is designed to assess your practical skills in developing web applications using React and Flask. You are encouraged to use all of your preferred coding tools including and especially ChatGPT or any other AI-based coding assistants you like.

## Objective
Your task is to create a simple web application that features a React frontend and a Flask backend. The application will be a "Task Manager" where users can add, delete, and mark tasks as completed. You are free to modify any code already provided and add any dependencies you need. Creativity is encouraged. The only requirements are that the application should have a React frontend and a Flask backend using the REST architecture, and it should be able to perform the basic CRUD operations for tasks. Please be sure to include instructions for running your application in your submission.

## Requirements

Please extend the provided code to meet the following requirements:
* Display a list of tasks.
* Add a new task.
* Delete a task.
* Mark a task as completed.

You are free to modify the code in any way you like, but ensure your final result is a functional web application that meets the above requirements.

#### Frontend

* Framework: React
* Styling: Feel free to use plain CSS for stlying, ideally we recommend using Bootstrap which is already in the dependencies.

#### Backend

* Framework: Flask
* Database: Use SQLite for simplicity. The database should have at least one table named tasks with columns for id, title, description, and completed.

## Instructions

#### Development
Implement the required features as described above.

#### Documentation
Update this README to include instructions on how to set up and run your application.
Briefly describe your application's architecture and the decisions you made during development.

#### Submission
Please submit your completed test through coderbytes

#### Evaluation Criteria

* Functionality: The application works as described.
* Code Quality: Clean, modular, and well-organized code.
* Design: A user-friendly interface and a sensible API design.
* Documentation: Clear instructions on setting up and running your application, along with a concise explanation of your architecture and choices.

*Bonus Points*

* Implement authentication for users to manage their tasks.
* Deploy the application to a cloud service (Heroku, AWS, etc.).
* Write unit tests for both frontend and backend.
* Implement additional features that you think would be useful to have in a task manager application.


## Good luck, and we're looking forward to your submission!
