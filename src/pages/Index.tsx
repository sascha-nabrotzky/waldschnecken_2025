import React from "react";
import MainLayout from "../components/MainLayout";
import Contact from "../components/Conact";
import Advantages from "../components/Advantages";
import Testimonials from "../components/Testimonials";
import Logo from "../assets/images/Logo_Waldschnecken.webp";

const IndexPage: React.FC = () => {
    return (
        <MainLayout
            pagetitle="Kindertagespflege mit dem Herzen in der Natur"
            subtitle="Liebevolle und naturbezogene Betreuung Ihrer Kinder in Ladbergen durch die Tagesmütter Tatjana Nabrotzky und Oksana Welk."
            isHerotitle
        >
            <img
                src={Logo}
                alt="Logo der Großtagespflege Waldschnecken | von Sascha Nabrotzky"
                className="col-start-2 col-end-4 mx-auto"
            />
            <Testimonials />
            <Advantages />
            <Contact />
        </MainLayout>
    );
};

export default IndexPage;
