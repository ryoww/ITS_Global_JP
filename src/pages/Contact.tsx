// src/pages/Contact.tsx
import React, { useEffect, useRef, useState } from "react";
import {
    AspectRatio,
    BackgroundImage,
    Box,
    Button,
    Center,
    Checkbox,
    Paper,
    Select,
    Stack,
    TextInput,
    Textarea,
    Title,
} from "@mantine/core";
import { createStyles } from "@mantine/styles";
import { IconChevronDown } from "@tabler/icons-react";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";
import useResponsive from "../hooks/useResponsive";

/*────────────────────────────
  0) 連絡目的（ラベルをそのままデータとして使う）
────────────────────────────*/
const PURPOSE_LABELS = [
    "デジタル変革コンサルティング",
    "DX コンサルティング",
    "システム開発",
    "オフショア開発",
    "協業・提携・その他営業など",
    "視察ツアー",
    "その他",
];

/*────────────────────────────
  1) 共通カード装飾（blur など）
────────────────────────────*/
const useCardStyles = createStyles(() => ({
    card: {
        backdropFilter: "blur(2px)",
        // フォントは後段で動的に上書き
    },
}));

/*────────────────────────────
  2) 共通：下線フィールド生成関数
────────────────────────────*/
const underline = (fontSize: string) => (theme: any) => ({
    input: {
        border: 0,
        borderBottom: `1px solid ${theme.colors.gray[3]}`,
        borderRadius: 0,
        paddingLeft: 0,
        fontSize,
        "&:focus": { borderBottomColor: theme.colors.blue[6] },
    },
    label: { fontSize },
});

/*────────────────────────────
  3) フォーム本体（PC / Phone 共通）
     prop でサイズだけ切り替え
────────────────────────────*/
type FormProps = { isPhone: boolean; classes: { card: string } };

const ContactForm = ({ isPhone, classes }: FormProps) => {
    const fieldSize = isPhone ? "sm" : "md"; // コンポーネント size
    const fontSize = isPhone ? "14px" : "16px"; // テキストサイズ

    // reCAPTCHA v2 Invisible
    const recaptchaRef = useRef<ReCAPTCHA | null>(null);

    // EmailJS 初期化（Public Key）
    useEffect(() => {
        const pubKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as
            | string
            | undefined;
        if (pubKey) emailjs.init({ publicKey: pubKey });
    }, []);

    const [values, setValues] = useState({
        name: "",
        email: "",
        phone: "",
        purpose: "", // ← ラベル文字列をそのまま入れる
        message: "",
        agree: false,
        hp: "", // ← ハニーポット（画面非表示）
    });
    const [sending, setSending] = useState(false);

    const update = (k: keyof typeof values, v: any) =>
        setValues((prev) => ({ ...prev, [k]: v }));

    const handleSubmit = async () => {
        if (sending) return;

        // 必須チェック：内容（message）
        if (!values.message.trim()) {
            alert("内容は必須です。メッセージをご記入ください。");
            return;
        }
        // 必須チェック：連絡目的（purpose はラベル文字列）
        if (!values.purpose.trim()) {
            alert("連絡目的は必須です。選択してください。");
            return;
        }
        // プライバシーポリシー同意
        if (!values.agree) {
            alert("プライバシーポリシーに同意してください");
            return;
        }
        // ハニーポット
        if (values.hp) return;

        try {
            setSending(true);

            // 1) reCAPTCHA v2 (Invisible) 実行 → トークン取得
            const token = await recaptchaRef.current?.executeAsync();
            recaptchaRef.current?.reset();
            if (!token) {
                alert("reCAPTCHAに失敗しました。もう一度お試しください。");
                return;
            }

            // 2) EmailJS 送信（purpose はラベル文字列のまま渡す）
            const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID as string;
            const templateId = import.meta.env
                .VITE_EMAILJS_TEMPLATE_ID as string;

            await emailjs.send(serviceId, templateId, {
                name: values.name,
                email: values.email,
                phone: values.phone,
                purpose: values.purpose, // ← ラベル文字列
                message: values.message,
                subject: `お問い合わせ: ${values.purpose || "未選択"}`,
                // EmailJS の reCAPTCHA 検証で必須のフィールド名
                "g-recaptcha-response": token,
            });

            alert("送信しました。折り返しご連絡いたします。");
            setValues({
                name: "",
                email: "",
                phone: "",
                purpose: "",
                message: "",
                agree: false,
                hp: "",
            });
        } catch (e: any) {
            alert(`送信エラー: ${e?.message ?? e}`);
        } finally {
            setSending(false);
        }
    };

    return (
        <Paper
            className={classes.card}
            radius="lg"
            p={isPhone ? "lg" : "xl"}
            maw={480}
            w="90%"
            shadow="lg"
            bg="rgb(255,255,255)"
            style={{ fontSize }} // ← 全体のベースフォント
        >
            <Stack gap="lg">
                <Title order={3} size={isPhone ? "h3" : "h2"} fw={700}>
                    お問い合わせ
                </Title>

                {/* ハニーポット（CSSやariaで非表示） */}
                <TextInput
                    label="会社名(入力不要)"
                    value={values.hp}
                    onChange={(e) => update("hp", e.currentTarget.value)}
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

                <TextInput
                    withAsterisk
                    label="氏名"
                    placeholder="例: グエン・ヴァン・A"
                    size={fieldSize}
                    styles={underline(fontSize)}
                    value={values.name}
                    onChange={(e) => update("name", e.currentTarget.value)}
                />

                <TextInput
                    withAsterisk
                    label="メール"
                    placeholder="例: contact@mail.com"
                    type="email"
                    size={fieldSize}
                    styles={underline(fontSize)}
                    value={values.email}
                    onChange={(e) => update("email", e.currentTarget.value)}
                />

                <TextInput
                    withAsterisk
                    label="電話番号"
                    placeholder="例: 0123456789"
                    size={fieldSize}
                    styles={underline(fontSize)}
                    value={values.phone}
                    onChange={(e) => update("phone", e.currentTarget.value)}
                />

                <Select
                    withAsterisk
                    label="連絡目的"
                    placeholder="例: デジタル変革コンサルティング"
                    data={PURPOSE_LABELS} // ← 文字列配列（ラベルをそのまま）
                    rightSection={<IconChevronDown size={16} />}
                    size={fieldSize}
                    styles={underline(fontSize)}
                    value={values.purpose || null} // Mantine: 未選択は null
                    onChange={(v) => update("purpose", v ?? "")} // ラベル文字列をそのまま格納
                />

                <Textarea
                    withAsterisk // 必須表示
                    label="内容"
                    placeholder="メッセージを入力してください。"
                    minRows={3}
                    autosize
                    size={fieldSize}
                    styles={underline(fontSize)}
                    value={values.message}
                    onChange={(e) => update("message", e.currentTarget.value)}
                />

                <Checkbox
                    required
                    size={fieldSize}
                    label={
                        <>
                            <span style={{ color: "red", marginRight: 4 }}>
                                *
                            </span>
                            会社のプライバシーポリシーに同意します。
                        </>
                    }
                    checked={values.agree}
                    onChange={(e) => update("agree", e.currentTarget.checked)}
                />

                <Button
                    fullWidth
                    variant="gradient"
                    gradient={{ from: "#195FAA", to: "#00ADAF", deg: 90 }}
                    radius="xl"
                    size={isPhone ? "md" : "lg"}
                    onClick={handleSubmit}
                    loading={sending}
                >
                    送信
                </Button>

                {/* Invisible reCAPTCHA：画面には出ないが実行に必須 */}
                <ReCAPTCHA
                    ref={recaptchaRef}
                    sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY as string}
                    size="invisible"
                />
            </Stack>
        </Paper>
    );
};

