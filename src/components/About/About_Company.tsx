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
import useResponsive from "../../hooks/useResponsive";

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

const AboutPC: React.FC = () => {
    return (
        <>
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

                    <Paper radius="md" shadow="xs" p={24} w={"80%"} mx="auto">
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
                                            116 Mai Thuc Lan, Bac My Phu, Ngu
                                            Hanh Son, Da Nang
                                        </Text>

                                        <Text mt="sm">[東京Office]</Text>
                                        <Text>
                                            〒140-0014 東京都品川区大井1-6-3
                                            コアビル3F
                                        </Text>

                                        <Text mt="sm">[浜松Office]</Text>
                                        <Text>
                                            〒430-0934
                                            静岡県浜松市中央区千歳町９１−１
                                            遠鉄モール街ビル
                                        </Text>
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
                                <Row label="日本法人代表取締役">高橋 秀樹</Row>
                                <Separator />
                                <Row label="事業目的">
                                    <Stack gap={6}>
                                        <Text>
                                            1.
                                            ソフトウェアの企画、開発、制作、製造及び販売
                                        </Text>
                                        <Text>2. ITコンサルティング</Text>
                                        <Text>
                                            3. オフショア開発に関する事業
                                        </Text>
                                        <Text>
                                            4.
                                            海外進出に関する情報提供及びコンサルティング
                                        </Text>
                                        <Text>
                                            5.
                                            エンジニア等の人材育成，派遣及び紹介
                                        </Text>
                                        <Text>
                                            6.
                                            各種イベント，講演会等の企画，運営及び開催
                                        </Text>
                                        <Text>
                                            7. Web等を用いた広告，宣伝に関する
                                            企画，制作及び広告代理
                                        </Text>
                                        <Text>8. 職業紹介事業</Text>
                                        <Text>
                                            9. 水産物，食料品，農産物の輸出入
                                            ，卸及び小売
                                        </Text>
                                        <Text>
                                            10.
                                            水産物の養殖キットの販売及びレンタル
                                        </Text>
                                        <Text>11. 古物営業法による古物商</Text>
                                        <Text>12. 飲食店及び酒場の経営</Text>
                                        <Text>
                                            13. 前各号に付帯又は関連する
                                            一切の事案
                                        </Text>
                                    </Stack>
                                </Row>

                                <Separator />
                            </tbody>
                        </Table>
                    </Paper>
                </Container>
            </Box>
        </>
    );
};

const OneColSection: React.FC<{ label: string; children: React.ReactNode }> = ({
    label,
    children,
}) => (
    <>
        <tr>
            <td
                style={{
                    background: "var(--mantine-color-gray-1)",
                    color: "var(--mantine-color-gray-7)",
                    fontWeight: 700,
                    padding: "12px",
                    border: "1px solid var(--mantine-color-gray-3)",
                }}
            >
                {label}
            </td>
        </tr>
        <tr>
            <td
                style={{
                    background: "transparent",
                    padding: "12px",
                    borderLeft: "1px solid var(--mantine-color-gray-3)",
                    borderRight: "1px solid var(--mantine-color-gray-3)",
                    borderBottom: "1px solid var(--mantine-color-gray-3)",
                    wordBreak: "break-word",
                }}
            >
                <Text component="div" size="sm">
                    {children}
                </Text>
            </td>
        </tr>
    </>
);

const AboutPhone: React.FC = () => {
    return (
        <Box bg="gray.1" py={32} mt={80} w="100%" h="100%">
            <Container size="sm">
                <Title
                    order={3}
                    ta="center"
                    mb={16}
                    fw={900}
                    c="blue.8"
                    style={{ letterSpacing: "0.05em" }}
                >
                    企業情報
                </Title>

                <Paper radius="md" shadow="xs" p={0}>
                    <Table
                        withColumnBorders={false}
                        withRowBorders={false}
                        highlightOnHover={false}
                        style={{
                            tableLayout: "fixed",
                            width: "100%",
                            borderCollapse: "collapse",
                            border: "1px solid var(--mantine-color-gray-3)", // 外枠
                        }}
                    >
                        <tbody>
                            <OneColSection label="会社名">
                                ITS GLOBAL株式会社
                            </OneColSection>
                            <OneColSection label="英語名">
                                ITS GLOBAL Corp.
                            </OneColSection>
                            <OneColSection label="創業">
                                2020年2月
                            </OneColSection>

                            <OneColSection label="住所">
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
                                    <Text>
                                        〒430-0934
                                        静岡県浜松市中央区千歳町９１−１
                                        遠鉄モール街ビル
                                    </Text>
                                </Stack>
                            </OneColSection>

                            <OneColSection label="就業者数">
                                154名（関連グループ会社含めて）
                            </OneColSection>

                            <OneColSection label="最高経営責任者（CEO）">
                                NGUYEN XUAN NGHIA（グエン・スアン・ギア）
                            </OneColSection>

                            <OneColSection label="日本法人代表取締役">
                                高橋 秀樹
                            </OneColSection>

                            <OneColSection label="事業目的">
                                <Stack gap={6}>
                                    <Text>
                                        1.
                                        ソフトウェアの企画、開発、制作、製造及び販売
                                    </Text>
                                    <Text>2. ITコンサルティング</Text>
                                    <Text>3. オフショア開発に関する事業</Text>
                                    <Text>
                                        4.
                                        海外進出に関する情報提供及びコンサルティング
                                    </Text>
                                    <Text>
                                        5. エンジニア等の人材育成，派遣及び紹介
                                    </Text>
                                    <Text>
                                        6.
                                        各種イベント，講演会等の企画，運営及び開催
                                    </Text>
                                    <Text>
                                        7.
                                        Web等を用いた広告，宣伝に関する企画，制作及び広告代理
                                    </Text>
                                    <Text>8. 職業紹介事業</Text>
                                    <Text>
                                        9.
                                        水産物，食料品，農産物の輸出入，卸及び小売
                                    </Text>
                                    <Text>
                                        10. 水産物の養殖キットの販売及びレンタル
                                    </Text>
                                    <Text>11. 古物営業法による古物商</Text>
                                    <Text>12. 飲食店及び酒場の経営</Text>
                                    <Text>
                                        13. 前各号に付帯又は関連する一切の事案
                                    </Text>
                                </Stack>
                            </OneColSection>
                        </tbody>
                    </Table>
                </Paper>
            </Container>
        </Box>
    );
};

const AboutCompany: React.FC = () => {
    const { isPhone } = useResponsive();

    return <>{isPhone ? <AboutPhone /> : <AboutPC />}</>;
};

export default AboutCompany;
