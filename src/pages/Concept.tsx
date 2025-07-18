import React from "react";
import { Helmet } from "react-helmet";
import MainLayout from "../components/MainLayout";
import IllustrationHeader from "../components/IllustrationHeader";
import Testimonial from "../components/Testimonial";
import IgelIllustration from "../assets/images/Sei_entspannt.webp";
import IgelIllustrationSmall from "../assets/images/Sei_entspannt_small.webp";

const Concept: React.FC = () => {
    return (
        <>
            <Helmet>
                <title>Waldschnecken | Konzept</title>
                <meta
                    name="description"
                    content="Grundlegendes Ziel: Bewegung, Wald und Natur, Sprachförderung, gesunde Ernährung"
                />
            </Helmet>

            <MainLayout
                pagetitle="Pädagogische Schwerpunkte"
                subtitle="Natürlicher Tagesablauf und Bewegung an der frischen Luft"
            >
                <IllustrationHeader
                    srcBig={IgelIllustration}
                    srcSmall={IgelIllustrationSmall}
                />

                <Testimonial
                    text="Tatjana ist eine sehr liebevolle und strukturierte Tagesmutter. Sie strahlt viel Ruhe aus welche sich dann auch auf die Kinder überträgt. Die Aktionen und Bastelangebote sind richtig toll. Wir würden uns immer wieder für Tatjana entscheiden."
                    name="Tatjana Berg"
                    rating={5}
                />
                <section className="col-start-2 col-end-4">
                    <h3 className="mb-2 text-2xl font-bold">
                        Unser grundlegendes Ziel
                    </h3>
                    <p className="text-xl hyphens-auto">
                        unserer pädagogischen Arbeit liegt darin, die Kinder in
                        ihrem Alltag zu begleiten, ihnen einen ganz natürlichen
                        Tagesablauf zu ermöglichen und ihnen eine liebevolle
                        Atmosphäre zum Spielen und Entfalten zu bieten.
                    </p>
                    <h3 className="mt-8 mb-2 text-2xl font-bold">Bewegung</h3>
                    <p className="text-xl hyphens-auto">
                        Einen großen Stellenwert hat bei uns die Bewegung an der
                        frischen Luft, draußen im Garten, auf Spielplätzen, im
                        Wald oder längere Spaziergänge in der Natur gehören zu
                        unserem Alltag.
                    </p>
                    <h3 className="mt-8 mb-2 text-2xl font-bold">
                        Wald und Natur
                    </h3>
                    <p className="text-xl hyphens-auto">
                        Mehrmals im Jahr finden bei uns auch Waldtage statt,
                        dann verbringen wir meistens den ganzen Vormittag bis
                        zum Mittagessen im Wald. Dabei erkunden die Kinder auf
                        ganz individuelle Weise die Umgebung und lernen
                        spielerisch den Wald kennen. Nebenbei wird auch die
                        Koordination und Motorik gefördert, indem sie über
                        weichen und unebenen Boden laufen oder Ästen ausweichen
                        müssen.
                    </p>
                    <h3 className="mt-8 mb-2 text-2xl font-bold">
                        Sprachförderung
                    </h3>
                    <p className="text-xl hyphens-auto">
                        Die Förderung der Sprachentwicklung wird bei uns in den
                        täglichen Ablauf mit eingebunden. Das tägliche
                        miteinander Sprechen, zuhören, beschreiben von
                        Tätigkeiten, Anschauen von Bilderbüchern und gemeinsames
                        Singen fördert die Sprache der Kinder. Alles was wir im
                        Alltag tun, wird durch Sprache begleitet und die Kinder
                        nehmen die Aussprache und Grammatik ganz natürlich auf
                        und können sie verinnerlichen. Die Kommunikation
                        miteinander ist uns sehr wichtig und wird stets
                        gefördert.
                    </p>

                    <h3 className="mt-8 mb-2 text-2xl font-bold">
                        Gesunde Ernährung
                    </h3>
                    <p className="text-xl hyphens-auto">
                        Wir möchten den Kindern eine gesunde und ausgewogene
                        Ernährung mit auf den Weg geben. Es wird jeden Tag
                        frisch, gesund und abwechslungsreich gekocht. Die Kinder
                        werden in die Planung und Zubereitung mit einbezogen
                        wodurch auch die kognitive Entwicklung gefördert wird.
                        Die Kinder lernen die verschiedenen Lebensmittel kennen
                        und den nachhaltigen Umgang damit. Zu jeder Mahlzeit
                        gibt es bei uns frisches Obst und Gemüse.
                    </p>
                    <p className="text-xl hyphens-auto">
                        Die Eltern zahlen einen Betrag für die Mahlzeiten, der
                        von uns monatlich, nach Anwesenheit des Kindes,
                        berechnet wird.
                    </p>
                </section>
            </MainLayout>
        </>
    );
};

export default Concept;
