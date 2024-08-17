import { api } from "../../config/api";
import currentVersion from "../Api/Global";
import {
  CREATE_MENU_ITEM_FAILURE,
  CREATE_MENU_ITEM_REQUEST,
  CREATE_MENU_ITEM_SUCCESS,
  DELETE_MENU_ITEM_FAILURE,
  DELETE_MENU_ITEM_REQUEST,
  DELETE_MENU_ITEM_SUCCESS,
  GET_ALL_INGREDIENTS_OF_MENU_ITEM_FAILURE,
  GET_ALL_INGREDIENTS_OF_MENU_ITEM_REQUEST,
  GET_ALL_INGREDIENTS_OF_MENU_ITEM_SUCCESS,
  GET_MENU_ITEMS_BY_RESTAURANT_ID_FAILURE,
  GET_MENU_ITEMS_BY_RESTAURANT_ID_REQUEST,
  GET_MENU_ITEMS_BY_RESTAURANT_ID_SUCCESS,
  SEARCH_MENU_ITEM_FAILURE,
  SEARCH_MENU_ITEM_REQUEST,
  SEARCH_MENU_ITEM_SUCCESS,
  UPDATE_MENU_ITEM_FAILURE,
  UPDATE_MENU_ITEM_REQUEST,
  UPDATE_MENU_ITEM_SUCCESS,
  UPDATE_MENU_ITEMS_AVAILABILITY_FAILURE,
  UPDATE_MENU_ITEMS_AVAILABILITY_REQUEST,
  UPDATE_MENU_ITEMS_AVAILABILITY_SUCCESS
} from "./ActionType";

export const createMenuItem = ({ menu, jwt }) => {
  return async (dispatch) => {
    dispatch({ type: CREATE_MENU_ITEM_REQUEST });
    try {
      const { data } = await api.post(`/api/${currentVersion}/food`, menu, {
        headers: {
          Authorization: `Bearer ${jwt}`
        }
      });
      console.log("Created menu ", data);
      dispatch({ type: CREATE_MENU_ITEM_SUCCESS, payload: data });
    } catch (error) {
      console.log("Catch error ", error);
      dispatch({ type: CREATE_MENU_ITEM_FAILURE, payload: error });
    }
  };
};

export const getMenuItemByRestaurantId = (reqData) => {
  return async (dispatch) => {
    dispatch({ type: GET_MENU_ITEMS_BY_RESTAURANT_ID_REQUEST });
    try {
      const { data } = await api.get(
        `/api/${currentVersion}/food/restaurant/${reqData.restaurantId}?vegetarian=${reqData.vegetarian}&nonVegetarian=${reqData.nonVegetarian}&seasonal=${reqData.seasonal}&food_category=${reqData.foodCategory}`,
        {
          headers: {
            Authorization: `Bearer ${reqData.jwt}`
          }
        }
      );
      console.log("Get menu ", data);
      dispatch({
        type: GET_MENU_ITEMS_BY_RESTAURANT_ID_SUCCESS,
        payload: data
      });
    } catch (error) {
      console.log("Catch error ", error);
      dispatch({
        type: GET_MENU_ITEMS_BY_RESTAURANT_ID_FAILURE
      });
    }
  };
};

export const searchMenuItem = (keyword, jwt) => {
  return async (dispatch) => {
    dispatch({ type: SEARCH_MENU_ITEM_REQUEST });
    try {
      const { data } = await api.get(`/api/food/search?name=${keyword}`, {
        headers: {
          Authorization: `Bearer ${jwt}`
        }
      });
      console.log("Search data ------- ", data);
      dispatch({
        type: SEARCH_MENU_ITEM_SUCCESS,
        payload: data
      });
    } catch (error) {
      console.log("Catch error ", error);
      dispatch({
        type: SEARCH_MENU_ITEM_FAILURE,
        payload: error
      });
    }
  };
};

export const getAllIngredientsOfMenuItem = (reqData) => {
  return async (dispatch) => {
    dispatch({ type: GET_ALL_INGREDIENTS_OF_MENU_ITEM_REQUEST });
    try {
      const { data } = await api.get(
        `/api/${currentVersion}/food/restaurant/${reqData.restaurantId}`,
        {
          headers: {
            Authorization: `Bearer ${reqData.jwt}`
          }
        }
      );
      console.log("Get menu ", data);
      dispatch({
        type: GET_ALL_INGREDIENTS_OF_MENU_ITEM_SUCCESS,
        payload: data
      });
    } catch (error) {
      console.log("Catch error ", error);
      dispatch({
        type: GET_ALL_INGREDIENTS_OF_MENU_ITEM_FAILURE,
        payload: error
      });
    }
  };
};

export const updateMenuItem = ({ foodId, jwt }) => {
  return async (dispatch) => {
    dispatch({ type: UPDATE_MENU_ITEM_REQUEST });
    try {
      const { data } = await api.put(
        `/api/${currentVersion}/admin/food/${foodId}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${jwt}`
          }
        }
      );
      console.log("Update menu ", data);
      dispatch({ type: UPDATE_MENU_ITEM_SUCCESS, payload: data });
    } catch (error) {
      console.log("Catch error ", error);
      dispatch({ type: UPDATE_MENU_ITEM_FAILURE, payload: error });
    }
  };
};

export const updateMenuItemsAvailability = ({ foodId, jwt }) => {
  return async (dispatch) => {
    dispatch({ type: UPDATE_MENU_ITEMS_AVAILABILITY_REQUEST });
    try {
      const { data } = await api.put(
        `/api/${currentVersion}/admin/food/${foodId}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${jwt}`
          }
        }
      );
      console.log("Update menuItems availability ", data);
      dispatch({ type: UPDATE_MENU_ITEMS_AVAILABILITY_SUCCESS, payload: data });
    } catch (error) {
      console.log("Catch error ", error);
      dispatch({
        type: UPDATE_MENU_ITEMS_AVAILABILITY_FAILURE,
        payload: error
      });
    }
  };
};

export const deleteFoodAction =
  ({ foodId, jwt }) =>
  async (dispatch) => {
    dispatch({ type: DELETE_MENU_ITEM_REQUEST });
    try {
      const { data } = await api.delete(
        `/api/${currentVersion}/admin/food/${foodId}`,
        {
          headers: {
            Authorization: `Bearer ${jwt}`
          }
        }
      );
      console.log("Delete food ", data);
      dispatch({ type: DELETE_MENU_ITEM_SUCCESS, payload: data });
    } catch (error) {
      console.log("Catch error ", error);
      dispatch({ type: DELETE_MENU_ITEM_FAILURE, payload: error });
    }
  };
