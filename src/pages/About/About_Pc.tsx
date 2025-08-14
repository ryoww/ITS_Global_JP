import { Box, Flex, Image, Stack } from "@mantine/core";
import { MetricsSection } from "../../components/About/Metrics";
import AboutCompany from "../../components/About/About_Company";
import CeoMessage from "../../components/About/About_CEO";
import VisionMissionAndValues from "../../components/About/Vision";
import WhyChooseITS from "../../components/About/WhyChoose";
import ValuesCultureSection from "../../components/About/Fhoto";

const AboutPc: React.FC = () => {
    return (
        <>
            <Stack w={"100%"} h={"100%"} justify="center" align="center">
                <Image src={"/about/banner-about.jpg"} alt="About Banner" />

                <Flex w={"85%"} h={"100%"} mt={80}>
                    <Box w={"50%"}>
                        <MetricsSection />
                    </Box>
                    <Box w={"50%"}>
                        <Image
                            src={"/about/img_about1.png"}
                            alt="ITS Global"
                            h={"100%"}
                        />
                    </Box>
                </Flex>

                <AboutCompany />

                <CeoMessage />

                <VisionMissionAndValues />

                <WhyChooseITS />

                <ValuesCultureSection />
            </Stack>
        </>
    );
};

export default AboutPc;
