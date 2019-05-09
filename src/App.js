import React from 'react';
import {BrowserRouter as Router} from "react-router-dom";

import Layout from "./components/Layout/Layout";


const App = () => {
  return (
    <div className="app">
      <Router>
        <Layout/>
      </Router>
    </div>
  );
};

export default App;
