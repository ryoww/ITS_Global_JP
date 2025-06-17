import { Burger, Drawer, Flex } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

const HeaderPhone: React.FC = () => {
    const [opened, { open, close }] = useDisclosure(false);

    return (
        <>
            <Drawer opened={opened} onClose={close} position="right">
                <h3>ホームページ</h3>

                <h3>サービス</h3>

                <h3>お問い合わせ</h3>
            </Drawer>
            <Flex justify={"right"} w={"100%"}>
                <Burger
                    opened={opened}
                    onClick={open}
                    mr={"15px"}
                    aria-label="burger"
                />
            </Flex>
        </>
    );
};

export default HeaderPhone;
