import React from "react";

const Testimonials: React.FC = () => {
    return (
        <blockquote className="col-start-2 col-end-4 mx-auto max-w-xl text-center">
            <p
                className="font-serif text-7xl font-bold text-battleship-gray-600"
                aria-hidden
            >
                &ldquo; &rdquo;
            </p>
            <p className="-mt-6 text-xl">
                Wir würden uns jederzeit wieder für Tatjana entscheiden, denn
                sie geht nicht nur individuell auf jedes Kind ein, sondern
                schafft auch eine erste Gruppengemeinschaft.
            </p>
            <p className="mt-4 italic">Ina Bieletzki</p>
        </blockquote>
    );
};

export default Testimonials;
