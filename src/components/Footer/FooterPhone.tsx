import React, { useEffect, useRef, useState } from "react";
import {
    Box,
    Button,
    Checkbox,
    Divider,
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
import { UnderlineLabel } from "./UnderlineLabel";
import { Link } from "react-router-dom";
import { OfficeCard } from "./OfficeCard";

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
                mb={30}
                fw={700}
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
                                src={"/footer/img-contact.jpg"}
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

            <Box w={"100%"} h={"100%"} bg={"blue.9"} pb={20}>
                <Image
                    src={"/logo-ft.svg"}
                    mx={"auto"}
                    w={210}
                    py={40}
                    mt={40}
                />
                <Box w={"90%"} mx={"auto"} c={"white"}>
                    <UnderlineLabel>サービス</UnderlineLabel>
                    <Box
                        component={Link}
                        to="/services/flutter-and-hybrid"
                        c={"white"}
                        style={{ textDecoration: "none" }}
                    >
                        <Text mt={5}>モバイルアプリケーション開発</Text>
                    </Box>

                    <Box
                        component={Link}
                        to="/services/dx-solution"
                        c={"white"}
                        style={{ textDecoration: "none" }}
                    >
                        <Text mt={5}>DXソリューション</Text>
                    </Box>
                    <Box
                        component={Link}
                        to="/services/dx-solution"
                        c={"white"}
                        style={{ textDecoration: "none" }}
                    >
                        <Text mt={5}>SAPコンサルティングとERP導入</Text>
                    </Box>
                </Box>

                <Box w={"90%"} mx={"auto"} c={"white"} mt={20}>
                    <UnderlineLabel>会社</UnderlineLabel>
                    <Box
                        component={Link}
                        to="/about"
                        c={"white"}
                        style={{ textDecoration: "none" }}
                    >
                        <Text mt={5}>会社情報</Text>
                    </Box>

                    <Box
                        component={Link}
                        to="/contact"
                        c={"white"}
                        style={{ textDecoration: "none" }}
                    >
                        <Text mt={5}>お問い合わせ</Text>
                    </Box>
                </Box>

                <Box
                    mt={40}
                    px="lg"
                    py="md"
                    w={"100%"}
                    // Mantine の CSS 変数を使うとテーマ連動します
                    style={{
                        borderTop: "1px solid var(--mantine-color-gray-3)",
                        borderBottom: "1px solid var(--mantine-color-gray-3)",
                        // 論理プロパティでまとめて書くなら：
                        // borderBlock: "1px solid var(--mantine-color-gray-3)",
                    }}
                >
                    <Box w={"100%"}>
                        <OfficeCard
                            country="VN"
                            city="ハノイ"
                            address="2F Tower 1-2 Dolphin Plaza, 6 Nguyen Hoang, My Dinh 2, Ha Noi"
                            phone="(+84)24 73096556"
                            mapSrc="footer/map-ft1.svg"
                            to="https://www.google.co.jp/maps/place/ITS+GLOBAL+SOFTWARE+COMPANY/@21.02996,105.7764731,17z/data=!3m1!4b1!4m6!3m5!1s0x31345569f2a844a7:0xaae59cd1f7f3c787!8m2!3d21.02996!4d105.7764731!16s%2Fg%2F11hhj0_f_r?entry=ttu&g_ep=EgoyMDI1MDgxMS4wIKXMDSoASAFQAw%3D%3D"
                        />

                        <Divider my="sm" variant="dashed" />

                        <OfficeCard
                            country="VN"
                            city="ダナン"
                            address="116 Mai Thuc Lan, Bac My Phu, Ngu Hanh Son, Đa Nang"
                            phone="(+84)24 73096556"
                            mapSrc="footer/map-ft2.svg"
                            to="https://www.google.co.jp/maps/place/its+global+Da+Nang/@16.0510957,108.2398604,17z/data=!4m6!3m5!1s0x3142176097e39dc7:0xeee3811f28b1df83!8m2!3d16.0510906!4d108.2424353!16s%2Fg%2F11k3j37t6n?entry=tts&g_ep=EgoyMDI0MDcyNC4wKgBIAVAD"
                        />

                        <Divider my="sm" variant="dashed" />

                        <OfficeCard
                            country="JP"
                            city="東京"
                            address="〒140-0014 東京都品川区大井1-6-3 アゴーラ大井町3F"
                            phone="(+81)90-6589-9490"
                            mapSrc="footer/map-ft3.svg"
                            to="https://www.google.com/maps/place/%E3%82%A2%E3%82%B4%E3%83%A9%E5%A4%A7%E4%BA%95%E7%94%BA%E3%83%93%E3%83%AB%EF%BC%93%E9%9A%8E/@35.6068613,139.7310031,930m/data=!3m3!1e3!4b1!5s0x60188a7d0dd5d47d:0x865d673297bc52e4!4m6!3m5!1s0x60188bd402848ae5:0x51e47aab3d0f7efd!8m2!3d35.606857!4d139.733578!16s%2Fg%2F11n0cb97_x?entry=tts&g_ep=EgoyMDI0MDcyNC4wKgBIAVAD"
                        />

                        <Divider my="sm" variant="dashed" />

                        <OfficeCard
                            country="JP"
                            city="浜松"
                            address="〒430-0934 静岡県浜松市中央区千歳町９１−１ 遠鉄モール街ビル"
                            phone="(+81)90-1280-2806"
                            mapSrc="footer/map-ft4.png"
                            to="https://www.google.com/maps/place/%E3%80%92430-0934+%E9%9D%99%E5%B2%A1%E7%9C%8C%E6%B5%9C%E6%9D%BE%E5%B8%82%E4%B8%AD%E5%A4%AE%E5%8C%BA%E5%8D%83%E6%AD%B3%E7%94%BA%EF%BC%99%EF%BC%91%E2%88%92%EF%BC%91+%E9%81%A0%E9%89%84%E3%83%A2%E3%83%BC%E3%83%AB%E8%A1%97%E3%83%93%E3%83%AB/@34.7037004,137.7284694,740m/data=!3m2!1e3!4b1!4m6!3m5!1s0x601ade7962cce4a9:0x7ad3a2f503035ceb!8m2!3d34.7037004!4d137.7310443!16s%2Fg%2F11g03pz7w1?entry=ttu&g_ep=EgoyMDI1MDgxMS4wIKXMDSoASAFQAw%3D%3D"
                        />
                    </Box>
                </Box>

                <Text
                    ta="center"
                    size="sm"
                    mt={20}
                    c={"white"}
                    style={{ letterSpacing: "0.05em" }}
                >
                    ©ITS GLOBAL. All rights reserved
                </Text>
            </Box>
        </>
    );
};

export default FoooterPhone;
