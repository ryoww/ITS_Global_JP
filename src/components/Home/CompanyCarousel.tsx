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
        <Box py={40} w="90%" mx="auto">
            <Carousel
                h={450}
                withIndicators
                withControls={false}
                plugins={[autoplay.current]}
                emblaOptions={{ loop: true }}
                onMouseEnter={autoplay.current.stop}
                onMouseLeave={autoplay.current.reset}
                styles={(theme) => ({
                    indicator: {
                        width: 12,
                        height: 12,
                        transition: "background-color 150ms, opacity 150ms",
                        backgroundColor: theme.colors.blue[3], // 非アクティブ
                        opacity: 0.6,
                        "&[data-active]": {
                            opacity: 1,
                            backgroundColor: theme.colors.blue[6], // アクティブ
                        },
                    },
                })}
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
