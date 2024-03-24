import React, { useEffect, useState } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { deleteTask, fetchTask } from '../Redux/task/action'
import AddTasks from './AddTasks'
import TaskaCard from './TaskaCard'
import Edit from './Edit'



const Tasks = () => {
  const dispatch = useDispatch()
  const { tasks, token,isAuth } = useSelector((store) => {
    return {
      tasks: store.taskReducer.tasks,
      token: store.authReducer.token,
      isAuth: store.authReducer.isAuth
    }
  }, shallowEqual);


const [editdata, setEditdata] =useState([]);
const [flag, setFlag] = useState(false);
 const getTask =()=>{
    dispatch(fetchTask(token))
  }
  useEffect(() => {
    getTask()
  }, [])

  const handleDelete =(id)=>{
  
    dispatch(deleteTask(id,token))
    getTask()
  }

  const handleEdit=(id)=>{
    
    let editFilter = tasks?.find((el)=>el._id==id)
    setEditdata(editFilter)
    setFlag(pre=>!pre)
console.log(id)
  }

  return (
    <div>
      {isAuth ?
      <div>
        {flag? <Edit editdata={editdata} setFlag={setFlag} />:
        
        <AddTasks getTask={getTask} />
        }
      </div>
      :<div className='w-full flex justify-center my-9'>
      
        <h1 className='text-3xl font-bold text-[#37464f] text-center' >📝Welcome to the Tasks Managment app📜</h1>
      </div>
    }

      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mx-auto">

{tasks?.map((task) => (
  <TaskaCard  key={task._id} {...task} handleDelete={handleDelete}  handleEdit={handleEdit} />
))}
</div>

    </div>
  )
}

export default Tasks
