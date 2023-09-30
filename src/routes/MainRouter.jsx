import { BrowserRouter, Routes, Route } from "react-router-dom";
import MiNavBar from "../components/navbar/NavBar";
import Home from "../pages/Home"
import Category from "../pages/Category";
import Item from "../pages/Item";


const MainRouter = () => {

    return (
        <BrowserRouter>
            <MiNavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/category/:categoryid" element={<Category />} />
                <Route path="/item/:itemid" element={<Item />} />
            </Routes>
        </BrowserRouter>
    )

}

export default MainRouter