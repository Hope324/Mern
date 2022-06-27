import { combineReducers } from "redux"
const initialState = {
    name:'Board Infinity',
    sName:'sharma'
}
const Reducer = (State=initialState , action)=>{
    switch(action.type){
        case 'STORENAME':{
            console.log('inisdeReducer',action)
            return {...State,name:action.payload}
        }
        case 'SURNAME':{
            return({...State,sName:action.payload})
        }
        case 'FULLNAME':{
            const {fName,sName} = action.payload
            return ({...State,name:fName,sName:sName})
        }
        default:{
            console.log('reached default')
            return State
        }
    }
}
// const surNameReducer = (state=initialState , action)=>{
//     switch(action.type){
//         case 'SURNAME':{
//             return({...state,sName:action.payload})
//         }
//         default:{
//             return(state)
//         }
//     }
// }
export default combineReducers({Reducer})