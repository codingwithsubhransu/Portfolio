import React from 'react';
import Logo from '../../assets/Logo.png';
import Resume from '../../assets/Resume.pdf';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const nav_links = [
        { name: 'About', href: '/', },  // 5954ff
        { name: 'Experience', href: 'experience' },
        { name: 'Skills', href: 'skills' },
        { name: 'Projects', href: 'projects' },
        { name: 'Contact', href: 'contact' }
    ]

    const [isOpened, setIsOpened] = useState(false);

    const toggleMenu = () => {
        setIsOpened(!isOpened);
    }

    return (
        <nav className='bg-transparent fixed top-0 left-0 w-full z-50 flex md:justify-evenly items-center p-4 shadow-lg/20 shadow-[#413bff] dark:shadow-[#413bff] backdrop-blur-md dark:bg-gray-800/30 transition-all duration-300 ease-in-out justify-between'>
            <img src={Logo} alt="Logo" className='h-10 rounded-full' />
            <ul className='space-x-4 hidden md:flex'>
                {nav_links.map((link, index) => (
                    <li key={index}>
                        <NavLink to={link.href} className={({isActive}) =>
                                        `text-gray-800 dark:text-gray-200 hover:shadow-xl/30 hover:border-b-2 hover:border-b-[#413bff] transition-all duration-100 transform hover:scale-105 hover:shadow-[#413bff] ${isActive ? 'border-b-[#413bff] border-b-2 shadow-xl' : ''}`
                                    }>
                            {link.name}
                        </NavLink>
                    </li>
                ))}
            </ul>
            <a href={Resume} className='text-gray-800 dark:text-gray-200 border-2 border-gray-800 dark:border-gray-200 rounded px-4 py-2 hover:shadow-lg hover:shadow-[#413bff] transition-all duration-300 inset-ring-1 hidden md:block' download={Resume}>Download Resume</a>
            <button onClick={toggleMenu} className='md:hidden text-gray-800 dark:text-gray-200 hover:text-[#413bff] focus:outline-none'>
                <span className="text-2xl">
              {isOpened ? <>&times;</> : <>&#9776;</>}
            </span>
            </button>

            {isOpened && (
                <ul className='absolute top-16 left-0 w-full bg-white dark:bg-gray-800 shadow-lg p-4 flex flex-col items-center space-y-4 md:hidden'>
                    <li><a href="#about" className='text-gray-800 dark:text-gray-200 hover:shadow-xl/30 hover:border-b-2 border-b-2 border-b-[#5954ff] transition-all duration-200 hover:shadow-[#413bff] shadow-xl/30 shadow-[#413bff]'>About</a></li>
                    <li><a href="#experience" className='text-gray-800 dark:text-gray-200 hover:shadow-xl/30 hover:border-b-2 border-b-[#2d26fb] transition-all duration-200 hover:shadow-[#413bff]'>Experience</a></li>
                    <li><a href="#skills" className='text-gray-800 dark:text-gray-200 hover:shadow-xl/30 hover:border-b-2 border-b-[#2d26fb] transition-all duration-200 hover:shadow-[#413bff]'>Skills</a></li>
                    <li><a href="#projects" className='text-gray-800 dark:text-gray-200 hover:shadow-xl/30 hover:border-b-2 border-b-[#2d26fb] transition-all duration-200 transform hover:scale-105 hover:shadow-[#413bff]'>Projects</a></li>
                    <li><a href="#contact" className='text-gray-800 dark:text-gray-200 hover:shadow-xl/30 hover:border-b-2 border-b-[#2d26fb] transition-all duration-200 transform hover:scale-105 hover:shadow-[#413bff]'>Contact</a></li>
                    <li><a href={Resume} className='text-gray-800 dark:text-gray-200 border-2 border-gray-800 dark:border-gray-200 rounded px-4 py-2 hover:shadow-lg hover:shadow-[#413bff] transition-all duration-300 inset-ring-1' download={Resume}>Download Resume</a></li>
                </ul>
            )}
        </nav>
    );
}

export default Navbar;
