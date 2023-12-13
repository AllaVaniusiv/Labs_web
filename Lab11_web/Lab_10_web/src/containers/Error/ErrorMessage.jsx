import { CloseButton, ErrorText, ErrorsContainer } from "../Checkout/Checkout.styled";

const ErrorMessage = (text, { setErrorsText }) => {
    if (text.length) {
        return (
            <ErrorsContainer>
                <div>
                    {text.map((errorText) => (
                        <ErrorText>{errorText}</ErrorText>
                    ))}
                </div>
                <CloseButton onClick={() => {setErrorsText([])}}>Close</CloseButton>
            </ErrorsContainer>
        );
    }
}

export default ErrorMessage;