import { Image } from "@mantine/core";
import AboutCompany from "../../components/About/About_Company";
import { MetricsSection } from "../../components/About/Metrics";
import CeoMessage from "../../components/About/About_CEO";
import VisionMissionAndValues from "../../components/About/Vision";
import WhyChooseITS from "../../components/About/WhyChoose";
import ValuesCultureSection from "../../components/About/Fhoto";

const AboutPhone: React.FC = () => {
    return (
        <>
            <Image
                w={"100%"}
                h={"100%"}
                src={import.meta.env.BASE_URL + "/about/banner-about.jpg"}
            />

            <MetricsSection />

            <Image
                src={import.meta.env.BASE_URL + "/about/img_about1.png"}
                alt="ITS Global"
                mt={30}
                mx={"auto"}
                w={"90%"}
                h={"100%"}
            />

            <AboutCompany />

            <CeoMessage />

            <VisionMissionAndValues />

            <WhyChooseITS />

            <ValuesCultureSection />
        </>
    );
};

export default AboutPhone;
