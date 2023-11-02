import React from "react";
import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom";
import Home from "../Home/Home";

function Navigation() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalog" element={<h1>Catalog</h1>} />
            <Route path="/cart" element={<h1>Cart</h1>} />
            <Route path="/*" element={<Navigate to="/"/>} />
        </Routes>
    );
}

export default Navigation;
