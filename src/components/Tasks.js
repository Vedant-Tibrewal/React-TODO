import Task from "./Task";
import Header from "./Header";
import Footer from "./Footer";
import AddTask from "./AddTask";

import { useState, useEffect } from "react";

const Tasks = () => {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([]);

  // for fetching data from the backend
  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer);
    };

    getTasks();
  }, []);

  // for fetch task
  const fetchTasks = async () => {
    const res = await fetch("http://localhost:8000/Todo-tasks/");

    const data = await res.json();
    //console.log(data)
    return data;
  };

  // for fetch task
  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:8000/Todo-tasks/${id}`);

    const data = await res.json();
    //console.log(data)
    return data;
  };

  //Add Task
  const addTask = async (task) => {
    const res = await fetch("http://localhost:8000/Todo-tasks/", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(task),
    });

    const data = await res.json();

    setTasks([...tasks, data]);

    //const id = Math.floor(Math.random() * 10000)+1
    //const newTask = {id, ...task}
    //setTasks([...tasks,newTask])
  };

  //Delete tasks
  const deleteTask = async (id) => {
    await fetch(`http://localhost:8000/Todo-tasks/${id}`, {
      method: "DELETE",
    });

    setTasks(tasks.filter((task) => task.id !== id));
  };

  //toggle reminder
  const toggleReminder = async (id) => {
    const taskToToggle = await fetchTask(id);

    const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder };

    const res = await fetch(`http://localhost:8000/Todo-tasks/${id}/`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updTask),
    });

    const data = await res.json();

    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: data.reminder } : task
      )
    );
  };

  return (
    <div className="container">
      <Header
        onAdd={() => setShowAddTask(!showAddTask)}
        showAdd={showAddTask}
      />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0
        ? tasks.map((task, index) => (
            <Task
              key={index}
              task={task}
              onDelete={deleteTask}
              onToggle={toggleReminder}
            />
          ))
        : "You are all caught up (:"}
      <Footer />
    </div>
  );
};

export default Tasks;
