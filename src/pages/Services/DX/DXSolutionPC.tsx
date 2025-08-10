import { Box, Button, Container, Stack, Title, Text } from "@mantine/core";
import { Link } from "react-router-dom";
import React from "react";
import LogisticsRetailDX from "../../../components/Services/DX/Logistics";
import RetailDxFeatures from "../../../components/Services/DX/DxFeatures";
import MobileProcess from "../../../components/Services/DX/Process";
import LogisticsRetailProjects from "../../../components/Services/DX/Projects";

type Props = {
    title?: string;
    ctaLabel?: string;
    bgSrc?: string;
    height?: number;
};

const DxSolutionPC: React.FC<Props> = ({
    title = "フラッターとハイブリッドのモバイル開発",
    ctaLabel = "お問い合わせ",
    bgSrc = "/service/DX/service_3_banner.png",
    height = 480,
}) => {
    const bg = `url(${import.meta.env.BASE_URL + bgSrc})`;

    return (
        <>
            <Box
                component="section"
                pos="relative"
                // c="white"
                style={{
                    backgroundImage: bg,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }}
            >
                {/* ← 中身を“左寄せのまま縦中央”にする */}
                <Container
                    size="lg"
                    w="90%"
                    h={height}
                    style={{ display: "grid", alignItems: "center" }} // 縦中央
                >
                    <Stack
                        maw={650}
                        align="flex-start"
                        gap="lg"
                        pl={{ base: 8, md: 12 }}
                    >
                        <Title
                            order={3}
                            fw={700}
                            fz={{ base: 32, md: 48 }}
                            c={"blue.9"}
                            ta="left"
                            style={{ letterSpacing: "0.03em", lineHeight: 1.2 }}
                        >
                            {title}
                        </Title>

                        <Text fz={15} c="gray.8">
                            物流および小売向けの DX ソリューションは、デジタル
                            テクノロジーを使用して、物流および小売部門のビジネス
                            プロセスを改善、最適化、変革するプロセスです。 DX
                            は、企業の業務効率の向上、顧客エクスペリエンスの向上、市場での競争力の強化に役立ちます。
                        </Text>

                        <Button
                            component={Link}
                            to="/contact"
                            size="md"
                            radius="xl"
                            w="fit-content" // 文字分の幅
                            px="md"
                            styles={{
                                root: {
                                    background: "#ffcf40",
                                    color: "#1f2937",
                                    fontWeight: 700,
                                },
                            }}
                        >
                            {ctaLabel}
                        </Button>
                    </Stack>
                </Container>
            </Box>

            <LogisticsRetailDX />

            <RetailDxFeatures />

            <MobileProcess />

            <LogisticsRetailProjects />
        </>
    );
};

export default DxSolutionPC;
