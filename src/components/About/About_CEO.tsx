import React from "react";
import { Box, Container, Grid, Image, Stack, Text, Title } from "@mantine/core";

const CeoMessage: React.FC = () => {
    return (
        <Box py={60}>
            <Container size="lg" w="90%">
                <Grid gutter={40} align="start">
                    {/* 左：写真 */}
                    <Grid.Col span={{ base: 12, md: 6 }}>
                        <Image
                            src={import.meta.env.BASE_URL + "about/img_ceo.jpg"}
                            radius={8}
                            w="100%"
                            h={"100%"}
                            fit="cover"
                        />
                    </Grid.Col>

                    {/* 右：テキスト */}
                    <Grid.Col span={{ base: 12, md: 6 }}>
                        <Stack gap="sm">
                            <Title
                                order={2}
                                c="blue.7"
                                fw={700}
                                style={{ letterSpacing: "0.04em" }}
                                mb="xs"
                            >
                                CEO からのご挨拶
                            </Title>

                            <Text lh={1.9}>
                                長年にわたり、ITS
                                グローバルの創業者たちは日本の大手企業向けに情報技術ソリューションを開発してきました。弊社はさらに優れた情報技術ソリューションを提供し、お客様のために企業のすべての強みを活かし、効率性、品質、コスト面で最良のソリューションを提供します。お客様は常に私たちの第一優先事項です。
                            </Text>
                            <Text lh={1.9}>
                                私たちの夢を実現する過程で、ITS
                                グローバルは多くの課題に直面しましたが、お客様のサポートと従業員の一体となった努力により、これらの困難を機会に変え、ベトナムの情報技術分野での地位を確立してきました。
                            </Text>
                            <Text lh={1.9}>
                                ITS
                                グローバルでは、チームワークを重視し、お客様のすべての要求に共に対応します。私たちは自信を持って進みます。私たちの努力により、ITS
                                グローバルは信頼できるパートナーであり、お客様の第一選択であるという価値を得ています。
                            </Text>

                            <Box mt="md" ta="right">
                                <Text fw={700} fz="sm" c="gray.7">
                                    最高経営責任者（CEO）
                                </Text>
                                <Text
                                    fw={700}
                                    fz={28}
                                    c="blue.7"
                                    style={{ letterSpacing: "0.05em" }}
                                >
                                    グエン・スアン・ギア
                                </Text>
                            </Box>
                        </Stack>
                    </Grid.Col>
                </Grid>
            </Container>
        </Box>
    );
};

export default CeoMessage;
