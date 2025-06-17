import { Button, Flex, Menu } from "@mantine/core";
import { Link, useLocation } from "react-router-dom";

const HeaderPc: React.FC = () => {
    const location = useLocation();
    const pathname = location.pathname;
    const accentColor = "#f59e0b"; // アクセントカラー（例: Tailwindのamber-500）

    const isActive = (path: string) => pathname === path;

    return (
        <Flex justify={"center"} align={"center"} w={"100%"}>
            <Flex justify={"space-between"} align={"center"} w={"50%"}>
                {/* ホームページ */}
                <Link to="/" style={{ textDecoration: "none" }}>
                    <h3
                        style={{
                            color: isActive("/") ? accentColor : "inherit",
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
                                : "inherit")
                        }
                    >
                        ホームページ
                    </h3>
                </Link>

                {/* サービス */}
                <Menu>
                    <Menu.Target>
                        <h3
                            style={{
                                color: pathname.startsWith("/services")
                                    ? accentColor
                                    : "inherit",
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
                                        : "inherit")
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
                        ].map((item, index) => (
                            <Menu.Item
                                key={index}
                                component={Link}
                                to={item.to}
                                style={{
                                    color: isActive(item.to)
                                        ? accentColor
                                        : "inherit",
                                    fontWeight: isActive(item.to) ? 600 : 400,
                                    transition: "all 0.2s ease",
                                    "&:hover": {
                                        color: accentColor,
                                        backgroundColor: "transparent", // 背景色なしでテキストだけ変化
                                    },
                                }}
                            >
                                {item.label}
                            </Menu.Item>
                        ))}
                    </Menu.Dropdown>
                </Menu>

                {/* 会社紹介 */}
                <Link to="/about" style={{ textDecoration: "none" }}>
                    <h3
                        style={{
                            color: isActive("/about") ? accentColor : "inherit",
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
                                : "inherit")
                        }
                    >
                        会社紹介
                    </h3>
                </Link>

                {/* お問い合わせ */}
                <Button
                    component={Link}
                    to="/contact"
                    color="yellow"
                    variant="filled"
                    radius="xl"
                    size="md"
                >
                    お問い合わせ
                </Button>
            </Flex>
        </Flex>
    );
};

export default HeaderPc;
