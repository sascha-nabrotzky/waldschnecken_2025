import React from "react";

type Props = {
    text: string;
    name: string;
    rating?: number;
};

const Testimonial: React.FC<Props> = ({ text, name, rating }) => {
    return (
        <blockquote className="col-start-2 col-end-4 border-y py-12 text-center">
            <p
                className="font-serif text-7xl font-bold text-battleship-gray-600"
                aria-hidden
            >
                &ldquo; &rdquo;
            </p>
            <p className="mx-auto -mt-6 max-w-xl text-xl">{text}</p>
            <p className="mx-auto mt-4 italic">{name}</p>
            {rating && (
                <div className="mt-6 flex justify-center gap-1 text-whiskey-400">
                    {[...Array(rating)].map((_, index) => (
                        <svg
                            key={index}
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                        >
                            <title>Filled star</title>
                            <path d="M12 .587l3.668 7.568 8.332 1.214-6.042 5.885 1.428 8.316L12 18.896l-7.386 3.87 1.428-8.316-6.042-5.885 8.332-1.214L12 .587z" />
                        </svg>
                    ))}
                </div>
            )}
        </blockquote>
    );
};

export default Testimonial;
