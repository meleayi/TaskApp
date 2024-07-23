
import "./AddTask.css"

const AddTask = ({taskList,setTaskList,task,setTask } ) => {
  const HandleSubmit=(e)=>{
    e.preventDefault();
    const date = new Date();
    const newName=e.target.task.value;
    if(task.id){
      const date = new Date();
      const updatedTaskList =taskList.map((todo)=>(
        todo.id===task.id?{id:todo.id, name:task.name,time:`${date.toLocaleTimeString()} ${date.toLocaleDateString()}`} :todo
      ));
      setTaskList(updatedTaskList);
      setTask({})
    }else{
        if(newName.length!==0){
            const newTask ={
              id:date.getTime(), 
              name:newName, 
              time:`${date.toLocaleTimeString()} ${date.toLocaleDateString()}`
            }
          setTaskList([...taskList,newTask]);
          
        }
        else{
          alert("Please enter valid task detail");
        }
        setTask({}) 
      }

  }
  return (
 <section className="addtask">
      <form onSubmit={HandleSubmit} >
        <input type="text" name="task" autoComplete="off" maxLength={20} placeholder="AddTask"  value={task.name || ""} onChange={e=>setTask({...task, name: e.target.value})}/>
        <button type="submit"> {task.id?"Update":"Add"}</button>
      </form>
    </section>
  )
}

export default AddTask