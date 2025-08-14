import { Route, Routes } from "react-router-dom";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Home from "./pages/Home/Home";
import Layout from "./Layout";
import About from "./pages/About/About";
import FlutterAndHybridService from "./pages/Services/Flutter/Flutter-and-Hybrid";
import DxSolution from "./pages/Services/DX/DXSolution";
import SAP from "./pages/Services/SAP/SAP";
import "@mantine/carousel/styles.css";

const App: React.FC = () => {
    return (
        <>
            <Routes>
                <Route element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route
                        path="/services/dx-solution"
                        element={<DxSolution />}
                    />
                    <Route
                        path="/services/flutter-and-hybrid"
                        element={<FlutterAndHybridService />}
                    />
                    <Route path="/services/sap-and-erp" element={<SAP />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/contact" element={<Contact />} />
                </Route>
            </Routes>
        </>
    );
};

export default App;
