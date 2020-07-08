import React from 'react';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import configureMockStore from 'redux-mock-store';
import { render, screen } from './test-util';
import { LeaseDetails } from '../components/LeaseDetails';
import * as config from '../config';

jest.mock('../actions');
const actions = require('../actions');

const leaseData = [{id:"lease-e",start_date:"2018-05-12",end_date:"2018-11-13",rent:454,frequency:"weekly",payment_day:"tuesday"}];
const id = 'lease-a'
const match = {match : {url : id }}
const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe("fetching lease details component test", () => {
let store;
  afterEach(() => {
    fetchMock.restore();
  });

  beforeEach(() => {
    store = mockStore({ leaseDetails: leaseData });
  });

  it("creates LEASE_DETAILS_DATA_LOADED when fetching lease list has been done", () => {
    fetchMock.getOnce(config.LEASE_LIST_ENDPOINT+`/${id}`, {
      body: leaseData,
      headers: { "content-type": "application/json" },
    });

    store.dispatch = jest.fn();
    actions.getLeaseDetails.mockReturnValue(() => Promise.resolve());
    render(<LeaseDetails leaseDetailItem={leaseData} ownProps={match}/>, { initialState: { leaseDetailItem: leaseData } })
    const items = screen.getAllByRole("row");
    expect(screen.getAllByRole("row")).toHaveLength(2);
  });
});
