// src/components/services/SapAbapCaseStudy.tsx
import React from "react";
import {
    Box,
    Container,
    Grid,
    Image,
    List,
    Paper,
    Stack,
    Text,
    Title,
} from "@mantine/core";

/**
 * 画像はすべて public 配下に配置してください。
 * 例）/service/SPA/service_4_practical_project_1.png */
const img = (p: string) => p;

const SapAbapCaseStudy: React.FC = () => {
    return (
        <Box py={48}>
            <Container size="lg" w={{ base: "98%", md: "92%" }}>
                {/* 見出し */}
                <Title
                    // order={2}
                    fz={{ base: 29, md: 40 }}
                    c="blue.8"
                    fw={900}
                    mb={28}
                    style={{ letterSpacing: "0.02em" }}
                    ta={"center"}
                    mt={80}
                >
                    SAP ABAPアドオン開発に関する実践プロジェクト
                </Title>

                {/* 1. ヒーロー：左画像／右テキスト（概要・導入） */}
                <Grid gutter={28} align="center">
                    <Grid.Col
                        span={{ base: 12, md: 6 }}
                        order={{ base: 1, md: 1 }}
                    >
                        <Paper radius="lg" p={0} style={{ overflow: "hidden" }}>
                            <Image
                                src={img(
                                    "/service/SPA/service_4_practical_project_1.png"
                                )}
                                alt=""
                                radius="lg"
                                w="100%"
                                h={{ base: 260, md: 360 }}
                                fit="cover"
                                style={{ display: "block" }}
                            />
                        </Paper>
                    </Grid.Col>

                    <Grid.Col
                        span={{ base: 12, md: 6 }}
                        order={{ base: 2, md: 2 }}
                    >
                        <Stack gap={0}>
                            <Title order={3}>プロジェクト概要</Title>
                            <Text lh={1.9}>
                                日本市場の企業に特化した管理システムを提供し、出荷・輸出に関する情報や取引データを
                                SAP
                                システム上で一元管理できるようにしました。お客様は世界各地に拠点を持つ日本の大手物流企業で、
                                当社はパートナーの HITACHI と連携し、SAP R/3
                                から SAP S/4HANA
                                への移行に対応する取り組みを支援しました。モデル実装は
                                DevOps／CI-CD を前提とし、ABAP・SAP S/4HANA
                                を中心に開発しました。
                            </Text>

                            <Title order={3} mt={10}>
                                導入
                            </Title>
                            <Text lh={1.9}>
                                競争の激化と業務プロセス最適化の必要性を背景に、先進テクノロジーの導入が喫緊の課題となっていました。
                                当社は、現状分析・要件定義・設計・開発・移行計画の策定までを一貫して担当。
                                「日本市場の企業向け管理システムの提供」をテーマに、本プロジェクトを推進しました。
                                本システムは、世界展開する支店管理の標準プラットフォームとして活用されています。
                            </Text>
                        </Stack>
                    </Grid.Col>
                </Grid>

                {/* 2. 左テキスト（詳細）／右画像 */}
                <Grid gutter={28} mt={36}>
                    <Grid.Col
                        span={{ base: 12, md: 6 }}
                        order={{ base: 2, md: 1 }}
                    >
                        <Stack gap={0}>
                            <Title order={3}>プロジェクトの詳細</Title>

                            <Title order={5} mt={10}>
                                プロジェクトの目的と範囲
                            </Title>
                            <Text lh={1.9}>
                                倉庫管理機能の提供、輸出プロセスの自動化、取引情報の更新を目的に実施。
                                処理速度の向上だけでなく、エラー削減やオペレーションの標準化も狙いとしました。
                                さらに、SAP R/3 から SAP S/4HANA
                                への移行を見据え、段階的な統合計画を策定しました。
                            </Text>

                            <Title order={5} mt={10}>
                                私たちが提供するソリューション
                            </Title>
                            <Text lh={1.9}>
                                HITACHI と連携し、既存の SAP R/3 と SAP S/4HANA
                                のハイブリッド運用に対応。実運用に配慮した移行シナリオを設計し、停止時間を最小化した
                                スムーズな移行を実現しました。アドオン開発（ABAP）と標準機能の最適な組み合わせにより、
                                高い拡張性と保守性を両立しています。
                            </Text>
                        </Stack>
                    </Grid.Col>

                    <Grid.Col
                        span={{ base: 12, md: 6 }}
                        order={{ base: 1, md: 2 }}
                    >
                        <Paper radius="lg" p={0} style={{ overflow: "hidden" }}>
                            <Image
                                src={img(
                                    "/service/SPA/service_4_practical_project_2.png"
                                )}
                                alt=""
                                radius="lg"
                                w="100%"
                                h={{ base: 260, md: 360 }}
                                fit="cover"
                                style={{ display: "block" }}
                            />
                        </Paper>
                    </Grid.Col>
                </Grid>

                {/* 3. 右テキスト（1～2の工程）／左画像 */}
                <Grid gutter={28} mt={36} align="center">
                    <Grid.Col
                        span={{ base: 12, md: 6 }}
                        order={{ base: 1, md: 1 }}
                    >
                        <Paper radius="lg" p={0} style={{ overflow: "hidden" }}>
                            <Image
                                src={img(
                                    "/service/SPA/service_4_practical_project_3.png"
                                )}
                                alt=""
                                radius="lg"
                                w="100%"
                                h={{ base: 260, md: 360 }}
                                fit="cover"
                                style={{ display: "block" }}
                            />
                        </Paper>
                    </Grid.Col>

                    <Grid.Col
                        span={{ base: 12, md: 6 }}
                        order={{ base: 2, md: 2 }}
                    >
                        <Stack gap="lg">
                            <div>
                                <Title order={4}>1. 現状と要件を分析する</Title>
                                <List withPadding spacing="xs">
                                    <List.Item>
                                        システム現状調査：構成、プロセス、課題を把握し、SAP
                                        移行に向けた影響と改善点を明確化。
                                    </List.Item>
                                    <List.Item>
                                        関係者ヒアリング：運用部門や管理部門から、移行時の懸念点・求める効果・パフォーマンス要件を収集。
                                    </List.Item>
                                </List>
                            </div>

                            <div>
                                <Title order={4}>2. ソリューション設計</Title>
                                <List withPadding spacing="xs">
                                    <List.Item>
                                        詳細設計：スケジュール、タスク割り当て、手順を定義し、データ移行計画と試験計画を策定。
                                    </List.Item>
                                    <List.Item>
                                        アーキテクチャ設計：新しい SAP S/4HANA
                                        環境に合わせてモジュールと連携を最適化。既存プロセスとのシームレスな統合を保証。
                                    </List.Item>
                                    <List.Item>
                                        統合オプションの策定：データ移行、モジュール連携、ワークフロー同期、R/3
                                        と S/4HANA 間の統合方針を定義。
                                    </List.Item>
                                </List>
                            </div>
                        </Stack>
                    </Grid.Col>
                </Grid>

                {/* 4. 左テキスト（3～5の工程）／右画像 */}
                <Grid gutter={28} mt={36} align="center">
                    <Grid.Col
                        span={{ base: 12, md: 6 }}
                        order={{ base: 2, md: 1 }}
                    >
                        <Stack gap="lg">
                            <div>
                                <Title order={4}>3. デプロイとテスト</Title>
                                <List withPadding spacing="xs">
                                    <List.Item>
                                        データ変換の実行：R/3 から S/4HANA
                                        へデータを移行し、全体の整合性と正確性を検証。
                                    </List.Item>
                                    <List.Item>
                                        構成と統合：設計どおりにモジュールを構成し、業務要件・技術要件を満たすことを確認。
                                    </List.Item>
                                    <List.Item>
                                        システムテスト：単体・統合・ユーザー受け入れ（UAT）まで複数段階で徹底的に検証。
                                    </List.Item>
                                </List>
                            </div>

                            <div>
                                <Title order={4}>
                                    4. トレーニングとサポート
                                </Title>
                                <List withPadding spacing="xs">
                                    <List.Item>
                                        ユーザートレーニング：実務に合わせたハンズオンで、機能を最大限活用できるよう支援。
                                    </List.Item>
                                    <List.Item>
                                        運用サポート：稼働後も技術チームが継続支援し、課題解決とパフォーマンス最適化を実施。
                                    </List.Item>
                                </List>
                            </div>

                            <div>
                                <Title order={4}>5. 評価と改善</Title>
                                <List withPadding spacing="xs">
                                    <List.Item>
                                        運用評価：目標に対する成果を定量・定性の両面から評価し、改善点を明確化。
                                    </List.Item>
                                    <List.Item>
                                        継続的改善：ユーザーからのフィードバックを反映し、業務変化に合わせて俊敏に改善。
                                    </List.Item>
                                </List>
                            </div>
                        </Stack>
                    </Grid.Col>

                    <Grid.Col
                        span={{ base: 12, md: 6 }}
                        order={{ base: 1, md: 2 }}
                    >
                        <Paper radius="lg" p={0} style={{ overflow: "hidden" }}>
                            <Image
                                src={img(
                                    "/service/SPA/service_4_practical_project_4.png"
                                )}
                                alt=""
                                radius="lg"
                                w="100%"
                                h={{ base: 260, md: 360 }}
                                fit="cover"
                                style={{ display: "block" }}
                            />
                        </Paper>
                    </Grid.Col>
                </Grid>

                {/* 5. レビュー & 結論 */}
                <Grid gutter={28} mt={36} align="center">
                    <Grid.Col
                        span={{ base: 12, md: 6 }}
                        order={{ base: 1, md: 1 }}
                    >
                        <Paper radius="lg" p={0} style={{ overflow: "hidden" }}>
                            <Image
                                src={img(
                                    "/service/SPA/service_4_practical_project_5.png"
                                )}
                                alt=""
                                radius="lg"
                                w="100%"
                                h={{ base: 260, md: 360 }}
                                fit="cover"
                                style={{ display: "block" }}
                            />
                        </Paper>
                    </Grid.Col>

                    <Grid.Col
                        span={{ base: 12, md: 6 }}
                        order={{ base: 2, md: 2 }}
                    >
                        <Stack gap="lg">
                            <div>
                                <Title order={3}>お客様からのレビュー</Title>
                                <Text lh={1.9}>
                                    本プロジェクトに対し、お客様からは非常に肯定的な評価をいただいています。
                                    当社が提供したソリューションの専門性と有効性、統合後に実感いただいた
                                    「業務プロセスの改善」と「長期的な成長戦略への寄与」が高く評価されています。
                                </Text>
                            </div>

                            <div>
                                <Title order={3}>結論</Title>
                                <Text lh={1.9}>
                                    本プロジェクトは、企業の管理と運営に先進テクノロジーを適用する意義を明確に示しました。
                                    SAP S/4HANA
                                    の統合により、運用効率の向上と競争力の強化を実現。
                                    今後もこの最新システムは、顧客の成長と成功を支える確かな基盤として機能し続けます。
                                </Text>
                            </div>
                        </Stack>
                    </Grid.Col>
                </Grid>
            </Container>
        </Box>
    );
};

export default SapAbapCaseStudy;
