// src/components/services/InteropTech.tsx
import React from "react";
import {
    Box,
    Container,
    Divider,
    Image,
    Paper,
    Text,
    Title,
    Group,
} from "@mantine/core";

type Row = {
    /** 左側のカテゴリ名（テキスト） */
    label: string;
    /** 右側に表示する行画像（アイコンをまとめた1枚） */
    src: string;
    /** 画像の高さ（任意） */
    height?: number;
};

type Props = {
    heading?: string;
    rows?: Row[];
};

const rowsDefault: Row[] = [
    {
        label: "オペレーティング・システム",
        src: "/service/flutter/service_1_compatibility_technology_1.png",
    },
    {
        label: "プログラミング言語",
        src: "/service/flutter/service_1_compatibility_technology_2.png",
    },
    {
        label: "フレームワーク",
        src: "/service/flutter/service_1_compatibility_technology_3.png",
    },
    {
        label: "データベース",
        src: "/service/flutter/service_1_compatibility_technology_4.png",
    },
    {
        label: "プラットホーム",
        src: "/service/flutter/service_1_compatibility_technology_5.png",
    },
];

const LabelCell: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <Box w={{ base: "100%", md: 260 }} p={{ base: 14, md: 18 }}>
        <Text fw={700}>{children}</Text>
    </Box>
);

const InteropTech: React.FC<Props> = ({
    heading = "互換性技術",
    rows = rowsDefault,
}) => {
    return (
        <Box py={48} mt={80}>
            <Container size="lg" w="92%">
                <Paper
                    radius="lg"
                    withBorder
                    style={{
                        borderColor: "#4da3e2",
                        overflow: "hidden",
                        background: "white",
                    }}
                >
                    <Box py={20}>
                        <Title
                            order={1}
                            ta="center"
                            c="blue.8"
                            fw={900}
                            style={{ letterSpacing: "0.04em" }}
                        >
                            {heading}
                        </Title>
                    </Box>

                    <Divider color="#cfe5f8" />

                    {rows.map((row, i) => (
                        <Box key={row.label}>
                            {i !== 0 && <Divider color="#cfe5f8" />}
                            <Box
                                px={{ base: 12, md: 20 }}
                                py={{ base: 14, md: 18 }}
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 12,
                                    flexWrap: "wrap", // モバイルで折り返し
                                }}
                            >
                                <LabelCell>{row.label}</LabelCell>

                                <Box style={{ flex: 1 }}>
                                    <Group justify="center">
                                        <Image
                                            src={
                                                import.meta.env.BASE_URL +
                                                row.src
                                            }
                                            alt=""
                                            fit="contain"
                                            h={85}
                                            w="100%"
                                            style={{ display: "block" }}
                                        />
                                    </Group>
                                </Box>
                            </Box>
                        </Box>
                    ))}
                </Paper>
            </Container>
        </Box>
    );
};

export default InteropTech;
