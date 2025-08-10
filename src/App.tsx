import { Route, Routes } from "react-router-dom";
import DxSolution from "./pages/services/DxSolution";
import FlutterAndHybrid from "./pages/services/FlutterAndHybrid";
import SapAndErp from "./pages/services/SapAndErp";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Home from "./pages/Home/Home";
import Layout from "./Layout";
import About from "./pages/About/About";

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
                        element={<FlutterAndHybrid />}
                    />
                    <Route
                        path="/services/sap-and-erp"
                        element={<SapAndErp />}
                    />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/contact" element={<Contact />} />
                </Route>
            </Routes>
        </>
    );
};

export default App;
