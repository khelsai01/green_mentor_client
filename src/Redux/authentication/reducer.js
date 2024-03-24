const initalAuth={
    token:"",
    isAuth:false

}

export const reducer =(state=initalAuth, {type,payload})=>{
    switch(type){

        case "USER_LOGIN":{
            return {...state , token:payload, isAuth:true}
        }
        case "LOGOUT":{
            return{...state, token:"", isAuth:false}
        }
        default: return state;
    }
}