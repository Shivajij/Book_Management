import axios from "axios"
import { GET_BOOK_FAILEIR, GET_BOOK_REQUEST, GET_BOOK_SUCCESS } from "./actionType"

export const getbookData=(queryParams)=>(dispatch)=>{
dispatch({type:GET_BOOK_REQUEST})
   return axios.get(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/books`,queryParams).then((res)=>{
    dispatch({type:GET_BOOK_SUCCESS,payload:res.data})
    console.log(res.data)
   }).catch((err)=>{
    dispatch({type:GET_BOOK_FAILEIR})
    console.log(err)
   })
}