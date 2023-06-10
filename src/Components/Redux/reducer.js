import { EDIT_NAME_AND_YEART, EDIT_NAME_AND_YEART_FAIL, EDIT_NAME_AND_YEART_REQUEST, EDIT_NAME_AND_YEART_SUCCESS, GET_BOOK_FAILEIR, GET_BOOK_REQUEST, GET_BOOK_SUCCESS } from "./actionType"

const initialState={
    Book:[],
    isLoading:false,
    isErr:false,
    Err:null
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
                    ...state,
                    isLoading:false,
                    isErr:true,
                    Err:payload
                   
                }
                case EDIT_NAME_AND_YEART_REQUEST:
                return{
                    ...state,
                    isLoading:false,
                    isErr:false
                }
                case EDIT_NAME_AND_YEART_SUCCESS:
                return{
                    ...state,
                    isLoading:false,
                    isErr:false,
                    Book:payload
                }
                case EDIT_NAME_AND_YEART_FAIL:
                    return{
                        ...state,
                        isLoading:false,
                        isErr:true,
                        Err:payload
                    }
                default:
                    return state
            }
   
    
}