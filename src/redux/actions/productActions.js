import { PRODUCT_LISTS } from "../actionType";

export const getAllProducts = () => async (dispatch) => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/photos");
    console.log("response", response);
    const data = await response.json();
    dispatch({ type: PRODUCT_LISTS, payload: data });
  } catch (error) {
    console.error("Error fetching products:", error);
  }
};
