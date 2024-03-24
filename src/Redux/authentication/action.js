
import axios from "axios"
import { ERROR, USER_LOGIN} from "../actionType"

 export const URL = `https://green-mentor-server.onrender.com`
// export const URL = `http://localhost:8080`



export const getLogin=(obj)=>(dispatch)=>{

    try {
        axios.post(`${URL}/users/login`,obj).then((data)=>
        {
           
            dispatch({type:USER_LOGIN,payload:data.data.token})
            localStorage.setItem("token",data.data.token)
            alert(`${data.data.message}`)
           
        })
    } catch (error) {
        dispatch({type:ERROR})
    }
}

export const getRegister=(obj)=>(dispatch)=>{

    try {
        axios.post(`${URL}/users/register`,obj).then((data)=>{
          
            return alert(`${data.data.user.username} has been login successful !`)
        })

    } catch (error) {
        dispatch({type:ERROR})
    }
}