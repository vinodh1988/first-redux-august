

export const  firstReducer = (data ={ message : "Redux is cool"} ,action )=>{
        
    switch(action.type){
        case "MESSAGE_ACTION":
                      return {message : action.data}
        default:
                      return data;
    }
        
}



export const  secondReducer = (data ={ message2 : "Redux Reducer is data producer"} ,action )=>{
        
    switch(action.type){
        case "SECOND_ACTION":
                      return {message2 : action.data}
        default:
                      return data;
    }
        
}