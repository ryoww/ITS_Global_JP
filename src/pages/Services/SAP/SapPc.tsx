import { Box, Container, Stack, Title, Text, Button } from "@mantine/core";
import { Link } from "react-router-dom";
import React from "react";
import ProcessBenefitSAP from "../../../components/Services/SAP/ProcessBenefit";
import SapMainFeatures from "../../../components/Services/SAP/SapMainFeatures";
import DevProcess from "../../../components/Services/SAP/DevProcess";
import SapAbapCaseStudy from "../../../components/Services/SAP/CaseStudy";

type Props = {
    title?: string;
    ctaLabel?: string;
    bgSrc?: string;
    height?: number;
};

const SapPc: React.FC<Props> = ({
    title = "SAPコンサルティングとERPの展開",
    ctaLabel = "お問い合わせ",
    bgSrc = "/service/SPA/service_4_sap_banner.png",
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
                        pl={{ base: 8, md: 5 }}
                    >
                        <Title
                            order={3}
                            fw={700}
                            fz={{ base: 32, md: 40 }}
                            c={"gray.0"}
                            ta="left"
                            style={{ letterSpacing: "0.03em", lineHeight: 1.2 }}
                        >
                            {title}
                        </Title>

                        <Text fz={15} c="gray.0" w={550}>
                            SAP コンサルティングと ERP
                            導入のプロセスは、企業がSAP ERP システム
                            (エンタープライズ リソース プランニング)
                            を適切に適用できるよう支援する一連のアクティビティです。
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

            <ProcessBenefitSAP />

            <SapMainFeatures />

            <DevProcess />

            <SapAbapCaseStudy />
        </>
    );
};

export default SapPc;
