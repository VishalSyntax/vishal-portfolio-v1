import React from 'react';

const Header = ({ personalInfo, activeSection, setActiveSection }) => {
    const navItems = ['home', 'about', 'skills', 'contact'];
    
    const handleNavClick = (section) => {
        setActiveSection(section);
    };
    
    return (
        <header className="header">
            <nav>
                <ul>
                    {navItems.map(item => (
                        <li key={item}>
                            <a 
                                href={`#${item}`}
                                className={activeSection === item ? 'active' : ''}
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleNavClick(item);
                                }}
                            >
                                {item.charAt(0).toUpperCase() + item.slice(1)}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};

export default Header;
