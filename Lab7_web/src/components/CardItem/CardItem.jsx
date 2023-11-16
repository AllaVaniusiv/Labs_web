import React from "react";
import { Card } from "antd";
import { Footer, CardItemWrapper } from "./CardItem.styled";
import PrimaryButton from "../PrimaryButton/PrimaryButton";

const { Meta } = Card;

const CardItem = ({ title = 'No title.', text, imageSrc, price }) => (
    <CardItemWrapper>
        <Card
            hoverable
            style={{ width: 350, borderRadius: "20px" }}
            cover={
                <img style={{ borderRadius: "20px" }} alt="example" src={imageSrc} />
            }
        >
            <Meta title={title} description={text} />
            <Footer>
                <p>{price} UAN</p>
                <PrimaryButton>Show More</PrimaryButton>
            </Footer>
            </Card>
    </CardItemWrapper>
);

export default CardItem;