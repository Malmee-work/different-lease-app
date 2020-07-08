import {
  LEASE_LIST_DATA_REQUEST,
  LEASE_LIST_DATA_LOADED,
  LEASE_LIST_DATA_LOAD_FAILURE,
  LEASE_DETAILS_DATA_REQUEST,
  LEASE_DETAILS_DATA_LOADED,
  LEASE_DETAILS_DATA_LOAD_FAILURE,
} from "../constants";
import * as config from "../config";

function fetchLeaseListRequest() {
  return {
    type: LEASE_LIST_DATA_REQUEST,
  };
}

function fetchLeaseListSuccess(payload) {
  return {
    type: LEASE_LIST_DATA_LOADED,
    payload,
  };
}

function fetchLeaseListFailure(ex) {
  return {
    type: LEASE_LIST_DATA_LOAD_FAILURE,
    ex,
  };
}

export function fetchLeaseDetailsRequest() {
  return {
    type: LEASE_DETAILS_DATA_REQUEST,
  };
}

function fetchLeaseDetailsSuccess(payload) {
  return {
    type: LEASE_DETAILS_DATA_LOADED,
    payload,
  };
}

function fetchLeaseDetailsFailure(ex) {
  return {
    type: LEASE_DETAILS_DATA_LOAD_FAILURE,
    ex,
  };
}

export function getLeaseList() {
  return function (dispatch) {
    dispatch(fetchLeaseListRequest());
    return fetch(config.LEASE_LIST_ENDPOINT)
      .then((response) => response.json())
      .then((json) => dispatch(fetchLeaseListSuccess(json)))
      .catch((ex) => dispatch(fetchLeaseListFailure(ex)));
  };
}

export function getLeaseDetails(id) {
  return function (dispatch) {
    dispatch(fetchLeaseDetailsRequest());
    return fetch(config.LEASE_LIST_ENDPOINT + `${id}`)
      .then((response) => response.json())
      .then((json) => dispatch(fetchLeaseDetailsSuccess(json)))
      .catch((ex) => dispatch(fetchLeaseDetailsFailure(ex)));
  };
}
