import { actionTypes } from "../reducers/reducer"
import productFetchApi from "../utils/api"


export const startAddCart = (data) => ({type: actionTypes.ADD_CART, payload: data})

export const startClearCart = () => ({type: actionTypes.CLEAR_CART})

export const startCloseCart = () => ({type: actionTypes.CLOSE_CART})

export const startOpenCart = () => ({type: actionTypes.OPEN_CART})

export const startGetProduct = (body = {}) => {
    return async (dispatch, getState) => {

        const { currentpage } = getState().reducer;

        try {
            const resp = await productFetchApi(`products?page=${currentpage}`, 'POST', 'application/json', body)
            const {data} = await resp.json();

            dispatch({
                type: actionTypes.SET_PRODUCT,
                payload: data
            })

        } catch (error) {
            console.log(error);
        }
    }
}