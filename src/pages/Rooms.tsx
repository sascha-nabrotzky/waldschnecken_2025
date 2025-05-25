import * as React from "react";
import { Helmet } from "react-helmet";
import MainLayout from "../components/MainLayout";
import SeiMutigIllustration from "../assets/images/Sei_mutig.webp";
import Wohnzimmer from "../assets/images/kita-wohnzimmer-1.webp";
import Themenzimmer from "../assets/images/kita-themenzimmer-1.webp";
import Kueche from "../assets/images/kita-kueche-2.webp";
import Schlafraum from "../assets/images/kita-schlafraum-1.webp";
import Badezimmer from "../assets/images/kita-bad-1.webp";
import Aussen from "../assets/images/kita-aussen-1.webp";

const Rooms: React.FC = () => {
    return (
        <>
            <Helmet>
                <title>Waldschnecken | Räumlichkeiten</title>
                <meta
                    name="description"
                    content="Spielen, entspannen, schlafen und essen in unseren gemütlichen Räumen."
                />
            </Helmet>

            <MainLayout
                pagetitle="Räume"
                subtitle="Unsere Großtagespflege befindet sich in einem freistehenden Haus, in der Erdgeschosswohnung "
            >
                <img
                    src={SeiMutigIllustration}
                    alt=""
                    className="col-start-2 col-end-4 mx-auto rounded-[30%_70%_70%_30%_/_30%_30%_70%_70%] md:col-start-3"
                    decoding="async"
                />
                <section className="col-start-2 col-end-4 text-xl">
                    <p className="hyphens-auto">
                        Die Wohnfläche der Wohnung beträgt 103 qm. Die Gruppe
                        besteht in der Regel aus 9 Kindern.
                    </p>
                    <img
                        src={Wohnzimmer}
                        alt="Foto des Betreuungsraums"
                        className="mt-12 mb-2 rounded"
                        loading="lazy"
                    />
                    <p className="hyphens-auto">
                        &#8593; Der große <strong>Betreuungsraum</strong> von
                        ca. 40 qm bietet vielfältige Spiel- und
                        Bewegungsmöglichkeiten.
                    </p>
                    <img
                        src={Themenzimmer}
                        alt="Foto vom Themenzimmer"
                        className="mt-12 mb-2 rounded"
                        loading="lazy"
                    />
                    <p className="hyphens-auto">
                        &#8593; Das angrenzende <strong>Themenzimmer</strong>{" "}
                        wird situationsorientiert nach Interessen der
                        Kindergruppe gestaltet und ausgestattet.
                    </p>
                    <img
                        src={Kueche}
                        alt="Foto unserer Küche"
                        className="mt-12 mb-2 rounded"
                        loading="lazy"
                    />
                    <p className="hyphens-auto">
                        &#8593; Die <strong>Küche</strong> ist mit einer neuen
                        Einbauküche ausgestattet und einem großen Esstisch für
                        gemütliche gemeinsame Mahlzeiten.
                    </p>
                    <img
                        src={Schlafraum}
                        alt="Foto vom Schlafraum"
                        className="mt-12 mb-2 rounded"
                    />
                    <p className="hyphens-auto">
                        &#8593; Ein großer <strong>Schlafraum</strong> lädt zum
                        entspannen und träumen ein.
                    </p>
                    <img
                        src={Badezimmer}
                        alt="Foto vom Badezimmer"
                        className="mt-12 mb-2 rounded"
                        loading="lazy"
                    />
                    <p className="hyphens-auto">
                        &#8593; Das <strong>Kinderbadezimmer</strong> bietet ein
                        großes Waschbecken auf Kinderhöhe, für das
                        selbstständige Händewaschen und einen Wickelbereich. Die
                        Garderobe befindet sich im Eingangsflur.
                    </p>

                    <img
                        src={Aussen}
                        alt="Foto vom Außengelände"
                        className="mt-12 mb-2 rounded"
                        loading="lazy"
                    />

                    <p className="hyphens-auto">
                        &#8593; Das <strong>Außengelände</strong> bietet viele
                        unterschiedliche Spielmöglichkeiten, wie einen großen
                        Sandkasten, ein Spielgerüst zum Klettern, Rutschen und
                        Balancieren. Des Weiteren befinden sich noch zwei
                        Schaukeln und ein großer Fahrzeugebereich, der mit
                        Gummimatten ausgelegt ist. Die überdachte Terrasse ist
                        ideal um dort im Sommer gemütlich zu frühstücken und
                        außerdem schützt sie uns vor Sonne oder Regen. Es
                        befinden sich viele Pflanzen und Bäume im Garten und im
                        Sommer bauen wir gemeinsam Obst und Gemüse an.
                    </p>
                </section>
            </MainLayout>
        </>
    );
};

export default Rooms;
