import React from "react";
import {
    Box,
    Container,
    Paper,
    Table,
    Text,
    Title,
    Stack,
} from "@mantine/core";

const Row: React.FC<{ label: string; children: React.ReactNode }> = ({
    label,
    children,
}) => (
    <tr>
        <td style={{ width: 160, verticalAlign: "top" }}>
            <Text fw={700} c="gray.7">
                {label}
            </Text>
        </td>
        <td style={{ verticalAlign: "top" }}>
            <Text component="div">{children}</Text>
        </td>
    </tr>
);

const Separator: React.FC = () => (
    <tr>
        <td colSpan={2}>
            <Box
                my={8}
                style={{
                    height: 1,
                    background: "rgba(0,0,0,0.25)",
                }}
            />
        </td>
    </tr>
);

const AboutCompany: React.FC = () => {
    return (
        <Box bg="gray.1" py={50} mt={80} w={"100%"} h={"100%"}>
            <Container size="lg">
                <Title
                    order={2}
                    ta="center"
                    mb={24}
                    fw={900}
                    c="blue.8"
                    style={{ letterSpacing: "0.05em" }}
                >
                    企業情報
                </Title>

                <Paper radius="md" shadow="xs" p={24}>
                    <Table
                        withColumnBorders={false}
                        withRowBorders={false}
                        verticalSpacing="md"
                        highlightOnHover={false}
                        style={{ tableLayout: "fixed", width: "100%" }}
                    >
                        <tbody>
                            <Row label="会社名">ITS GLOBAL株式会社</Row>

                            <Separator />
                            <Row label="英語名">ITS GLOBAL Corp.</Row>

                            <Separator />
                            <Row label="創業">2020年2月</Row>

                            <Separator />
                            <Row label="住所">
                                <Stack gap={6}>
                                    <Text>[本社]</Text>
                                    <Text>
                                        2F Tower 1-2 Dolphin Plaza, 6 Nguyen
                                        Hoang, My Dinh 2, Ha Noi
                                    </Text>

                                    <Text mt="sm">[ダナンOffice]</Text>
                                    <Text>
                                        116 Mai Thuc Lan, Bac My Phu, Ngu Hanh
                                        Son, Da Nang
                                    </Text>

                                    <Text mt="sm">[東京Office]</Text>
                                    <Text>
                                        〒140-0014 東京都品川区大井1-6-3
                                        コアビル3F
                                    </Text>

                                    <Text mt="sm">[浜松Office]</Text>
                                    <Text>静岡県浜松市中央区千歳町91−1</Text>
                                </Stack>
                            </Row>

                            <Separator />
                            <Row label="就業者数">
                                154名（関連グループ会社含めて）
                            </Row>

                            <Separator />
                            <Row label="最高経営責任者（CEO）">
                                NGUYEN XUAN NGHIA（グエン・スアン・ギア）
                            </Row>

                            <Separator />
                            <Row label="サービス">
                                <Stack gap={6}>
                                    <Text>
                                        ウェブシステム、ウェブサイト、モバイルアプリの開発
                                    </Text>
                                    <Text>オフショア開発</Text>
                                    <Text>ベトナムへの投資関連支援</Text>
                                    <Text>有料職業紹介</Text>
                                </Stack>
                            </Row>
                            <Separator />
                        </tbody>
                    </Table>
                </Paper>
            </Container>
        </Box>
    );
};

export default AboutCompany;
