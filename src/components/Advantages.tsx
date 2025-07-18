import React from "react";
import Grass from "../assets/images/grass.svg?react";

const text = [
    {
        title: "Inklusion:",
        text: "Betreuung von Kindern mit erhöhtem Pflegeaufwand.",
    },
    {
        title: "Flexibilität:",
        text: "Betreuungszeiten kommen individuellen Bedürfnissen entgegen.",
    },
    {
        title: "Konitnuität:",
        text: "Konstante Bezugspersonen über einen längeren Zeitraum hinweg.",
    },
    {
        title: "Familiäre Atmosphäre:",
        text: "Kinder fühlen sich bei uns sicher und geborgen.",
    },
    {
        title: "Individuelle Betreuung:",
        text: "Wir gehen auf die Bedürfnisse jedes einzelnen Kindes ein.",
    },
    {
        title: "Kleine Gruppengröße:",
        text: "Wir haben eine ruhige und weniger überfordernde Umgebung.",
    },
    {
        title: "Individuelle Förderung:",
        text: "Wir erkennen besser und fördern gezielter individuelle Fähigkeiten.",
    },
    {
        title: "Persönliche Beziehung:",
        text: "Wir pflegen eine enge und persönliche Beziehung zu Deinem Kind.",
    },
];

const Advantages: React.FC = () => {
    React.useEffect(() => {
        const options = {
            root: null,
            threshold: 0.2,
        };

        const toggleClass = (entries: any, observer: any): void => {
            entries.forEach((entry: any) => {
                if (entry.isIntersecting === false) {
                    return;
                }
                entry.target.classList.toggle(
                    "animate-slideUp",
                    entry.isIntersecting,
                );
                observer.unobserve(entry.target);
            });
        };

        const targets = document.querySelectorAll(".advantage");
        const observer = new IntersectionObserver(toggleClass, options);

        targets.forEach((target) => {
            observer.observe(target);
        });
    }, []);

    return (
        <section className="col-start-2 col-end-4">
            <h2 className="mb-6 text-center text-3xl/normal font-bold">
                Euer Kind ist bei uns bestens aufgehoben:
            </h2>
            <div className="relative grid sm:gap-6 md:grid-cols-[repeat(auto-fill,_minmax(15rem,_1fr))]">
                {text.map((item, index) => {
                    return (
                        <div key={index} className="advantage flex flex-col">
                            <Grass className="mx-auto h-12 text-battleship-gray-200" />
                            <div className="flex-1 rounded-3xl bg-whiskey-200 bg-gradient-to-b from-battleship-gray-200 via-whiskey-200 to-whiskey-200 px-6 py-8 text-center text-xl">
                                <h3>{item.title}</h3>
                                <p className="mt-2">
                                    <strong>{item.text}</strong>
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default Advantages;
