import React, { useEffect, useRef, useState } from "react";
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
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";

const FoooterPhone: React.FC = () => {
    // reCAPTCHA v2 Invisible
    const recaptchaRef = useRef<ReCAPTCHA | null>(null);
    const [sending, setSending] = useState(false);

    // EmailJS 初期化（Public Key）
    useEffect(() => {
        const pub = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as
            | string
            | undefined;
        if (pub) emailjs.init({ publicKey: pub });
    }, []);

    const form = useForm({
        initialValues: {
            name: "",
            email: "",
            phone: "",
            purpose: "",
            message: "",
            agree: false,
            hp: "", // ハニーポット（画面非表示）
        },
        validate: {
            name: (v) => (v.trim() ? null : "氏名は必須です"),
            email: (v) =>
                /^\S+@\S+\.\S+$/.test(v)
                    ? null
                    : "メール形式で入力してください",
            phone: (v) => (v.trim() ? null : "電話番号は必須です"),
            purpose: (v) => (v ? null : "連絡目的は必須です"),
            message: (v) => (v.trim() ? null : "内容は必須です"),
            agree: (v) => (v ? null : "プライバシーポリシーに同意が必要です"),
        },
    });

    const handleSubmit = async (values: typeof form.values) => {
        if (sending) return;
        if (values.hp) return; // bot疑いは無視

        try {
            setSending(true);

            if (!recaptchaRef.current) {
                alert(
                    "reCAPTCHAの初期化待ちです。少し待って再試行してください。"
                );
                return;
            }

            // 1) reCAPTCHA 実行→トークン取得
            const token = await recaptchaRef.current.executeAsync();
            recaptchaRef.current.reset();
            if (!token) {
                alert("reCAPTCHAの取得に失敗しました。再試行してください。");
                return;
            }

            // 2) EmailJS送信
            const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID as string;
            const templateId = import.meta.env
                .VITE_EMAILJS_TEMPLATE_ID as string;

            await emailjs.send(serviceId, templateId, {
                name: values.name,
                email: values.email,
                phone: values.phone,
                purpose: values.purpose,
                message: values.message,
                subject: `お問い合わせ: ${values.purpose || "未選択"}`,
                // EmailJS の reCAPTCHA 検証に必須のフィールド名
                "g-recaptcha-response": token,
            });

            alert("送信しました。折り返しご連絡いたします。");
            form.reset();
        } catch (e: any) {
            alert(`送信エラー: ${e?.text || e?.message || "unknown error"}`);
        } finally {
            setSending(false);
        }
    };

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
                <Text ta="center" size="md" w={"90%"}>
                    ご興味をお持ちいただき、誠にありがとうございます。弊社のサービスと製品についてのご質問やご相談がございましたら、
                    以下のフォームにご記入ください。できるだけ早くご返信いたします。{" "}
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
                        order={{ base: 1, md: 1 }}
                    >
                        <Box pos="relative">
                            <Image
                                src={
                                    import.meta.env.BASE_URL +
                                    "/footer/img-contact.jpg"
                                }
                                w="100%"
                                h="100%"
                                radius={24}
                                style={{ objectFit: "cover" }}
                            />
                        </Box>
                    </Grid.Col>

                    {/* -------- フォーム -------- */}
                    <Grid.Col
                        span={{ base: 12, md: 7 }}
                        order={{ base: 2, md: 2 }}
                    >
                        {/* <Title order={4} c="red.6" mb={4}>
                            *必須内容
                        </Title> */}

                        <form onSubmit={form.onSubmit(handleSubmit)}>
                            <Grid gutter={24}>
                                {/* ハニーポット（画面非表示） */}
                                <Grid.Col span={12}>
                                    <TextInput
                                        label="会社名(入力不要)"
                                        {...form.getInputProps("hp")}
                                        style={{
                                            position: "absolute",
                                            left: -9999,
                                            width: 1,
                                            height: 1,
                                            overflow: "hidden",
                                        }}
                                        tabIndex={-1}
                                        aria-hidden="true"
                                    />
                                </Grid.Col>

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
                                        type="email"
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
                                            "DX コンサルティング",
                                            "システム開発",
                                            "オフショア開発",
                                            "協業・提携・その他営業など",
                                            "視察ツアー",
                                            "その他",
                                        ]}
                                        value={form.values.purpose}
                                        onChange={(v) =>
                                            form.setFieldValue(
                                                "purpose",
                                                v || ""
                                            )
                                        }
                                        error={form.errors.purpose}
                                    />
                                </Grid.Col>

                                {/* メッセージ */}
                                <Grid.Col span={12}>
                                    <Textarea
                                        withAsterisk
                                        minRows={6}
                                        label="内容"
                                        placeholder="メッセージの内容を入力してください。"
                                        {...form.getInputProps("message")}
                                    />
                                </Grid.Col>

                                {/* プライバシーポリシー（必須） */}
                                <Grid.Col span={12}>
                                    <Checkbox
                                        required
                                        label={
                                            <>
                                                <span
                                                    style={{
                                                        color: "red",
                                                        marginRight: 4,
                                                    }}
                                                >
                                                    *
                                                </span>
                                                会社のプライバシーポリシーに同意します。
                                            </>
                                        }
                                        {...form.getInputProps("agree", {
                                            type: "checkbox",
                                        })}
                                    />
                                    {form.errors.agree && (
                                        <Text c="red.6" size="sm" mt={6}>
                                            {form.errors.agree}
                                        </Text>
                                    )}
                                </Grid.Col>

                                {/* 送信ボタン */}
                                <Grid.Col span={12}>
                                    <Group justify="flex-start">
                                        <Button
                                            type="submit"
                                            size="md"
                                            radius="xl"
                                            loading={sending}
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

                            {/* Invisible reCAPTCHA（画面には出さない） */}
                            <ReCAPTCHA
                                ref={recaptchaRef}
                                sitekey={
                                    import.meta.env
                                        .VITE_RECAPTCHA_SITE_KEY as string
                                }
                                size="invisible"
                            />
                        </form>
                    </Grid.Col>
                </Grid>
            </Box>

            <Box w={"100%"} h={"100%"} bg={"blue.9"}>
                <Image
                    src={import.meta.env.BASE_URL + "/logo-ft.svg"}
                    mx={"auto"}
                    w={210}
                    py={40}
                    mt={40}
                />

                <Box w={"90%"} mx={"auto"} c={"white"}>
                    <Text>サービス</Text>
                </Box>
            </Box>
        </>
    );
};

export default FoooterPhone;
