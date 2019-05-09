import React from 'react';
import {Route} from "react-router-dom";
import Charts from "../Charts/Charts";
import Users from "../Users/Users";


const AppRoutes = (props) => {

  return (
    <>
      <Route path="/" exact component={A}/>
      <Route path="/users" component={Users}/>
      <Route path="/charts" component={Charts}/>
    </>
  );
};

export default AppRoutes;


const A = () => {
  return (
    <span>A</span>
  );
};
