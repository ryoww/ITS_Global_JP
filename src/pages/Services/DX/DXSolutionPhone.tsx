import { Box, Button, Container, Stack, Title } from "@mantine/core";
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
    isPhone?: boolean;
};

const DxSolutionPhone: React.FC<Props> = ({
    title = "ロジスティクスおよび小売り向けのDXソリューション",
    ctaLabel = "お問い合わせ",
    bgSrc = "service/DX/banner2.png",
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
                            fz={{ base: 32, md: 40 }}
                            ta="left"
                            c={"blue.9"}
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

            <LogisticsRetailDX />

            <RetailDxFeatures />

            <MobileProcess />

            <LogisticsRetailProjects />
        </>
    );
};

export default DxSolutionPhone;
