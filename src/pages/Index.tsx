import React from "react";
import { Helmet } from "react-helmet";
import MainLayout from "../components/MainLayout";
import Contact from "../components/Conact";
import Advantages from "../components/Advantages";
import Testimonial from "../components/Testimonial";
import Logo from "../assets/images/Logo_Waldschnecken.webp";
import LogoSmall from "../assets/images/Logo_Waldschnecken_small.webp";

const IndexPage: React.FC = () => {
    return (
        <>
            <Helmet>
                <title>
                    Waldschnecken | Kindergroßtagespflege in Ladbergen
                </title>
                <meta
                    name="description"
                    content="Kindertagespflege Waldschnecken in Ladbergen: Liebevolle, naturbezogene Betreuung, kleine Gruppen, individuelle Förderung und familiäre Atmosphäre durch erfahrene Tagesmütter."
                />
            </Helmet>

            <MainLayout
                pagetitle="Kindertagespflege mit dem Herzen in der Natur"
                subtitle="Liebevolle und naturbezogene Betreuung Ihrer Kinder in Ladbergen durch die Tagesmütter Tatjana Nabrotzky und Oksana Welk."
                isHerotitle
            >
                <picture className="col-start-2 col-end-4 mx-auto mb-4">
                    <source
                        media="(max-width: 30em)"
                        srcSet={LogoSmall}
                        type="image/webp"
                        width="350"
                        height="168"
                    />
                    <source
                        media="(min-width: 30em)"
                        srcSet={Logo}
                        type="image/webp"
                        width="800"
                        height="383"
                    />
                    <img
                        src={LogoSmall}
                        alt="Logo der Großtagespflege Waldschnecken | von Sascha Nabrotzky"
                        decoding="async"
                        width="350"
                        height="168"
                    />
                </picture>

                <Testimonial
                    text="Wir würden uns jederzeit wieder für Tatjana entscheiden, denn
                sie geht nicht nur individuell auf jedes Kind ein, sondern
                schafft auch eine erste Gruppengemeinschaft."
                    name="Ina Bieletzki"
                    rating={5}
                />
                <Advantages />
                <Contact />
            </MainLayout>
        </>
    );
};

export default IndexPage;
