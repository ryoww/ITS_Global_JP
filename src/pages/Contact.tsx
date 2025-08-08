// src/pages/Contact.tsx
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
import useResponsive from "../hooks/useResponsive";

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
                <Title
                    order={3}
                    size={isPhone ? "h3" : "h2"} // 見出しも 1 段階差
                    fw={700}
                >
                    お問い合わせ
                </Title>

                <TextInput
                    withAsterisk
                    label="氏名"
                    placeholder="例: グエン・ヴァン・A"
                    size={fieldSize}
                    styles={underline(fontSize)}
                />

                <TextInput
                    withAsterisk
                    label="メール"
                    placeholder="例: contact@mail.com"
                    type="email"
                    size={fieldSize}
                    styles={underline(fontSize)}
                />

                <TextInput
                    withAsterisk
                    label="電話番号"
                    placeholder="例: 0123456789"
                    size={fieldSize}
                    styles={underline(fontSize)}
                />

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
                    rightSection={<IconChevronDown size={16} />}
                    size={fieldSize}
                    styles={underline(fontSize)}
                />

                <Textarea
                    label="内容"
                    placeholder="メッセージを入力してください。"
                    minRows={3}
                    autosize
                    size={fieldSize}
                    styles={underline(fontSize)}
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
                />

                <Button
                    fullWidth
                    variant="gradient"
                    gradient={{ from: "#195FAA", to: "#00ADAF", deg: 90 }}
                    radius="xl"
                    size={isPhone ? "md" : "lg"} // ボタンも 1 段階差
                >
                    送信
                </Button>
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
            {" "}
            {/* ← 固定 300px */}
            <BackgroundImage
                src={bannerSrc}
                style={{ width: "100%", height: "100%" }}
            />
        </Box>
        <Center mt={-850} mb="xl">
            {" "}
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
    const bannerSrcDesktop =
        import.meta.env.BASE_URL + "contact/banner-contact.png";
    const bannerSrcPhone = import.meta.env.BASE_URL + "contact/bg-contact.png";

    return isPhone ? (
        <PhoneHero bannerSrc={bannerSrcPhone} classes={classes} />
    ) : (
        <DesktopHero bannerSrc={bannerSrcDesktop} classes={classes} />
    );
};

export default Contact;
