import React from "react";
import { Card } from "antd";
import { Footer, CardItemWrapper } from "./CardItem.styled";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import { useNavigate } from "react-router-dom";

const MAX_TEXT_LEN = 200;

const { Meta } = Card;

const CardItem = ({ title = 'No title.', text = 'No text', imageSrc, price, id }) => {
    const navigate = useNavigate();

    return (
        <CardItemWrapper>
            <Card
                hoverable
                style={{ width: 350, borderRadius: "20px" }}
                cover={
                    <img style={{ borderRadius: "20px" }} alt="example" src={imageSrc} />
                }
            >
                <Meta title={title} description={text.length > MAX_TEXT_LEN ? `${text.substring(0, MAX_TEXT_LEN)}...` : text} />
                <Footer>
                    <p>{price} UAH</p>
                    <PrimaryButton onClick={() => navigate(`/item/${id}`)}>Show More</PrimaryButton>
                </Footer>
            </Card>
        </CardItemWrapper>
    );
};

export default CardItem;