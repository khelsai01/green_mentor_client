import React from 'react'

const TaskaCard = ({ title, description, _id, handleDelete ,handleEdit}) => {
    return (
        <div className="flex items-center justify-between width-40% gap-2 bg-gray-100 p-4 rounded-md mb-2 mt-2">

            <div className="flex flex-col justify-start">
                <p className="text-lg font-semibold">{title}</p>
                <p className="text-gray-500">{description}</p>
            </div>
            <div className='flex gap-2'>
                <button 
                onClick={() => handleEdit(_id)}
                className='text-white bg-green-500 px-4 py-2 rounded-md shadow ml-auto font-bold '
                >Edit</button>

                <button
                    onClick={() => handleDelete(_id)}
                    className="text-white bg-red-500 px-4 py-2 rounded-md shadow ml-auto font-bold ">
                    Delete</button>
            </div>
        </div>
    )
}

export default TaskaCard