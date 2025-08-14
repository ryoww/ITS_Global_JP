import React from "react";
import {
    TestimonialCard,
    type Testimonial,
} from "../../components/Home/TestimonialCard";
import { Stack, Title, Text, Image, Box } from "@mantine/core";
import { ServiceCard } from "../../components/Home/HomeServiceCard";
import { Carousel } from "@mantine/carousel";
import { CompanyCarousel } from "../../components/Home/CompanyCarousel";
import { MetricsSection } from "../../components/Home/MetricsSection";
import HomeCarouselPhone from "../../components/Home/HomeCarouselPhone";

const services = [
    {
        bg: "#005ba6",
        imgSrc: "/home/icon-smartphone.svg",
        alt: "モバイル開発アイコン",
        title: "フラッターとハイブリッドの\nモバイル開発",
        description:
            "ITS グローバル は、先進的なフラッター技術を用いてモバイルアプリの能力を拡張します。多くのプラットフォームに対応する高性能アプリでビジネス革新をサポートします。",
        to: "/services/flutter-and-hybrid",
    },
    {
        bg: "#0088b9",
        imgSrc: "/home/icon-cart.svg",
        alt: "小売DXアイコン",
        title: "物流および小売向けDXソリューション",
        description:
            "ITS グローバルの物流および小売向けDXソリューションは、サプライチェーンの効率を向上させ、顧客体験を改善します。",
        to: "/services/dx-solution",
    },
    {
        bg: "#009e9b",
        imgSrc: "/home/icon-sap.svg",
        alt: "ERPアイコン",
        title: "SAPコンサルティングとERPの展開",
        description:
            "ITSグローバルERP専門家によるSAPコンサルティングと展開で、貴社の円滑な運営をサポートします。カスタマイズされたSAPソリューションを使用し、ビジネスリソース管理の精度と意思決定を改善します。",
        to: "/services/sap-and-erp",
    },
];

const TESTIMONIALS: Testimonial[] = [
    {
        logo: "/home/icon-ibis.png",
        company: "株式会社IBIS",
        message:
            "「顧客を獲得と売上増加のため、当社は人材を増やす必要がありますが、日本でエンジニアを雇うことが非常に難しい状況です。そのため、外国のソフトウェア開発企業と連携を試みました。その結果、ITS グローバルの品質、コスト、能力に非常に満足しています。」",
    },
    {
        logo: "/home/icon-ysl.png",
        company: "株式会社YSL Solution",
        message:
            "「日本でのIT人材の採用コストが増加しているため、プロジェクトはすべて収益を上げていません。そのため、日本語でコミュニケーションが可能で、かつ費用対効果の高い外国の開発企業を探しました。」",
    },
    {
        logo: "/home/icon-ops.png",
        company: "株式会社Ops Inn",
        message:
            "「顧客を獲得と売上増加のため、当社は人材を増やす必要がありますが、日本でエンジニアを雇うことが非常に難しい状況です。そのため、外国のソフトウェア開発企業と連携を試みました。その結果、ITS グローバルの品質、コスト、能力に非常に満足しています。」",
    },
];

const HomePhone: React.FC = () => {
    return (
        <>
            <HomeCarouselPhone />

            <Stack gap="sm" w={"90%"} mx={"auto"} mt={20}>
                <Title
                    order={2}
                    c="blue.8"
                    fw={700}
                    style={{ letterSpacing: "0.05em" }}
                >
                    私たちは
                </Title>

                <Text
                    component="p"
                    fw={700}
                    style={{ fontSize: 20, lineHeight: 1.3 }}
                    w={"90%"}
                >
                    <Text component="span" inherit>
                        {/* I */}
                        <Text component="span" inherit c="blue.7">
                            I
                        </Text>
                        nnovative&nbsp;
                        {/* T */}
                        <Text component="span" inherit c="blue.7">
                            T
                        </Text>
                        echnology&nbsp;
                        {/* S */}
                        <Text component="span" inherit c="blue.7">
                            S
                        </Text>
                        olutions
                    </Text>{" "}
                    です。
                </Text>

                {/* 本文 */}
                <Text size="md" lh={1.8}>
                    ビジネス環境がますます複雑化し急速に変化する中、企業の成功にとって、第四次産業革命の可能性を適応し活用することは非常に重要です。
                    ITS GLOBAL
                    は情報技術分野の先駆者として、未来を見据えたデジタルトランスフォーメーションソリューションを提供し、貴社の発展を促進するために共に歩むことをお約束します。
                    <br />
                    当社は2017年に創業され、日本の企業向けに情報技術ソリューションを開発してきた経験豊富で情熱的な創業チームによって作られました。
                    ITS GLOBAL
                    は常に顧客のニーズと利益を最優先に考え、効果・品質・コストにおいて最適なソリューションを提供します。
                </Text>
            </Stack>

            <Image
                src={import.meta.env.BASE_URL + "/home/its1.png"}
                mt={50}
                w={"90%"}
                h={"100%"}
                mx={"auto"}
            />
            <Box mx={"auto"} w={"90%"}>
                <Title
                    mt={60}
                    mb={30}
                    order={1}
                    c="blue.8"
                    fw={700}
                    style={{ letterSpacing: "0.05em" }}
                    ta={"center"}
                >
                    サービス
                </Title>

                <Text ta="center" size="md" w={"90%"} mx={"auto"}>
                    ITSはオフショア形式でソフトウェアサービスを開発する専門企業です。
                    高い技術力を持つ私たちは、多様な顧客のニーズに応える多くの製品を提供してきました。
                </Text>

                <Carousel mt={20}>
                    {services.map((s) => (
                        <Carousel.Slide key={s.title}>
                            <ServiceCard key={s.title} {...s} />
                        </Carousel.Slide>
                    ))}
                </Carousel>

                <Title
                    mt={60}
                    mb={30}
                    order={1}
                    c="blue.8"
                    fw={700}
                    style={{ letterSpacing: "0.05em" }}
                    ta={"center"}
                >
                    主な取引先
                </Title>
            </Box>

            <CompanyCarousel />

            <MetricsSection />

            <Title
                mt={60}
                mb={30}
                order={1}
                c="blue.8"
                fw={700}
                style={{ letterSpacing: "0.05em" }}
                ta={"center"}
            >
                お客様の評価
            </Title>

            <Carousel mt={20} w={"90%"} mx="auto">
                {TESTIMONIALS.map((t) => (
                    <Carousel.Slide key={t.company}>
                        <TestimonialCard key={t.company} {...t} />
                    </Carousel.Slide>
                ))}
            </Carousel>
        </>
    );
};
export default HomePhone;
