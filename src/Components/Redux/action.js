import axios from "axios";
import {
  EDIT_NAME_AND_YEART_FAIL,
  EDIT_NAME_AND_YEART_REQUEST,
  EDIT_NAME_AND_YEART_SUCCESS,
  GET_BOOK_FAILEIR,
  GET_BOOK_REQUEST,
  GET_BOOK_SUCCESS,
} from "./actionType";

export const getbookData = (queryParams, ascendingOrder) => (dispatch) => {
  dispatch({ type: GET_BOOK_REQUEST });
  return axios
    .get(
      `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/books`,
      queryParams
    )
    .then((res) => {
      let sortData = res.data;
      if (ascendingOrder === "asc") {
        sortData = res.data.sort((a, b) => a.release_year - b.release_year);
      }
      dispatch({ type: GET_BOOK_SUCCESS, payload: sortData });
      // console.log(res.data);
    })
    .catch((err) => {
      dispatch({ type: GET_BOOK_FAILEIR,payload:err.message });
      console.log(err);
    });
}

export const updateData = (singleBookData, updatedBook) => (dispatch) => {
  dispatch({type:EDIT_NAME_AND_YEART_REQUEST})
  axios.patch(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/books/${singleBookData.id}`, updatedBook)
    .then(res => {
      const updatedData = { ...singleBookData, ...res.data };
      dispatch({type:EDIT_NAME_AND_YEART_SUCCESS,payload:updateData})

    })
 .catch(error => {
      
      dispatch({type:EDIT_NAME_AND_YEART_FAIL,payload:error.messege})
    });
};
  