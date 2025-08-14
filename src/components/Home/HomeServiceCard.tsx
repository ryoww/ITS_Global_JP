// src/components/ServiceCard.tsx
import { Box, Button, Center, Image, Stack, Text } from "@mantine/core";
import { Link } from "react-router-dom";

export type ServiceCardProps = {
    bg: string;
    imgSrc: string;
    alt: string;
    title: string;
    description: string;
    /** 追加: クリック時に遷移するパス */
    to: string;
};

export const ServiceCard = ({
    bg,
    imgSrc,
    alt,
    title,
    description,
    to,
}: ServiceCardProps) => {
    const fullSrc = imgSrc;

    return (
        <Box
            w={{ base: 350, md: 400 }}
            h={500}
            bg={bg}
            style={{
                borderRadius: 16,
                padding: "48px 40px",
                minHeight: 520,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
            }}
            mx={"auto"}
        >
            <Stack gap="md">
                <Center>
                    <Image
                        src={fullSrc}
                        alt={alt}
                        w={120}
                        h={120}
                        fit="contain"
                    />
                </Center>

                <Text
                    ta="center"
                    fw={700}
                    lh={1.4}
                    c="#fff"
                    fz={24}
                    style={{ whiteSpace: "pre-wrap" }}
                >
                    {title}
                </Text>

                <Text c="#fff" lh={1.7}>
                    {description}
                </Text>
            </Stack>

            {/* --- ここを Link 化 --- */}
            <Center mt={{ base: 20, md: 30 }}>
                <Button
                    size="md"
                    radius="xl"
                    variant="white"
                    component={Link} // ← Polymorphic
                    to={to} // ← ルートを指定
                    style={{ color: bg, fontWeight: 600 }}
                >
                    詳細を見る
                </Button>
            </Center>
        </Box>
    );
};
