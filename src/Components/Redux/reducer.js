import { GET_BOOK_FAILEIR, GET_BOOK_REQUEST, GET_BOOK_SUCCESS } from "./actionType"

const initialState={
    Book:[],
    isLoading:false,
    isErr:false
}

export const reducer=(state=initialState,{type,payload})=>{
 switch(type){
    case GET_BOOK_REQUEST:
        return{
            ...state,isLoading:true
        }
        case GET_BOOK_SUCCESS:
            return{
                ...state,isLoading:false,Book:payload
            }
            case GET_BOOK_FAILEIR:
                return{
                    ...state,isLoading:false, isErr:true
                }
                default:
                    return state
            }
   
    
}