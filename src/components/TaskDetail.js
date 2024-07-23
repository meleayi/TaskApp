
import './TaskDetail.css'
const TaskDetail = ({taskList, setTaskList,task,setTask}) => {

    const handleEdit =(id)=>{
        const selectedTask = taskList.find(f=>f.id===id);
        setTask(selectedTask);
    }
    const handleDelete =(id)=>{
        const updatedTaskList =taskList.filter(x =>x.id !==id);
        setTaskList(updatedTaskList);
        setTask({})
    }

  return (
    <section className='sections'>
        {taskList.map((todo)=>(
                <div className="taskdetail" key={todo.id}>
                    <div className='onetask'>
                        <div>
                            <p>{todo.name}</p>
                        </div>
                        <div className='actionbtn'>
                            <button onClick={()=>handleEdit(todo.id)} className='editbtn'><i class="bi bi-pencil-square"></i></button>
                            <button   onClick={() => handleDelete(todo.id)} className='deletebtn'> <i class="bi bi-trash-fill"></i></button>
                        </div>
                    </div>
                    <div className="time-container">
                        <span className='time'>{todo.time}</span>
                    </div>
                </div>
        ))}
    </section>
  )
}
export default TaskDetail