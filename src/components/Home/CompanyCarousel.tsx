// src/components/CompanyCarousel.tsx
import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import { Carousel, CarouselSlide } from "@mantine/carousel";
import { Box, Center, Image, SimpleGrid } from "@mantine/core";
import useResponsive from "../../hooks/useResponsive";

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
    // 例: 以降をスマホ扱いにするブレークポイントはお好みで調整
    const isPhone = useResponsive();

    // ★ スマホは1スライド=6枚（2×3）にしてページ数を増やす
    //    それ以外は従来どおり1スライド=12枚（4×3）
    const perSlide = isPhone ? 6 : 12;
    const slides = chunk(LOGOS, perSlide);

    const autoplay = useRef(
        Autoplay({ delay: 5000, stopOnInteraction: false })
    );

    return (
        <Box py={40} w="90%" mx="auto" mb={{ base: 0, md: 120 }}>
            <Carousel
                // ★ スライドの高さも行数に合わせて可変
                h={isPhone ? 360 : 450}
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
                        "--_indicator-color": "#adb5bd",
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
                            // ★ 列数：スマホは2列、以降は4列
                            cols={isPhone ? 2 : 4}
                            // 行間・余白は端末に合わせて詰めめ
                            spacing={isPhone ? "md" : "xl"}
                            verticalSpacing={isPhone ? 24 : 100}
                        >
                            {group.map((src) => (
                                <Center key={src} h={70}>
                                    <Image
                                        src={import.meta.env.BASE_URL + src}
                                        w={isPhone ? 140 : 350}
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
