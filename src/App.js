import React, {useEffect} from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import {connect} from "react-redux";

import Layout from "./components/Layout/Layout";


const App = (props) => {
  return (
    <div className="app">
      <Router>
        <Layout/>
      </Router>
    </div>
  );
};

export default connect(null)(App);
