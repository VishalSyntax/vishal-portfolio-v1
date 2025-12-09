import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
    const location = useLocation();
    const navItems = [
        { path: '/', label: 'Home' },
        { path: '/about', label: 'About' },
        { path: '/skills', label: 'Skills' },
        { path: '/contact', label: 'Contact' }
    ];
    
    return (
        <header className="header">
            <nav>
                <ul>
                    {navItems.map(item => (
                        <li key={item.path}>
                            <Link 
                                to={item.path}
                                className={location.pathname === item.path ? 'active' : ''}
                            >
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};

export default Header;
