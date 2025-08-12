// src/components/services/ProjectsShowcase.tsx
import React from "react";
import {
    Box,
    Container,
    SimpleGrid,
    Title,
    Image,
    Paper,
    Text,
} from "@mantine/core";

// ★ 追加
import "@mantine/carousel/styles.css";
import { Carousel } from "@mantine/carousel";

type Project = {
    /** カード画像（public 配下） */
    src: string;
    /** 右下のラベルに表示する文言（〜〜アプリ） */
    label: string;
    /** 任意：高さ（px） */
    height?: number;
};

type Props = {
    /** セクション背景画像（public 配下） */
    bgSrc?: string;
    /** 見出し */
    heading?: string;
    /** カード一覧 */
    items?: Project[];
    /** ★ 追加: 画面がPhoneかどうか（親から渡す） */
    isPhone?: boolean;
};

/* 例：画像パスは手元のファイルに合わせて変更してください */
const SAMPLE_ITEMS: Project[] = [
    {
        src: "/service/flutter/service_1_actual_project_1.png",
        label: "駐車場検索アプリ",
    },
    {
        src: "/service/flutter/service_1_actual_project_3.png",
        label: "外国人生活支援アプリ",
    },
    {
        src: "/service/flutter/service_1_actual_project_5.png",
        label: "サロン予約アプリ",
    },
    {
        src: "/service/flutter/service_1_actual_project_2.png",
        label: "検索と購入アプリ",
    },
    {
        src: "/service/flutter/service_1_actual_project_4.png",
        label: "荷物追跡アプリ",
    },
    {
        src: "/service/flutter/service_1_actual_project_6.png",
        label: "海外の美味しいレストラン検索アプリ",
    },
];

const ProjectsShowcase: React.FC<Props> = ({
    bgSrc = "/service/flutter/service_1_actual_project_banner.png",
    heading = "実際のプロジェクト",
    items = SAMPLE_ITEMS,
    isPhone = false, // ← 親から来ない場合はfalse
}) => {
    return (
        <Box
            component="section"
            py={60}
            // 背景画像 + うっすらグラデーションで文字を読みやすく
            style={{
                backgroundImage: `linear-gradient(90deg, rgba(0,59,92,.55), rgba(0,128,150,.4)), url(${
                    import.meta.env.BASE_URL + bgSrc
                })`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <Container size="lg" w="92%">
                <Title
                    order={1}
                    fz={{ base: 28, md: 36 }}
                    ta="center"
                    c="white"
                    fw={900}
                    mb={28}
                    style={{ letterSpacing: "0.04em" }}
                >
                    {heading}
                </Title>

                {isPhone ? (
                    // ＝＝＝ Phone: Carousel 表示 ＝＝＝
                    <Carousel
                        withIndicators
                        slideSize="90%"
                        slideGap="md"
                        // loop: true
                        emblaOptions={{ align: "start" }} // ← ここに移動
                        styles={{ indicators: { bottom: -10 } }}
                    >
                        {items.map((p) => (
                            <Carousel.Slide key={p.src}>
                                <ProjectCard {...p} />
                            </Carousel.Slide>
                        ))}
                    </Carousel>
                ) : (
                    // ＝＝＝ PC/Tablet: Grid 表示 ＝＝＝
                    <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing={28}>
                        {items.map((p) => (
                            <ProjectCard key={p.src} {...p} />
                        ))}
                    </SimpleGrid>
                )}
            </Container>
        </Box>
    );
};

const ProjectCard: React.FC<Project> = ({ src, label }) => {
    return (
        <Paper
            p={0}
            pos="relative"
            style={{
                overflow: "hidden",
                background: "rgba(255,255,255,.06)",
                borderColor: "rgba(255,255,255,.25)",
            }}
        >
            <Image
                src={import.meta.env.BASE_URL + src}
                alt={label}
                w="100%"
                h={"100%"}
                fit="cover"
                style={{ display: "block" }}
            />

            <Box
                pos="absolute"
                bottom={7}
                right={7}
                px={12}
                py={6}
                style={{
                    borderRadius: 12,
                    background: "rgba(0,0,0,0.8)",
                    backdropFilter: "blur(2px)",
                }}
            >
                <Text c="white" fw={800} fz="sm">
                    {label}
                </Text>
            </Box>
        </Paper>
    );
};

export default ProjectsShowcase;
