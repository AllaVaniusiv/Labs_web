import styled from "styled-components";


export const SuccessPageContainer = styled.div`
    padding: 150px 350px;
`;

export const Icons = styled.img`
    display: flex;
    margin: 0 auto;
    width: 200px;
    height: 200px;
`;

export const SuccessHeader = styled.h1`
    margin: 0;
    text-align: center;
    color: #474747;
    padding: 40px 0;
`;

export const SuccessDescription = styled.h2`
    margin: 0;
    color: pink;
    text-align: center;
    font-size: 15px;
    font-weight: 500;
`;

export const GoBackButton = styled.button`
    display: flex;
    text-decoration: none;
    border: 2px solid grey;
    border-radius: 10px;
    color: white;
    margin-top: 120px;
    margin-left: auto;
    margin-right: auto;
    padding: 10px 35px;
    background-color: #544b4c;
    font-size: 16px;
    font-weight: 500;
    text-align: center;
    cursor: pointer;
    &:hover {
        background-color: #a560c3 !important;
    }
  
    &:active {
        background-color: #ca63da !important;
    }
`;