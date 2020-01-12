import React, { Component } from 'react';

import Home from './containers/home/Home';
import AboutUs from './containers/aboutus/AboutUs';
import Hackathon from './containers/hackathon/Hackathon';
import Speaker from './containers/speakers/Speakers';
import Sponsor from './containers/sponsors/Sponsors';
import SideNav from './components/sidenav/SideNav';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className='App'>
          <SideNav />
          <Switch>
              <Route path='/aboutus' component={AboutUs} />
              <Route path='/hackathon' component={Hackathon} />
              <Route path='/timeline' component={AboutUs} />
              <Route path='/speakers' component={Speaker} />
              <Route path='/sponsors' component={Sponsor} />
              <Route path='/contactus' component={AboutUs} />
              <Route path='/documents' component={AboutUs} />
              <Route path='/' exact component={Home} />
          </Switch>
        </div>      
      </BrowserRouter>

    );
  }
}

export default App;
