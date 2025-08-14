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

/* ─────────────── 旗バッジ ─────────────── */
const FlagBadge: React.FC<{
    country: Country;
    size?: number;
    jpScale?: number;
}> = ({ country, size = 38, jpScale = 0.22 }) => {
    const s = size;
    const cx = s / 2;
    const cy = s / 2;

    if (country === "JP") {
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

    const redR = s * 0.37;
    const starOuter = s * 0.23;
    const starInner = s * 0.1;
    const points = Array.from({ length: 10 })
        .map((_, i) => {
            const angle = -Math.PI / 2 + (i * Math.PI) / 5;
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

/* ─────────────── 情報コンポーネント ─────────────── */
type OfficeInfoProps = {
    country: Country;
    city: string;
    address: string;
    phone: string;
};

const OfficeInfo: React.FC<OfficeInfoProps> = ({
    country,
    city,
    address,
    phone,
}) => {
    return (
        <Stack gap="md" style={{ minWidth: 0 /* Flex子のはみ出し防止 */ }}>
            <Group
                align="center"
                gap="sm"
                wrap="nowrap"
                style={{ minWidth: 0 }}
            >
                <FlagBadge country={country} size={42} />
                <Text fz={28} fw={700} lh={1} c="white">
                    {city}
                </Text>
            </Group>

            {/* 住所 */}
            <Flex gap={12} align="flex-start" style={{ minWidth: 0 }}>
                <ThemeIcon radius="xl" size={28} variant="subtle" color="white">
                    <IconMapPin size={18} />
                </ThemeIcon>
                <Text
                    fz="md"
                    lh={1.6}
                    c="white"
                    style={{
                        whiteSpace: "pre-wrap",
                        overflowWrap: "anywhere",
                        minWidth: 0,
                    }}
                >
                    {address}
                </Text>
            </Flex>

            {/* 電話 */}
            <Flex gap={12} align="flex-start" style={{ minWidth: 0 }}>
                <ThemeIcon radius="xl" size={28} variant="subtle" color="white">
                    <IconPhone size={18} />
                </ThemeIcon>
                <Text
                    fz="md"
                    c="white"
                    style={{ overflowWrap: "anywhere", minWidth: 0 }}
                >
                    {phone}
                </Text>
            </Flex>
        </Stack>
    );
};

/* ─────────────── 地図コンポーネント ─────────────── */
type OfficeMapProps = {
    city: string;
    mapSrc: string;
    to?: string;
    mapTarget?: "_blank" | "_self" | "_parent" | "_top";
};

const OfficeMap: React.FC<OfficeMapProps> = ({
    city,
    mapSrc,
    to,
    mapTarget = "_blank",
}) => {
    const img = (
        <Image
            src={mapSrc}
            alt={`${city} の地図`}
            radius="md"
            w="100%"
            fit="cover"
            style={{
                display: "block",
                aspectRatio: "16 / 9",
                objectFit: "cover",
            }}
        />
    );

    return to ? (
        <Box
            component="a"
            href={to}
            target={mapTarget}
            rel={mapTarget === "_blank" ? "noopener noreferrer" : undefined}
            style={{ display: "inline-block", lineHeight: 0, width: "100%" }}
            aria-label={`${city} の地図を開く`}
        >
            {img}
        </Box>
    ) : (
        <Box>{img}</Box>
    );
};

/* ─────────────── 本体（Flex レイアウト） ─────────────── */
const OfficeCard: React.FC<OfficeCardProps> = ({
    country,
    city,
    address,
    phone,
    mapSrc,
    width = "100%", // レイアウト崩れを避けるため既定を 100% に
    withBorder = false,
    to,
    mapTarget = "_blank",
}) => {
    return (
        <Card
            withBorder={withBorder}
            radius="lg"
            p="lg"
            w={width}
            style={{ background: "transparent" }}
        >
            {/* base: column / md+: row */}
            <Flex
                direction={{ base: "column", md: "row" }}
                align={{ base: "stretch", md: "flex-start" }}
                justify="flex-start"
                gap={{ base: "md", md: "lg" }}
                wrap="nowrap"
            >
                {/* 情報: base=100%, md=60% */}
                <Box
                    w={{ base: "100%", md: "60%" }}
                    style={{
                        flex: "0 0 auto",
                        minWidth: 0, // これが無いとテキストが縦にばらけやすい
                    }}
                >
                    <OfficeInfo
                        country={country}
                        city={city}
                        address={address}
                        phone={phone}
                    />
                </Box>

                {/* 地図: base=100%, md=40% */}
                <Box
                    w={{ base: "90%", md: "40%" }}
                    style={{
                        flex: "0 0 auto", // 40%を維持
                        minWidth: 0,
                    }}
                    mt={{ base: 6, md: 0 }}
                >
                    <OfficeMap
                        city={city}
                        mapSrc={mapSrc}
                        to={to}
                        mapTarget={mapTarget}
                    />
                </Box>
            </Flex>
        </Card>
    );
};

export default OfficeCard;
export { OfficeCard, OfficeInfo, OfficeMap };
