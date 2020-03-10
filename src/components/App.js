import React from 'react';
import Header from './Header';
import Home from './Home';
import Contact from './Contact';
import Services from './Services';
import Portfolio from './Portfolio';
import Bottomer from './Bottomer';

import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
      </Switch>
      <Switch>
        <Route path='/contact' component={Contact} />
      </Switch>
      <Switch>
        <Route path='/services' component={Services} />
      </Switch>
      <Switch>
        <Route path='/portfolio' component={Portfolio} />
      </Switch>
      <Bottomer />
    </div>
  );
}

export default App;
