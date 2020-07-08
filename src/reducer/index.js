import { LEASE_LIST_DATA_LOADED, LEASE_LIST_DATA_LOAD_FAILURE, LEASE_DETAILS_DATA_LOADED, LEASE_DETAILS_DATA_LOAD_FAILURE } from "../constants";

const initialState = {
    leaseList: [],
    leaseDetails : []
  };

  function rootReducer(state = initialState, action) {
      if (action.type === LEASE_LIST_DATA_LOADED) {
        return Object.assign({}, state, {
          leaseList: action.payload
        });
      }

      if (action.type === LEASE_LIST_DATA_LOAD_FAILURE) {
        return Object.assign({}, state, {
          leaseList: []
        });
      }

      if (action.type === LEASE_DETAILS_DATA_LOADED) {
        return Object.assign({}, state, {
          leaseDetails: action.payload
        });
      }

      if (action.type === LEASE_DETAILS_DATA_LOAD_FAILURE) {
        return Object.assign({}, state, {
          leaseDetails: []
        });
      }

    return state;
  };

  export default rootReducer;