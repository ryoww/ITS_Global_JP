// src/components/services/RetailDxFeatures.tsx
import React from "react";
import {
    Box,
    Container,
    Paper,
    SimpleGrid,
    Stack,
    Text,
    Title,
} from "@mantine/core";
import {
    IconBuildingWarehouse,
    IconTruckDelivery,
    IconChartBar,
    IconShoppingBag,
    type IconProps, // ← Tabler のアイコン props 型
} from "@tabler/icons-react";

/* Tabler の各アイコンコンポーネントを受け取るための型 */
type IconComponent = React.ComponentType<IconProps>;

type FeatureItem = {
    icon: IconComponent;
    title: string;
    body: string;
};

const FEATURES: FeatureItem[] = [
    {
        icon: IconBuildingWarehouse,
        title: "スマートな倉庫管理",
        body: "AIと統合された倉庫管理システム（WMS）。保管スペースと時間を最適化します。",
    },
    {
        icon: IconTruckDelivery,
        title: "物流プロセスの自動化",
        body: "高度な輸送管理システム（TMS）。商品のルートとステータスをリアルタイムで追跡します。",
    },
    {
        icon: IconChartBar,
        title: "小売データ分析",
        body: "強力なデータ分析ツール。消費者の傾向を予測し、在庫を最適化します。",
    },
    {
        icon: IconShoppingBag,
        title: "マルチチャネル販売サポート（オムニチャネル）",
        body: "店舗とオンラインチャネルを統合。顧客データと商品データを同期します。",
    },
];

/* 指定のグラデーション背景で丸く囲うアイコンラッパー */
const GradientIcon: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => (
    <Box
        w={54}
        h={54}
        mr={10}
        style={{
            borderRadius: 999,
            background: "linear-gradient(to right, #195FAA, #00ADAF)",
            display: "grid",
            placeItems: "center",
            flex: "0 0 54px",
            color: "white",
        }}
    >
        {children}
    </Box>
);

const FeatureCard: React.FC<FeatureItem> = ({ icon: Icon, title, body }) => (
    <Paper withBorder radius="lg" p={18}>
        <Box style={{ display: "flex", alignItems: "flex-start" }}>
            <GradientIcon>
                <Icon size={30} stroke={2} />
            </GradientIcon>

            <Stack gap={6} style={{ flex: 1 }}>
                <Text fw={700}>{title}</Text>
                <Text fz="sm" lh={1.8} c="gray.9">
                    {body}
                </Text>
            </Stack>
        </Box>
    </Paper>
);

const RetailDxFeatures: React.FC = () => {
    return (
        <Box py={40} mt={80}>
            <Container size="lg" w="92%">
                <Title
                    order={1}
                    ta="center"
                    c="blue.7"
                    fw={900}
                    mb={30}
                    style={{ letterSpacing: "0.04em" }}
                >
                    主な特徴
                </Title>

                <SimpleGrid cols={{ base: 1, md: 2, xl: 4 }} spacing={24}>
                    {FEATURES.map((f) => (
                        <FeatureCard key={f.title} {...f} />
                    ))}
                </SimpleGrid>
            </Container>
        </Box>
    );
};

export default RetailDxFeatures;
