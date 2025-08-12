import React from "react";
import {
    Box,
    Container,
    Title,
    Text,
    SimpleGrid,
    Paper,
    Stack,
    Center,
    Image,
} from "@mantine/core";

const CARD_BG = "#1C6FAE";

/** ここを手元のファイル名に合わせてください */
const VALUES = [
    {
        icon: "/about/icons/icon-file.svg",
        title: "透明",
        body: "透明性とは、ビジョンや戦略から運営活動、会社が達成した結果に至るまでの情報を、多面的かつ完全かつ正確かつタイムリーに共有することです。そこから、メンバー、パートナー、顧客の間に信頼を築きます。",
    },
    {
        icon: "/about/icons/icon-protect.svg",
        title: "信頼",
        body: "信頼とは同僚に対する信頼であり、自分の仕事をうまく遂行し、組織の共通の使命に貢献するための相互支援です。会員と顧客の信頼を築き、維持します。",
    },
    {
        icon: "/about/icons/icon-hear.svg",
        title: "コミットメント",
        body: "企業に対して：顧客への信頼と満足の効果的な業務のためのコミットメント。製品・サービスの品質に関するコミットメント。メンバーに対して：従業員の福利厚生、労働環境に関するコミットメント。",
    },
    {
        icon: "/about/icons/icon-light.svg",
        title: "クリエイティブ",
        body: "クリエイティビティは、個人・顧客・組織にとって画期的な価値を創造するために、常に学習に努め、自らの成長を望んでいます。",
    },
    {
        icon: "/about/icons/icon-circle.svg",
        title: "団結",
        body: "団結とは、共通の目標に向かって協力し、共に前進し、困難を共有し、勝利の結果を楽しむことです。",
    },
    {
        icon: "/about/icons/icon-ball-hear.svg",
        title: "優しさ",
        body: "一人ひとりの自由と違いを尊重します。興味を持って団結し、誠実に話し誠実に行動します。常に感謝の心を持ちます。",
    },
];

const VisionMissionAndValues: React.FC = () => {
    return (
        <Box w={"100%"}>
            {/* ビジョン＆ミッション */}
            <Box bg="blue.0" py={48}>
                <Container size="lg" w="90%">
                    <Title
                        order={2}
                        ta="center"
                        c="blue.8"
                        fw={900}
                        mb="sm"
                        style={{ letterSpacing: "0.04em" }}
                    >
                        ビジョン＆ミッション
                    </Title>

                    <Text ta="center" lh={1.9}>
                        ITSグローバルは、高度な技術分野でリーダー企業になることを目指し、プロフェッショナルかつ働きやすい環境を提供します。
                        社会の発展に貢献し、文明的で豊かなベトナムを築くことを目指しています。
                    </Text>

                    <Box
                        mx="auto"
                        my={12}
                        style={{
                            width: 120,
                            height: 2,
                            background: "#1C6FAE",
                            opacity: 0.35,
                        }}
                    />

                    <Text ta="center" lh={1.9}>
                        最先端の技術を先取りし、お客様に信頼と満足を提供し、信頼できる長期的なパートナーとなることを目指します。
                    </Text>
                </Container>
            </Box>

            {/* コアバリュー（SVG アイコン使用） */}
            <Container size="lg" w="90%" py={36} mx={"auto"}>
                <Title
                    order={2}
                    ta="center"
                    c="blue.8"
                    fw={900}
                    mb={28}
                    style={{ letterSpacing: "0.04em" }}
                >
                    コアバリュー
                </Title>

                <SimpleGrid cols={{ base: 1, md: 3 }} spacing={28}>
                    {VALUES.map((v) => (
                        <Paper
                            key={v.title}
                            radius="lg"
                            p={28}
                            style={{ background: CARD_BG }}
                            w={305}
                            h={315}
                            mx={"auto"}
                        >
                            <Stack gap="xs" c="white">
                                <Center mb={6}>
                                    <Image
                                        src={import.meta.env.BASE_URL + v.icon}
                                        w={48}
                                        h={48}
                                        fit="contain"
                                        alt={v.title}
                                    />
                                </Center>
                                <Title order={4} ta="center" fw={900}>
                                    {v.title}
                                </Title>
                                <Text lh={1.9} fz="sm">
                                    {v.body}
                                </Text>
                            </Stack>
                        </Paper>
                    ))}
                </SimpleGrid>
            </Container>
        </Box>
    );
};

export default VisionMissionAndValues;
