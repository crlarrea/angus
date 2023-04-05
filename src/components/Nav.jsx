import { React } from 'react';
import logo from '../assets/img/opt_logo.png';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

export const Nav = () => {
  const links = ['home', 'adoption', 'help us', 'shop', 'contact'];
  return (
    <>
      <nav className='Nav'>
        <NavLink to={'/'} className='logo'>
          <img src={logo} alt='Angus Cat Rescue Logo' />
        </NavLink>
        <ul>
          {links.map((link) => {
            return (
              <li key={`nav_${link}`}>
                <NavLink
                  to={link.replace(' ', '-')}
                  className={({ isActive }) =>
                    isActive ? 'active' : 'inactive'
                  }
                >
                  {link}
                </NavLink>
              </li>
            );
          })}
          <li>
            <FontAwesomeIcon icon={faCartShopping} />
          </li>
        </ul>
      </nav>
    </>
  );
};
