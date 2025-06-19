import { Burger, Drawer, Flex, Image as MantineImage } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Link } from "react-router-dom";

const HeaderPhone: React.FC = () => {
    const [opened, { open, close }] = useDisclosure(false);

    return (
        <>
            <Drawer
                opened={opened}
                onClose={close}
                position="right"
                p={0}
                title={
                    <Flex m={0} p={0} w={"100%"} h={"70px"}>
                        <Link to={"/"}>
                            <MantineImage
                                src="logo.png"
                                alt="Logo"
                                // bg={"red.6"}
                                w={135.5}
                                h={65}
                                my={"auto"}
                                fit="contain"
                            />
                        </Link>
                    </Flex>
                }
                closeButtonProps={{
                    icon: (
                        <Burger
                            opened={opened}
                            onClick={close}
                            aria-label="close"
                            color="white"
                            mr={"30px"}
                        />
                    ),
                }}
                /* ここで 40 % / 60 % の 2色塗り分け */
                styles={{
                    header: {
                        background:
                            "linear-gradient(to right,#ffffff 0%,#ffffff 85%,#195FAA 40%,#00ADAF 100%)",
                        /*         └─ 左色範囲 ─┘ └─ 右色範囲 ─┘     */
                        padding: "0px",
                    },
                }}
            >
                <h3>ホームページ</h3>
                <h3>サービス</h3>
                <h3>お問い合わせ</h3>
            </Drawer>

            {/* 画面右上のトリガー Burger */}
            <Flex justify="flex-end" w="100%">
                <Burger
                    opened={opened}
                    onClick={open}
                    mr="15px"
                    aria-label="burger"
                    color="white"
                />
            </Flex>
        </>
    );
};

export default HeaderPhone;
