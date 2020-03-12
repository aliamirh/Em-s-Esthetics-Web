import React from 'react';
import Header from './Header';
import Home from './Home';
import Merch from './Merch';
import Services from './Services';
import Portfolio from './Portfolio';
import Footer from './Footer';

import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
      </Switch>
      <Switch>
        <Route path='/merch' component={Merch} />
      </Switch>
      <Switch>
        <Route path='/services' component={Services} />
      </Switch>
      <Switch>
        <Route path='/portfolio' component={Portfolio} />
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
