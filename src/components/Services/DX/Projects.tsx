// src/components/services/LogisticsRetailProjects.tsx
import React from "react";
import {
    Box,
    Container,
    Grid,
    Group,
    Image,
    Paper,
    Stack,
    Table,
    Text,
    Title,
} from "@mantine/core";

/** 1案件の明細行（2列の表の1行） */
type DetailRow = { label: string; value: string };

/** 1案件の型 */
type Project = {
    title: string;
    summary: string;
    details: DetailRow[];
    processIcons: string[]; // 実装プロセスの丸アイコン（画像パス）
    hero: string; // 右/左に置く大きいイラスト
    /** true のとき「画像← →テキスト」を反転して配置（交互レイアウト用） */
    reverse?: boolean;
};

/* 画像・アイコンは public 配下に置いてください（例のパスは任意に変更可） */
const PROJECTS: Project[] = [
    {
        title: "顧客アンケートシステム",
        summary:
            "日本の顧客向けに簡単にアンケートを作成・配信し、集計してレポートを作成するシステム開発を行いました。国内の中小企業が対象で、当社は要件定義から設計・開発・テストを担当しました。",
        details: [
            { label: "開発分野", value: "カスタマーケア" },
            { label: "顧客企業規模", value: "101〜200名" },
            { label: "開発技術", value: "Ruby、ReactJS" },
            { label: "フォーム・開発期間", value: "プロジェクトベース・6か月" },
        ],
        processIcons: [
            "/service/flutter/service_1_mobile_application_1.png",
            "/service/flutter/service_1_mobile_application_2.png",
            "/service/flutter/service_1_mobile_application_3.png",
            "/service/flutter/service_1_mobile_application_4.png",
            "/service/flutter/service_1_mobile_application_5.png",
            "/service/flutter/service_1_mobile_application_6.png",
        ],
        hero: "/service/DX/service_3_actual_project_1.png",
    },
    {
        title: "販売システム",
        summary:
            "AMAZONの商品の管理・在庫・システム連携を行うための専用システムです。国内の中小企業が対象で、私たちは設計支援や開発とテストを担当しています。チームサイズ：4名（開発者 3 名、BrSE 1 名を含む）。",
        details: [
            { label: "開発分野", value: "小売" },
            { label: "顧客企業規模", value: "101〜200名" },
            { label: "開発技術", value: "ROR、ReactJS" },
            {
                label: "フォーム・開発期間",
                value: "オンショア開発・1年（継続中）",
            },
        ],
        processIcons: [
            "/service/flutter/service_1_mobile_application_1.png",
            "/service/flutter/service_1_mobile_application_2.png",
            "/service/flutter/service_1_mobile_application_3.png",
            "/service/flutter/service_1_mobile_application_4.png",
            "/service/flutter/service_1_mobile_application_5.png",
            "/service/flutter/service_1_mobile_application_6.png",
        ],
        hero: "/service/DX/service_3_actual_project_2.png",
        reverse: true, // 2段目は左右反転
    },
    {
        title: "ポイント管理システム",
        summary:
            "企業が顧客の買い物情報を統合するために開発するシステムで、一定の割合で買い物をするとポイントが付与されます。このシステムは、顧客のリピート率を高め、顧客満足度を向上させ、最終的に売上の継続的な一貫性を維持することに貢献します。国内外の中堅企業が対象です。チームサイズ：5名（開発者 4 名、BrSE 1 名を含む）。",
        details: [
            { label: "開発分野", value: "カスタマーケア" },
            { label: "顧客企業規模", value: "101〜200名" },
            { label: "開発技術", value: "ROR" },
            { label: "フォーム・開発期間", value: "ラボ・1年（継続中）" },
        ],
        processIcons: [
            "/service/flutter/service_1_mobile_application_1.png",
            "/service/flutter/service_1_mobile_application_2.png",
            "/service/flutter/service_1_mobile_application_3.png",
            "/service/flutter/service_1_mobile_application_4.png",
            "/service/flutter/service_1_mobile_application_5.png",
            "/service/flutter/service_1_mobile_application_6.png",
        ],
        hero: "/service/DX/service_3_actual_project_3.png",
    },
];

