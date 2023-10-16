// store/reducers/apiReducer.js
const initialState = {
    inputResults: [],
    productDetails: [],
    isLoading: false,
  };
  
  const apiReducer = (state = initialState, action:any) => {
    switch (action.type) {
      case 'SET_INPUT_RESULTS':
        return { ...state, inputResults: action.payload, isLoading: false, };
      case 'SET_PRODUCT_DETAILS':
        return { ...state, productDetails: action.payload, isLoading: false, };
        case "SET_LOADING":
      return {
        ...state,
        isLoading: action.payload, // Set isLoading to true or false
      };
      default:
        return state;
    }
  };
  
  export default apiReducer;
  