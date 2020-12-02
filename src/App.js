import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Hero from './component/hero';
import BtReactForm from './component/Form';
import PageShell from './component/Pageshell';
import MultipleCards from './component/MultipleCards';
import packagesPlan from './component/Package';


import './App.css';

const App = () => (
  <div className="">
      <Route exact path="/" component={PageShell(Hero)} />
      <Route path="/loginForm" component={PageShell(BtReactForm)} />
      <Route path="/plansPage" component={PageShell(MultipleCards)} />
      <Route path="/packagesPlan" component={PageShell(packagesPlan)} />
  </div>
);

export default App;
