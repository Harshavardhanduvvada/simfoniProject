import { getSuggestions, getProductSerach } from "../../Services/apiService";

export const setinputResults = (inputResults) => ({
  type: "SET_INPUT_RESULTS",
  payload: inputResults,
});

export const setproductDetails = (productDetails) => ({
  type: "SET_PRODUCT_DETAILS",
  payload: productDetails,
});

export const setLoading = (loading) => ({
  type: "SET_LOADING",
  payload: loading,
});
let debounceTimer;

export const fetchSuggestions = (query) => {
  return async (dispatch) => {
    dispatch(setLoading(true));
    if (debounceTimer) {
      clearTimeout(debounceTimer);
    }

    debounceTimer = setTimeout(async () => {
      try {
        const suggestions = await getSuggestions(query);
        console.log("suggestions", suggestions);
        dispatch(setLoading(false));
        dispatch(setproductDetails(suggestions.response));
      } catch (error) {
        console.error("Error fetching suggestions:", error);
      }
    }, 300);
  };
};

export const productListByName = (query, navigateCallback) => {
  return async (dispatch) => {
    dispatch(setLoading(true));
    if (debounceTimer) {
      clearTimeout(debounceTimer);
    }

    debounceTimer = setTimeout(async () => {
      try {
        const suggestions = await getProductSerach(query);
        console.log(suggestions);
        console.log("suggestions", suggestions.response.product_collection);
        dispatch(setLoading(false));
        dispatch(setinputResults(suggestions.response.product_collection));
        navigateCallback("/NewArrivals");
      } catch (error) {
        console.error("Error fetching suggestions:", error);
      }
    }, 300);
  };
};
