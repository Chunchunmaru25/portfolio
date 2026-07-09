import AuthLogin from "./auth/login";
import AuthRegister from "./auth/register";
import { Helmet } from "react-helmet-async";
import { togaImg } from "../components/path/imagesPath";
export function Login() {
    return (
        <>
            <Helmet>
                <title>{import.meta.env.VITE_APP_NAME}</title>

                <meta
                    name="description"
                    content={import.meta.env.VITE_APP_DESCRIPTION}
                />

                <meta name="author" content={import.meta.env.VITE_APP_AUTHOR} />
                {/* not showing page in search */}
                {/* <meta name="robots" content="noindex, nofollow" /> */}

                <meta name="robots" content="noindex, nofollow" />

                {/* official url */}
                <link rel="canonical" href={import.meta.env.VITE_APP_OFFICIAL_URL} />

                {/* 
                        what kind of content this is
                        website, article, video, profile
                        */}
                <meta property="og:type" content="website" />

                {/* becomes the title in the preview card when shared link */}
                <meta property="og:title" content="Clarence Duerme | Full Stack Developer" />

                {/* becomes the description in the preview card when shared link */}
                <meta property="og:description" content="Explore my projects, skills, and experience." />

                {/* becomes the description in the preview card when shared link */}
                <meta property="og:image" content={togaImg} />

                <meta property="og:url" content={import.meta.env.VITE_APP_OFFICIAL_URL} />

                <link
                    rel="icon"
                    href="/portfolio-icon.svg"
                />
            </Helmet>
            <AuthLogin />
        </>
    );
}
export function Register() {
    return (
        <>
            <Helmet>
                <title>{import.meta.env.VITE_APP_NAME}</title>

                <meta
                    name="description"
                    content={import.meta.env.VITE_APP_DESCRIPTION}
                />

                <meta name="author" content={import.meta.env.VITE_APP_AUTHOR} />
                {/* not showing page in search */}
                {/* <meta name="robots" content="noindex, nofollow" /> */}

                <meta name="robots" content="noindex, nofollow" />

                {/* official url */}
                <link rel="canonical" href={import.meta.env.VITE_APP_OFFICIAL_URL} />

                {/* 
                what kind of content this is
                website, article, video, profile
                */}
                <meta property="og:type" content="website" />

                {/* becomes the title in the preview card when shared link */}
                <meta property="og:title" content="Clarence Duerme | Full Stack Developer" />

                {/* becomes the description in the preview card when shared link */}
                <meta property="og:description" content="Explore my projects, skills, and experience." />

                {/* becomes the description in the preview card when shared link */}
                <meta property="og:image" content={togaImg} />

                <meta property="og:url" content={import.meta.env.VITE_APP_OFFICIAL_URL} />

                <link
                    rel="icon"
                    href="/portfolio-icon.svg"
                />
            </Helmet>
            <AuthRegister />
        </>
    );
}