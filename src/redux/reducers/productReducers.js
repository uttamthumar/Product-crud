import { PRODUCT_LISTS } from "../actionType";

const initialState = {
    products: null
};

export const productData = (state = initialState, action) => {
    switch (action.type) {
        case PRODUCT_LISTS:
            return {
                ...state,
                products: action.payload
            };
        default:
            return state;
    }
};
