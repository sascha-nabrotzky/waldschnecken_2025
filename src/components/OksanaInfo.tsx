import React from "react";
import OksanaImg from "../assets/images/Oksana.webp";
import CloseIcon from "../assets/icons/close.svg?react";

const OksanaInfo: React.FC = () => {
    const modalRef2 = React.useRef<HTMLDialogElement>(null);

    const openModal = (): void => {
        if (modalRef2.current != null) {
            modalRef2.current.showModal();
        }
    };
    const closeModal = (): void => {
        if (modalRef2.current != null) {
            modalRef2.current.close();
        }
    };

    return (
        <>
            <div className="col-start-1 col-end-2 flex flex-col items-center justify-center md:col-start-2 md:col-end-3">
                <div className="mb-4 aspect-square w-36 overflow-hidden rounded-full bg-mine-shaft-200 md:w-48">
                    <img
                        src={OksanaImg}
                        alt=""
                        className="h-full w-full object-cover"
                        loading="lazy"
                        decoding="async"
                    />
                </div>
                <div className="text-center">
                    <p className="text-2xl font-bold">Oksana Welk</p>
                    <p className="mt-3 border-t pt-3 leading-5 text-mine-shaft-600">
                        Zertifizierte Tagesmutter
                    </p>
                </div>
                <button
                    onClick={openModal}
                    className="transition-color mt-8 rounded-full bg-mine-shaft-600 px-4 pt-1.5 pb-2 text-lg leading-none text-white duration-300 hover:cursor-pointer hover:bg-mine-shaft-900"
                    aria-label="Oksanas Infos öffnen"
                >
                    Details
                </button>
            </div>

            <dialog
                ref={modalRef2}
                className="m-auto max-w-xl rounded bg-white pt-4 pb-8 text-left backdrop:bg-mine-shaft-950/80 max-sm:mx-4"
            >
                <div className="flex justify-end">
                    <button
                        onClick={closeModal}
                        className="mb-2 cursor-pointer px-4"
                        aria-label="Oksanas Infos schließen"
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
        </>
    );
};

export default OksanaInfo;
