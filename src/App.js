import React, { Component } from 'react';

//components
import Header from './components/headerComponent/header.js'
import Footer from './components/footerComponent/footer.js'
import Homepage from './components/Pages/homePage.js'


//includes
import './Assets/css/default.min.css';


class App extends Component {
  render() {
    return (
      <div className="App">

        <Header />

          <Homepage />

        <Footer />

      </div>
    );
  }
}

export default App;
