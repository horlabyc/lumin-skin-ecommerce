import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.scss';

const NavBar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    console.log(position)
    setScrollPosition(position);
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true});
    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
  });

  return (  
    <div className="navbar__wrapper">
      <header className={`header ${scrollPosition > 40 ? 'sticky' : ''}`}>
        <div className="content">
          <section className="section1">
            <div className="logo">
                <img src="https://store.luminskin.com/_next/static/images/logo-20c2cb1d9d2bb6d2139d0e5cec3103bd.png" alt="logo"/>
            </div>
            <div className="menuItems">
                <ul className="items">
                    <li className="item">
                        <Link to="/">Shop</Link>
                    </li>
                </ul>
            </div>
          </section>
        </div>
      </header>
    </div>
  );
}
 
export default NavBar;