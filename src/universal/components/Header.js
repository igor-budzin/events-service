import React, { Component } from 'react';
import cn from 'classnames';

import 'universal/assets/styles/Header.scss';

export default class Header extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      openMobileMenu: false,
    }
  }

  showMobileMenu = () => {
    this.setState({ openMobileMenu: !this.state.openMobileMenu });
  }

  render() {
    return (
      <header id="header" className="header">
        <div className="header__mobile-panel">
          <a href="/" className="header__logo">Cabin of Pilot</a>

          <button
            className={cn({
              hamburger: true,
              'hamburger--slider': true,
              'is-active': this.state.openMobileMenu
            })}
            type="button" onClick={this.showMobileMenu}
          >
            <span className="hamburger-box">
              <span className="hamburger-inner"></span>
            </span>
          </button>
        </div>

        <div className="header__menu-wrapper">
          <a className="header__menu-item" href="#">Головна</a>
          <a className="header__menu-item" href="#">Музика</a>
          <a className="header__menu-item" href="#">Афіша</a>
          <a className="header__menu-item" href="#">Блог</a>
          <a className="header__menu-item" href="#">Контакти</a>

          <a className="header__menu-item right" href="#">Вхід</a>
        </div>
      </header>
    );
  }
}
