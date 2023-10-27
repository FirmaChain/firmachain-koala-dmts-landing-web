import { GetServerSideProps, GetStaticProps, NextPage } from "next";
import { useEffect, useRef, useState } from "react";
import { useBrowerSizeDetect } from "../hooks/useResize";
import { FetchRssArticles } from "../hooks/FetchRssArticles";
import { Container, MainBox, MainContainer } from "../components/StyledComponent";
import MainVisual from "../components/MainVisual";
import BrandIntro from "../components/BrandIntro";
import GameIntro from "../components/GameIntro";
import Technology from "../components/Technology";
import Article from "../components/Article";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Seo from "../components/Seo";

export interface IArticle {
    title: string;
    content: string;
    link: string;
    img: string;
}

interface IProps {
    articles: IArticle[];
}

const Home: NextPage<IProps> = ({ articles }) => {
    const { size } = useBrowerSizeDetect();
    const mainVisualRef = useRef<HTMLDivElement | null>(null);
    const brandIntroRef = useRef<HTMLDivElement | null>(null);
    const gameIntroRef = useRef<HTMLDivElement | null>(null);
    const technologyRef = useRef<HTMLDivElement | null>(null);
    const articleRef = useRef<HTMLDivElement | null>(null);
    const bannerRef = useRef<HTMLDivElement | null>(null);
    const footerRef = useRef<HTMLDivElement | null>(null);

    const [headerLogoColor, setHeaderLogoColor] = useState<"WHITE" | "BLACK">("WHITE");

    const handleScroll = () => {
        if (footerRef.current !== null && footerRef.current.getBoundingClientRect().top <= 50) return setHeaderLogoColor("BLACK");
        if (bannerRef.current !== null && bannerRef.current.getBoundingClientRect().top <= 50) return setHeaderLogoColor("WHITE");
        if (articleRef.current !== null && articleRef.current.getBoundingClientRect().top <= 50) return setHeaderLogoColor("BLACK");
        if (technologyRef.current !== null && technologyRef.current.getBoundingClientRect().top <= 50) return setHeaderLogoColor("BLACK");
        if (gameIntroRef.current !== null && gameIntroRef.current.getBoundingClientRect().top <= 50) return setHeaderLogoColor("WHITE");
        if (size.width >= 1180) {
            if (brandIntroRef.current !== null && brandIntroRef.current.getBoundingClientRect().top <= 225) return setHeaderLogoColor("BLACK");
        } else {
            if (brandIntroRef.current !== null && brandIntroRef.current.getBoundingClientRect().top <= 50) return setHeaderLogoColor("BLACK");
        }
        if (mainVisualRef.current !== null && mainVisualRef.current.getBoundingClientRect().top <= 50) return setHeaderLogoColor("WHITE");
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [size]);

    return (
        <Container style={{ overflowX: "hidden" }}>
            <Seo />
            <MainContainer>
                <MainBox>
                    <Header headerColor={headerLogoColor} />
                    <MainVisual ref={mainVisualRef} />
                    <BrandIntro ref={brandIntroRef} />
                    <GameIntro ref={gameIntroRef} />
                    <Technology ref={technologyRef} />
                    <Article ref={articleRef} articles={articles} />
                    <Banner ref={bannerRef} />
                    <Footer ref={footerRef} />
                </MainBox>
            </MainContainer>
        </Container>
    );
};

export const getStaticProps: GetStaticProps<IProps> = async () => {
    const articles = await FetchRssArticles();

    return {
        props: { articles },
    };
};

export default Home;
