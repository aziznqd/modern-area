import arrow from '../assets/arrow.svg'
import hamburger from '../assets/hamburger.svg'
import close from '../assets/close.svg'
import { useState } from 'react'

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    function toggleHamburger() {
        setIsOpen((prev) => !prev);
    }

    return (
        <nav
            className={`sticky top-0 z-50 bg-white p-5 rounded-b-[20px] shadow-lg transition-[padding] duration-300 ease-in-out md:p-0 md:rounded-none md:shadow-none md:pt-4 md:pb-6 ${
                isOpen ? "pb-8" : ""
            }`}
        >
            <div className="flex items-center justify-between">

                <a
                    href="#header"
                    className={`font-dm-sans font-medium text-[30px] transition-[padding] duration-300 ease-in-out ${
                        isOpen ? "pb-12.5" : ""
                    }`}
                >
                    Area
                </a>

                {/* Desktop Navigation */}
                <ul className="hidden md:flex gap-6.75 font-dm-sans font-bold text-[14px]">
                    <li>
                        <a
                            href="#benefits"
                            className="hover:text-green-2 transition-colors duration-200"
                        >
                            Benefits
                        </a>
                    </li>

                    <li>
                        <a
                            href="#specs"
                            className="hover:text-green-2 transition-colors duration-200"
                        >
                            Spesifications
                        </a>
                    </li>

                    <li>
                        <a
                            href="#how-to"
                            className="hover:text-green-2 transition-colors duration-200"
                        >
                            How-to
                        </a>
                    </li>

                    <li>
                        <a
                            href="#contact"
                            className="hover:text-green-2 transition-colors duration-200"
                        >
                            Contact Us
                        </a>
                    </li>
                </ul>

                <button
                    className="hidden md:flex py-3.5 px-5.5 bg-green-1 hover:bg-green-2 text-white border rounded-[100px] font-dm-sans font-bold text-[14px] justify-between items-center gap-0.5 transition-colors duration-200"
                >
                    Learn More
                    <img src={arrow} alt="arrow" />
                </button>

                <button
                    onClick={toggleHamburger}
                    className={`md:hidden transition-[padding] duration-300 ease-in-out ${
                        isOpen ? "pb-12.5" : ""
                    }`}
                    aria-label="Toggle menu"
                    aria-expanded={isOpen}
                >
                    <img
                        src={isOpen ? close : hamburger}
                        alt={isOpen ? "close" : "hamburger"}
                    />
                </button>
            </div>

            <div
                className={`md:hidden grid transition-[grid-template-rows] duration-300 ease-in-out ${
                    isOpen
                        ? "grid-rows-[1fr]"
                        : "grid-rows-[0fr]"
                }`}
            >
                <div className="overflow-hidden">

                    <ul className="flex flex-col font-dm-sans font-bold text-[14px] border-t border-grey-1 divide-y divide-grey-1">

                        <li className="py-7.5">
                            <a
                                href="#benefits"
                                onClick={() => setIsOpen(false)}
                                className="block hover:text-green-2 transition-colors duration-200"
                            >
                                Benefits
                            </a>
                        </li>

                        <li className="py-7.5">
                            <a
                                href="#specs"
                                onClick={() => setIsOpen(false)}
                                className="block hover:text-green-2 transition-colors duration-200"
                            >
                                Spesifications
                            </a>
                        </li>

                        <li className="py-7.5">
                            <a
                                href="#how-to"
                                onClick={() => setIsOpen(false)}
                                className="block hover:text-green-2 transition-colors duration-200"
                            >
                                How-to
                            </a>
                        </li>

                        <li className="py-7.5">
                            <a
                                href="#contact"
                                onClick={() => setIsOpen(false)}
                                className="block hover:text-green-2 transition-colors duration-200"
                            >
                                Contact Us
                            </a>
                        </li>

                    </ul>

                    <button
                        className="mt-12.5 py-3.5 px-5.5 bg-green-1 hover:bg-green-2 text-white border rounded-[100px] flex font-dm-sans font-bold text-[14px] justify-center items-center gap-0.5 transition-colors duration-200"
                    >
                        Learn More
                        <img src={arrow} alt="arrow" />
                    </button>

                </div>
            </div>
        </nav>
    )
}