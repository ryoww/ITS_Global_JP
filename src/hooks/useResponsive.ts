import useWidth from "./useWidth";

const useResponsive = () => {
    const width = useWidth();

    return {
        isPhone: width <= 900,
        isTablet: width > 900 && width <= 1535,
        isPC: width > 1535,
    };
};

export default useResponsive;
