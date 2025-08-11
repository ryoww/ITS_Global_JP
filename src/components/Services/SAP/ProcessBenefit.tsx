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
    IconReportAnalytics, // 分析・設計
    IconArrowsRightLeft, // 統合
    IconUsersGroup, // リソース管理
    IconShieldCheck, // セキュリティ
} from "@tabler/icons-react";

type Feature = {
    icon: React.ReactNode;
    title: string;
    body: string;
    /** アイコン背景色（Mantineカラー名 or HEX） */
    color?: string;
};

type Props = {
    /** 左側の大きな画像（public配下） */
    heroSrc?: string;
    heading?: string;
    features?: Feature[];
};

const DEFAULT_FEATURES: Feature[] = [
    {
        icon: <IconReportAnalytics size={20} />,
        title: "ニーズに応じたソリューションの分析と設計",
        body: "ITS Global は、ビジネス要件を詳細に分析し、ビジネスの戦略と目標に整合するようにカスタマイズされた SAP／ERP ソリューションを設計します。",
        color: "#1C6FAE",
    },
    {
        icon: <IconArrowsRightLeft size={20} />,
        title: "スケーラビリティと統合",
        body: "既存システムや外部サービスと柔軟に連携できるアーキテクチャを採用。将来の拠点拡大や取扱量増にも耐える拡張性を確保し、継続的な運営効率を支えます。",
        color: "#18B0A6",
    },
    {
        icon: <IconUsersGroup size={20} />,
        title: "リソースを効果的に管理する",
        body: "財務・人事・在庫・購買などの業務データを一元化し、プロセスを標準化。リソースの可視化と最適配分により、生産性と意思決定のスピードを高めます。",
        color: "#2EA8DF",
    },
    {
        icon: <IconShieldCheck size={20} />,
        title: "データセキュリティ",
        body: "役割ベースのアクセス制御、監査ログ、バックアップ／災害対策などの高度な対策により、機密性・完全性・可用性を確保します。",
        color: "#1FA94A",
    },
];

const ProcessBenefitSAP: React.FC<Props> = ({
    heroSrc = "/service/SPA/service_4_sap.png",
    heading = "ITS GLOBALにおける SAP および ERP コンサルティングと導入プロセスのメリット",
    features = DEFAULT_FEATURES,
}) => {
    return (
        <Box py={56} mt={60} w={"100%"}>
            <Container size="lg" w="95%">
                <Grid gutter={45} align="center">
                    {/* 左：一枚画像 */}
                    <Grid.Col span={{ base: 12, md: 6 }}>
                        <Image
                            src={import.meta.env.BASE_URL + heroSrc}
                            alt=""
                            radius={20}
                            w="100%"
                            h={{ base: 260, md: 480 }}
                            fit="cover"
                            style={{ display: "block" }}
                        />
                    </Grid.Col>

                    {/* 右：見出し＋リスト */}
                    <Grid.Col span={{ base: 12, md: 6 }}>
                        <Stack gap="md">
                            <Title
                                order={1}
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
        <ThemeIcon
            radius="xl"
            size={44}
            variant="filled"
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
            <Text fw={700}>{title}</Text>
            <Text fz="sm" lh={1.8} c="gray.8">
                {body}
            </Text>
        </Stack>
    </Group>
);

export default ProcessBenefitSAP;
