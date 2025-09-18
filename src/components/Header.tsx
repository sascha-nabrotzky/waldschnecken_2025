import React from "react";
import { Link } from "react-router";
import FreeSeatsCounter from "./FreeSeatsCounter";
import Logo from "../assets/icons/logo.svg?react";
import WavesTop from "../assets/images/waves-top.svg?react";

export type FreeSeats = {
    freeSeats: { count: number; month?: string; year?: number };
};

const Header: React.FC<FreeSeats> = ({ freeSeats }) => {
    const [logoHeightOnScroll, setLogoHeightOnScroll] = React.useState(6);

    React.useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const newHeight = Math.max(3, 6 - scrollY / 100);
            setLogoHeightOnScroll(newHeight);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    });

    return (
        <>
            <div id="mobile-logo" className="bg-roman-coffee-600 sm:hidden">
                <Logo
                    className="mx-auto h-24 text-white"
                    aria-label="Großkindertagespflege Waldschnecken in Ladbergen"
                />
            </div>

            <header className="sticky top-0 z-20 flex flex-col justify-center">
                <nav className="flex w-full flex-wrap items-center justify-center gap-6 bg-roman-coffee-600 py-3 text-xl text-white shadow-xl">
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
                    <Logo
                        className="mx-8 text-white max-sm:hidden"
                        style={{ height: `${logoHeightOnScroll}rem` }}
                    />
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
            {freeSeats.count > 0 && <FreeSeatsCounter {...freeSeats} />}
            <WavesTop className="text-roman-coffee-600 xl:origin-top-right xl:rotate-6" />
        </>
    );
};

export default Header;
