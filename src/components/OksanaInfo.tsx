import React from "react";
import OksanaImg from "../assets/images/Oksana.webp";
import CloseIcon from "../assets/icons/close.svg?react";

const OksanaInfo: React.FC = () => {
    const modalRef2 = React.useRef<HTMLDialogElement>(null);

    const openModal2 = (): void => {
        if (modalRef2.current != null) {
            modalRef2.current.showModal();
        }
    };
    const closeModal2 = (): void => {
        if (modalRef2.current != null) {
            modalRef2.current.close();
        }
    };

    return (
        <div className="col-start-2 col-end-4 flex flex-col items-center justify-center md:col-start-3 md:col-end-4">
            <div className="mb-4 aspect-square w-36 overflow-hidden rounded-full bg-mine-shaft-200 md:w-48">
                <img
                    src={OksanaImg}
                    alt="Foto von Tagesmutter Oksana Welk"
                    className="h-full w-full object-cover"
                />
            </div>
            <a href={"tel: +49 162 1366853"} className="text-center">
                <p className="text-xl">
                    Oksana Welk
                    <br />
                    <strong className="tracking-wider">0162 1366853</strong>
                </p>
                <p className="mt-1 border-t pt-2 leading-5 text-mine-shaft-600">
                    Zertifizierte Tagesmutter
                </p>
            </a>
            <button
                onClick={openModal2}
                className="mt-4 rounded-full bg-mine-shaft-600 px-4 pt-1.5 pb-2 text-lg leading-none text-white transition-opacity duration-300 hover:opacity-50"
            >
                Details
            </button>

            <dialog
                ref={modalRef2}
                className="mx-4 max-w-xl rounded bg-white pt-4 pb-8 text-left backdrop:bg-mine-shaft-950/70 sm:m-auto"
            >
                <div className="flex justify-end">
                    <button
                        onClick={closeModal2}
                        className="mb-2 px-4"
                        aria-label="close tatjanas info dialog box"
                    >
                        <CloseIcon className="h-6" />
                    </button>
                </div>
                <div className="px-8 text-xl">
                    Hallo, ich bin <strong>Oksana Welk,</strong> ich bin 1979
                    geboren, bin verheiratet und habe zwei eigene Kinder die
                    2004 und 2006 geboren sind. Ich habe den Beruf
                    Einzelhandelskauffrau gelernt, und war mehrere Jahre in dem
                    Beruf in vielen verschiedenen Bereichen tätig, bis ich mich
                    entschieden habe mich beruflich umzuorientieren. Die
                    Qualifizierung zur Tagesmutter habe ich im Dezember 2018
                    abgeschlossen. Seit April 2018 bin ich als selbstständige
                    Tagesmutter tätig und seit dem 01.08.2023 in der
                    Großtagespflege Waldschnecken.
                </div>
            </dialog>
        </div>
    );
};

export default OksanaInfo;
