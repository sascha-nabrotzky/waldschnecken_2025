import React from "react";
import { Helmet } from "react-helmet";

const pageStyles = {
    color: "#232129",
    padding: "96px",
    fontFamily: "-apple-system, Roboto, sans-serif, serif",
};
const headingStyles = {
    marginTop: 0,
    marginBottom: 64,
    maxWidth: 320,
};
const paragraphStyles = {
    marginBottom: 48,
};

const NotFoundPage: React.FC = () => {
    return (
        <>
            <Helmet>
                <title>Waldschnecken | 404</title>
                <meta name="description" content="404 - Seite nicht gefunden" />
            </Helmet>
            <main style={pageStyles}>
                <h1 style={headingStyles}>Page not found</h1>
                <p style={paragraphStyles}>
                    Sorry 😔, we couldn’t find what you were looking for.
                    <br />
                    <br />
                    <br />
                    <a href="/">Go home</a>.
                </p>
            </main>
        </>
    );
};

export default NotFoundPage;
