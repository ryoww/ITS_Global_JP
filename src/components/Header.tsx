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
            <Flex w={"100%"} h={"70px"} gap={0} p={0}>
                <Box
                    w={"20%"}
                    h={"100%"}
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "flex-end",
                        paddingRight: "5px",
                    }}
                    // bg={"red.6"}
                    m={0}
                >
                    <Link to={"/"}>
                        <Image
                            src={"logo.png"}
                            alt="Logo"
                            width={65}
                            height={65}
                            fit="contain"
                        />
                    </Link>
                </Box>
                <Box
                    w={"80%"}
                    h={"100%"}
                    // bg={"blue.6"}
                    // gradient={{
                    //     from: "blue.6",
                    //     to: "blue.8",
                    // }}
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
                    {/* <HeaderPc /> */}
                </Box>
            </Flex>

            <Outlet />
        </>
    );
};

export default Header;
