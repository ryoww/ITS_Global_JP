import React from "react";
import useResponsive from "../../../hooks/useResponsive";
import SapPhone from "./SapPhone";
import SapPc from "./SapPc";

const SAP: React.FC = () => {
    const { isPhone } = useResponsive();

    return <>{isPhone ? <SapPhone /> : <SapPc />}</>;
};

export default SAP;
