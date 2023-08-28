import React from 'react';
import headerStyle from '../scss/header.module.scss';

function Header() {
  return (
    <header>
      <h1 className={headerStyle['title']}>COMMENTS</h1>
    </header>
  );
}

export default Header;
