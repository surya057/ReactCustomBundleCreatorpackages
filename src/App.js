import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Hero from './component/hero';
import Loading from './component/loading';
import { 
  Question1, 
  Question2, 
  Question3,
  Question4,
  Question5,
  Question6,
  Question7,
  Question8, } from './component/questions';
import PageShell from './component/Pageshell';
import MultipleCards from './component/MultipleCards';

import './App.css';

const App = () => (
  <div className="">
      <Route exact path="/" component={PageShell(Hero)} />
      <Route path="/question1" component={PageShell(Question1)} />
      <Route path="/question2" component={PageShell(Question2)} />
      <Route path="/question3" component={PageShell(Question3)} />
      <Route path="/question4" component={PageShell(Question4)} />
      <Route path="/question5" component={PageShell(Question5)} />
      <Route path="/question6" component={PageShell(Question6)} />
      <Route path="/question7" component={PageShell(Question7)} />
      <Route path="/question8" component={PageShell(Question8)} />
      <Route path="/loading" component={PageShell(Loading)} />
      <Route path="/plansPage" component={PageShell(MultipleCards)} />
  </div>
);

export default App;
