import React from "react";
import ArduinoImg from "../../icons/printer_header.jpg"
import ArduinoMegaImg from "../../icons/printer1.jpg";
import SIM7600E from "../../icons/printer2.jpg";
import OLED_disp from "../../icons/printer3.jpg";
import { HomeWrapper, DesctriptionWrapper, CardsWrapper, ButtonWrapper } from "./Home.styled";
import { Card, Button } from "antd";
import CardItem from "../../components/CardItem/CardItem";

const { Meta } = Card;

const data = [
    {
        title: "LASER PRINTER HP LASERJET 107A (4ZB77A)",
        text: "Thanks to the consistent quality and good price of original HP products, it makes no sense to buy fake consumables ...",
        image: Printer1,
        price: 6499,
    },
    {
        title: "PANTUM P3010D LASER PRINTER",
        text: "Save energy with HP Auto-On/Auto-Off technology This printer is a compact and inexpensive monochrome ...",
        image: Printer2,
        price: 6928,
    },
    {
        title: 'CANON LBP-6030B (8468B006) ',
        text: "This printer is a compact and inexpensive monochrome laser printer that is great for home or small office use ...",
        image: Printer3,
        price: 6699,
    },
];

function Home() {
    return (
        <HomeWrapper>
            <DesctriptionWrapper>
                <img src={ArduinoImg} alt=""/>
                <div>
                    <h2>What is Printer</h2>
                    <p>A printer is a device used to create physical copies of documents and graphic images on paper or other data carriers. Printers are used in both home and office settings to print text, images, photos, and other content.There are different types of printers such as inkjet, laser, dot matrix and photo printers, each with its own characteristics and advantages.</p>
                </div>
            </DesctriptionWrapper>
            <h2>Our recommendations for you</h2>
            <CardsWrapper>
                {data.map(({ title, text, image, price }, idx) => (
                    <CardItem
                        title={title}
                        text={text}
                        imageSrc={image}
                        price={price}
                        id={idx}
                    />
                ))}
            </CardsWrapper>
            <ButtonWrapper>
                <Button styles={{}} size="large">View more</Button>
            </ButtonWrapper>
        </HomeWrapper>
    );
}

export default Home;
