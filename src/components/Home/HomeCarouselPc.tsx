import React, { useRef, useState } from "react";
import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";

import { Carousel } from "@mantine/carousel";
import type { EmblaCarouselType } from "embla-carousel";
import {
    Box,
    Image,
    Button,
    Stack,
    Container,
    Flex,
    Title,
    Text,
} from "@mantine/core";
import Autoplay from "embla-carousel-autoplay";

import { Link } from "react-router-dom";

/* ---------- 型定義 ---------- */
interface SlideData {
    image: string;
    title: string;
    description: string;
    titleColor: string;
    descriptionColor: string;
    /* ボタン関連 (任意) */
    buttonLabel?: string;
    buttonBg?: string;
    buttonTextColor?: string;
    buttonLink?: string;
}

/* ---------- スライドデータ ---------- */
const slides: SlideData[] = [
    {
        image: "/home/Property-1Default.jpg",
        title: "フラッターとハイブリッドのモバイル開発",
        description:
            "ITS グローバル は、先進的なフラッター技術を用いてモバイルアプリの能力を拡張します。多くのプラットフォームに対応する高性能アプリでビジネス革新をサポートします。",
        buttonLabel: "詳細を見る",
        buttonLink: "/services/flutter-and-hybrid",
        titleColor: "#f8f9fa",
        descriptionColor: "#f8f9fa",
        buttonBg: "#FFD538",
        buttonTextColor: "#000000",
    },
    {
        image: "/home/Property-1Variant2.jpg",
        title: "ロジスティクスおよび小売り向けのDXソリューション",
        description:
            "ITS グローバル の物流および小売向け DX ソリューションは、サプライ チェーンの効率を向上させ、顧客体験を改善します。テクノロジーを活用してビジネスプロセスを最適化し、市場での競争力を強化します。",
        /* ボタン無し例 */
        titleColor: "#126CBD",
        descriptionColor: "#126CBD",
        buttonLink: "/services/dx-solution",
        buttonLabel: "お問い合わせ",
        buttonBg: "#FFD538",
        buttonTextColor: "#000000",
    },
    {
        image: "/home/Property-1Variant3.jpg",
        title: "SAPコンサルティングとERPの展開",
        description:
            "ITSグローバルERP専門家によるSAPコンサルティングと展開で、貴社の円滑な運営をサポートします。カスタマイズされたSAPソリューションを使用し、ビジネスリソース管理の精度と意思決定を改善します。",
        buttonLabel: "詳細を見る",
        buttonLink: "/services/dx-solution",
        titleColor: "#FFDA3C",
        descriptionColor: "#f8f9fa",
        buttonBg: "#f8f9fa",
        buttonTextColor: "#000000",
    },
    {
        image: "/home/Property-1Variant5.jpg",
        title: "ロジスティクスおよび小売り向けのDXソリューション",
        description:
            "ITS グローバル の物流および小売向け DX ソリューションは、サプライ チェーンの効率を向上させ、顧客体験を改善します。テクノロジーを活用してビジネスプロセスを最適化し、市場での競争力を強化します。",
        buttonLabel: "お問い合わせ",
        buttonLink: "/contact",
        titleColor: "#f8f9fa",
        descriptionColor: "#f8f9fa",
        buttonBg: "#FFD538",
        buttonTextColor: "#000000",
    },
    {
        image: "/home/Property-1Variant4.jpg",
        title: "フラッターとハイブリッドのモバイル開発",
        description:
            "ITS グローバル は、先進的なFlutterを用いてモバイルアプリの能力を拡張します。多くのプラットフォームに対応する高性能アプリでビジネス革新をサポートします。",
        /* ボタン無し例 */
        titleColor: "#f8f9fa",
        descriptionColor: "#f8f9fa",
    },
];

/* ---------- コンポーネント ---------- */
const HomeCarousel: React.FC = () => {
    const autoplay = useRef(
        Autoplay({ delay: 5000, stopOnInteraction: false })
    );
    const [embla, setEmbla] = useState<EmblaCarouselType | null>(null);
    const [active, setActive] = useState(0);

    /* public パスを環境ごとに解決 */
    const resolveSrc = (relativePath: string) => {
        const base = import.meta.env.BASE_URL || "/";
        return `${base.replace(/\/$/, "")}/${relativePath.replace(/^\//, "")}`;
    };

    return (
        <Box style={{ position: "relative" }}>
            <Carousel
                withIndicators={false}
                getEmblaApi={setEmbla}
                onSlideChange={setActive}
                // height={600}
                emblaOptions={{ loop: true }}
                plugins={[autoplay.current]}
                onMouseEnter={autoplay.current.stop}
                onMouseLeave={() => autoplay.current.play()}
            >
                {slides.map((slide) => (
                    <Carousel.Slide
                        key={slide.image}
                        style={{ overflow: "hidden" }}
                    >
                        <Box style={{ position: "relative", height: "100%" }}>
                            <Image
                                src={resolveSrc(slide.image)}
                                alt={slide.title}
                                fit="cover"
                                height="100%"
                            />

                            <Container
                                size="lg"
                                style={{
                                    position: "absolute",
                                    top: "45%",
                                    left: "10%",
                                    transform: "translateY(-50%)",
                                    zIndex: 2,
                                }}
                            >
                                <Stack gap="md" maw={540}>
                                    <Title
                                        order={1}
                                        style={{ color: slide.titleColor }}
                                    >
                                        {slide.title}
                                    </Title>
                                    <Text
                                        size="lg"
                                        style={{
                                            color: slide.descriptionColor,
                                        }}
                                    >
                                        {slide.description}
                                    </Text>

                                    {/* ----- ボタン描画ロジック ----- */}
                                    {slide.buttonLabel?.trim() &&
                                        (slide.buttonLink ? (
                                            <Link
                                                to={slide.buttonLink}
                                                style={{
                                                    textDecoration: "none",
                                                }}
                                            >
                                                <Button
                                                    radius="xl"
                                                    size="lg"
                                                    style={{
                                                        backgroundColor:
                                                            slide.buttonBg ??
                                                            "#FFD538",
                                                        color:
                                                            slide.buttonTextColor ??
                                                            "#000000",
                                                    }}
                                                >
                                                    {slide.buttonLabel}
                                                </Button>
                                            </Link>
                                        ) : (
                                            <Button
                                                radius="xl"
                                                size="lg"
                                                style={{
                                                    backgroundColor:
                                                        slide.buttonBg ??
                                                        "#FFD538",
                                                    color:
                                                        slide.buttonTextColor ??
                                                        "#000000",
                                                }}
                                            >
                                                {slide.buttonLabel}
                                            </Button>
                                        ))}
                                </Stack>
                            </Container>
                        </Box>
                    </Carousel.Slide>
                ))}
            </Carousel>

            {/* カスタムインジケータ */}
            <Flex
                justify="center"
                style={{
                    position: "absolute",
                    bottom: 20,
                    left: "50%",
                    transform: "translateX(-50%)",
                    pointerEvents: "none",
                }}
            >
                {slides.map((_, idx) => (
                    <Box
                        key={idx}
                        mx={4}
                        w={12}
                        h={12}
                        style={{
                            borderRadius: "50%",
                            backgroundColor:
                                active === idx
                                    ? "rgba(255,255,255,1)"
                                    : "rgba(255,255,255,0.4)",
                            transition: "background-color 150ms",
                            cursor: "pointer",
                            pointerEvents: "auto",
                        }}
                        onClick={() => embla?.scrollTo(idx)}
                    />
                ))}
            </Flex>
        </Box>
    );
};

export default HomeCarousel;
