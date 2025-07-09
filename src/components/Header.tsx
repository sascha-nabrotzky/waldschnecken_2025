import React from "react";
import { Link } from "react-router";
import Logo from "../assets/icons/logo.svg?react";
import WavesTop from "../assets/images/waves-top.svg?react";

const Header: React.FC = () => {
    return (
        <>
            <div id="mobile-logo" className="bg-roman-coffee-600 sm:hidden">
                <Logo
                    className="mx-auto h-24 text-white"
                    aria-label="Großkindertagespflege Waldschnecken in Ladbergen"
                />
            </div>

            <header className="sticky top-0 z-20 flex flex-col justify-center">
                <nav className="flex w-full flex-wrap items-center justify-center gap-6 bg-roman-coffee-600 py-2 text-xl text-white shadow-xl">
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
                    <Logo className="mx-8 h-24 text-white max-sm:hidden" />
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
            </header>

            <WavesTop className="text-roman-coffee-600 xl:origin-top-right xl:rotate-6" />
        </>
    );
};

export default Header;
