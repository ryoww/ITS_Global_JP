import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Header from "./components/Header";

const App: React.FC = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Header />}>
                    <Route index element={<Home />} />
                </Route>
            </Routes>
        </>
    );
};

export default App;
