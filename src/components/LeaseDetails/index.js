import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { Table } from "react-bootstrap";
import { getLeaseDetails } from "../../actions";
import history from "../../router/history";


export const LeaseDetails = ({ leaseDetailItem, ownProps }) => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getLeaseDetails(ownProps.match.url))
  }, []);

  if (leaseDetailItem.length <= 0) {
    return <div><div className="row">
    <div className="col-4">
    </div>
    <div className="col-4">
    <p className="no-details">No Lease Details Found</p>
    </div>
    <div className="col-4">
    </div>
    </div>
    </div>;
}

  return (
    <div className="row">
      <div className="col-1">
      </div>
      <div className="col-1">
      <div className="back" onClick={() => history.push(`/`)}>Go Home</div>
      </div>
      <div className="col-8">
        <Table striped bordered hover responsive size="sm" variant="dark">
          <thead>
            <tr>
              <th>Id</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Rent</th>
              <th>Frequency</th>
              <th>Payment Day</th>
            </tr>
          </thead>
          <tbody>
          <tr key={leaseDetailItem.id}>
              <td>{leaseDetailItem.id}</td>
              <td>{leaseDetailItem.start_date}</td>
              <td>{leaseDetailItem.end_date}</td>
              <td>{leaseDetailItem.rent}</td>
              <td>{leaseDetailItem.frequency}</td>
              <td>{leaseDetailItem.payment_day}</td>
              </tr>
          </tbody>
        </Table>
      </div>
      <div className="col-2"></div>
    </div>
  );
};

function mapStateToProps(state, ownProps) {
  return {
    leaseDetailItem: state.leaseDetails,
    ownProps
  };
}

export default connect(mapStateToProps, {getLeaseDetails})(LeaseDetails);
