// src/components/HeaderPc.tsx
import { Button, Flex, Menu } from "@mantine/core";
import { Link, useLocation } from "react-router-dom";
import { COLORS } from "../constants/colors"; // ← パス要調整

const HeaderPc: React.FC = () => {
    const { pathname } = useLocation();

    // ──────────────────
    // 色の定義
    // ──────────────────
    const accentColor = COLORS.YELLOW; // ハイライト（黄）
    const defaultColor = COLORS.WHITE; // 通常文字色（白）

    const isActive = (path: string) => pathname === path;

    return (
        <Flex justify="center" align="center" w="100%">
            <Flex justify="space-between" align="center" w="65%">
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
                                color: pathname.startsWith("/services")
                                    ? accentColor
                                    : defaultColor,
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
                        ].map(({ to, label }) => (
                            <Menu.Item
                                key={to}
                                component={Link}
                                to={to}
                                style={{
                                    color: isActive(to)
                                        ? accentColor
                                        : COLORS.BLACK,
                                    fontWeight: isActive(to) ? 600 : 400,
                                    transition: "all 0.2s ease",
                                    "&:hover": {
                                        color: accentColor,
                                        backgroundColor: "transparent",
                                    },
                                }}
                            >
                                {label}
                            </Menu.Item>
                        ))}
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
