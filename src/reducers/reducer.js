export const initialState = {
	products: [],
	pagination: 1,
	filterCategoryOption: [],
	filterPriceOption: [],
	productCart: [],
    cartVisible: false,
}


export const actionTypes = {
    ADD_CART: 'ADD_CART',
    CLEAR_CART: 'CLEAR_CART',
    CLOSE_CART: 'CLOSE_CART',
    OPEN_CART: 'OPEN_CART',
	SET_PRODUCT: 'SET_PRODUCT',

	SET_FILTER_CATEGORY: 'SET_FILTER_CATEGORY',
	SET_FILTER_PRICE: 'SET_FILTER_PRICE',
	READ_PAGINATION: 'READ_PAGINATION'
}

export const reducer = (state = initialState , action) => {

    switch (action.type) {
        
        case actionTypes.ADD_CART:
            return {
                ...state,
                productCart : [...state.productCart, action.payload],
                cartVisible: true
            }

        case actionTypes.CLEAR_CART:
            return {
                ...state,
                productCart : [],
                cartVisible: false
            }

        case actionTypes.CLOSE_CART:
            return {
                ...state,
                cartVisible: false
            }

        case actionTypes.OPEN_CART:
            return {
                ...state,
                cartVisible: true
            }
    

        case actionTypes.SET_PRODUCT:
            return {
                ...state,
                products : action.payload.data,
                pagination: action.payload.current_page
            }

        default:
            return state;
    }

}