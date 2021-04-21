import { useState } from "react"
import Header from "./components/Header"
import Tasks from "./components/Tasks"

function App() {

  const [tasks, setTasks] = useState([
    {id:1, text: 'doctor appt', reminder: true},
    {id:2, text: 'food shopping', reminder: false},
    {id:3, text: 'meeting at school', reminder: false}
  ])

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id ))
  }

  // Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? {...task, reminder : !task.reminder } : task))
  }

  return (
    <div className='container'>
      <Header />
      {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />) : ('No tasks to show')}
    </div>
  );
}

export default App;
