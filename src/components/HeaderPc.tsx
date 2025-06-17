import { Flex } from "@mantine/core";
import { Link, useLocation } from "react-router-dom";

const HeaderPc: React.FC = () => {
    const location = useLocation();

    const pathName = location.pathname.split("/")[0];

    return (
        <>
            <Flex justify={"center"} align={"center"} gap={"lg"} w={"100%"}>
                <Link to={"/"}>
                    <h1>ホームページ</h1>
                </Link>

                <Link to={"/services"}>
                    <h1>サービス</h1>
                </Link>

                <Link to={"/about"}>
                    <h1>会社紹介</h1>
                </Link>
            </Flex>
        </>
    );
};

export default HeaderPc;
