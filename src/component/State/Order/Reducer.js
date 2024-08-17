import { GET_USER_FAILURE } from "../Authentication/ActionType";
import {
  // GET_USERS_NOTIFICATION_SUCCESS,
  GET_USERS_ORDERS_FAILURE,
  GET_USERS_ORDERS_REQUEST,
  GET_USERS_ORDERS_SUCCESS
} from "./ActionType";

const initialState = {
  loading: false,
  orders: null,
  error: null
  // notifications: [],
};

export const orderReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_USERS_ORDERS_REQUEST:
      return { ...state, error: null, orders: null };

    case GET_USERS_ORDERS_SUCCESS:
      return {
        ...state,
        error: null,
        loading: false,
        orders: payload
      };

    // case GET_USERS_NOTIFICATION_SUCCESS:
    //   return {
    //     ...state,
    //     notifications: payload,
    //     error: null,
    //     loading: false
    //   };

    case GET_USERS_ORDERS_FAILURE:
      return { ...state, error: payload, loading: false };

    case GET_USER_FAILURE:
      return { ...state, error: payload, loading: false };

    default:
      return state;
  }
};

export default orderReducer;