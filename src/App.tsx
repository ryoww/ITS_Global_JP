import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";

const App: React.FC = () => {
    return (
        <>
            <Routes>
                <Route element={<Header />}>
                    <Route index element={<Home />} />
                </Route>
            </Routes>
        </>
    );
};

export default App;
