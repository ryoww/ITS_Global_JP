// src/components/services/SapMainFeatures.tsx
import React from "react";
import {
    Box,
    Container,
    Paper,
    SimpleGrid,
    Stack,
    Title,
    Text,
    Image,
} from "@mantine/core";

/** 画像は public 配下に置いてください */
type Feature = {
    img: string; // 丸いアイコン画像のパス
    title: string;
    body: string;
};

const FEATURES: Feature[] = [
    {
        img: "/service/SPA/service_4_majorfeatures_1.png",
        title: "適切な SAP 製品の選択をサポート",
        body: "企業が特定のニーズに合った SAP モジュールを選択できるように支援し、最適な SAP バージョンと構成に関するアドバイスを提供します。",
    },
    {
        img: "/service/SPA/service_4_majorfeatures_2.png",
        title: "技術的ソリューションの提案",
        body: "ビジネスパフォーマンスを向上させるための最適な技術ソリューションを提供し、既存のシステムとの互換性と容易な統合を確保します。",
    },
    {
        img: "/service/SPA/service_4_majorfeatures_3.png",
        title: "ERP システムの構成",
        body: "ビジネス要件に従ってモジュールと機能をセットアップし、ERP システムが設計と要件に従って動作するようにします。",
    },
    {
        img: "/service/SPA/service_4_majorfeatures_4.png",
        title: "システム統合",
        body: "ERP を企業の既存のソフトウェア システムと統合し、システム間でデータがシームレスかつ正確に転送されるようにします。",
    },
    {
        img: "/service/SPA/service_4_majorfeatures_5.png",
        title: "変更管理",
        body: "当社は、企業が ERP 導入中に必要な変更を管理できるように支援し、移行がスムーズに行われ、ビジネスの中断を引き起こさないようにします。",
    },
    {
        img: "/service/SPA/service_4_majorfeatures_6.png",
        title: "レポートと分析",
        body: "当社は強力なレポートおよび分析ツールを提供し、企業がパフォーマンスを監視および評価し、戦略的な意思決定を行えるように支援します。",
    },
];

const SapMainFeatures: React.FC = () => {
    return (
        <Box py={48} bg="blue.0">
            <Container size="lg" w="92%">
                <Title
                    order={1}
                    fz={{ base: 32, md: 40 }}
                    ta="center"
                    c="blue.8"
                    fw={900}
                    mb={28}
                    style={{ letterSpacing: "0.04em" }}
                >
                    主な特徴
                </Title>

                <SimpleGrid cols={{ base: 1, md: 2, lg: 3 }} spacing={28}>
                    {FEATURES.map((f) => (
                        <Paper
                            key={f.title}
                            radius="lg"
                            p={28}
                            shadow="xs"
                            withBorder
                            style={{ background: "white" }}
                        >
                            <Stack align="center" gap={14}>
                                {/* 丸いアイコンは画像としてお渡しください */}
                                <Image
                                    src={import.meta.env.BASE_URL + f.img}
                                    alt=""
                                    w={170}
                                    h={170}
                                    fit="contain"
                                    style={{ display: "block" }}
                                />

                                <Title order={4} ta="center" c="gray.9">
                                    {f.title}
                                </Title>

                                <Text fz="sm" lh={1.9} ta="left">
                                    {f.body}
                                </Text>
                            </Stack>
                        </Paper>
                    ))}
                </SimpleGrid>
            </Container>
        </Box>
    );
};

export default SapMainFeatures;
