import useResponsive from "../../hooks/useResponsive";
import AboutPc from "./About_Pc";
import AboutPhone from "./About_Phone";

const About: React.FC = () => {
    const { isPhone } = useResponsive();

    return <>{isPhone ? <AboutPhone /> : <AboutPc />}</>;
};

export default About;
