// src/components/MetricsSection.tsx
import { Box, Center, Grid, Stack, Text, Title } from "@mantine/core";

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
    <Box bg="blue.0" py={60} w="100%" mx="auto" mb={120}>
        <Title
            order={1}
            ta="center"
            mb={32}
            fw={{ base: 700, md: 900 }}
            c="blue.8"
            style={{ letterSpacing: "0.05em" }}
        >
            傑出な業績
        </Title>

        <Center>
            {/* columns=10 にして、MD以上は span=2 で 5列。モバイルは span=5 で 2列。 */}
            <Grid w="90%" columns={10} gutter="xl">
                {METRICS.map((m, i) => {
                    const isLast = i === METRICS.length - 1;
                    return (
                        <Grid.Col
                            key={m.label}
                            // base(=モバイル): 2列 => span=5。最後の要素だけ中央に来るよう full(=10)。
                            // md以上: 5列 => span=2 を全要素に適用。
                            span={{ base: isLast ? 10 : 5, md: 2 }}
                        >
                            <Stack gap={6} align="center">
                                <Text
                                    fz={{ base: 50, md: 56 }}
                                    fw={800}
                                    lh={1}
                                    style={{
                                        backgroundImage: gradient,
                                        backgroundClip: "text",
                                        WebkitTextFillColor: "transparent",
                                    }}
                                >
                                    {`${m.value}${m.suffix}`}
                                </Text>
                                <Text
                                    fz={{ base: "md", md: "md" }}
                                    fw={500}
                                    ta="center"
                                    // 長い文言が改行・中央寄せされるように
                                    style={{ wordBreak: "keep-all" }}
                                >
                                    {m.label}
                                </Text>
                            </Stack>
                        </Grid.Col>
                    );
                })}
            </Grid>
        </Center>
    </Box>
);