const DetailTable: React.FC<{ rows: DetailRow[] }> = ({ rows }) => (
    <Paper withBorder radius="md" p={0} style={{ overflow: "hidden" }}>
        <Table withRowBorders={false} verticalSpacing="xs">
            <Table.Tbody>
                {rows.map((r) => (
                    <Table.Tr key={r.label}>
                        <Table.Td
                            w="40%"
                            style={{
                                background: "#f8fafc",
                                fontWeight: 700,
                                borderRight: "1px solid #e6e9ef",
                            }}
                        >
                            {r.label}
                        </Table.Td>
                        <Table.Td w="60%">{r.value}</Table.Td>
                    </Table.Tr>
                ))}
            </Table.Tbody>
        </Table>
    </Paper>
);

const ProcessRow: React.FC<{ icons: string[] }> = ({ icons }) => (
    <Group gap="md" wrap="wrap">
        <Text fw={700} c="blue.7">
            実装プロセス
        </Text>
        <Group gap="sm">
            {icons.map((src, i) => (
                <Image
                    key={i}
                    src={src}
                    alt=""
                    w={50}
                    h={50}
                    fit="contain"
                    style={{ display: "block" }}
                />
            ))}
        </Group>
    </Group>
);

const HERO_MIN_H = 300;

const ProjectBlock: React.FC<Project> = ({
    title,
    summary,
    details,
    processIcons,
    hero,
    reverse,
}) => {
    return (
        <Grid gutter={{ base: 20, md: 28 }} align="stretch">
            {/* 画像 */}
            <Grid.Col
                span={{ base: 12, md: 6 }}
                order={{ base: 1, md: reverse ? 2 : 1 }}
            >
                <Paper
                    radius="lg"
                    withBorder={false}
                    p={0}
                    style={{
                        overflow: "hidden",
                        height: "100%",
                        minHeight: HERO_MIN_H,
                    }}
                >
                    <Image
                        src={hero}
                        alt=""
                        radius="lg"
                        w="100%"
                        // ★ 親 Paper の高さにフィットさせる
                        h="100%"
                        fit="cover"
                        style={{ display: "block" }}
                    />
                </Paper>
            </Grid.Col>

            {/* テキスト＋表 */}
            <Grid.Col
                span={{ base: 12, md: 6 }}
                order={{ base: 2, md: reverse ? 1 : 2 }}
            >
                {/* ★ テキスト側も最低高さを合わせるとより揃いやすい */}
                <Stack gap="sm" style={{ minHeight: HERO_MIN_H }}>
                    <Title
                        order={3}
                        c="blue.8"
                        fw={900}
                        style={{ letterSpacing: "0.02em" }}
                    >
                        {title}
                    </Title>

                    <Text lh={1.9}>{summary}</Text>

                    <DetailTable rows={details} />
                    <ProcessRow icons={processIcons} />
                </Stack>
            </Grid.Col>
        </Grid>
    );
};

const LogisticsRetailProjects: React.FC = () => {
    return (
        <Box py={50} bg="white" mt={80}>
            <Container size="lg" w={{ base: "98%", md: "92%" }}>
                <Title
                    order={1}
                    fz={{ base: 26, md: 36 }}
                    ta="center"
                    c="blue.8"
                    fw={900}
                    mb={24}
                    style={{ letterSpacing: "0.04em" }}
                >
                    物流・小売実践プロジェクト
                </Title>

                <Stack gap={42}>
                    {PROJECTS.map((p, idx) => (
                        <ProjectBlock key={idx} {...p} />
                    ))}
                </Stack>
            </Container>
        </Box>
    );
};

export default LogisticsRetailProjects;
