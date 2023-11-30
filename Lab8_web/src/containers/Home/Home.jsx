import React, { useContext, useState } from "react";
import PrinterImg from "../../icons/printer_header.jpg"
import { HomeWrapper, DesctriptionWrapper, CardsWrapper, ButtonWrapper } from "./Home.styled";
import CardItem from "../../components/CardItem/CardItem";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
import { ItemContext } from "../../context/Items";

let currentItemCount = 3;

function Home() {
    const data = useContext(ItemContext);

    const [itemsToDisplay, setItemsToDisplay] = useState(data
        .slice(0, currentItemCount));
    const [buttonLabel, setButtonLabel] = useState("View more")

    const showMore = (e) => {
        e.preventDefault();
        if (currentItemCount < data.length) {
            currentItemCount += 3;
        } else {
            currentItemCount = 3;
        }
        console.log(currentItemCount);
        setItemsToDisplay(data
            .slice(0, currentItemCount));
        if (currentItemCount >= data.length) {
            setButtonLabel("View less");
        } else {
            setButtonLabel("View more");
        }
    }

    const homePageContent = {
        title: 'What is Printer',
        text: 'A printer is a device used to create physical copies of documents and graphic images on paper or other data carriers. Printers are used in both home and office settings to print text, images, photos, and other content.There are different types of printers such as inkjet, laser, dot matrix and photo printers, each with its own characteristics and advantages.'
    }


    return (
        <HomeWrapper>
            <DesctriptionWrapper>
                <img src={PrinterImg} alt="" />
                <div>
                    <h2>{homePageContent.title}</h2>
                    <p>{homePageContent.text}</p>
                </div>
            </DesctriptionWrapper>
            <h2>Our recommendations for you</h2>
            <CardsWrapper>
                {itemsToDisplay.map(({ title, text, image, price, id }, idx) => (
                    <CardItem
                        title={title}
                        text={text}
                        imageSrc={image}
                        price={price}
                        id={id}
                        key={id}
                    />
                ))}
            </CardsWrapper>
            <ButtonWrapper>
                <PrimaryButton onClick={showMore} size="large">{buttonLabel}</PrimaryButton>
            </ButtonWrapper>
        </HomeWrapper>
    );
}

export default Home;
