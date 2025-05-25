import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import MainLayout from "../components/MainLayout";
import SeiFrechImg from "../assets/images/Sei_frech.webp";
import Eichel from "../assets/images/Eichel.webp";

const Blog: React.FC = () => {
    const [posts, setPosts] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const SPACE_ID = import.meta.env.VITE_CONTENTFUL_SPACE_ID;
        const ACCESS_TOKEN = import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN;
        const ENVIRONMENT = import.meta.env.VITE_CONTENTFUL_ENVIRONMENT;
        const url = `https://cdn.contentful.com/spaces/${SPACE_ID}/environments/${ENVIRONMENT}/entries?content_type=blogpost&access_token=${ACCESS_TOKEN}&include=1`;

        fetch(url)
            .then((res) => {
                if (!res.ok) throw new Error("Fehler beim Laden der Blogposts");
                return res.json();
            })
            .then((data) => {
                setPosts(data.items || []);
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
            });
    }, []);

    return (
        <>
            <Helmet>
                <title>Waldschnecken | News</title>
                <meta
                    name="description"
                    content="Bekommt einen kleinen Einblick in unsere tägliche Erlebnisse und Aktivitäten."
                />
            </Helmet>

            <MainLayout
                pagetitle="Unser Alltagsleben"
                subtitle="Seht was Eure Kinder alles erleben oder wir euch sonst noch mitteilen wollen."
            >
                <img
                    src={SeiFrechImg}
                    alt=""
                    className="col-start-2 col-end-4 mx-auto rounded-[30%_70%_70%_30%_/_30%_30%_70%_70%] md:col-start-3"
                    decoding="async"
                />
                <div className="col-start-2 col-end-4 mt-8 text-xl">
                    {loading && <p>Lade Blogbeiträge...</p>}
                    {error && <p className="text-red-500">{error}</p>}
                    {!loading && !error && posts.length === 0 && (
                        <p>Keine Blogbeiträge gefunden.</p>
                    )}
                    {!loading && !error && posts.length > 0 && (
                        <div className="space-y-8">
                            {posts.map((post) => (
                                <>
                                    <div
                                        className="col-start-2 col-end-4 flex flex-col gap-y-6"
                                        key={post.sys.id}
                                    >
                                        <h2 className="text-2xl font-bold">
                                            {post.fields.title}
                                        </h2>
                                        <p className="text-xl">
                                            {post.fields.normalText}
                                        </p>
                                        {/* {post.fields.image && (
                                            <img
                                                src={post.fields.image.url}
                                                alt={post.fields.image.title}
                                            />
                                        )} */}
                                    </div>
                                    <img
                                        src={Eichel}
                                        alt=""
                                        className="col-start-2 col-end-4 mx-auto max-w-12"
                                        loading="lazy"
                                    />
                                </>
                            ))}
                        </div>
                    )}
                </div>
            </MainLayout>
        </>
    );
};

export default Blog;
