import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import AboutUs from "./AboutUs";
import Cart from "./Cart";
import ContactUs from "./ContactUs";
import History from "./History";
import Home from "./Home";
import NonVeg from "./NonVeg";
import Veg from "./Veg";

import './App.css'
import { useSelector } from "react-redux";
// import GoogleLoginComponent from "./GoogleLoginComponent";
// import { GoogleOAuthProvider } from "@react-oauth/google";

function App(){

    const cart = useSelector((state) => state.cart);
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

    return(
        <>
        
            <BrowserRouter>
            <nav>
                <Link to='/Home'>Home</Link>
                <Link to='/Veg'>Veg</Link>
                <Link to='/NonVeg'>NonVeg</Link>
                <Link to='/Cart'>Cart{totalItems}</Link>
                <Link to='/History'>History</Link>
                <Link to='/ContactUs'>ContactUs</Link>
                <Link to='/AboutUs'>AboutUs</Link>
            </nav>

          

                <Routes>
                    <Route path="/Home" element={<Home/>}/>
                    <Route path="/Veg" element={<Veg/>}/>
                    <Route path="/NonVeg" element={<NonVeg/>}/>
                    <Route path="/Cart" element={<Cart/>}/>
                    <Route path="/History" element={<History/>}/>
                    <Route path="/ContactUs" element={<ContactUs/>}/>
                    <Route path="/AboutUs" element={<AboutUs/>}/>
                </Routes>

            </BrowserRouter>
        </>
    )
}
export default App;

{/* <Home />
<Veg />
<NonVeg />
<Cart />
<History />
<ContactUs />
<AboutUs /> */}