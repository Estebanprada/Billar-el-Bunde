import { useEffect, useState } from 'react'
import { getAllTasks } from '../api/tasks.api';
import { TaskCard } from '../components/TaskCard';


export function TasksList(){

    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        
        function loadTasks() {
            const res = getAllTasks();
            setTasks(res.data);
        }
        loadTasks();
    },[] )


    return  <div>
        {tasks.map(task => (
            <TaskCard key={task.id} task={task}/>
))}
        </div>;
}