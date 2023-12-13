import styled from 'styled-components';

export const ItemContainer = styled.div`
    display: flex;
    margin-bottom: 10px;
    margin-left: 100px;
    img {
        margin: 0 100px;
        width: 400px;
        border-radius: 50px;
        transition: transform 0.3s; 
        &:hover {
            transform: scale(1.1); 
        }
    }
`;

export const StyledButton = styled.button`
    background-color: #4f9b7f;
    color: white;
    border: none;
    font-size: 25px;
    border-radius: 10px;
    padding: 5px 10px;
    margin: 0 5px;
    cursor: pointer;
`;

export const ContinueCartButton = styled.button`
    background-color: pink;
    color: white;
    border: none;
    font-size: 25px;
    border-radius: 15px;
    padding: 10px 20px;
    margin-left: 1250px;
    cursor: pointer;
`;

export const SubmitContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin: 0 0px;

    h3 {
        margin: 0 10px;
    }

    div {
        display: flex;
        align-items: center;
    }

    ${StyledButton} {
        margin: 0 5px;
    }

    p {
        margin-top: 0px;
    }
`;

export const CategoryWrapper = styled.div`
    display: flex;
    a {
        margin: 50px 5px;
        color: white;
        background: #4f9b7f;
        font-size: 25px;
        text-decoration: none;
        border: 1px solid white;
        border-radius: 15px;
        padding: 2px 10px;
        text-align: center;
        font-weight: normal;
    }
`;

export const SelectsWrapper = styled.div`
    display: flex;
    div>div {
        margin: 0 10px;
    }
    div>p {
        margin: 0 10px;
    }
`;

export const Title = styled.h1`
    margin-left: 200px;
    font-style: italic; 
    font-weight: normal; 
`;

export const Description = styled.p`
    white-space: pre-wrap;
`;

export const DescriptionContainer = styled.div`
    margin: 0 300px 0 200px;
    font-style: italic;
`;
export const TotalPriceContainer = styled.div`
    margin: 60px auto;
`;

export const TotalPriceText = styled.h2`
    margin-right: 10px;
    display: inline;
    font-weight: normal;
`;

export const UAHText = styled.span`
    margin-left: 3px;
    font-size: 22px; 
`;
