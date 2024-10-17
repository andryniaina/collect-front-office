import {Routes, Route } from "react-router-dom";
import FormScreen from "../screens/FormScreen";

const MainRoutes = () => {
    return (
        <Routes>
            <Route path="/:id" element={<FormScreen />} />
        </Routes>
    )
}

export default MainRoutes;