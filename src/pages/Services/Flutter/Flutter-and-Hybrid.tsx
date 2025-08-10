import React, { use } from "react";
import useResponsive from "../../../hooks/useResponsive";
import FlutterPhone from "./FlutterPhone";
import FlutterPc from "./FlutterPc";

const FlutterAndHybridService: React.FC = () => {
    const isPhone = useResponsive();

    return <>{isPhone ? <FlutterPhone /> : <FlutterPc />}</>;
};

export default FlutterAndHybridService;
