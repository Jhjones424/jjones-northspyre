from app import create_app, db
from datetime import datetime
from app.models import Task
from flask import request, jsonify


app = create_app()

# Update the GET route to retrieve updatedAt for sorting purposes as well as creating the POST route.
@app.route('/tasks', methods=['GET', 'POST', 'PUT', 'DELETE'])
def tasks():
    if request.method == 'GET':
        tasks = Task.query.all()
        return jsonify([{'id': task.id, 'title': task.title, 'description': task.description, 'completed': task.completed, 'updatedAt': task.updatedAt} for task in tasks]), 200
    if request.method == 'POST':
        data = request.json
        task = Task(title = data['title'], description = data['description'], completed = 0, createdAt = datetime.now())
        db.session.add(task)
        db.session.commit()
        return jsonify({'id': task.id, 'title': task.title, 'description': task.description, 'completed': task.completed}), 200

# Added routes for the ability to update the status of a task and delete unwanted tasks.    
@app.route('/tasks/<task_id>', methods=['PUT', 'DELETE'])
def edit_tasks(task_id):
    if request.method == 'PUT':
        completed = request.json['completed']
        task = Task.query.filter(Task.id == task_id).update({Task.completed: completed, Task.updatedAt: datetime.now()})
        db.session.commit()
        return jsonify(task), 200
    if request.method == 'DELETE':
        task = Task.query.filter(Task.id == task_id).delete()
        db.session.commit()
        return '', 200

# Added additional route for the clearing of all tasks. 
@app.route('/cleardb', methods=['DELETE'])
def cleardb():
    if request.method == 'DELETE':
        Task.query.delete()
        db.session.commit()
        tasks = Task.query.all()
        return jsonify(tasks), 200

if __name__ == '__main__':
    app.run(debug=True)