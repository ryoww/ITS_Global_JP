// src/components/CompanyCarousel.tsx
import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import { Carousel, CarouselSlide } from "@mantine/carousel";
import { Box, Center, Image, SimpleGrid } from "@mantine/core";

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
    const slides = chunk(LOGOS, 12); // 1 スライド = 12 枚（3×4）
    const autoplay = useRef(
        Autoplay({ delay: 5000, stopOnInteraction: false })
    );

    return (
        <Box py={40} w="90%" mx="auto" mb={120}>
            <Carousel
                h={450}
                withIndicators
                withControls={false}
                plugins={[autoplay.current]}
                emblaOptions={{ loop: true }}
                /* ⭐ インジケータだけ上書き */
                styles={{
                    indicator: {
                        width: 12,
                        height: 12,
                        borderRadius: "50%",
                        opacity: 0.6,

                        /* 非アクティブ用の CSS 変数 */
                        "--_indicator-color": "#adb5bd",

                        /* アクティブ時は変数を差し替えるだけ */
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
                            cols={4}
                            spacing="xl"
                            verticalSpacing={100} // 行間 100px
                        >
                            {group.map((src) => (
                                <Center key={src} h={70}>
                                    <Image
                                        src={import.meta.env.BASE_URL + src}
                                        w={350}
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
