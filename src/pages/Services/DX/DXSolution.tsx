import React from "react";
import DxSolutionPhone from "./DXSolutionPhone";
import useResponsive from "../../../hooks/useResponsive";
import DxSolutionPC from "./DXSolutionPC";

const DxSolution: React.FC = () => {
    const { isPhone } = useResponsive();

    return <>{isPhone ? <DxSolutionPhone /> : <DxSolutionPC />}</>;
};

export default DxSolution;
