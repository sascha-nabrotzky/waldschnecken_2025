import React, { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";

interface Props extends React.PropsWithChildren {
    pagetitle?: string;
    subtitle?: string;
    isHerotitle?: boolean;
}

const MainContent: React.FC<Props> = ({
    children,
    pagetitle,
    subtitle,
    isHerotitle,
}) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="grid min-h-dvh grid-rows-[repeat(3,_min-content)_1fr_min-content] text-mine-shaft-950">
            <Header />
            <main
                className="z-10 my-6 grid grid-cols-[minmax(2rem,_1fr)_repeat(2,_minmax(0,_25rem))_minmax(2rem,_1fr)] gap-y-16 md:gap-x-16 md:gap-y-20 lg:-mt-10 xl:-mt-40 xl:-mb-20"
                role="main"
            >
                {pagetitle != null && (
                    <div
                        className={`col-start-2 col-end-4 text-center ${
                            isHerotitle === true
                                ? "md:col-end-4"
                                : "md:col-end-3 md:text-left"
                        }`}
                        aria-label="heading"
                    >
                        <h1
                            className={
                                "break-word font-serif text-3xl leading-4.5 md:mt-12 md:text-5xl/snug"
                            }
                        >
                            {pagetitle}
                        </h1>
                        {subtitle != null && (
                            <h2
                                className={
                                    "break-word mt-6 text-xl lg:text-2xl"
                                }
                            >
                                {subtitle}
                            </h2>
                        )}
                    </div>
                )}
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default MainContent;
