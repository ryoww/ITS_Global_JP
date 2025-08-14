// src/components/services/MobileProcess.tsx
import React from "react";
import {
    Box,
    Container,
    SimpleGrid,
    Stack,
    Title,
    Text,
    Image,
    Paper,
} from "@mantine/core";

/** 各ステップの図（番号＋丸枠＋アイコン）は画像で用意してください */
type Step = {
    img: string; // public 配下のパス
    title: string;
    body: string;
    color?: string; // 見出し強調色（任意）
};

const STEPS: Step[] = [
    {
        img: "service/flutter/service_1_mobile_application_1.png",
        title: "調査と要件を収集する",
        body: "アイデアを製品にするには、ニーズを正確に理解することが重要です。まずは、やりたいことを教えてください。",
        color: "#1565c0",
    },
    {
        img: "service/flutter/service_1_mobile_application_2.png",
        title: "プロジェクトの計画",
        body: "開発スケジュール・必要なリソース・予算を決定し、主要機能・ビジネスプロセス・技術要件などアプリの機能要件リストを作成します。",
        color: "#00838f",
    },
    {
        img: "service/flutter/service_1_mobile_application_3.png",
        title: "ユニークなデザインそしてカスタマイズ",
        body: "すべてのビジネスはユニーク。価値観とスタイルを正確に反映する、特徴的なカスタマイズデザインを作成します。",
        color: "#00695c",
    },
    {
        img: "service/flutter/service_1_mobile_application_4.png",
        title: "アプリの開発とテスト",
        body: "Flutter / ハイブリッド技術で開発し、iOS と Android の両方で動作。機能・UI・性能・セキュリティまで包括的にテストします。",
        color: "#2e7d32",
    },
    {
        img: "service/flutter/service_1_mobile_application_5.png",
        title: "アプリストアへのリリース",
        body: "全工程完了後、Google Play や Apple ストアなどのアプリストアに公開します。",
        color: "#ef6c00",
    },
    {
        img: "service/flutter/service_1_mobile_application_6.png",
        title: "サポートとメンテナンス",
        body: "継続的な技術サポートで発生した問題を迅速に解決。定期的なメンテとアップデートで安定運用・性能・セキュリティを確保します。",
        color: "#c62828",
    },
];

const MobileProcess: React.FC = () => {
    return (
        <Box py={56} mt={80} bg={"gray.0"}>
            <Container size="lg" w="92%">
                <Title
                    order={1}
                    fz={{ base: 28, md: 36 }}
                    ta="center"
                    c="blue.8"
                    fw={900}
                    mb={20}
                    style={{ letterSpacing: "0.02em" }}
                >
                    モバイルアプリケーションの開発プロセス
                </Title>

                <Text ta="center" lh={1.9} mb={28}>
                    当社のモバイル
                    アプリケーション開発ライフサイクルは、お客様のビジネス
                    ニーズと予算を満たすように設計されています。
                    当社は、プロジェクトの構造、時間、コストなどの関連要素も考慮しながら、プロジェクトのビジネス目標と要件に基づいて
                    明確に定義された製品開発戦略を含むエンドツーエンドのプロセスを構築します。
                </Text>

                {/* 6 ステップ：PC では 6 列、タブレット 3 列、モバイル 1 列 */}
                <SimpleGrid cols={{ base: 1, md: 3, lg: 6 }} spacing={28}>
                    {STEPS.map((s) => (
                        <Paper
                            key={s.title}
                            p={0}
                            radius="md"
                            bg="transparent"
                            shadow="none"
                        >
                            <Stack align="center" gap={10}>
                                {/* 丸枠＋番号＋ピクトの図は 1 枚画像 */}
                                <Image
                                    src={import.meta.env.BASE_URL + s.img}
                                    alt=""
                                    w={{ base: 200, md: 150 }}
                                    h={{ base: 200, md: 150 }}
                                    fit="contain"
                                    style={{ display: "block" }}
                                />

                                <Text
                                    fw={500}
                                    ta="center"
                                    c={s.color ?? "blue.7"}
                                    style={{ minHeight: 44 }}
                                >
                                    {s.title}
                                </Text>

                                <Text fz="sm" lh={1.8} ta="left" c="gray.8">
                                    {s.body}
                                </Text>
                            </Stack>
                        </Paper>
                    ))}
                </SimpleGrid>
            </Container>
        </Box>
    );
};

export default MobileProcess;
