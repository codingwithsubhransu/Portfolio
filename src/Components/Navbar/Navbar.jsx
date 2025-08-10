import React, { useEffect } from 'react';
import Logo from '../../assets/Logo.png';
import Resume from '../../assets/Resume.pdf';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const nav_links = [
        { name: 'Home', href: '/', color: '#413bff' },
        { name: 'About', href: '/about', color: '#5954ff' },
        { name: 'Experience', href: 'experience', color: '#2d26fb' },
        { name: 'Skills', href: 'skills', color: '#2d26fb' },
        { name: 'Projects', href: 'projects', color: '#2d26fb' },
        { name: 'Contact', href: 'contact', color: '#2d26fb' }
    ]

    const [isOpened, setIsOpened] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const handleScroll = () => {
        const offset = window.scrollY;
        setIsScrolled(offset > 10);
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [])

    const toggleMenu = () => {
        setIsOpened(!isOpened);
    }

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 flex md:justify-evenly items-center p-4 shadow-lg/20 shadow-[#413bff] dark:shadow-[#413bff] dark:bg-gray-800/30 transition-all duration-300 ease-in-out justify-between ${isScrolled ? 'backdrop-blur-md bg-gray-900/40' : 'bg-transparent'}`}>
            <NavLink to="/">
                <img src={Logo} alt="Logo" className="h-10 rounded-full hover:scale-105 transition-transform duration-300" />
            </NavLink>

            <ul className='space-x-4 hidden md:flex'>
                {nav_links.map((link, index) => (
                    <li key={index}>
                        <NavLink
                        to={link.href}
                        className={({ isActive }) =>
                            `relative inline-block px-1 transition-all duration-300 
                            text-gray-800 dark:text-gray-200 
                            after:content-[''] after:absolute after:left-0 after:bottom-[-4px] 
                            after:w-full after:h-[2px] after:bg-[#413bff] 
                            after:scale-x-0 after:origin-right after:transition-transform after:duration-300
                            hover:after:scale-x-100 hover:after:origin-left
                            hover:text-[#413bff] hover:tracking-wide
                            ${isActive ? 'after:scale-x-100 text-[#413bff] font-semibold' : ''}`
                        }
                        >
                        {link.name}
                        </NavLink>

                    </li>
                ))}
            </ul>
            <a href={Resume} download
            className="text-white bg-gradient-to-r from-[#413bff] to-[#6f69ff] border-0 rounded px-4 py-2 shadow-lg hover:shadow-[0_0_20px_#413bff] transition-all duration-300 hidden md:block"
            >
                    Download Resume
            </a>

            <button onClick={toggleMenu} className='md:hidden text-gray-800 dark:text-gray-200 hover:text-[#413bff] focus:outline-none'>
            <span className="text-2xl">
              {isOpened ? <>&times;</> : <>&#9776;</>}
            </span>
            </button>

            {isOpened && (
                <ul className='absolute top-16 left-0 w-full bg-white dark:bg-gray-800 shadow-lg p-4 flex flex-col items-center space-y-4 md:hidden animate-slideDown transition-all duration-300 ease-in-out'>
                    {nav_links.map((link, index) => (
                        <li key={index}>
                            <NavLink to={link.href} className={({isActive}) =>
                                        `text-gray-800 dark:text-gray-200 hover:shadow-xl/30 transition-all transform hover:shadow-[#413bff] ${isActive ? 'border-b-[#413bff] border-b-2 shadow-xl' : 'hover:border-b-2 hover:border-b-[#5855ad] ease-in'}`
                                    }>
                                {link.name}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            )}
        </nav>
    );
}

export default Navbar;