/*────────────────────────────
  4) PC レイアウト（フォームを右寄せ）
────────────────────────────*/
const DesktopHero = ({
    bannerSrc,
    classes,
}: {
    bannerSrc: string;
    classes: any;
}) => (
    <AspectRatio ratio={1920 / 1281} w="100%">
        <BackgroundImage src={bannerSrc}>
            {/* 横方向は flex で右寄せ、縦方向は中央揃え */}
            <Box
                h="100%"
                style={{
                    display: "flex",
                    alignItems: "center", // ← 垂直センター
                    justifyContent: "flex-end", // ← 右寄せ
                    paddingRight: "15%", // ← 余白はお好みで
                }}
            >
                <ContactForm isPhone={false} classes={classes} />
            </Box>
        </BackgroundImage>
    </AspectRatio>
);

/*────────────────────────────
  5) スマホレイアウト（高さ固定）
────────────────────────────*/
const PhoneHero = ({
    bannerSrc,
    classes,
}: {
    bannerSrc: string;
    classes: any;
}) => (
    <Box w="100%">
        <Box w="100%" h={945}>
            {/* ← 固定 945px（背景の見せ方はお好みで） */}
            <BackgroundImage
                src={bannerSrc}
                style={{ width: "100%", height: "100%" }}
            />
        </Box>
        <Center mt={-850} mb="xl">
            {/* オーバーラップ演出 */}
            <ContactForm isPhone={true} classes={classes} />
        </Center>
    </Box>
);

/*────────────────────────────
  6) ルートコンポーネント
────────────────────────────*/
const Contact: React.FC = () => {
    const { classes } = useCardStyles();
    const { isPhone } = useResponsive();
    const bannerSrcDesktop = "/contact/banner-contact.png";
    const bannerSrcPhone = "/contact/bg-contact.png";

    return isPhone ? (
        <PhoneHero bannerSrc={bannerSrcPhone} classes={classes} />
    ) : (
        <DesktopHero bannerSrc={bannerSrcDesktop} classes={classes} />
    );
};

export default Contact;
