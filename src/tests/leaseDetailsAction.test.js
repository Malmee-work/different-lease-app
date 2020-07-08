import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import fetchMock from "fetch-mock";
import expect from "expect";
import * as actions from "../actions";
import * as types from "../constants";
import * as config from "../config";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("fetching lease details actions test", () => {
  afterEach(() => {
    fetchMock.restore();
  });

  const leaseData = {
    id: "lease-e",
    start_date: "2018-05-12",
    end_date: "2018-11-13",
    rent: 454,
    frequency: "weekly",
    payment_day: "tuesday",
  };

  const id = "/lease-e";

  const newError = {error: 'New error'}

  it("creates LEASE_DETAILS_DATA_LOADED when fetching lease item details has been done", () => {
    fetchMock.getOnce(config.LEASE_LIST_ENDPOINT + `${id}`, {
      body: leaseData,
      headers: { "content-type": "application/json" },
    });

    const expectedActions = [
      { type: types.LEASE_DETAILS_DATA_REQUEST },
      { type: types.LEASE_DETAILS_DATA_LOADED, payload: leaseData },
    ];
    const store = mockStore({ leaseDetails: "" });

    return store.dispatch(actions.getLeaseDetails(id)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it("creates LEASE_DETAILS_DATA_LOAD_FAILURE when fetching lease item details has been done", () => {
    fetchMock.getOnce(config.LEASE_LIST_ENDPOINT + `${id}`, {throws: newError});

    const expectedActions = [
      { type: types.LEASE_DETAILS_DATA_REQUEST },
      { type: types.LEASE_DETAILS_DATA_LOAD_FAILURE, ex: newError},
    ];
    const store = mockStore({ leaseDetails: [] });

    return store.dispatch(actions.getLeaseDetails(id)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
