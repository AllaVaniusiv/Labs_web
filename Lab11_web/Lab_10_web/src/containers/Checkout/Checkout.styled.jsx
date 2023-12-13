import styled from "styled-components";

export const CheckoutPageContainer = styled.div`
    padding: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #a924b6;
`;

export const CheckoutHeader = styled.h1`
    margin: 0;
    text-align: center;
    color: #474747;
    padding: 0 0 20px 0;
    color: #a924b6;
`;

export const FieldsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
`;

export const FieldContainer = styled.div`
    padding: 10px 0;
    width: 100%;
    max-width: 400px;
`;

export const FieldText = styled.p`
    padding: 0 0 5px 10px;
    margin: 0;
    font-size: 16px;
    font-weight: 500;
`;

export const CheckoutButtonsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding-top: 20px;
`;

export const BackButton = styled.a`
    text-decoration: none;
    border: 2px solid #474747;
    border-radius: 10px;
    padding: 10px 30px;
    color: black;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
        background-color: #ab40c1 !important;
    }

    &:active {
        background-color: #464646 !important;
    }
`;

export const ContinueButton = styled.button`
    text-decoration: none;
    border: 2px solid #474747;
    border-radius: 10px;
    color: white;
    padding: 10px 30px;
    background-color: #474747;
    font-size: 16px;
    font-weight: 500;
    text-align: center;
    cursor: pointer;
    margin-top: 10px;
    &:hover {
        background-color: #1da3a3 !important;
    }

    &:active {
        background-color: #2ca9a9 !important;
    }
`;
export const ErrorsContainer = styled.div`
    padding: 20px;
    margin-top: 20px;
    background-color: #f5b5c5;
    border: 2px solid #ed7e9a;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ErrorText = styled.p`
    color: #d4466a;
    font-size: 16px;
    font-weight: 500;
    margin: 10px 0;
`;

export const CloseButton = styled.button`
    text-decoration: none;
    border: 2px solid #c63458;
    border-radius: 10px;
    color: #e0597b;
    height: 40px;
    background-color: #f5b5c5;
    font-size: 16px;
    font-weight: 500;
    text-align: center;
    cursor: pointer;
    margin-top: 10px;
    &:hover {
        background-color: #f5a6ba !important;
    }

    &:active {
        background-color: #ed7e9a !important;
    }
`;