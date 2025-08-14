import React, { useRef, useState } from "react";
import { Carousel } from "@mantine/carousel";
import type { EmblaCarouselType } from "embla-carousel";
import Autoplay from "embla-carousel-autoplay";
import { Box, Button, Container, Stack, Title, Flex } from "@mantine/core";
import { Link } from "react-router-dom";

/* ---------- 型定義 ---------- */
interface SlideData {
    image: string;
    title: string;
    titleColor: string;
    /* ボタン関連 (任意) */
    buttonLabel?: string;
    buttonBg?: string;
    buttonTextColor?: string;
    buttonLink?: string;
}

/* ---------- スライドデータ ---------- */
const slides: SlideData[] = [
    {
        image: "/home/banner1.png",
        title: "フラッターとハイブリッドのモバイル開発",
        titleColor: "#f8f9fa",
        buttonLabel: "詳細を見る",
        buttonLink: "/services/flutter-and-hybrid",
        buttonBg: "#FFD538",
        buttonTextColor: "#1f2937",
    },
    {
        image: "/home/banner2.png",
        title: "ロジスティクスおよび小売り向けのDXソリューション",
        titleColor: "#126CBD",
        buttonLink: "/services/dx-solution",
        buttonLabel: "お問い合わせ",
        buttonBg: "#FFD538",
        buttonTextColor: "#1f2937",
    },
    {
        image: "/home/banner3.png",
        title: "SAPコンサルティングとERPの展開",
        titleColor: "#FFDA3C",
        buttonLabel: "詳細を見る",
        buttonLink: "/services/dx-solution",
        buttonBg: "#f8f9fa",
        buttonTextColor: "#1f2937",
    },
    {
        image: "/home/banner4.png",
        title: "ロジスティクスおよび小売り向けのDXソリューション",
        titleColor: "#f8f9fa",
        buttonBg: "#FFD538",
        buttonTextColor: "#1f2937",
        buttonLabel: "お問い合わせ",
    },
    {
        image: "/home/banner5.png",
        title: "フラッターとハイブリッドのモバイル開発",
        titleColor: "#f8f9fa",
        buttonBg: "#FFD538",
        buttonTextColor: "#1f2937",
        buttonLabel: "お問い合わせ",
    },
];

/* ---------- コンポーネント ---------- */
const HomeCarouselPhone: React.FC = () => {
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

    // スマホ想定の高さ（必要に応じて調整）
    const height = 480;

    return (
        <Box component="section" pos="relative">
            <Carousel
                withIndicators={false}
                getEmblaApi={setEmbla}
                onSlideChange={setActive}
                emblaOptions={{ loop: true }}
                plugins={[autoplay.current]}
                onMouseEnter={autoplay.current.stop}
                onMouseLeave={() => autoplay.current.play()}
            >
                {slides.map((slide) => {
                    const bg = `url(${resolveSrc(slide.image)})`;
                    return (
                        <Carousel.Slide
                            key={slide.image}
                            style={{ overflow: "hidden" }}
                        >
                            <Box
                                pos="relative"
                                style={{
                                    backgroundImage: bg,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                    backgroundRepeat: "no-repeat",
                                }}
                            >
                                {/* ← 中身を“左寄せのまま縦中央”にする */}
                                <Container
                                    size="lg"
                                    w="90%"
                                    h={height}
                                    style={{ alignItems: "center" }}
                                >
                                    <Stack
                                        maw={650}
                                        align="flex-start"
                                        gap="lg"
                                        pl={{ base: 4, md: 12 }}
                                        pt="xl"
                                    >
                                        <Title
                                            order={3}
                                            fw={700}
                                            fz={{ base: 28, sm: 32 }}
                                            ta="left"
                                            c={slide.titleColor}
                                            style={{
                                                letterSpacing: "0.03em",
                                                lineHeight: 1.2,
                                            }}
                                        >
                                            {slide.title}
                                        </Title>

                                        {/* ボタン（任意） */}
                                        {slide.buttonLabel?.trim() &&
                                            (slide.buttonLink ? (
                                                <Button
                                                    component={Link}
                                                    to={slide.buttonLink}
                                                    size="md"
                                                    radius="xl"
                                                    w="fit-content"
                                                    px="md"
                                                    styles={{
                                                        root: {
                                                            background:
                                                                slide.buttonBg ??
                                                                "#ffcf40",
                                                            color:
                                                                slide.buttonTextColor ??
                                                                "#1f2937",
                                                            fontWeight: 700,
                                                        },
                                                    }}
                                                >
                                                    {slide.buttonLabel}
                                                </Button>
                                            ) : (
                                                <Button
                                                    size="md"
                                                    radius="xl"
                                                    w="fit-content"
                                                    px="md"
                                                    styles={{
                                                        root: {
                                                            background:
                                                                slide.buttonBg ??
                                                                "#ffcf40",
                                                            color:
                                                                slide.buttonTextColor ??
                                                                "#1f2937",
                                                            fontWeight: 700,
                                                        },
                                                    }}
                                                >
                                                    {slide.buttonLabel}
                                                </Button>
                                            ))}
                                    </Stack>
                                </Container>
                            </Box>
                        </Carousel.Slide>
                    );
                })}
            </Carousel>

            {/* カスタムインジケータ（下中央） */}
            <Flex
                justify="center"
                style={{
                    position: "absolute",
                    bottom: 18,
                    left: "50%",
                    transform: "translateX(-50%)",
                    pointerEvents: "none",
                    width: "100%",
                }}
            >
                {slides.map((_, idx) => (
                    <Box
                        key={idx}
                        mx={4}
                        w={10}
                        h={10}
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
                        aria-label={`スライド ${idx + 1} へ`}
                        role="button"
                    />
                ))}
            </Flex>
        </Box>
    );
};

export default HomeCarouselPhone;
