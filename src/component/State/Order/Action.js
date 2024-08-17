import { api } from "../../config/api";
import currentVersion from "../Api/Global";

import {
  CREATE_ORDER_FAILURE,
  CREATE_ORDER_REQUEST,
  CREATE_ORDER_SUCCESS,
  GET_USERS_ORDERS_FAILURE,
  GET_USERS_ORDERS_REQUEST,
  GET_USERS_ORDERS_SUCCESS
} from "./ActionType";

export const createOrder = (reqData) => {
  return async (dispatch) => {
    dispatch({ type: CREATE_ORDER_REQUEST });
    try {
      const { data } = await api.post(
        `/api/${currentVersion}/order`,
        reqData.order,
        {
          headers: {
            Authorization: `Bearer ${reqData.jwt}`
          }
        }
      );
      // Payment gateway integration
      // if(data.payment_url){
      //   window.location.href = data.payment_url;
      // }
      console.log("create order", data);
      dispatch({
        type: CREATE_ORDER_SUCCESS,
        payload: data
      });
    } catch (error) {
      console.log("Catch error ", error);
      dispatch({ type: CREATE_ORDER_FAILURE, payload: error });
    }
  };
};

export const getUsersOrders = (jwt) => {
  return async (dispatch) => {
    dispatch({ type: GET_USERS_ORDERS_REQUEST });
    try {
      const { data } = await api.get(`/api/${currentVersion}/order/user`, {
        headers: {
          Authorization: `Bearer ${jwt}`
        }
      });
      console.log("get users orders ", data);
      dispatch({
        type: GET_USERS_ORDERS_SUCCESS,
        payload: data
      });
    } catch (error) {
      console.log("Catch error ", error);
      dispatch({ type: GET_USERS_ORDERS_FAILURE, payload: error });
    }
  };
};

// export const getUsersNotification = () => {
//   return async (dispatch) => {
//     dispatch({ type: GET_USERS_NOTIFICATION_REQUEST });
//     try {
//       const { data } = await api.get(
//         `/api/${currentVersion}/notifications`,
//         // {
//         //   headers: {
//         //     Authorization: `Bearer ${jwt}`
//         //   }
//         // }
//       );
//       console.log("get users notification ", data);
//       dispatch({
//         type: GET_USERS_NOTIFICATION_SUCCESS,
//         payload: data
//       });
//     } catch (error) {
//       console.log("Catch error ", error);
//       dispatch({ type: GET_USERS_NOTIFICATION_FAILURE, payload: error });
//     }
//   };
// };
