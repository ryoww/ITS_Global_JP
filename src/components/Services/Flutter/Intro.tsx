// src/components/services/FlutterIntro.tsx
import React from "react";
import {
    Box,
    Container,
    Grid,
    Title,
    Text,
    List,
    ThemeIcon,
    Image,
} from "@mantine/core";
import { IconCircleCheck } from "@tabler/icons-react";

type Props = {
    /** 右側に表示する完成画像（public配下） */
    imageSrc?: string;
};

const FlutterIntro: React.FC<Props> = ({
    imageSrc = "/service/flutter/service_1_about.png",
}) => {
    return (
        <Box py={48}>
            <Container size="lg" w="90%">
                <Grid gutter={40} align="center">
                    {/* 左：テキスト */}
                    <Grid.Col span={{ base: 12, md: 6 }}>
                        <Title
                            order={2}
                            c="blue.8"
                            fw={900}
                            mb={12}
                            style={{ letterSpacing: "0.04em", lineHeight: 1.2 }}
                        >
                            フラッターとハイブリッドのモバイル開発
                        </Title>

                        <Text lh={1.9} mb={10}>
                            モバイルアプリの開発でフラッターとハイブリッドを使用することは、
                            1つのソースコードからiOSやAndroidなど複数のプラットフォームで動作する
                            アプリを作成するプロセスです。
                        </Text>

                        <List
                            spacing={10}
                            icon={
                                <ThemeIcon
                                    radius="xl"
                                    size={24}
                                    color="teal"
                                    variant="light"
                                >
                                    <IconCircleCheck size={16} />
                                </ThemeIcon>
                            }
                        >
                            <List.Item>時間と労力を節約します。</List.Item>
                            <List.Item>
                                プラットフォームごとに個別のアプリケーションを開発するよりも低コスト。
                            </List.Item>
                            <List.Item>
                                優れたパフォーマンスとユーザーエクスペリエンス。
                            </List.Item>
                            <List.Item>保守と更新が簡単。</List.Item>
                        </List>
                    </Grid.Col>

                    {/* 右：画像のみ */}
                    <Grid.Col span={{ base: 12, md: 6 }}>
                        <Image
                            src={import.meta.env.BASE_URL + imageSrc}
                            alt=""
                            radius={20}
                            w="100%"
                            h={{ base: 240, md: 320 }}
                            fit="cover" // 画像に余白が出るなら "contain" に変更
                        />
                    </Grid.Col>
                </Grid>
            </Container>
        </Box>
    );
};

export default FlutterIntro;
