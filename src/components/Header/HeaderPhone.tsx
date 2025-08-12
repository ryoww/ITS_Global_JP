// src/components/HeaderPhone.tsx
import React from "react";
import {
    Burger,
    Button,
    Drawer,
    Flex,
    Image as MantineImage,
    NavLink,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Link, useLocation } from "react-router-dom";
import { COLORS } from "../../constants/colors";
import { IconBrandLinkedin, IconExternalLink } from "@tabler/icons-react";

/* ===== NavLink 共通スタイル ======================================== */
/* NavLink 共通スタイル ------------------------------------------------ */
const navLinkStyles = (theme: any) => ({
    root: {
        padding: `0 ${theme.spacing.md}`,
        height: 48,
        fontSize: "1.25rem",
        borderBottom: "1px solid #E5E7EB",

        /* ===== アクティブ行だけ上書き ===== */
        "&[data-active]": {
            background: "transparent", // ★ 背景を無色に
        },
        "&[data-active] .mantine-NavLink-label": {
            // ★ ラベルだけ黄色
            color: COLORS.YELLOW,
            fontWeight: 700,
        },
    },

    /* 子リンクの行文字はそのまま */
    children: {
        "& > *": {
            background: "#D9D9D9",
            borderBottom: "1px solid #E5E7EB",
        },
    },

    label: { flex: 1 }, // ← ここには色を書かない
    chevron: { color: theme.colors.gray[6] },
});

/* ============================= コンポーネント ====================== */
const HeaderPhone: React.FC = () => {
    const [opened, { open, close }] = useDisclosure(false);
    const { pathname } = useLocation();

    return (
        <>
            {/* ---------------- Drawer ---------------- */}
            <Drawer
                opened={opened}
                onClose={close}
                position="right"
                size="100%"
                styles={{
                    header: {
                        background:
                            "linear-gradient(to right,#ffffff 0%,#ffffff 85%,#195FAA 40%,#00ADAF 100%)",
                        padding: 0,
                        borderBottom: "1px solid #E5E7EB",
                    },
                    body: { padding: 0, margin: 0 },
                }}
                title={
                    <Flex m={0} p={0} w="100%" h={70}>
                        <Link to="/" onClick={close}>
                            <MantineImage
                                src={import.meta.env.BASE_URL + "logo.png"}
                                alt="Logo"
                                w={135.5}
                                h={65}
                                my="auto"
                                fit="contain"
                            />
                        </Link>
                    </Flex>
                }
                closeButtonProps={{
                    icon: (
                        <Burger
                            opened={opened}
                            onClick={close}
                            aria-label="close"
                            mr="30px"
                            color="white"
                            size="lg"
                            lineSize={2}
                        />
                    ),
                }}
            >
                {/* ===== NavLink ハードコーディング ===== */}
                <NavLink
                    label="ホームページ"
                    component={Link}
                    to="/"
                    active={pathname === "/"}
                    onClick={close}
                    rightSection={null}
                    styles={navLinkStyles}
                    color="orange"
                />

                {/* サービス（デフォルトで閉じた状態） */}
                <NavLink
                    label="サービス"
                    styles={navLinkStyles}
                    childrenOffset={0}
                    color="orange"
                >
                    <NavLink
                        label="モバイルアプリケーション開発"
                        component={Link}
                        to="/services/flutter-and-hybrid"
                        active={pathname === "/services/flutter-and-hybrid"}
                        onClick={close}
                        rightSection={null}
                        styles={navLinkStyles}
                        color="orange"
                    />
                    <NavLink
                        label="DXソリューション"
                        component={Link}
                        to="/services/dx-solution"
                        active={pathname === "/services/dx-solution"}
                        onClick={close}
                        rightSection={null}
                        styles={navLinkStyles}
                        color="orange"
                    />
                    <NavLink
                        label="SAPコンサルティングとERP導入"
                        component={Link}
                        to="/services/sap-and-erp"
                        active={pathname === "/services/sap-and-erp"}
                        onClick={close}
                        rightSection={null}
                        styles={navLinkStyles}
                        color="orange"
                    />
                </NavLink>

                <NavLink
                    label="会社紹介"
                    component={Link}
                    to="/about"
                    active={pathname === "/about"}
                    onClick={close}
                    rightSection={null}
                    styles={navLinkStyles}
                    color="orange"
                />

                <NavLink
                    label="ブログ"
                    component="a"
                    href="https://www.linkedin.com/in/%E7%A7%80%E6%A8%B9-%E9%AB%98%E6%A9%8B-9b1187102/"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={close}
                    leftSection={
                        <IconBrandLinkedin
                            size="1.4em"
                            style={{ verticalAlign: "middle" }}
                        />
                    }
                    rightSection={
                        <IconExternalLink
                            size="1.2em"
                            style={{ verticalAlign: "middle" }}
                        />
                    }
                    styles={(theme) => ({
                        ...navLinkStyles(theme),
                        leftSection: { marginRight: 2 }, // ← 左アイコンと文字の距離
                        rightSection: { marginLeft: 4 }, // ← 右アイコンと文字の距離
                    })}
                    color="orange"
                />
            </Drawer>

            {/* ---------------- 画面上部のバーガー＋お問い合わせ ---------------- */}
            <Flex w={"100%"} justify={"right"} gap={0} p={0} h={"100%"}>
                <Flex justify="space-between" w="90%" my="auto">
                    <Button
                        component={Link}
                        to="/contact"
                        color="yellow"
                        variant="filled"
                        radius="xl"
                        size="md"
                        style={{ color: COLORS.BLACK }}
                    >
                        お問い合わせ
                    </Button>

                    <Burger
                        opened={opened}
                        onClick={open}
                        mr="15px"
                        aria-label="burger"
                        color="white"
                        my="auto"
                        size="lg"
                        lineSize={2}
                    />
                </Flex>
            </Flex>
        </>
    );
};

export default HeaderPhone;
