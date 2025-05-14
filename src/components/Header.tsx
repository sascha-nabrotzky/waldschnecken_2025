import React from "react";
import { Link } from "react-router";
import Logo from "../assets/icons/logo.svg?react";
import WavesTop from "../assets/images/waves-top.svg?react";

const Header: React.FC = () => {
    return (
        <>
            <div
                className="bg-roman-coffee-600 sm:hidden"
                aria-label="Logo der Waldschnecken"
            >
                <Logo className="text-white mx-auto h-24" />
            </div>

            <menu className="sticky top-0 z-20 flex flex-col justify-center">
                <nav className="text-white flex w-full items-center justify-center gap-4 bg-roman-coffee-600 py-2 text-xl shadow-xl">
                    <Link
                        to="/"
                        className="transition-opacity duration-300 hover:opacity-50"
                    >
                        Home
                    </Link>
                    <Link
                        to="/concept"
                        className="transition-opacity duration-300 hover:opacity-50"
                    >
                        Konzept
                    </Link>
                    <Logo className="text-white mx-8 h-24 max-sm:hidden" />
                    <Link
                        to="/rooms"
                        className="transition-opacity duration-300 hover:opacity-50"
                    >
                        Räume
                    </Link>
                    <Link
                        to="/blog"
                        className="transition-opacity duration-300 hover:opacity-50"
                    >
                        News
                    </Link>
                </nav>
            </menu>

            <WavesTop className="text-roman-coffee-600 xl:origin-top-right xl:rotate-6" />
        </>
    );
};

export default Header;
