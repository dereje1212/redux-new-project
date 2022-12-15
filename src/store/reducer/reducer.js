
export const fname=(state = "dereje",action)=>{
    switch(action.type){
        case "FNAME":
            return action.payload
        default:
            return state
    }
}


export const lname=(state = "Assefa",action)=>{
    switch(action.type){
        case "LNAME":
            return action.payload
        default:
            return state
    }
}
export const age=(state = 0,action)=>{
    switch(action.type){
        case "AGE":
            return action.payload
        default:
            return state
    }
}
export const gender=(state = "F",action)=>{
    switch(action.type){
        case "GENDER":
            return action.payload
        default:
            return state
    }
}
export const prof=(state = "Student",action)=>{
    switch(action.type){
        case "PROFESSION":
            return action.payload
        default:
            return state
    }
}

