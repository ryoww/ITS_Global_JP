import React from "react";
import useResponsive from "../../hooks/useResponsive";
import HomePc from "./Home_Pc";
import HomePhone from "./Home_Phone";

const Home: React.FC = () => {
    const { isPhone } = useResponsive();

    return <>{isPhone ? <HomePhone /> : <HomePc />}</>;
};

export default Home;
