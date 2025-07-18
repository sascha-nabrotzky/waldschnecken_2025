import React from "react";
import TatjanaImg from "../assets/images/Tatjana.webp";
import CloseIcon from "../assets/icons/close.svg?react";

const TatanaInfo: React.FC = () => {
    const modalRef1 = React.useRef<HTMLDialogElement>(null);

    const openModal = (): void => {
        if (modalRef1.current != null) {
            modalRef1.current.showModal();
        }
    };
    const closeModal = (): void => {
        if (modalRef1.current != null) {
            modalRef1.current.close();
        }
    };

    return (
        <div className="col-start-1 col-end-2 flex flex-col items-center justify-center text-center md:col-start-1 md:col-end-2">
            <div className="mb-4 aspect-square w-36 overflow-hidden rounded-full bg-mine-shaft-200 md:w-48">
                <img
                    src={TatjanaImg}
                    alt=""
                    className="h-full w-full object-cover"
                    loading="lazy"
                    decoding="async"
                />
            </div>
            <div>
                <p className="text-2xl">Tatjana Nabrotzky</p>
                <p className="mt-3 border-t pt-3 leading-5 text-mine-shaft-600">
                    Staatl. geprüfte Erzieherin <br />
                    und zertifizierte Tagesmutter
                </p>
            </div>
            <button
                onClick={openModal}
                className="transition-color mt-8 rounded-full bg-mine-shaft-600 px-4 pt-1.5 pb-2 text-xl leading-none text-white duration-300 hover:cursor-pointer hover:bg-mine-shaft-900"
                aria-label="Tatjanas Infos öffnen"
            >
                Details
            </button>

            <dialog
                ref={modalRef1}
                className="m-auto max-w-xl rounded bg-white pt-4 pb-8 text-left backdrop:bg-mine-shaft-950/80 max-sm:mx-4"
            >
                <div className="flex justify-end">
                    <button
                        onClick={closeModal}
                        className="mb-2 px-4"
                        aria-label="Tatjanas Infos schließen"
                    >
                        <CloseIcon className="h-6" />
                    </button>
                </div>
                <div className="px-8 text-xl">
                    Hallo, ich heiße <strong>Tatjana Nabrotzky,</strong> ich bin
                    1981 geboren, bin verheiratet und habe zwei eigene Kinder
                    die 2004 und 2008 geboren sind. Ich bin seit 2002 staatlich
                    anerkannte Erzieherin und habe bis 2015 in verschiedenen
                    Kindergärten gearbeitet. Seit Oktober 2015 bin ich als
                    selbstständige Tagesmutter tätig und seit 01.08.2023 in der
                    Großtagespflege Waldschnecken.
                </div>
            </dialog>
        </div>
    );
};

export default TatanaInfo;
