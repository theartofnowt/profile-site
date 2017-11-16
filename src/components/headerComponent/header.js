import React, { Component } from 'react';


class Header extends Component {
  render() {
    return (
      <header className="header">


        <nav>
          <ul>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Projects</a>
            </li>
            <li>
              <a href="#">Doodles</a>
            </li>
            <li>
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
