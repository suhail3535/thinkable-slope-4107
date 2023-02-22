import { GET_POST_FAILURE, GET_POST_REQUEST, GET_SUCCESS, POST_FAILURE, POST_REQUEST, POST_SUCCESS } from "./actiontype";

const initialState = {
  isLoading: false,
  women: [],
  isError: false,
};

export const reducer = (state=initialState,{type,payload}) => {;
 switch (type) {
    case POST_REQUEST:
      return { ...state, isLoading: true };
    case POST_FAILURE:
      return { ...state, isError: true, isLoading: false };
   
    case POST_SUCCESS:
         return {
              ...state, isLoading: false,women: [payload,...state.women],
         };
     
    //  getreqest function
     
     case GET_SUCCESS:
         return{...state, isLoading: false, women:payload}
    default:
      return state;
  }
};