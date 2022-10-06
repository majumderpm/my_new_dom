import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className='navLink'>
            <NavLink className={({ isActive }) =>
              isActive ? 'active' : undefined} to='/home'>Home</NavLink>
            <NavLink to='/about'>About</NavLink>
            <NavLink to='/post'>Post</NavLink>
         
        </div>
    );
};

export default Header;