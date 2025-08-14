import React from "react";
import {
    Box,
    Container,
    Grid,
    Group,
    Stack,
    Text,
    Title,
    ThemeIcon,
    Image,
} from "@mantine/core";
import {
    IconUsersGroup,
    IconCurrencyDollar,
    IconHeadset,
    IconCode,
    IconRocket,
} from "@tabler/icons-react";

/* 左側の理由リスト（必要に応じて文言調整してください） */
const REASONS = [
    {
        icon: <IconUsersGroup size={22} />,
        color: "#1C6FAE",
        title: "上級専門家チーム",
        body: "ITS グローバルは、日本語能力試験N2以上の豊富な経験を持つ専門家チームを有しています。彼らは日本の大学を卒業し、開発に関する専門知識を持ち、体系的に訓練されています。お客様に先進かつ効果的なテクノロジーソリューションを提供する能力を持っています。",
    },
    {
        icon: <IconCode size={22} />,
        color: "#18B0A6",
        title: "システム開発経験",
        body: "現在、ITS グローバルは、物流、小売、ERP、モバイル アプリケーション、ビジネスシステムなど、さまざまな分野で 370 以上のプロジェクトを抱えています。日本市場での長年の経験により、ITS グローバルは日本文化を深く理解しています。クライアントのニーズに応じ、すべてのプロジェクトが時間どおりに最高の品質基準で完了することを保証します。",
    },
    {
        icon: <IconRocket size={22} />,
        color: "#2EA8DF",
        title: "テクノロジーとイノベーション",
        body: "ITS グローバルは、モバイルアプリケーションからWeb/アプリ開発、ERPシステム開発まで、常に最新のテクノロジーをアップデートし、サービスに適用しています。当社は、各顧客の要望を完全にカスタマイズされたソフトウェアソリューションを提供し、ビジネスプロセスの最適化とパフォーマンスの向上を支援します。",
    },
    {
        icon: <IconCurrencyDollar size={22} />,
        color: "#F7A600",
        title: "競争価格",
        body: "ITS グローバルは競争力のある価格でサービスを提供し、顧客が高品質のサービスを受けながらコストを削減できるようにします。",
    },
    {
        icon: <IconHeadset size={22} />,
        color: "#1FA94A",
        title: "お客様サービスとサポート",
        body: "ITS グローバルは 24 時間 365 日の顧客サポートを提供し、すべての顧客の問題と要求が迅速かつ効果的に解決されることを保証します。心からの顧客サポートを行い、長期的な関係形態の構築に重点を置いており、顧客の要求を常に聞き入れ、満たすことに尽力しています。",
    },
];

type Props = {
    /** 右側に表示する完成画像（コラージュ済みの1枚） */
    imageSrc?: string;
};

const WhyChooseITS: React.FC<Props> = () => {
    return (
        <Box bg="blue.0" py={56} w={"100%"} mt={80}>
            <Container size="lg" w="90%">
                <Grid gutter={40} align="center">
                    {/* 左：タイトル＋理由リスト */}
                    <Grid.Col span={{ base: 12, md: 6 }}>
                        <Title
                            order={2}
                            c="blue.8"
                            fw={{ base: 700, md: 900 }}
                            mb={24}
                            style={{ letterSpacing: "0.04em" }}
                        >
                            ITSを選ぶべき理由
                        </Title>

                        <Stack gap={22}>
                            {REASONS.map((r) => (
                                <Group
                                    key={r.title}
                                    align="flex-start"
                                    gap={16}
                                >
                                    <ThemeIcon
                                        radius="xl"
                                        size={44}
                                        style={{
                                            background: r.color,
                                            color: "#fff",
                                        }}
                                    >
                                        {r.icon}
                                    </ThemeIcon>

                                    <Stack gap={6} style={{ flex: 1 }}>
                                        <Text fw={700} c="blue.9">
                                            {r.title}
                                        </Text>
                                        <Text lh={1.9} fz="sm">
                                            {r.body}
                                        </Text>
                                    </Stack>
                                </Group>
                            ))}
                        </Stack>
                    </Grid.Col>

                    {/* 右：用意済みの画像をそのまま表示 */}
                    <Grid.Col
                        span={{ base: 12, md: 6 }}
                        style={{ display: "grid", alignItems: "center" }}
                        h={"100%"}
                    >
                        <Image
                            src={"/about/banner_choose_its.png"}
                            radius={24}
                            w="100%"
                            fit="cover"
                            alt="Why ITS Global"
                        />
                    </Grid.Col>
                </Grid>
            </Container>
        </Box>
    );
};

export default WhyChooseITS;
