import React, { useState } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { addTask} from '../Redux/task/action';

const AddTasks = ({ getTask}) => {

    const dispatch = useDispatch();
    const { token } = useSelector(store => {
        return {
            token: store.authReducer.token
        }
    },shallowEqual)
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
  
    const handleSubmit = (e) => {
        e.preventDefault()
        let obj = { title, description }

        dispatch(addTask(obj, token));
        getTask()
        setTitle("");
        setDescription("");
    }

    return (
        <div className='w-[300px] m-auto'>
            <div>
                <form onSubmit={handleSubmit} className='w-1/2 flex flex-col items-center m-auto my-3'>
                    <input type="text"
                        name='title'
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className='w-[300px] my-4 p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500'
                        placeholder='Task title' />

                    <textarea type="text"
                        name='description'
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className='w-[300px] my-2 p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500'
                        placeholder='Description' />
                    <button type='submit' className='w-[300px] bg-blue-400 text-white my-4 px-4 py-2 rounded-md shadow hover:bg-teal-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50'>Add Task</button>
                </form>
            </div>
        </div>
    )
}

export default AddTasks