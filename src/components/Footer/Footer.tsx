import useResponsive from "../../hooks/useResponsive";
import FooterPc from "./FooterPc";
import FoooterPhone from "./FooterPhone";

const Footer: React.FC = () => {
    const { isPhone } = useResponsive();
    return <>{isPhone ? <FoooterPhone /> : <FooterPc />}</>;
};

export default Footer;
