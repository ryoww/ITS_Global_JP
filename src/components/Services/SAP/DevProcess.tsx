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
        img: "/service/SPA/service_4_development_1.png",
        title: "調査とニーズを分析する",
        body: "現在のビジネス要件とプロセスを収集して理解するために、お客様とのミーティングを実施します。やりたいこと／解決したい課題を明確化します。",
        color: "#1565c0",
    },
    {
        img: "/service/SPA/service_4_development_2.png",
        title: "企画とソリューション設計",
        body: "特定された要件に基づいて、導入プロジェクトの範囲・スケジュール・リソース・予算を決定。システム構造やビジネスプロセス、適切な技術ソリューションを設計します。",
        color: "#00838f",
    },
    {
        img: "/service/SPA/service_4_development_3.png",
        title: "導入とシステム構成",
        body: "ソフトウェアをインストールし、設計に従ってシステムを構成。モジュール間の連携や既存システムとの統合を実施し、必要に応じてカスタム機能を開発します。",
        color: "#00695c",
    },
    {
        img: "/service/SPA/service_4_development_4.png",
        title: "システムテスト",
        body: "単体テスト、統合テスト、ユーザー受け入れテスト（UAT）を実施して、システムが正しく効率的に動作することを確認します。",
        color: "#2e7d32",
    },
    {
        img: "/service/SPA/service_4_development_5.png",
        title: "正式展開／導入後のサポート",
        body: "計画どおり正式に運用開始し、機能が適切に動作することを確認。ユーザーが効果的に利用できるよう支援し、導入後の課題を解決・調整します。",
        color: "#ef6c00",
    },
    {
        img: "/service/SPA/service_4_development_6.png",
        title: "評価と改善",
        body: "一定期間の運用後に有効性を評価し、ユーザーのフィードバックを収集。パフォーマンスを最適化し、ビジネスニーズに合わせて継続的に改善します。",
        color: "#c62828",
    },
];

const DevProcess: React.FC = () => {
    return (
        <Box py={80} bg={"gray.0"}>
            <Container size="lg" w="92%">
                <Title
                    order={1}
                    ta="center"
                    c="blue.8"
                    fw={900}
                    mb={20}
                    style={{ letterSpacing: "0.04em" }}
                >
                    開発と展開のプロセス
                </Title>

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
                                    w={150}
                                    h={150}
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

export default DevProcess;
