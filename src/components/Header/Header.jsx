import React from 'react'
import {Link , NavLink} from  'react-router-dom'




export default function Header() {

    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="shadow sticky z-50 top-0">
            <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">

                    
                    <Link to="/" className="flex items-center">
                        <img
                            src="data:image/jpeg;base64,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"
                            className="mr-3 h-12"
                            alt="Logo"
                        />
                        <span className="text-2xl font-bold text-orange-700 uppercase tracking-wide">
                                JK Tour
                        </span>
                         
                    </Link>

                    <div className="flex items-center lg:order-2">
                        <Link
                            to="#"
                            className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Log in
                        </Link>
                        <Link
                            to="#"
                            className="text-white bg-orange-700 hover:bg-black focus:ring-4 focus:ring-black-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Get started
                        </Link>

                        {/* Hamburger Menu Button (Visible on Mobile only) */}
                        <button
                            onClick={toggleMenu}
                            type="button"
                            className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                        >
                            <span className="sr-only">Open main menu</span>

                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    fillRule="evenodd"
                                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                        </button>

                    </div>
                    <div
                        className={`${isMenuOpen ? "block" : "hidden"} justify-between items-center w-full lg:flex lg:w-auto lg:order-1`}
                        id="mobile-menu-2"
                    >
                        <ul className ="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <NavLink
                                to="/"
                                
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700 " : "text-gray-700 "}  border-b border-gray-100  hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to = "/about"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700 " : "text-gray-700 "} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to="/service"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700 " : "text-gray-700 "} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Service
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to="/contact"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700 " : "text-gray-700 "} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Contact
                                </NavLink>
                            </li>
                            
                            
                            
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}
