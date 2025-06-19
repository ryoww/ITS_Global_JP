import { Box, Flex, Image } from "@mantine/core";
import type React from "react";
import { Link, Outlet } from "react-router-dom";
import HeaderPc from "./HeaderPc";
import useResponsive from "../hooks/useResponsive";
import HeaderPhone from "./HeaderPhone";

const Header: React.FC = () => {
    const { isPhone } = useResponsive();

    return (
        <>
            <Flex w="100%" h="70px" gap={0} p={0}>
                {/* --- 左側ロゴ --- */}
                <Box
                    w={isPhone ? "35%" : "20%"} // ← ここを動的に
                    h="100%"
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "flex-end",
                        paddingRight: "5px",
                    }}
                >
                    <Link to="/">
                        <Image
                            src="logo.png"
                            alt="Logo"
                            width={65}
                            height={65}
                            fit="contain"
                        />
                    </Link>
                </Box>

                {/* --- 右側メニュー --- */}
                <Box
                    w={isPhone ? "65%" : "80%"} // ← ここも動的に
                    h="100%"
                    style={{
                        background:
                            "linear-gradient(to right, #195FAA, #00ADAF)",
                        clipPath:
                            "polygon(0 0, 100% 0, 100% 100%, 5% 100%, 0% 0%)",
                        display: "flex",
                        alignItems: "center",
                        paddingLeft: "1rem",
                    }}
                >
                    {isPhone ? <HeaderPhone /> : <HeaderPc />}
                </Box>
            </Flex>

            <Outlet />
        </>
    );
};

export default Header;
