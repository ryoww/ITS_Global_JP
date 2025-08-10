// src/components/MetricsSection.tsx
import { Box, Divider, SimpleGrid, Stack, Text, Title } from "@mantine/core";

/* ---------- 表示データ ---------- */
const METRICS = [
    { value: 327, suffix: "+", label: "プロジェクト" },
    { value: 150, suffix: "+", label: "顧客" },
    { value: 100000, suffix: "+", label: "営業時間" },
];

/* ---------- 文字に適用するグラデーション ---------- */
const gradient = "linear-gradient(to right, #195FAA, #00ADAF)";

/* ---------- セクションコンポーネント ---------- */
export const MetricsSection = () => (
    <Box w={"90%"}>
        <Title
            order={1}
            ta="left"
            mb={40}
            fw={900}
            c="blue.8"
            style={{ letterSpacing: "0.05em" }}
        >
            会社の歴史
        </Title>

        <Title order={4}>ITS グローバルの旅と発展</Title>

        <Text size="sm">
            2017年12月、日本・東京にて：技術企業 ITS TECH
            が設立され、グエン・スアン・ギア氏が社長に就任しました。
        </Text>

        <Text size="sm">
            2020年2月、ベトナムにて：経験豊富で情熱に満ちた創設メンバーにより、大手日本企業向けの情報技術ソリューションの開発経験を積んでいた
            ITS グローバルが設立されました。ITS
            グローバルは常に顧客の希望と利益を第一に考え、効率性、品質、コスト面で最適なソリューションを提供することを目指しています。
        </Text>

        <Text size="sm">設立と成長の過程でのいくつかの業績：</Text>

        <Divider my="sm" w={"100%"} />
        {/* <Center bg={"blue.0"}> */}
        <SimpleGrid cols={METRICS.length} spacing={0} w="100%">
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
                        fz={30}
                        fw={600}
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
        <Divider my="sm" w={"100%"} />
        {/* </Center> */}
    </Box>
);
