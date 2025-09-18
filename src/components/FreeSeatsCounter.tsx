import React from "react";

export type FreeSeatsCounterProps = {
    count: number;
    month?: string;
    year?: number;
};

const FreeSeatsCounter: React.FC<FreeSeatsCounterProps> = ({
    count,
    month,
    year,
}) => {
    return (
        <div className="absolute top-42 left-8 z-10 flex h-32 w-32 -rotate-8 flex-col items-center justify-center rounded-full bg-whiskey-200 shadow-lg md:left-20 md:h-36 md:w-36">
            <div className="flex -translate-y-0.5 items-end gap-2 text-mine-shaft-950 md:gap-2">
                <p className="leanding-none text-6xl font-bold">{count}</p>
                <p className="-translate-y-[0.1rem] text-lg leading-6 font-bold md:-translate-y-0.5 md:text-xl">
                    {count > 1 ? "Plätze" : "Platz"}
                    <br />
                    frei
                </p>
            </div>
            {month && (
                <p className="text-md text-center leading-tight">
                    Ab {month}
                    <br />
                    {year}
                </p>
            )}
        </div>
    );
};

export default FreeSeatsCounter;
