import { Box, Flex } from "@mantine/core";
import type React from "react";
import { Outlet } from "react-router";

const Header: React.FC = () => {
    return (
        <>
            <Flex w={"100%"} h={100} gap={0} p={0}>
                <Box w={"25%"} bg={"blue"}></Box>
                <Box w={"75%"} bg={"red"}></Box>
            </Flex>

            <Outlet />
        </>
    );
};

export default Header;
