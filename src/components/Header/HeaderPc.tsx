// src/components/HeaderPc.tsx
import { Button, Flex, Menu, useMantineTheme } from "@mantine/core";
import { Link, useLocation } from "react-router-dom";
import { COLORS } from "../../constants/colors";
import { IoIosArrowDown } from "react-icons/io";

const HeaderPc: React.FC = () => {
    const { pathname } = useLocation();
    const theme = useMantineTheme();
    const blue8 = theme.colors.blue[8]; // アクティブ時
    const blue9 = theme.colors.blue[9]; // ホバー時

    // ──────────────────
    // 色の定義
    // ──────────────────
    const accentColor = COLORS.YELLOW; // ヘッダーのハイライト（黄）
    const defaultColor = COLORS.WHITE; // 通常文字色（白）

    const isActive = (path: string) => pathname === path;

    return (
        <Flex justify="flex-end" align="center" w="100%" mr={"10rem"}>
            <Flex justify="space-between" align="center" w="700px">
                {/* ────────── ホームページ ────────── */}
                <Link to="/" style={{ textDecoration: "none" }}>
                    <h3
                        style={{
                            color: isActive("/") ? accentColor : defaultColor,
                            borderBottom: isActive("/")
                                ? `2px solid ${accentColor}`
                                : "none",
                            transition: "all 0.3s ease",
                        }}
                        onMouseOver={(e) =>
                            (e.currentTarget.style.color = accentColor)
                        }
                        onMouseOut={(e) =>
                            (e.currentTarget.style.color = isActive("/")
                                ? accentColor
                                : defaultColor)
                        }
                    >
                        ホームページ
                    </h3>
                </Link>

                {/* ────────── サービス ────────── */}
                <Menu withinPortal>
                    <Menu.Target>
                        <h3
                            style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "0.25rem",
                                color: pathname.startsWith("/services")
                                    ? accentColor
                                    : defaultColor, // 親ラベルは従来どおり黄でハイライト
                                borderBottom: pathname.startsWith("/services")
                                    ? `2px solid ${accentColor}`
                                    : "none",
                                cursor: "pointer",
                                transition: "all 0.3s ease",
                            }}
                            onMouseOver={(e) =>
                                (e.currentTarget.style.color = accentColor)
                            }
                            onMouseOut={(e) =>
                                (e.currentTarget.style.color =
                                    pathname.startsWith("/services")
                                        ? accentColor
                                        : defaultColor)
                            }
                        >
                            サービス
                            <IoIosArrowDown
                                size={25}
                                style={{ flexShrink: 0, color: "inherit" }}
                            />
                        </h3>
                    </Menu.Target>

                    <Menu.Dropdown>
                        {[
                            {
                                to: "/services/flutter-and-hybrid",
                                label: "モバイルアプリケーション開発",
                            },
                            {
                                to: "/services/dx-solution",
                                label: "DX ソリューション",
                            },
                            {
                                to: "/services/sap-and-erp",
                                label: "SAPコンサルティングとERP導入",
                            },
                        ].map(({ to, label }) => {
                            const active = isActive(to);
                            return (
                                <Menu.Item
                                    key={to}
                                    component={Link}
                                    to={to}
                                    // Mantineのテーマ挙動をblue系に
                                    color={active ? "blue" : undefined}
                                    style={{
                                        color: active ? blue8 : COLORS.BLACK, // アクティブ時は少し濃い青
                                        fontWeight: active ? 600 : 400,
                                        transition: "color 0.2s ease",
                                        textDecoration: "none",
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.color = blue9; // ホバー時はさらに濃い青
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.color = active
                                            ? blue8
                                            : COLORS.BLACK;
                                    }}
                                >
                                    {label}
                                </Menu.Item>
                            );
                        })}
                    </Menu.Dropdown>
                </Menu>

                {/* ────────── 会社紹介 ────────── */}
                <Link to="/about" style={{ textDecoration: "none" }}>
                    <h3
                        style={{
                            color: isActive("/about")
                                ? accentColor
                                : defaultColor,
                            borderBottom: isActive("/about")
                                ? `2px solid ${accentColor}`
                                : "none",
                            transition: "all 0.3s ease",
                        }}
                        onMouseOver={(e) =>
                            (e.currentTarget.style.color = accentColor)
                        }
                        onMouseOut={(e) =>
                            (e.currentTarget.style.color = isActive("/about")
                                ? accentColor
                                : defaultColor)
                        }
                    >
                        会社紹介
                    </h3>
                </Link>

                {/* ────────── ブログ ────────── */}
                <Link to="/blog" style={{ textDecoration: "none" }}>
                    <h3
                        style={{
                            color: isActive("/blog")
                                ? accentColor
                                : defaultColor,
                            borderBottom: isActive("/blog")
                                ? `2px solid ${accentColor}`
                                : "none",
                            transition: "all 0.3s ease",
                        }}
                        onMouseOver={(e) =>
                            (e.currentTarget.style.color = accentColor)
                        }
                        onMouseOut={(e) =>
                            (e.currentTarget.style.color = isActive("/blog")
                                ? accentColor
                                : defaultColor)
                        }
                    >
                        ブログ
                    </h3>
                </Link>

                {/* ────────── お問い合わせ ────────── */}
                <Button
                    component={Link}
                    to="/contact"
                    color="yellow"
                    variant="filled"
                    radius="xl"
                    size="md"
                    style={{ color: COLORS.BLACK }} // ボタン内の文字だけ黒
                >
                    お問い合わせ
                </Button>
            </Flex>
        </Flex>
    );
};

export default HeaderPc;
