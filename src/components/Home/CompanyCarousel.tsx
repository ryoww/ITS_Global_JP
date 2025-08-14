// src/components/CompanyCarousel.tsx
import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import { Carousel, CarouselSlide } from "@mantine/carousel";
import { Box, Center, Image, SimpleGrid, useMantineTheme } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

/* ---------- public/company 内のロゴ一覧 ---------- */
const LOGOS = [
    "/company/vinfat.png",
    "/company/tpbank.png",
    "/company/vnpt.png",
    "/company/plus.png",
    "/company/genee.png",
    "/company/health_basis.png",
    "/company/ops-in.png",
    "/company/amelys.png",
    "/company/sportlife_planets.png",
    "/company/aichemistars.png",
    "/company/sunsystem.png",
    "/company/allofthem.png",
    "/company/ibis.png",
    "/company/atta.png",
    "/company/freewill.png",
    "/company/ysl.png",
    "/company/eassist.png",
    "/company/neurobase.png",
    "/company/transtech.png",
    "/company/aw.png",
    "/company/allofthem.png", // 2 枚目にも掲載
    "/company/janus.png",
    "/company/space.png",
    "/company/glocalizer.png",
];

const chunk = <T,>(arr: T[], size: number) =>
    Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
        arr.slice(i * size, i * size + size)
    );

export const CompanyCarousel = () => {
    const theme = useMantineTheme();
    // Mantine の md ブレークポイントを使用してレイアウトを確定
    const isMdUp = useMediaQuery(`(min-width: ${theme.breakpoints.md})`);

    // モバイル: 2×3=6枚 / md以上: 4×3=12枚
    const perSlide = isMdUp ? 12 : 6;
    const slides = chunk(LOGOS, perSlide);

    const autoplay = useRef(
        Autoplay({ delay: 5000, stopOnInteraction: false })
    );

    return (
        <Box py={40} w="90%" mx="auto" mb={{ base: 0, md: 120 }}>
            <Carousel
                h={{ base: 360, md: 450 }} // 行数に合わせて高さを可変
                withIndicators
                withControls={false}
                plugins={[autoplay.current]}
                emblaOptions={{ loop: true }}
                styles={{
                    indicator: {
                        width: 12,
                        height: 12,
                        borderRadius: "50%",
                        opacity: 0.6,
                        // 非アクティブ
                        "--_indicator-color": "#adb5bd",
                        // アクティブ
                        "&[data-active]": {
                            opacity: 1,
                            "--_indicator-color": "#4c6ef5",
                        },
                    },
                }}
            >
                {slides.map((group, idx) => (
                    <CarouselSlide key={idx}>
                        <SimpleGrid
                            // 列数: base=2列, md=4列（= 4×3 になる）
                            cols={{ base: 2, md: 4 }}
                            spacing={{ base: "md", md: "xl" }}
                            verticalSpacing={{ base: 24, md: 100 }}
                        >
                            {group.map((src) => (
                                <Center key={src} h={70}>
                                    <Image
                                        src={import.meta.env.BASE_URL + src}
                                        w={{ base: 180, md: 350 }}
                                        h={70}
                                        fit="contain"
                                        alt=""
                                    />
                                </Center>
                            ))}
                        </SimpleGrid>
                    </CarouselSlide>
                ))}
            </Carousel>
        </Box>
    );
};
