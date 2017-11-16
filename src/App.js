import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

//components
import Header from './components/headerComponent/header.js'
import Footer from './components/footerComponent/footer.js'
import Homepage from './components/Pages/homePage.js'
import Aboutpage from './components/Pages/aboutPage.js'


//includes
import './Assets/css/default.min.css';


class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">

        <Header />

          <Route exact path='/' component={Homepage} />
          <Route exact path='/About' component={Aboutpage} />

        <Footer />

      </div>
      </Router>
    );
  }
}

export default App;
