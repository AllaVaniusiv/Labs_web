import { useNavigate } from "react-router-dom";
import { GoBackButton, SuccessDescription, SuccessHeader, SuccessPageContainer, Icons } from "./Success.styled";



function SuccessPage() {
    const navigate = useNavigate();

    return (
        <SuccessPageContainer>
            <Icons src={require("../../icons/success_icon.png")} alt="Success"></Icons>
            <SuccessHeader>Success!</SuccessHeader>
            <SuccessDescription>
                Your order was sent to processing!<br/>
                Check your email box for further information.
            </SuccessDescription>
            <GoBackButton onClick={() => {navigate('/catalog')}}>Go back to Catalog</GoBackButton>
        </SuccessPageContainer>
    );
}

export default SuccessPage;