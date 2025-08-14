// src/components/services/FlutterBenefits.tsx
import React from "react";
import {
    Box,
    Container,
    Paper,
    SimpleGrid,
    Stack,
    Text,
    Title,
    Image,
} from "@mantine/core";

type Item = {
    icon: string; // public 配下のパス
    badgeGradient: string; // 例: "linear-gradient(135deg,#15c1cf,#0a74b7)"
    title: string;
    body: string;
};

const ITEMS: Item[] = [
    {
        icon: "service/flutter/service_1_advantages_1.png",
        badgeGradient: "linear-gradient(135deg,#15c1cf,#0a74b7)",
        title: "時間とコストを節約",
        body: "iOS と Android の両方で単一のソースコードから開発することで、時間とコストを節約できます。",
    },
    {
        icon: "service/flutter/service_1_advantages_2.png",
        badgeGradient: "linear-gradient(135deg,#ffa63b,#ff7a00)",
        title: "インターフェイスは美しく、一貫性があります",
        body: "フラッターとハイブリッドで開発されたアプリはプラットフォーム間で一貫した魅力的な UI を備え、ユーザーに良い印象を与えます。",
    },
    {
        icon: "service/flutter/service_1_advantages_3.png",
        badgeGradient: "linear-gradient(135deg,#15c1cf,#0a74b7)",
        title: "柔軟性",
        body: "変更と更新を迅速に簡単に統合します。",
    },
    {
        icon: "service/flutter/service_1_advantages_4.png",
        badgeGradient: "linear-gradient(135deg,#ffa63b,#ff7a00)",
        title: "マルチプラットフォームアクセス",
        body: "1 つのアプリケーションでさまざまなプラットフォーム上のユーザーに簡単にアクセスできます。",
    },
];

const FlutterBenefits: React.FC = () => {
    return (
        <Box bg="blue.0" py={48} mt={80}>
            <Container size="lg" w="95%">
                <Title
                    order={2}
                    ta="center"
                    c="blue.8"
                    fw={800}
                    mb={70}
                    style={{ letterSpacing: "0.04em" }}
                >
                    TSグローバルにおけるフラッターとハイブリッドモバイルアプリ開発の利点
                </Title>

                <SimpleGrid cols={{ base: 1, md: 2, lg: 4 }} spacing={24}>
                    {ITEMS.map((item) => (
                        <BenefitCard key={item.title} {...item} />
                    ))}
                </SimpleGrid>
            </Container>
        </Box>
    );
};

const BenefitCard: React.FC<Item> = ({ icon, title, body }) => {
    return (
        <Paper
            radius="lg"
            p={24}
            shadow="sm"
            pos="relative"
            style={{
                background: "white",
                paddingTop: 52,
                boxShadow: "0 8px 18px rgba(10, 116, 183, .12)",
            }}
            mt={{ base: 30, md: 0 }}
        >
            <Box
                pos="absolute"
                top={-36}
                left="50%"
                style={{
                    transform: "translateX(-50%)",
                    borderRadius: 999,
                    display: "grid",
                    placeItems: "center",
                }}
            >
                <Image
                    src={import.meta.env.BASE_URL + icon}
                    alt=""
                    w={70}
                    h={70}
                    fit="contain"
                />
            </Box>

            <Stack gap={10} ta="center">
                <Text fw={500} mt={20}>
                    {title}
                </Text>
                <Text fz="sm" lh={1.8} c="gray.7">
                    {body}
                </Text>
            </Stack>
        </Paper>
    );
};

export default FlutterBenefits;
