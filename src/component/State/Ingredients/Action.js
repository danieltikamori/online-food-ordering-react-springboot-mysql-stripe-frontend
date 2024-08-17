import {
  CREATE_INGREDIENT_CATEGORY_FAILURE,
  CREATE_INGREDIENT_CATEGORY_SUCCESS,
  CREATE_INGREDIENT_FAILURE,
  CREATE_INGREDIENT_SUCCESS,
  GET_INGREDIENT_CATEGORY_FAILURE,
  GET_INGREDIENT_CATEGORY_SUCCESS,
  GET_INGREDIENTS,
  UPDATE_STOCK
} from "./ActionType";

import { api } from "../../config/api";
import currentVersion from "../Api/Global";

export const getIngredientsOfRestaurant = ({ id, jwt }) => {
  return async (dispatch) => {
    try {
      const response = await api.get(
        `/api/${currentVersion}/admin/ingredients/restaurant/${id}`,
        {
          headers: {
            Authorization: `Bearer ${jwt}`
          }
        }
      );
      console.log("get all ingredients of restaurant", response.data);
      dispatch({ type: GET_INGREDIENTS, payload: response.data });
    } catch (error) {
      console.log("Catch error ", error);
      // dispatch({ type: GET_INGREDIENTS, payload: error });
    }
  };
};

export const createIngredient = ({ data, jwt }) => {
  return async (dispatch) => {
    try {
      const response = await api.post(
        `/api/${currentVersion}/admin/ingredients`,
        data,
        {
          headers: {
            Authorization: `Bearer ${jwt}`
          }
        }
      );
      console.log("create ingredient", response.data);
      dispatch({ type: CREATE_INGREDIENT_SUCCESS, payload: response.data });
    } catch (error) {
      console.log("Catch error ", error);
      dispatch({ type: CREATE_INGREDIENT_FAILURE, payload: error });
    }
  };
};

export const createIngredientCategory = ({ data, jwt }) => {
  console.log("data", data, "jwt", jwt);
  return async (dispatch) => {
    try {
      const response = await api.post(
        `/api/${currentVersion}/admin/ingredients/category`,
        data,
        {
          headers: {
            Authorization: `Bearer ${jwt}`
          }
        }
      );
      console.log("create ingredients category ", response.data);
      dispatch({
        type: CREATE_INGREDIENT_CATEGORY_SUCCESS,
        payload: response.data
      });
    } catch (error) {
      console.log("Catch error ", error);
      dispatch({ type: CREATE_INGREDIENT_CATEGORY_FAILURE, payload: error });
    }
  };
};

export const getIngredientCategory = ({ id, jwt }) => {
  return async (dispatch) => {
    try {
      const response = await api.get(
        `/api/${currentVersion}/admin/ingredients/restaurant/${id}/category`,
        {
          headers: {
            Authorization: `Bearer ${jwt}`
          }
        }
      );
      console.log("get ingredients category ", response.data);
      dispatch({
        type: GET_INGREDIENT_CATEGORY_SUCCESS,
        payload: response.data
      });
    } catch (error) {
      console.log("Catch error ", error);
      dispatch({ type: GET_INGREDIENT_CATEGORY_FAILURE, payload: error });
    }
  };
};

export const updateStockOfIngredient = ({ id, jwt }) => {
  return async (dispatch) => {
    try {
      const { data } = await api.put(
        `/api/${currentVersion}/admin/ingredients/${id}/stock`,
        {},
        {
          headers: {
            Authorization: `Bearer ${jwt}`
          }
        }
      );
      console.log("update stock ", data);
      dispatch({ type: UPDATE_STOCK, payload: data });
    } catch (error) {
      console.log("Catch error ", error);
      // dispatch({ type: GET_INGREDIENT_CATEGORY_FAILURE, payload: error });
    }
  };
};
