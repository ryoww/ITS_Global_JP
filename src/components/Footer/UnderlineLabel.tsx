import React from "react";
import { Box, Text } from "@mantine/core";

type UnderlineLabelProps = {
    children: React.ReactNode;
    barColor?: string;
    barHeight?: number; // バーの太さ
    offset?: number; // 文字とバーの距離
    left?: number; // 左からの寄せ量
    textProps?: React.ComponentProps<typeof Text>;
};

export const UnderlineLabel: React.FC<UnderlineLabelProps> = ({
    children,
    barColor = "#FFCF40",
    barHeight = 4,
    offset = 8,
    left = 1,
    textProps,
}) => {
    return (
        <Box pos="relative" display="inline-block" pb={offset}>
            <Text {...textProps}>{children}</Text>
            <Box
                pos="absolute"
                left={left}
                bottom={2}
                w="100%"
                h={barHeight}
                style={{ borderRadius: 9999, background: barColor }}
            />
        </Box>
    );
};
