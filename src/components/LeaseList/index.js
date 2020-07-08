import React, { useEffect } from "react";
import { connect, useDispatch} from "react-redux";
import { Table } from "react-bootstrap";
import { getLeaseList } from "../../actions";
import history from "../../router/history";


export const LeaseList = ({ leaseList }) => {
    const dispatch = useDispatch()
    useEffect(() => {
      dispatch(getLeaseList())
    }, []);

  if (leaseList.length <= 0) {
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
      <div className="col-4"></div>
      <div className="col-4">
        <Table striped bordered hover responsive size="sm" variant="dark">
          <thead>
            <tr>
              <th>Id</th>
              <th>Tenant</th>
            </tr>
          </thead>
          <tbody>
            {leaseList.map((el) => (
              <tr key={el.id} onClick={() => history.push(`/${el.id}`)}>
                <td>{el.id}</td>
                <td>{el.tenant}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      <div className="col-4"></div>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    leaseList: state.leaseList,
  };
}

export default connect(mapStateToProps, { getLeaseList })(LeaseList);
