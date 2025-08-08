import {
    Box,
    Button,
    Checkbox,
    Grid,
    Group,
    Image,
    Select,
    Stack,
    Text,
    Textarea,
    TextInput,
    Title,
} from "@mantine/core";
import { useForm } from "@mantine/form";

const FooterPc: React.FC = () => {
    const form = useForm({
        initialValues: {
            name: "",
            email: "",
            phone: "",
            purpose: "",
            message: "",
            agree: false,
        },
    });

    return (
        <>
            <Title
                order={1}
                ta="center"
                mt={100}
                mb={40}
                fw={900}
                c="blue.8"
                style={{ letterSpacing: "0.05em" }}
            >
                お問い合わせ
            </Title>

            <Stack gap="xs" mb={60} align="center">
                <Text ta="center" size="md" w={"50%"}>
                    ITSはオフショア形式でソフトウェアサービスを開発する専門企業です。
                    高い技術力を持つ私たちは、多様な顧客のニーズに応える多くの製品を提供してきました。
                </Text>
            </Stack>

            <Box component="section" mt={20} pb={80} px={{ base: 16, md: 0 }}>
                <Grid
                    gutter={40}
                    align="start"
                    w="90%"
                    mx="auto"
                    style={{ maxWidth: 1400 }}
                >
                    {/* -------- 画像コラージュ -------- */}
                    <Grid.Col
                        span={{ base: 12, md: 5 }}
                        order={{ base: 2, md: 1 }}
                    >
                        <Box pos="relative">
                            {/* 左下の水色の角丸矩形 */}
                            <Box
                                pos="absolute"
                                left={0}
                                bottom={-24}
                                w={180}
                                h={180}
                                bg="#8ad8de"
                                style={{ borderRadius: 16 }}
                                hiddenFrom="md"
                            />

                            <Image
                                src={
                                    import.meta.env.BASE_URL +
                                    "/footer/img-contact.jpg"
                                }
                                w="100%"
                                h={450}
                                radius={24}
                                style={{ objectFit: "cover" }}
                            />

                            <Grid
                                gutter={16}
                                py={24}
                                px={8}
                                pos="absolute"
                                top={0}
                                right={-40}
                                style={{
                                    backgroundImage:
                                        "repeating-linear-gradient(135deg, #00adad 0 1px, transparent 1px 16px)",
                                    backgroundSize: "16px 16px",
                                    width: 32,
                                    height: "100%",
                                    transform: "translateX(100%)",
                                }}
                                hiddenFrom="md"
                            />
                        </Box>
                    </Grid.Col>

                    {/* -------- フォーム -------- */}
                    <Grid.Col
                        span={{ base: 12, md: 7 }}
                        order={{ base: 1, md: 2 }}
                    >
                        <Title order={4} c="red.6" mb={4}>
                            *必須内容
                        </Title>

                        <form onSubmit={form.onSubmit(console.log)}>
                            <Grid gutter={24}>
                                {/* 氏名・メール */}
                                <Grid.Col span={{ base: 12, md: 6 }}>
                                    <TextInput
                                        withAsterisk
                                        label="氏名"
                                        placeholder="例: グエン・ヴァン・A"
                                        {...form.getInputProps("name")}
                                    />
                                </Grid.Col>

                                <Grid.Col span={{ base: 12, md: 6 }}>
                                    <TextInput
                                        withAsterisk
                                        label="メール"
                                        placeholder="例: contact@mail.com"
                                        {...form.getInputProps("email")}
                                    />
                                </Grid.Col>

                                {/* 電話・目的 */}
                                <Grid.Col span={{ base: 12, md: 6 }}>
                                    <TextInput
                                        withAsterisk
                                        label="電話番号"
                                        placeholder="例: 0123456789"
                                        {...form.getInputProps("phone")}
                                    />
                                </Grid.Col>

                                <Grid.Col span={{ base: 12, md: 6 }}>
                                    <Select
                                        withAsterisk
                                        label="連絡目的"
                                        placeholder="例: デジタル変革コンサルティング"
                                        data={[
                                            "デジタル変革コンサルティング",
                                            "DXソリューション",
                                            "モバイルアプリ開発",
                                            "その他",
                                        ]}
                                        {...form.getInputProps("purpose")}
                                    />
                                </Grid.Col>

                                {/* メッセージ */}
                                <Grid.Col span={12}>
                                    <Textarea
                                        minRows={6}
                                        label="内容"
                                        placeholder="メッセージの内容を入力してください。"
                                        {...form.getInputProps("message")}
                                    />
                                </Grid.Col>

                                {/* 利用規約 */}
                                <Grid.Col span={12}>
                                    <Checkbox
                                        label="会社のプライバシーポリシーに同意します。"
                                        {...form.getInputProps("agree", {
                                            type: "checkbox",
                                        })}
                                    />
                                </Grid.Col>

                                {/* 送信ボタン */}
                                <Grid.Col span={12}>
                                    <Group justify="flex-start">
                                        <Button
                                            type="submit"
                                            size="md"
                                            radius="xl"
                                            style={{
                                                background:
                                                    "linear-gradient(90deg,#0044a9 0%,#00adad 100%)",
                                            }}
                                        >
                                            送信
                                        </Button>
                                    </Group>
                                </Grid.Col>
                            </Grid>
                        </form>
                    </Grid.Col>
                </Grid>
            </Box>
        </>
    );
};

export default FooterPc;
