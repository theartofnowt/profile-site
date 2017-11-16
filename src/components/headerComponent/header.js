import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';


class Header extends Component {
  render() {
    return (
      <header className="header">


        <nav>
          <ul>
            <li className="first">
              <Link to='/About'>About</Link>
            </li>
            <li>
              <a href="#">Projects</a>
            </li>
            <li>
              <a href="#">Doodles</a>
            </li>
            <li className="last">
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>

        <div className="banner">
          <span className="strapline">
          Freelance front-end developer Michael Brown
          </span>
        </div>

      </header>
    );
  }
}

export default Header;
