import React from "react";

export type FreePlaceCounterProps = {
    count: number;
};

const FreePlaceCounter: React.FC<FreePlaceCounterProps> = ({ count }) => {
    return (
        <div className="absolute top-42 left-8 z-10 flex h-22 w-22 -rotate-8 items-center justify-center rounded-full bg-whiskey-200 shadow-lg md:left-20 md:h-28 md:w-28">
            <div className="flex -translate-y-0.5 items-end gap-2 text-mine-shaft-950 md:-translate-y-1 md:gap-3">
                <p className="leanding-none text-5xl font-bold md:text-6xl">
                    {count}
                </p>
                <p className="text-lg leading-tight md:text-xl">
                    Platz
                    <br />
                    frei
                </p>
            </div>
        </div>
    );
};

export default FreePlaceCounter;
