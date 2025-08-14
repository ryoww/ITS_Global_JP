// src/components/OfficeCard.tsx
import React from "react";
import {
    Card,
    Group,
    Stack,
    Text,
    Image,
    ThemeIcon,
    Box,
    Flex,
} from "@mantine/core";
import { IconMapPin, IconPhone } from "@tabler/icons-react";

/** 国コード */
export type Country = "VN" | "JP";

/** プロップス */
type OfficeCardProps = {
    country: Country;
    city: string;
    address: string;
    phone: string;
    /** public 配下の地図画像パス */
    mapSrc: string;
    /** カード幅（任意） */
    width?: number | string;
    /** 枠線（任意） */
    withBorder?: boolean;
    /** 地図画像を開くリンク先（外部URLやGoogleマップなど） */
    to?: string;
    /** a タグの target（デフォルト: "_blank"） */
    mapTarget?: "_blank" | "_self" | "_parent" | "_top";
};

/* ───────────────── 旗バッジ ─────────────────
   日本:   白地 + 小さめ赤丸
   ベトナム: 白丸 → 赤丸 → 黄色い星
------------------------------------------------ */
const FlagBadge: React.FC<{
    country: Country;
    size?: number;
    /** 日本の赤丸半径係数（s * jpScale） */
    jpScale?: number;
}> = ({ country, size = 38, jpScale = 0.22 }) => {
    const s = size;
    const cx = s / 2;
    const cy = s / 2;

    if (country === "JP") {
        // 日本（白地に赤丸）
        return (
            <svg
                width={s}
                height={s}
                viewBox={`0 0 ${s} ${s}`}
                style={{ display: "block" }}
            >
                <circle cx={cx} cy={cy} r={s / 2} fill="#ffffff" />
                <circle cx={cx} cy={cy} r={s * jpScale} fill="#BC002D" />
            </svg>
        );
    }

    // ベトナム（白丸 → 赤丸 → 黄色い星）
    const redR = s * 0.37; // 白縁が残るサイズ
    const starOuter = s * 0.23; // 星の外半径
    const starInner = s * 0.1; // 星の内半径
    const points = Array.from({ length: 10 })
        .map((_, i) => {
            const angle = -Math.PI / 2 + (i * Math.PI) / 5; // 上向きから開始
            const r = i % 2 === 0 ? starOuter : starInner;
            return `${cx + r * Math.cos(angle)},${cy + r * Math.sin(angle)}`;
        })
        .join(" ");

    return (
        <svg
            width={s}
            height={s}
            viewBox={`0 0 ${s} ${s}`}
            style={{ display: "block" }}
        >
            <circle cx={cx} cy={cy} r={s / 2} fill="#ffffff" />
            <circle cx={cx} cy={cy} r={redR} fill="#e31c25" />
            <polygon points={points} fill="#ffcf40" />
        </svg>
    );
};

/* ───────────────── 本体 ───────────────── */
const OfficeCard: React.FC<OfficeCardProps> = ({
    country,
    city,
    address,
    phone,
    mapSrc,
    width = 360,
    withBorder = false,
    to,
    mapTarget = "_blank",
}) => {
    const mapImg = (
        <Image
            src={import.meta.env.BASE_URL + mapSrc}
            alt={`${city} の地図`}
            radius="md"
            w={200}
            h={120}
            fit="cover"
            style={{ display: "block" }}
        />
    );

    return (
        <Card
            withBorder={withBorder}
            radius="lg"
            p="lg"
            style={{ width, background: "transparent" }} // 背景は透明
        >
            <Stack gap="md">
                {/* 見出し（旗 + 都市名） */}
                <Group align="center" gap="sm">
                    <FlagBadge country={country} size={42} />
                    <Text fz={28} fw={700} lh={1} c="white">
                        {city}
                    </Text>
                </Group>

                {/* 住所 */}
                <Flex gap={12}>
                    <ThemeIcon
                        radius="xl"
                        size={28}
                        variant="subtle"
                        color="white"
                    >
                        <IconMapPin size={18} />
                    </ThemeIcon>
                    <Text fz="md" lh={1.6} c="white">
                        {address}
                    </Text>
                </Flex>

                {/* 電話 */}
                <Flex gap={12}>
                    <ThemeIcon
                        radius="xl"
                        size={28}
                        variant="subtle"
                        color="white"
                    >
                        <IconPhone size={18} />
                    </ThemeIcon>
                    <Text fz="md" c="white">
                        {phone}
                    </Text>
                </Flex>

                {/* 地図画像（to があれば a タグで新しいタブに） */}
                <Box mt={6}>
                    {to ? (
                        <Box
                            component="a"
                            href={to}
                            target={mapTarget}
                            rel={
                                mapTarget === "_blank"
                                    ? "noopener noreferrer"
                                    : undefined
                            }
                            style={{ display: "inline-block", lineHeight: 0 }}
                            aria-label={`${city} の地図を開く`}
                        >
                            {mapImg}
                        </Box>
                    ) : (
                        mapImg
                    )}
                </Box>
            </Stack>
        </Card>
    );
};

export default OfficeCard;
export { OfficeCard };
