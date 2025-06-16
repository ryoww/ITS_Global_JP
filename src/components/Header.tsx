import { Box, Flex, Image } from "@mantine/core";
import type React from "react";
import { Outlet } from "react-router-dom";

const Header: React.FC = () => {
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
                    bg={"red.6"}
                    m={0}
                >
                    <Image
                        src={"logo.png"}
                        alt="Logo"
                        width={65}
                        height={65}
                        fit="contain"
                    />
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
                    <h1>Header</h1>
                </Box>
            </Flex>

            <Outlet />
        </>
    );
};

export default Header;
