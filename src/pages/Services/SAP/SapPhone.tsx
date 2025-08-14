import { Box, Button, Container, Stack, Title } from "@mantine/core";
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
    isPhone?: boolean;
};

const SapPhone: React.FC<Props> = ({
    title = "SAPコンサルティングとERPの展開",
    ctaLabel = "お問い合わせ",
    bgSrc = "service/SPA/banner3.png",
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
                    style={{ alignItems: "center" }} // 縦中央
                    // bg={"blue"}
                >
                    <Stack
                        maw={650}
                        align="flex-start"
                        gap="lg"
                        pl={{ base: 4, md: 12 }}
                        pt="xl"
                        // bg={"red"}
                    >
                        <Title
                            order={3}
                            fw={700}
                            fz={{ base: 32, md: 48 }}
                            ta="left"
                            c="gray.0"
                            style={{ letterSpacing: "0.03em", lineHeight: 1.2 }}
                        >
                            {title}
                        </Title>

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

export default SapPhone;
