import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "../Home/Home";
import Catalog from "../Catalog/Catalog";
import Layout from "../App/Layout/Layout";
import ItemPage from "../ItemPage/ItemPage";
import { ItemContext } from "../../context/Items";

const data = [
    {
        id: "1",
        title: "HP LaserJet Pro M15w Wireless Printer",
        text: `The HP LaserJet Pro M15w is a compact wireless monochrome printer designed for small spaces and easy printing from virtually anywhere. It offers fast printing speeds, wireless connectivity, and energy-saving features, making it an ideal choice for personal or small office use.`,
        image: require("../../icons/printer4.jpg"),
        price: 7580,
        category: "led",
        quantity: 28,
    },
    {
        id: "2",
        title: "HP DeskJet 3755 All-in-One Printer",
        text: `The HP DeskJet 3755 is a space-saving all-in-one printer designed to fit your space and life. It allows wireless printing, scanning, and copying. With a compact design and vibrant color options, it's suitable for modern, dynamic spaces.`,
        image: require("../../icons/printer5.jpg"),
        price: 5690,
        category: "laser",
        quantity: 45,
    },
    {
        id: "3",
        title: "HP OfficeJet 250 All-in-One Portable Printer",
        text: `The HP OfficeJet 250 is a portable all-in-one printer designed for on-the-go professionals. It offers printing, scanning, and copying in a compact, mobile form factor. With a long-lasting battery and wireless connectivity, it's perfect for those needing printing capabilities while traveling.`,
        image: require("../../icons/printer6.jpg"),
        price: 10500,
        category: "inkjet",
        quantity: 30,
    },
    {
        id: "4",
        title: "HP ENVY 5055 Wireless All-in-One Printer",
        text: `The HP ENVY 5055 is an all-in-one printer built for printing high-quality photos and documents. It supports wireless printing, double-sided printing, and quick setup with the HP Smart app, making it a versatile and user-friendly choice for home use.`,
        image: require("../../icons/printer7.jpg"),
        price: 12350,
        category: "laser",
        quantity: 25,
    },
    {
        id: "5",
        title: "HP Color LaserJet Pro MFP M281fdw",
        text: `The HP Color LaserJet Pro MFP M281fdw is a multifunction color laser printer ideal for small to medium-sized businesses. It offers fast printing, scanning, copying, and faxing, along with automatic double-sided printing and wireless connectivity.`,
        image: require("../../icons/printer8.jpg"),
        price: 7830,
        category: "led",
        quantity: 50,
    },
    {
        id: "6",
        title: "HP OfficeJet Pro 8025 All-in-One Printer",
        text: `The HP OfficeJet Pro 8025 is an all-in-one printer designed for productivity with smart tasks and the ability to print, scan, copy, and fax. It features automatic double-sided printing and is equipped for easy mobile printing and connectivity.`,
        image: require("../../icons/printer9.jpg"),
        price: 9565,
        category: "inkjet",
        quantity: 5,
    },
    {
        id: "7",
        title: "HP Tango X Smart Home Printer",
        text: `The HP Tango X is a smart home printer with a sleek design and voice-activated printing capabilities. It enables wireless, cloud-based printing and scanning from virtually anywhere. With its minimalist design, it blends seamlessly into modern home decor.`,
        image: require("../../icons/printer10.jpg"),
        price: 8950,
        category: "laser",
        quantity: 10,
    },

];

function Navigation() {

    return (
        <div>
            <Layout />
            <ItemContext.Provider value={data}>
                <Routes>
                    <Route path="/" element={<Home />} key="/" />
                    <Route path="/catalog" element={<Catalog />} key="/catalog" />
                    <Route path="/cart" element={<h1>Cart</h1>} key="/cart" />
                    <Route path="/item/:itemId" element={<ItemPage />} key="/cart" />
                    <Route path="/*" element={<Navigate to="/" />} key="/*" />
                </Routes>
            </ItemContext.Provider>
        </div>

    );
}

export default Navigation;
