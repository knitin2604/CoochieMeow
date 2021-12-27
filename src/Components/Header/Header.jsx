import React from 'react';
import TopBar from './TopBar/TopBar';
import NavBar from './NavBar/NavBar';

const Header = ({ id}) => {
    return (
        <header id={id}>
           <TopBar/>
           <NavBar/>
        </header>
    );
};

export default Header;