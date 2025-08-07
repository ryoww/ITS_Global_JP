import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import About from "./pages/About";
import DxSolution from "./pages/services/DxSolution";
import FlutterAndHybrid from "./pages/services/FlutterAndHybrid";
import SapAndErp from "./pages/services/SapAndErp";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Home from "./pages/Home/Home";

const App: React.FC = () => {
    return (
        <>
            <Routes>
                <Route element={<Header />}>
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
