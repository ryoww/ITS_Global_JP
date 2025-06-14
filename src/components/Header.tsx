import { Box, Flex } from "@mantine/core";
import type React from "react";
import { Outlet } from "react-router-dom";

const Header: React.FC = () => {
    return (
        <>
            <Flex w={"100%"} h={"150px"} gap={0} p={0}>
                <Box w={"25%"} h={"100%"} bg={"blue"}></Box>
                <Box w={"75%"} h={"100%"} bg={"red"}></Box>
                {/* <h1>Header</h1> */}
            </Flex>

            <Outlet />
        </>
    );
};

export default Header;
