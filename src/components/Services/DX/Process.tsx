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

/* 画像に合わせた文言に更新 */
const STEPS: Step[] = [
    {
        img: "/service/DX/service_3_deployment_1.png",
        title: "調査と需要分析",
        body: "お客様のビジネスのニーズと目標を明確に理解するために、関連部門から調査を実施しデータを収集します。そこから、デジタル変革を通じて弱点と改善の機会を特定します。",
        color: "#1565c0",
    },
    {
        img: "/service/DX/service_3_deployment_2.png",
        title: "DXロードマップを構築する",
        body: "分析に基づいて、実装手順・時間・必要なリソース・予想される予算を含む詳細な計画を作成します。",
        color: "#00838f",
    },
    {
        img: "/service/DX/service_3_deployment_3.png",
        title: "導入と開発体制",
        body: "指定された設計に従ってソフトウェアやアプリケーションの開発を開始します。ビジネスの特定のニーズと要件に合わせてソリューションが構築されていることを確認します。",
        color: "#00695c",
    },
    {
        img: "/service/DX/service_3_deployment_4.png",
        title: "システムテスト",
        body: "単体テスト、統合テスト、およびユーザー受け入れテスト（UAT）を実行して、システムが正しく効率的に動作することを確認します。",
        color: "#2e7d32",
    },
    {
        img: "/service/DX/service_3_deployment_5.png",
        title: "引き継ぎと評価",
        body: "テスト完了次第、商品を発送させていただきます。納入後はお客様とともに結果を確認し、必要に応じて運用・保守に適切な措置を講じます。",
        color: "#ef6c00",
    },
    {
        img: "/service/DX/service_3_deployment_6.png",
        title: "サポートとメンテナンス",
        body: "継続的な技術サポートにより、発生した問題を迅速に解決し、システムの安定した運用を保証します。定期的なメンテナンス作業とシステム更新を実行して、パフォーマンスとセキュリティを確保します。",
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
                    style={{ letterSpacing: "0.04em" }}
                >
                    開発と展開のプロセス
                </Title>

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
                                    src={s.img}
                                    alt=""
                                    w={{ base: 200, md: 150 }}
                                    h={{ base: 200, md: 150 }}
                                    fit="contain"
                                    style={{ display: "block" }}
                                />

                                <Text
                                    fw={700}
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
