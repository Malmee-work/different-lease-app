import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LeaseList from "../components/LeaseList";
import LeaseDetails from "../components/LeaseDetails";

const App = () => (
  <Router>
  <Route exact={true} path="/" component={LeaseList} />
  <Route path="/:leaseId" component={LeaseDetails} />
</Router>
);

export default App;