
const initialData = {
    isloading:false,
    isError:false,
    tasks:[],
}

export const reducer = (state=initialData, {type, payload})=>{
    switch(type){
        case "LOADING":{
            return{...state, isloading:true}
        }
        case "GET_TASKS":{
            return{...state,isloading:false,tasks:payload}
        }
        case "POST_TASK":{
            let taskAfterAdding = [...state.tasks, payload]; 
            return {
              ...state,
            
              tasks: taskAfterAdding,
            };
        }
        case "DELETE_TASK":{
            let taskAfterDelete = [...state.tasks].filter(
                (el) => el._id !== payload
              );
              return {
                ...state,
                tasks: taskAfterDelete,
              };
        }
        case "EDIT_TASK":{
            let editTask = [...state.tasks].map((el) => {
                if (el._id === payload._id) {
                  return payload;
                }
                return el;
              });

              return {
                ...state,
                tasks: editTask,
              };
        }
        case "ERROR":{
            return{...state,isloading:false,isError:true}
        }

        default: return state
    }
}