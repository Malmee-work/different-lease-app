import rootReducer from "../reducer";
import * as types from "../constants";

describe("lease reducer test", () => {
  const tenantData = [
    { id: "lease-e", tenant: "matilda" },
    { id: "lease-f", tenant: "piccaso" },
    { id: "lease-g", tenant: "denee" },
  ];
  const leaseData = {
    id: "lease-e",
    start_date: "2018-05-12",
    end_date: "2018-11-13",
    rent: 454,
    frequency: "weekly",
    payment_day: "tuesday",
  };

  it("should return the initial state", () => {
    expect(rootReducer(undefined, {})).toEqual({
      leaseList: [],
      leaseDetails: [],
    });
  });

  it("should handle LEASE_LIST_DATA_LOADED", () => {
    expect(
      rootReducer([], {
        type: types.LEASE_LIST_DATA_LOADED,
        payload: tenantData,
      })
    ).toEqual({
      leaseList: tenantData,
    });
  });

  it("should handle LEASE_DETAILS_DATA_LOADED", () => {
    expect(
      rootReducer([], {
        type: types.LEASE_DETAILS_DATA_LOADED,
        payload: leaseData,
      })
    ).toEqual({
      leaseDetails: leaseData,
    });
  });
});
