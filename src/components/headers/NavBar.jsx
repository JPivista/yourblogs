import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars } from 'react-icons/fa'; // Ensure you have react-icons installed

const navLinks = [
    { name: 'Home', route: '/' },
    { name: 'Instructors', route: '/instructors' },
    { name: 'Classes', route: '/classes' },
    { name: 'AboutUs', route: '/about-us' },
    { name: 'Services', route: '/services' },
    { name: 'OurWork', route: '/our-work' },
    { name: 'ContactUs', route: '/contact-us' },
];

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(prevState => !prevState);
    };

    return (
        <div className='relative'>
            <div className='lg:w-[95%] mx-auto sm:px-6 lg:px-6'>
                <div className='px-4 py-4 flex items-center justify-between'>
                    {/* Logo */}
                    <div className='flex-shrink-0 cursor-pointer pl-7 md:p-0 flex items-center'>
                        <div>
                            <h1 className='text-24px inline-flex gap-3 items-center font-bold'>
                                YourBlogs
                                {/* <img src="/yoga-logo.png" alt="" className='w-8 h-8' /> */}
                            </h1>
                            <p className='font-bold text-[13px] tracking-[8px]'>
                                Quick Explore
                            </p>
                        </div>
                    </div>

                    {/* Mobile Menu Icon */}
                    <div className='md:hidden flex items-center'>
                        <button
                            type='button'
                            onClick={toggleMenu}
                            className='text-gray-300 hover:text-black focus:outline-none fixed top-6 right-6'
                        >
                            <FaBars className='h-6 w-6' />
                        </button>
                    </div>

                    {/* Desktop Navigation Links */}
                    <div className='hidden md:block text-black dark:text-white'>
                        <div className='flex'>
                            <ul className='ml-10 flex items-center space-x-4 pr-4'>
                                {navLinks.map((link) => (
                                    <li key={link.route}>
                                        <NavLink
                                            to={link.route}
                                            style={{ whiteSpace: 'nowrap' }}
                                            className='text-black'
                                        >
                                            {link.name}
                                        </NavLink>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Mobile Navigation Menu */}
                <div className={`md:hidden absolute top-full left-0 w-full bg-white z-50 ${isMenuOpen ? 'block' : 'hidden'}`}>
                    <div className='flex flex-col items-center space-y-4 py-4 fixed bg-white'>
                        {navLinks.map((link) => (
                            <NavLink
                                to={link.route}
                                key={link.route}
                                className='text-black block px-4 py-2'
                                onClick={toggleMenu} // Close menu on link click
                            >
                                {link.name}
                            </NavLink>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
