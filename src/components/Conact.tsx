import React from "react";
import TatanaInfo from "../components/TatjanaInfo";
import OksanaInfo from "../components/OksanaInfo";
import EmailIcon from "../assets/icons/email.svg?react";

const Address: React.FC = () => {
    const mailto = "mailto:kontakt@waldschnecken-ladbergen.de";
    const eMailAddress = "kontakt@waldschnecken-ladbergen.de";

    const [currentMail, setMail] = React.useState("");
    const [showMail, setShowMail] = React.useState("");

    const addMail = (): void => {
        setMail(mailto);
        setShowMail(eMailAddress);
    };

    return (
        <>
            <TatanaInfo />
            <OksanaInfo />
            <address className="col-start-2 col-end-4 text-xl not-italic">
                <h3 className="mb-2 text-center font-bold">
                    Großtagespflege &bdquo;Waldschnecken&ldquo;
                </h3>
                <p className="text-center">
                    Auf Stieneckers 52,
                    <br />
                    49549 Ladbergen
                    <br />
                </p>
            </address>
            <div className="col-start-2 col-end-4 text-center text-xl">
                <a
                    href={`${currentMail}`}
                    target="_blank"
                    rel="noreferrer"
                    onClick={addMail}
                    className="transition-opacity duration-300 hover:opacity-50"
                >
                    <EmailIcon className="mx-auto mb-2 h-8" />
                    E-Mail schreiben
                </a>
                {showMail.length > 0 && (
                    <p className="mt-2 border-t pt-2 font-bold">{showMail}</p>
                )}
            </div>
        </>
    );
};

export default Address;
