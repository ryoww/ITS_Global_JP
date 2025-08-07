import {
    Container,
    Flex,
    Stack,
    Title,
    Text,
    Image,
    SimpleGrid,
    Box,
} from "@mantine/core";
import HomeCarousel from "../../components/Home/HomeCarouselPc";
import { ServiceCard } from "../../components/Home/HomeServiceCard";
import { CompanyCarousel } from "../../components/Home/CompanyCarousel";
import { MetricsSection } from "../../components/Home/MetricsSection";

const services = [
    {
        bg: "#005ba6",
        imgSrc: "/home/icon-smartphone.svg",
        alt: "モバイル開発アイコン",
        title: "フラッターとハイブリッドの\nモバイル開発",
        description:
            "ITS グローバル は、先進的なフラッター技術を用いてモバイルアプリの能力を拡張します。多くのプラットフォームに対応する高性能アプリでビジネス革新をサポートします。",
        to: "/services/flutter-and-hybrid",
    },
    {
        bg: "#0088b9",
        imgSrc: "/home/icon-cart.svg",
        alt: "小売DXアイコン",
        title: "物流および小売向けDXソリューション",
        description:
            "ITS グローバルの物流および小売向けDXソリューションは、サプライチェーンの効率を向上させ、顧客体験を改善します。",
        to: "/services/dx-solution",
    },
    {
        bg: "#009e9b",
        imgSrc: "/home/icon-sap.svg",
        alt: "ERPアイコン",
        title: "SAPコンサルティングとERPの展開",
        description:
            "ITSグローバルERP専門家によるSAPコンサルティングと展開で、貴社の円滑な運営をサポートします。カスタマイズされたSAPソリューションを使用し、ビジネスリソース管理の精度と意思決定を改善します。",
        to: "/services/sap-and-erp",
    },
];

const HomePc: React.FC = () => {
    return (
        <>
            <Stack
                w={"100%"}
                h={"100%"}
                justify="center"
                align="center"
                gap={0}
            >
                <HomeCarousel />

                <Flex w={"80%"} mt={100}>
                    <Container size="md" w={"45%"}>
                        <Stack gap="sm">
                            <Title
                                order={1}
                                c="blue.8"
                                fw={800}
                                style={{ letterSpacing: "0.05em" }}
                            >
                                私たちは
                            </Title>

                            <Text
                                component="p"
                                fw={700}
                                style={{ fontSize: 28, lineHeight: 1.3 }}
                            >
                                <Text component="span" inherit>
                                    {/* I */}
                                    <Text component="span" inherit c="blue.7">
                                        I
                                    </Text>
                                    nnovative&nbsp;
                                    {/* T */}
                                    <Text component="span" inherit c="blue.7">
                                        T
                                    </Text>
                                    echnology&nbsp;
                                    {/* S */}
                                    <Text component="span" inherit c="blue.7">
                                        S
                                    </Text>
                                    olutions
                                </Text>{" "}
                                です。
                            </Text>

                            {/* 本文 */}
                            <Text size="md" lh={1.8}>
                                ビジネス環境がますます複雑化し急速に変化する中、企業の成功にとって、第四次産業革命の可能性を適応し活用することは非常に重要です。
                                ITS GLOBAL
                                は情報技術分野の先駆者として、未来を見据えたデジタルトランスフォーメーションソリューションを提供し、貴社の発展を促進するために共に歩むことをお約束します。
                                <br />
                                当社は2017年に創業され、日本の企業向けに情報技術ソリューションを開発してきた経験豊富で情熱的な創業チームによって作られました。
                                ITS GLOBAL
                                は常に顧客のニーズと利益を最優先に考え、効果・品質・コストにおいて最適なソリューションを提供することを理解しています。
                            </Text>
                        </Stack>
                    </Container>

                    <Image
                        src={import.meta.env.BASE_URL + "/home/its1.png"}
                        mt={50}
                        w={"50%"}
                        h={"100%"}
                        my={"auto"}
                    />
                </Flex>

                <Title
                    mt={60}
                    order={1}
                    c="blue.8"
                    fw={800}
                    style={{ letterSpacing: "0.05em" }}
                >
                    サービス
                </Title>

                <Box component="section" mb={60} w={"90%"}>
                    <Stack gap="xs" mb={40} align="center">
                        <Text ta="center" size="md" w={"90%"}>
                            ITSはオフショア形式でソフトウェアサービスを開発する専門企業です。
                            高い技術力を持つ私たちは、多様な顧客のニーズに応える多くの製品を提供してきました。
                        </Text>
                    </Stack>

                    {/* カードを横並び（モバイルは1列） */}
                    <SimpleGrid
                        cols={{ base: 1, md: 3 }}
                        spacing="xl"
                        verticalSpacing="xl"
                        w={"100%"}
                    >
                        {services.map((s) => (
                            <ServiceCard key={s.title} {...s} />
                        ))}
                    </SimpleGrid>
                </Box>

                <Title
                    order={1}
                    c="blue.8"
                    fw={800}
                    style={{ letterSpacing: "0.05em" }}
                >
                    主な取引先
                </Title>

                <CompanyCarousel />

                <MetricsSection />
            </Stack>
        </>
    );
};

export default HomePc;
