import React from 'react'
import {Link , NavLink} from  'react-router-dom'



export default function Footer() {
    return (
        <footer className="bg-white border-y">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <Link to="/" className="flex items-center">
                            <img
                                src="data:image/jpeg;base64,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"
                                className="mr-3 h-16"
                                alt="Logo"
                            />
                            <span className="text-2xl font-bold text-orange-700 uppercase tracking-wide">
                                JK Tour
                            </span>
                        </Link>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Resources</h2>
                            <ul className="text-gray-500 font-medium">
                                <li className="mb-4">
                                    <Link to="/" className="hover:underline">
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/about" className="hover:underline">
                                        About
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Follow us</h2>
                            <ul className="text-gray-500 font-medium">
                                <li className="mb-4">
                                    <a
                                        href="https://github.com/hiteshchoudhary"
                                        className="hover:underline"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        Github
                                    </a>
                                </li>
                                <li>
                                    <Link to="/" className="hover:underline">
                                        Discord
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Legal</h2>
                            <ul className="text-gray-500 font-medium">
                                <li className="mb-4">
                                    <Link to="#" className="hover:underline">
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#" className="hover:underline">
                                        Terms &amp; Conditions
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm text-gray-500 sm:text-center">
                        
                        . All Rights Reserved.
                    </span>
                    <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
                        <Link to="#" className="text-gray-500 hover:text-gray-900">
                            <svg
                                className="w-4 h-4"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 8 19"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                            <span className="sr-only">Facebook page</span>
                        </Link>
                        <Link to="#" className="text-gray-500">
                            <svg
                                className="w-4 h-4"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 21 16"
                            >
                                <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z" />
                            </svg>
                            <span className="sr-only">Discord community</span>
                        </Link>
                        <Link to="#" className="text-gray-500">
                            <svg
                                className="w-4 h-4"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 20 17"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                            <span className="sr-only">Twitter page</span>
                        </Link>
                        <Link to="#" className="text-gray-500">
                            <svg
                                className="w-4 h-4"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                            <span className="sr-only">GitHub account</span>
                        </Link>
                        <Link to="#" className="text-gray-500">
                            <svg
                                className="w-4 h-4"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M10 0a10 10 0 1 0 10 10A10.009 10.009 0 0 0 10 0Zm6.613 4.614a8.523 8.523 0 0 1 1.93 5.32 20.094 20.094 0 0 0-5.949-.274c-.059-.149-.122-.292-.184-.441a23.879 23.879 0 0 0-.566-1.239 11.41 11.41 0 0 0 4.769-3.366ZM8 1.707a8.821 8.821 0 0 1 2-.238 8.5 8.5 0 0 1 5.664 2.152 9.608 9.608 0 0 1-4.476 3.087A45.758 45.758 0 0 0 8 1.707ZM1.642 8.262a8.57 8.57 0 0 1 4.73-5.981A53.998 53.998 0 0 1 9.54 7.222a32.078 32.078 0 0 1-7.9 1.04h.002Zm2.01 7.46a8.51 8.51 0 0 1-2.2-5.707v-.262a31.64 31.64 0 0 0 8.777-1.219c.243.477.477.964.692 1.449-.114.032-.227.067-.336.1a13.569 13.569 0 0 0-6.942 5.636l.009.003ZM10 18.556a8.508 8.508 0 0 1-5.243-1.8 11.717 11.717 0 0 1 6.7-5.332.509.509 0 0 1 .055-.02 35.65 35.65 0 0 1 1.819 6.476 8.476 8.476 0 0 1-3.331.676Zm4.772-1.462A37.232 37.232 0 0 0 13.113 11a12.513 12.513 0 0 1 5.321.364 8.56 8.56 0 0 1-3.66 5.73h-.002Z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                            <span className="sr-only">Dribbble account</span>
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
