import { useDispatch, useSelector } from "react-redux";
import {
    CategoryWrapper, ItemContainer,
    SubmitContainer, Title, TotalPriceContainer, TotalPriceText, UAHText, StyledButton, ContinueCartButton
} from "./Cart.styled";
import DownloadImage from "../../components/Image/DownloadImage";
import { Link } from 'react-router-dom';
import { increaseQuantity, decreaseQuantity, deletePrinter } from "../../Redux/actions";

const CartPage = () => {

    const printers = useSelector((state) => state.printers);
    const dispatch = useDispatch();

    const handleIncreaseQuantity = (printerState) => {
        if (printerState.quantity < printerState.printer.quantity) {
            dispatch(increaseQuantity(printerState.printer.id));
        }
    }

    const handleDecreaseQuantity = (printerState) => {
        if (printerState.quantity > 1) {
            dispatch(decreaseQuantity(printerState.printer.id));
        } else {
            dispatch(deletePrinter(printerState.printer.id));
        }
    }

    return (
        <div>
            <div style={{ margin: '0 auto' }}>
                {printers.length === 0 ? (
                    <p style={{ fontSize: '50px' }}>Cart is empty</p>
                ) : (
                    printers.map((printerState) => (
                        <div key={printerState.printer.id}>
                            <div>
                                <Title>
                                    <Link to={`/item/${printerState.printer.id}`}>{printerState.printer.title}</Link>
                                </Title>
                                <ItemContainer>
                                    <DownloadImage imageName={printerState.printer.image} />
                                    <div>
                                        <CategoryWrapper>
                                            <Link to={`/item/${printerState.printer.id}`}>{printerState.printer.category}</Link>
                                        </CategoryWrapper>
                                        <SubmitContainer>
                                            <h3>{printerState.printer.price} UAH</h3>
                                            <div>
                                                <h3>{printerState.quantity}</h3>
                                                <StyledButton onClick={() => handleIncreaseQuantity(printerState)}>+</StyledButton>
                                                <h3>price: {printerState.printer.price * printerState.quantity} UAH </h3>
                                                <StyledButton onClick={() => handleDecreaseQuantity(printerState)}>-</StyledButton>
                                            </div>
                                            <br />
                                        </SubmitContainer>
                                    </div>
                                </ItemContainer>
                            </div>
                        </div>
                    ))
                )}
            </div>
            <div style={{ margin: '60px auto' }}>
                {printers.length > 0 && (
                    <div style={{ margin: '60px auto' }}>
                        <Link to="/checkout">
                            <ContinueCartButton type="primary">Continue</ContinueCartButton>
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CartPage;