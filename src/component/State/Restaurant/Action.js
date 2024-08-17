import { api } from "../../config/api";
import currentVersion from "../Api/Global";

import {
  CREATE_CATEGORY_FAILURE,
  CREATE_CATEGORY_REQUEST,
  CREATE_CATEGORY_SUCCESS,
  CREATE_EVENTS_FAILURE,
  CREATE_EVENTS_REQUEST,
  CREATE_EVENTS_SUCCESS,
  CREATE_RESTAURANT_FAILURE,
  CREATE_RESTAURANT_REQUEST,
  CREATE_RESTAURANT_SUCCESS,
  DELETE_CATEGORY_FAILURE,
  DELETE_CATEGORY_REQUEST,
  DELETE_CATEGORY_SUCCESS,
  DELETE_EVENTS_FAILURE,
  DELETE_EVENTS_REQUEST,
  DELETE_EVENTS_SUCCESS,
  DELETE_RESTAURANT_FAILURE,
  DELETE_RESTAURANT_REQUEST,
  DELETE_RESTAURANT_SUCCESS,
  GET_ALL_EVENTS_FAILURE,
  GET_ALL_EVENTS_REQUEST,
  GET_ALL_EVENTS_SUCCESS,
  GET_ALL_RESTAURANTS_FAILURE,
  GET_ALL_RESTAURANTS_REQUEST,
  GET_ALL_RESTAURANTS_SUCCESS,
  GET_RESTAURANT_BY_ID_FAILURE,
  GET_RESTAURANT_BY_ID_REQUEST,
  GET_RESTAURANT_BY_ID_SUCCESS,
  GET_RESTAURANT_BY_USER_ID_FAILURE,
  GET_RESTAURANT_BY_USER_ID_REQUEST,
  GET_RESTAURANT_BY_USER_ID_SUCCESS,
  GET_RESTAURANTS_CATEGORY_FAILURE,
  GET_RESTAURANTS_CATEGORY_REQUEST,
  GET_RESTAURANTS_CATEGORY_SUCCESS,
  GET_RESTAURANTS_EVENTS_FAILURE,
  GET_RESTAURANTS_EVENTS_REQUEST,
  GET_RESTAURANTS_EVENTS_SUCCESS,
  UPDATE_CATEGORY_FAILURE,
  UPDATE_CATEGORY_REQUEST,
  UPDATE_CATEGORY_SUCCESS,
  UPDATE_EVENTS_FAILURE,
  UPDATE_EVENTS_REQUEST,
  UPDATE_EVENTS_SUCCESS,
  UPDATE_RESTAURANT_FAILURE,
  UPDATE_RESTAURANT_REQUEST,
  UPDATE_RESTAURANT_STATUS_FAILURE,
  UPDATE_RESTAURANT_STATUS_REQUEST,
  UPDATE_RESTAURANT_STATUS_SUCCESS,
  UPDATE_RESTAURANT_SUCCESS
} from "./ActionType";

