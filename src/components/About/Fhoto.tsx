import React from "react";
import { Box, Container, Grid, Image, Stack, Text, Title } from "@mantine/core";
import useResponsive from "../../hooks/useResponsive";
// ★ 追加：プロジェクトのパスに合わせて調整してください

type Props = {
    /** 左の大きい画像 */
    main?: string;
    /** 右上の画像 */
    sideTop?: string;
    /** 右下の画像 */
    sideBottom?: string;
    isPhone?: boolean; // スマホ表示かどうか
};

const ValuesCultureSection: React.FC<Props> = ({
    main = "about/team1.png",
    sideTop = "about/team2.png",
    sideBottom = "about/team3.png",
    isPhone = useResponsive().isPhone,
}) => {
    return (
        <Box py={56} w="100%" mt={70}>
            <Container size="lg" w="90%">
                <Title
                    order={2}
                    ta="center"
                    c="blue.8"
                    fw={900}
                    mb="xs"
                    style={{ letterSpacing: "0.04em" }}
                >
                    価値観と文化
                </Title>

                <Text ta="center" lh={1.9} mb={24}>
                    ITS グローバル
                    は人間中心の環境を構築し、すべてのメンバーに持続可能で幸せなキャリア開発の機会を創出します。
                    当社は、ただ働く場所ではなく、メンバー一人ひとりが「温かさ」を感じながら、充実した毎日を過ごせる第二の故郷でありたいと考えています。
                </Text>

                {isPhone ? (
                    /* ＝＝＝ Phone: 1列（Stackで縦積み）＝＝＝ */
                    <Stack gap={16}>
                        <Image
                            src={import.meta.env.BASE_URL + main}
                            radius={18}
                            w="100%"
                            h="100%"
                            fit="cover"
                            alt=""
                        />
                        <Image
                            src={import.meta.env.BASE_URL + sideTop}
                            radius={18}
                            w="100%"
                            h="100%"
                            fit="cover"
                            alt=""
                        />
                        <Image
                            src={import.meta.env.BASE_URL + sideBottom}
                            radius={18}
                            w="100%"
                            h="100%"
                            fit="cover"
                            alt=""
                        />
                    </Stack>
                ) : (
                    /* ＝＝＝ md+ : 左8 / 右4+4 ＝＝＝ */
                    <Grid gutter={{ base: 16, md: 24 }} align="stretch">
                        {/* 左：大きい画像（mdで8） */}
                        <Grid.Col span={{ base: 12, md: 8 }}>
                            <Image
                                src={import.meta.env.BASE_URL + main}
                                radius={18}
                                w="100%"
                                h={{ base: 260, md: 420 }}
                                fit="cover"
                                alt=""
                            />
                        </Grid.Col>

                        {/* 右：上下2枚 */}
                        <Grid.Col span={{ base: 12, md: 4 }}>
                            <Stack gap={24} h="100%" justify="space-between">
                                <Image
                                    src={import.meta.env.BASE_URL + sideTop}
                                    radius={18}
                                    w="100%"
                                    h={{ base: 200, md: 198 }}
                                    fit="cover"
                                    alt=""
                                />
                                <Image
                                    src={import.meta.env.BASE_URL + sideBottom}
                                    radius={18}
                                    w="100%"
                                    h={{ base: 200, md: 198 }}
                                    fit="cover"
                                    alt=""
                                />
                            </Stack>
                        </Grid.Col>
                    </Grid>
                )}

                {/* 下の1枚はスマホで全幅、md+で固定幅 */}
                <Image
                    src={import.meta.env.BASE_URL + "about/team4.png"}
                    mt={24}
                    w={isPhone ? "100%" : 680}
                    mx="auto"
                    radius={18}
                    alt=""
                />
            </Container>
        </Box>
    );
};

export default ValuesCultureSection;
