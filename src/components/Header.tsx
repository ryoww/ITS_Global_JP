import { Box, Flex } from "@mantine/core";
import type React from "react";
import { Outlet } from "react-router-dom";

const Header: React.FC = () => {
    return (
        <>
            <Flex w={"100%"} h={"70px"} gap={0} p={0}>
                <Box w={"35%"} h={"100%"}>
                    <h1>Header</h1>
                </Box>
                <Box
                    w={"65%"}
                    h={"100%"}
                    // bg={"blue.6"}
                    // gradient={{
                    //     from: "blue.6",
                    //     to: "blue.8",
                    // }}
                    style={{
                        background:
                            "linear-gradient(to right, #1e3a8a, #06b6d4)",
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
