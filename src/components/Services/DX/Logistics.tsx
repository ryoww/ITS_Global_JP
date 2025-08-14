// src/components/services/LogisticsRetailDX.tsx
import React from "react";
import {
    Box,
    Container,
    Grid,
    Group,
    Image,
    Stack,
    Text,
    Title,
    ThemeIcon,
} from "@mantine/core";
import {
    IconRobot,
    IconUsersGroup,
    IconRoute,
    IconRefresh,
} from "@tabler/icons-react";

type Feature = {
    icon: React.ReactNode;
    title: string;
    body: string;
    /** アイコンの背景色（単色・任意。例: "#0aa0b2" や "teal.6"） */
    color?: string;
};

type Props = {
    heroSrc?: string; // 左側は1枚の画像
    heading?: string;
    features?: Feature[];
};

const DEFAULT_FEATURES: Feature[] = [
    {
        icon: <IconRobot size={20} />,
        title: "プロセスの自動化",
        body: "高度なテクノロジーで倉庫管理〜輸送・配送までを自動化。エラーを減らし、業務効率を向上します。",
        color: "#1C6FAE",
    },
    {
        icon: <IconUsersGroup size={20} />,
        title: "経験豊富な専門家チーム",
        body: "物流・小売領域に精通した専門家が、DXソリューションの導入と運用を確実に支援します。",
        color: "#18B0A6",
    },
    {
        icon: <IconRoute size={20} />,
        title: "配送の最適化",
        body: "最適なルート／輸送方法を選択してリードタイム短縮と物流コスト最小化を実現します。",
        color: "#2EA8DF",
    },
    {
        icon: <IconRefresh size={20} />,
        title: "すぐに適応する能力",
        body: "市場・顧客の変化に素早く対応し、柔軟性と競争力を維持します。",
        color: "#1FA94A",
    },
];

const LogisticsRetailDX: React.FC<Props> = ({
    heroSrc = "service/DX/service_3_img.png",
    heading = "ITS Globalにおける物流および小売業向けのDXソリューションのメリット",
    features = DEFAULT_FEATURES,
}) => {
    return (
        <Box py={16} mt={30}>
            <Container size="lg" w="92%">
                <Grid gutter={36} align="center">
                    {/* 左：一枚画像 */}
                    <Grid.Col
                        span={{ base: 12, md: 6 }}
                        order={{ base: 2, md: 1 }}
                    >
                        <Image
                            src={import.meta.env.BASE_URL + heroSrc}
                            alt=""
                            radius={8}
                            w="100%"
                            h={{ base: 260, md: 420 }}
                            fit="cover"
                            style={{ display: "block" }}
                        />
                    </Grid.Col>

                    {/* 右：見出し＋リスト */}
                    <Grid.Col
                        span={{ base: 12, md: 6 }}
                        order={{ base: 1, md: 2 }}
                    >
                        <Stack gap="md">
                            <Title
                                order={2}
                                c="blue.8"
                                fw={700}
                                style={{
                                    letterSpacing: "0.02em",
                                    lineHeight: 1.25,
                                }}
                            >
                                {heading}
                            </Title>

                            <Stack gap="lg">
                                {features.map((f) => (
                                    <FeatureItem key={f.title} {...f} />
                                ))}
                            </Stack>
                        </Stack>
                    </Grid.Col>
                </Grid>
            </Container>
        </Box>
    );
};

const FeatureItem: React.FC<Feature> = ({ icon, title, body, color }) => (
    <Group align="flex-start" gap={14} wrap="nowrap">
        {/* 単色の丸アイコン */}
        <ThemeIcon
            radius="xl"
            size={44}
            variant="filled"
            // Mantineカラー名でもHEXでもOK。HEX時は style で確実に適用
            color={
                typeof color === "string" && !color.includes("#")
                    ? color
                    : undefined
            }
            style={
                color?.includes("#")
                    ? { backgroundColor: color, color: "white" }
                    : undefined
            }
        >
            {icon}
        </ThemeIcon>

        <Stack gap={4} style={{ flex: 1 }}>
            <Text fw={800}>{title}</Text>
            <Text fz="sm" lh={1.8} c="gray.8">
                {body}
            </Text>
        </Stack>
    </Group>
);

export default LogisticsRetailDX;