export const getAllRestaurantsAction = (token) => {
  return async (dispatch) => {
    dispatch({ type: GET_ALL_RESTAURANTS_REQUEST });
    try {
      const { data } = await api.get(`/api/${currentVersion}/restaurants`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      dispatch({ type: GET_ALL_RESTAURANTS_SUCCESS, payload: data });
      console.log("All restaurant", data);
    } catch (error) {
      console.log("Catch error", error);
      dispatch({ type: GET_ALL_RESTAURANTS_FAILURE, payload: error });
    }
  };
};

export const getRestaurantById = (reqData) => {
  return async (dispatch) => {
    dispatch({ type: GET_RESTAURANT_BY_ID_REQUEST });
    try {
      const response = await api.get(
        `/api/${currentVersion}/restaurants/${reqData.restaurantId}`,
        {
          headers: {
            Authorization: `Bearer ${reqData.jwt}`
          }
        }
      );
      dispatch({ type: GET_RESTAURANT_BY_ID_SUCCESS, payload: response.data });
    } catch (error) {
      console.log("Catch error", error);
      dispatch({ type: GET_RESTAURANT_BY_ID_FAILURE, payload: error });
    }
  };
};

export const getRestaurantByUserId = (jwt) => {
  return async (dispatch) => {
    dispatch({ type: GET_RESTAURANT_BY_USER_ID_REQUEST });
    try {
      const { data } = await api.get(
        `/api/${currentVersion}/admin/restaurants/user`,
        {
          headers: {
            Authorization: `Bearer ${jwt}`
          }
        }
      );
      console.log("get restaurant by user id", data);
      dispatch({ type: GET_RESTAURANT_BY_USER_ID_SUCCESS, payload: data });
    } catch (error) {
      console.log("Catch error", error);
      dispatch({
        type: GET_RESTAURANT_BY_USER_ID_FAILURE,
        payload: error.message
      });
    }
  };
};

export const createRestaurant = (reqData) => {
  console.log("Token----------", reqData.token);
  return async (dispatch) => {
    dispatch({ type: CREATE_RESTAURANT_REQUEST });
    try {
      const { data } = await api.post(
        `api/${currentVersion}/admin/restaurants`,
        reqData.data,
        {
          headers: {
            Authorization: `Bearer ${reqData.token}`
          }
        }
      );
      dispatch({ type: CREATE_RESTAURANT_SUCCESS, payload: data });
      console.log("create restaurant", data);
    } catch (error) {
      console.log("Catch error", error);
      dispatch({ type: CREATE_RESTAURANT_FAILURE, payload: error });
    }
  };
};

export const updateRestaurant = ({ restaurantId, restaurantData, jwt }) => {
  return async (dispatch) => {
    dispatch({ type: UPDATE_RESTAURANT_REQUEST });
    try {
      const response = await api.put(
        `/api/${currentVersion}/admin/restaurants/${restaurantId}`,
        restaurantData,
        {
          headers: {
            Authorization: `Bearer ${jwt}`
          }
        }
      );
      dispatch({ type: UPDATE_RESTAURANT_SUCCESS, payload: response.data });
    } catch (error) {
      console.log("Catch error", error);
      dispatch({ type: UPDATE_RESTAURANT_FAILURE, payload: error });
    }
  };
};

export const deleteRestaurant = ({ restaurantId, jwt }) => {
  return async (dispatch) => {
    dispatch({ type: DELETE_RESTAURANT_REQUEST });
    try {
      const response = await api.delete(
        `/api/${currentVersion}/admin/restaurants/${restaurantId}`,
        {
          headers: {
            Authorization: `Bearer ${jwt}`
          }
        }
      );
      console.log("delete restaurant", response.data);
      dispatch({ type: DELETE_RESTAURANT_SUCCESS, payload: restaurantId });
    } catch (error) {
      console.log("Catch error", error);
      dispatch({ type: DELETE_RESTAURANT_FAILURE, payload: error });
    }
  };
};

export const updateRestaurantStatus = ({ restaurantId, jwt }) => {
  return async (dispatch) => {
    dispatch({ type: UPDATE_RESTAURANT_STATUS_REQUEST });
    try {
      const response = await api.put(
        `api/${currentVersion}/admin/restaurants/${restaurantId}/status`,
        {},
        {
          headers: {
            Authorization: `Bearer ${jwt}`
          }
        }
      );
      console.log("update restaurant status", response.data);
      dispatch({
        type: UPDATE_RESTAURANT_STATUS_SUCCESS,
        payload: response.data
      });
    } catch (error) {
      console.log("Catch error", error);
      dispatch({ type: UPDATE_RESTAURANT_STATUS_FAILURE, payload: error });
    }
  };
};

export const createEventAction = ({ data, jwt, restaurantId }) => {
  return async (dispatch) => {
    dispatch({ type: CREATE_EVENTS_REQUEST });
    try {
      const response = await api.post(
        `/api/${currentVersion}/admin/events/restaurant/${restaurantId}`,
        data,
        {
          headers: {
            Authorization: `Bearer ${jwt}`
          }
        }
      );
      console.log("create event", response.data);
      dispatch({ type: CREATE_EVENTS_SUCCESS, payload: response.data });
    } catch (error) {
      console.log("Catch error", error);
      dispatch({ type: CREATE_EVENTS_FAILURE, payload: error });
    }
  };
};

export const getAllEvents = ({ jwt }) => {
  return async (dispatch) => {
    dispatch({ type: GET_ALL_EVENTS_REQUEST });
    try {
      const response = await api.get(`/api/${currentVersion}/events`, {
        headers: {
          Authorization: `Bearer ${jwt}`
        }
      });
      console.log("get all events", response.data);
      dispatch({ type: GET_ALL_EVENTS_SUCCESS, payload: response.data });
    } catch (error) {
      console.log("Catch error", error);
      dispatch({ type: GET_ALL_EVENTS_FAILURE, payload: error });
    }
  };
};

export const updateEvent = ({ eventId, eventData, jwt }) => {
  return async (dispatch) => {
    dispatch({ type: UPDATE_EVENTS_REQUEST });
    try {
      const response = await api.put(
        `/api/${currentVersion}/admin/events/${eventId}`,
        eventData,
        {
          headers: {
            Authorization: `Bearer ${jwt}`
          }
        }
      );
      console.log("update event", response.data);
      dispatch({ type: UPDATE_EVENTS_SUCCESS, payload: response.data });
    } catch (error) {
      console.log("Catch error", error);
      dispatch({ type: UPDATE_EVENTS_FAILURE, payload: error });
    }
  };
};

export const deleteEventAction = ({ eventId, jwt }) => {
  return async (dispatch) => {
    dispatch({ type: DELETE_EVENTS_REQUEST });
    try {
      const response = await api.delete(
        `/api/${currentVersion}/admin/events/${eventId}`,
        {
          headers: {
            Authorization: `Bearer ${jwt}`
          }
        }
      );
      console.log("DELETE events", response.data);
      dispatch({ type: DELETE_EVENTS_SUCCESS, payload: eventId });
    } catch (error) {
      console.log("Catch error", error);
      dispatch({ type: DELETE_EVENTS_FAILURE, payload: error });
    }
  };
};

export const getRestaurantsEvents = ({ restaurantId, jwt }) => {
  return async (dispatch) => {
    dispatch({ type: GET_RESTAURANTS_EVENTS_REQUEST });
    try {
      const response = await api.get(
        `/api/${currentVersion}/admin/events/restaurant/${restaurantId}`,
        {
          headers: {
            Authorization: `Bearer ${jwt}`
          }
        }
      );
      console.log("Get restaurants event", response.data);
      dispatch({
        type: GET_RESTAURANTS_EVENTS_SUCCESS,
        payload: response.data
      });
    } catch (error) {
      console.log("Catch error", error);
      dispatch({ type: GET_RESTAURANTS_EVENTS_FAILURE, payload: error });
    }
  };
};

export const createCategoryAction = ({ reqData, jwt }) => {
  return async (dispatch) => {
    dispatch({ type: CREATE_CATEGORY_REQUEST });
    try {
      const response = await api.post(
        `/api/${currentVersion}/admin/category`,
        reqData,
        {
          headers: {
            Authorization: `Bearer ${jwt}`
          }
        }
      );
      console.log("create category", response.data);
      dispatch({ type: CREATE_CATEGORY_SUCCESS, payload: response.data });
    } catch (error) {
      console.log("Catch error", error);
      dispatch({ type: CREATE_CATEGORY_FAILURE, payload: error });
    }
  };
};

export const getRestaurantsCategory = ({ jwt, restaurantId }) => {
  return async (dispatch) => {
    dispatch({ type: GET_RESTAURANTS_CATEGORY_REQUEST });
    try {
      const response = await api.get(
        `/api/${currentVersion}/category/restaurant/${restaurantId}`,
        {
          headers: {
            Authorization: `Bearer ${jwt}`
          }
        }
      );
      console.log("Get restaurants category", response.data);
      dispatch({
        type: GET_RESTAURANTS_CATEGORY_SUCCESS,
        payload: response.data
      });
    } catch (error) {
      console.log("Catch error", error);
      dispatch({ type: GET_RESTAURANTS_CATEGORY_FAILURE, payload: error });
    }
  };
};

export const updateCategory = ({ categoryId, categoryData, jwt }) => {
  return async (dispatch) => {
    dispatch({ type: UPDATE_CATEGORY_REQUEST });
    try {
      const response = await api.put(
        `/api/${currentVersion}/admin/category/${categoryId}`,
        categoryData,
        {
          headers: {
            Authorization: `Bearer ${jwt}`
          }
        }
      );
      console.log("update category", response.data);
      dispatch({ type: UPDATE_CATEGORY_SUCCESS, payload: response.data });
    } catch (error) {
      console.log("Catch error", error);
      dispatch({ type: UPDATE_CATEGORY_FAILURE, payload: error });
    }
  };
};

export const deleteCategoryAction = ({ categoryId, jwt }) => {
  return async (dispatch) => {
    dispatch({ type: DELETE_CATEGORY_REQUEST });
    try {
      const response = await api.delete(
        `/api/${currentVersion}/admin/category/${categoryId}`,
        {
          headers: {
            Authorization: `Bearer ${jwt}`
          }
        }
      );
      console.log("DELETE category", response.data);
      dispatch({ type: DELETE_CATEGORY_SUCCESS, payload: categoryId });
    } catch (error) {
      console.log("Catch error", error);
      dispatch({ type: DELETE_CATEGORY_FAILURE, payload: error });
    }
  };
};
