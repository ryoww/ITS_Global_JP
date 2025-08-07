// src/components/TestimonialCard.tsx
import { Group, Image, Paper, Box, Text, Center } from "@mantine/core";
import { IconQuote } from "@tabler/icons-react";

export type Testimonial = {
    logo: string;
    company: string;
    message: string;
};

export const TestimonialCard = ({ logo, company, message }: Testimonial) => (
    <Paper
        shadow="sm"
        px={32}
        py={40}
        radius={24}
        bg={"gray.2"}
        // style={{ backgroundColor: "#f3f5f7" }}
    >
        {/* ロゴ + 社名 */}
        <Group align="center" mb={24}>
            <Image
                src={import.meta.env.BASE_URL + logo}
                w={64}
                h={64}
                // radius="50%"
            />
            <Text fz={18} fw={700}>
                {company}
            </Text>
        </Group>

        {/* 吹き出し部分 */}
        <Box
            pos="relative"
            bg="white"
            p={28}
            style={{
                borderRadius: 16,
                lineHeight: 1.8,
            }}
        >
            <Center
                pos="absolute"
                top={-20}
                right={-20}
                w={40}
                h={40}
                bg="dark.9"
                style={{ borderRadius: "50%" }}
            >
                <IconQuote size={22} color="#fff" />
            </Center>

            <Text fz="sm">{message}</Text>
        </Box>
    </Paper>
);
