import React from "react";

type ImageSource = {
    srcBig: string;
    srcSmall: string;
};

const IllustrationHeader: React.FC<ImageSource> = ({ srcBig, srcSmall }) => {
    return (
        <picture className="col-start-2 col-end-4 mx-auto md:col-start-3">
            <source
                media="(max-width: 30em)"
                srcSet={srcSmall}
                type="image/webp"
                width="350"
                height="auto"
            />
            <source
                media="(min-width: 30em)"
                srcSet={srcBig}
                type="image/webp"
                width="510"
                height="auto"
            />
            <img
                src={srcSmall}
                className="rounded-[30%_70%_70%_30%_/_30%_30%_70%_70%]"
                alt=""
                decoding="async"
                width="350"
                height="auto"
            />
        </picture>
    );
};

export default IllustrationHeader;
