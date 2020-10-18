import React, { Component } from 'react';

import './App.css';
import Test from './test1';
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import MaxWidthDialog from './Dialog'
import TestAbod from './test2'


class App extends Component {

  render() {
    return (

      <div className="">

        <Route path="/" exact component={Test}></Route>
        <Switch>

          <Route path="/dialog" component={MaxWidthDialog}></Route>

        </Switch>
      </div>

    );
  }
}

export default App;
