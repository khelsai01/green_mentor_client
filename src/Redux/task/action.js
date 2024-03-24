import axios from "axios"
import { DELETE_TASK, EDIT_TASK, ERROR, GET_TASKS, LOADING, POST_TASK } from "../actionType"
import { URL } from "../authentication/action"

export const fetchTask = (token) => async (dispatch) => {
    try {

        dispatch({ type: LOADING })

        let res = await axios.get(`${URL}/tasks`, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            }
        })
        // console.log(res.data)
        dispatch({ type: GET_TASKS, payload: res.data })

    } catch (error) {
        dispatch({ type: ERROR })
        console.error(error)
    }
};


export const addTask = (obj, token) => async (dispatch) => {
    try {

        dispatch({ type: LOADING })

        let res = await axios.post(`${URL}/tasks/add`,
         obj, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            }
        }
        );
        // console.log(res.data)
        dispatch({type:POST_TASK,payload:res.data})

    } catch (error) {
        dispatch({ type: ERROR })
        console.error(error)
    }
};

export const deleteTask = (id,token) => async(dispatch) => {

    try {
        dispatch({ type: LOADING })
       await axios.delete(`${URL}/tasks/delete/${id}`,{
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            }
        })
        dispatch({type:DELETE_TASK,payload:id})
        // return alert(`Task has been deleted`)

    } catch (error) {
        dispatch({ type: ERROR })
        console.error(error)
    }
}

export const editTask = (id,obj,token) => async(dispatch) => {

    try {
        dispatch({ type: LOADING })
     let res=   await axios.patch(`${URL}/tasks/update/${id}`,
       obj,{
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        }
       })
 
       dispatch({type:EDIT_TASK,payload:res.data.editTask})
       console.log(res.data.editTask)
    } catch (error) {
        dispatch({ type: ERROR })
        console.error(error)
    }
}