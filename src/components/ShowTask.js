import TaskDetail from "./TaskDetail"
import "./ShowTask.css"


const ShowTask = ({taskList, setTaskList,task,setTask }) => {
  return (
    <section className="showtask">
        <div className="taskmenu">
            <h3 className="taskheading">Todo</h3>
            <div className="spandiv">
               <span className="taskspan"> {taskList.length}</span>
            </div>
            <button className="clearall" onClick={()=>setTaskList([])}>Clear ALL</button>
        </div>
        <div className="tasklist">
          <TaskDetail taskList={taskList} setTaskList={setTaskList} task={task} setTask={setTask}/>
        </div>
    </section>
  )
}

export default ShowTask