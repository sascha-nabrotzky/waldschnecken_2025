import React from "react";
import { Link } from "react-router";
import WavesBottom from "../assets/images/waves-bottom.svg?react";
import Instagram from "../assets/icons/instagram.svg?react";
import Step from "../assets/icons/StepLogo.svg?react";

const Footer: React.FC = () => {
    return (
        <>
            <WavesBottom className="text-roman-coffee-600" />
            <footer className="relative right-0 bottom-0 left-0">
                <nav className="text-md grid grid-cols-[minmax(2rem,_1fr)_repeat(2,_minmax(0,_25rem))_minmax(2rem,_1fr)] bg-roman-coffee-600 pb-12 text-right text-white max-sm:gap-y-2 md:gap-x-16">
                    <div className="col-start-2 col-end-4 flex justify-between">
                        <div className="flex flex-wrap gap-x-8">
                            <a
                                href="https://www.instagram.com/waldschnecken/"
                                target="_blank"
                                rel="noreferrer noopener"
                                aria-label="Instagram-Account der Waldschnecken"
                                className="p-2 transition-opacity duration-300 hover:opacity-50"
                            >
                                <Instagram className="mx-auto mb-2 h-10" />
                                Instagram
                            </a>
                            <a
                                href="https://step.kreis-steinfurt.de/de/einrichtungen/liste/ergebnisse/1055/details?p=1&amt=Ladbergen"
                                target="_blank"
                                rel="noreferrer noopener"
                                aria-label="STEP - Das Anmeldeportal für Kindertageseinrichtungen im Kreis Steinfurt"
                                className="p-2 transition-opacity duration-300 hover:opacity-50"
                            >
                                <Step className="mx-auto mb-2 h-10" />
                                Anmeldeportal
                            </a>
                        </div>
                        <div className="flex flex-col">
                            <Link
                                to="/imprint"
                                className="mb-2 text-lg transition-opacity duration-300 hover:opacity-50"
                            >
                                Impressum
                            </Link>
                            <Link
                                to="/privacy-policy"
                                className="mb-8 text-lg transition-opacity duration-300 hover:opacity-50"
                            >
                                Datenschutz
                            </Link>
                        </div>
                    </div>
                    <div className="col-start-2 col-end-4 max-sm:mt-6">
                        <a
                            href="https://sascha-nabrotzky.de"
                            target="_blank"
                            rel="noreferrer noopener"
                            className="underline underline-offset-5 transition-opacity duration-300 hover:opacity-50"
                            aria-label="Sascha Nabrotzky - Webdesign"
                        >
                            Webdesign
                        </a>
                        <span> & </span>
                        <a
                            href="https://cara.app/smallworlds/all"
                            target="_blank"
                            rel="noreferrer noopener"
                            className="underline underline-offset-5 transition-opacity duration-300 hover:opacity-50"
                            aria-label="Sascha Nabrotzky Illustration"
                        >
                            Illustration
                        </a>
                        <span> - Sascha Nabrotzky</span>
                    </div>
                </nav>
            </footer>
        </>
    );
};

export default Footer;
