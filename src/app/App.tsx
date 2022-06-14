import { Route, Routes } from "react-router-dom";
import { GotPage } from "../pages/gotPage";
import "./App.css";

export function App() {
    return (
        <Routes>
            <Route path="" element={<GotPage />}></Route>
            {/* <Route path="/form" element={<FormPage />}></Route> */}
        </Routes>
    );
}
