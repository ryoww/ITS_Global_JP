// src/components/MetricsSection.tsx
import { Box, Center, SimpleGrid, Stack, Text, Title } from "@mantine/core";

/* ---------- 表示データ ---------- */
const METRICS = [
    { value: 200, suffix: "+", label: "Flutter プロジェクト" },
    { value: 100, suffix: "+", label: "ロジスティックス プロジェクト" },
    { value: 150, suffix: "+", label: "顧客" },
    { value: 98, suffix: "%", label: "維持率" },
    { value: 5, suffix: "+", label: "運営年数" },
];

/* ---------- 文字に適用するグラデーション ---------- */
const gradient = "linear-gradient(to right, #195FAA, #00ADAF)";

/* ---------- セクションコンポーネント ---------- */
export const MetricsSection = () => (
    <Box bg="blue.0" py={60} w={"100%"} mx="auto" mb={120}>
        <Title
            order={2}
            ta="center"
            mb={40}
            fw={900}
            c="blue.8"
            style={{ letterSpacing: "0.05em" }}
        >
            傑出な業績
        </Title>

        <Center>
            <SimpleGrid cols={METRICS.length} spacing={0} w="90%">
                {METRICS.map((m, i) => (
                    <Stack
                        key={m.label}
                        gap={4}
                        py={32}
                        align="center"
                        style={{
                            borderRight:
                                i !== METRICS.length - 1
                                    ? "1px dashed #94a3b8"
                                    : undefined,
                        }}
                    >
                        <Text
                            fz={48}
                            fw={700}
                            style={{
                                backgroundImage: gradient,
                                backgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                            }}
                        >
                            {`${m.value}${m.suffix}`}
                        </Text>

                        {/* ラベル */}
                        <Text fz="md" fw={500}>
                            {m.label}
                        </Text>
                    </Stack>
                ))}
            </SimpleGrid>
        </Center>
    </Box>
);
