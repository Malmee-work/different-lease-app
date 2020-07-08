import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import fetchMock from "fetch-mock";
import expect from "expect";
import * as actions from "../actions";
import * as types from "../constants";
import * as config from "../config";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("fetching lease list actions test", () => {
  afterEach(() => {
    fetchMock.restore();
  });

  const tenantData = [
    { id: "lease-e", tenant: "matilda" },
    { id: "lease-f", tenant: "piccaso" },
    { id: "lease-g", tenant: "denee" },
  ];

  const newError = {error: 'New error'}

  it("creates LEASE_LIST_DATA_LOADED when fetching lease list has been done", () => {
    fetchMock.getOnce(config.LEASE_LIST_ENDPOINT, {
      body: tenantData,
      headers: { "content-type": "application/json" },
    });

    const expectedActions = [
      { type: types.LEASE_LIST_DATA_REQUEST },
      { type: types.LEASE_LIST_DATA_LOADED, payload: tenantData },
    ];
    const store = mockStore({ leaseList: [] });

    return store.dispatch(actions.getLeaseList()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it("creates LEASE_LIST_DATA_LOAD_FAILURE when fetching lease list has been done", () => {
    fetchMock.getOnce(config.LEASE_LIST_ENDPOINT, {throws: newError});

    const expectedActions = [
      { type: types.LEASE_LIST_DATA_REQUEST },
      { type: types.LEASE_LIST_DATA_LOAD_FAILURE, ex: newError},
    ];
    const store = mockStore({ leaseList: [] });

    return store.dispatch(actions.getLeaseList()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
