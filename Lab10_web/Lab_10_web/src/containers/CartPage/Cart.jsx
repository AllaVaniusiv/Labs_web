import { useDispatch, useSelector } from "react-redux";
import { CategoryWrapper, Description, DescriptionContainer, ItemContainer, SubmitContainer, Title } from "./Cart.styled";
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
                {printers.map((printerState) => (
                    <div key={printerState.printer.id}>
                        <div>
                            {/* <h3>id: {printerState.printer.id}</h3> */}
                            <Title>{printerState.printer.title}</Title>
                            <ItemContainer>
                                <DownloadImage imageName={printerState.printer.image} />
                                <div>
                                    <CategoryWrapper>
                                        <Link to="#">{printerState.printer.category}</Link>
                                    </CategoryWrapper>
                                    <SubmitContainer>
                                        <h3>{printerState.printer.price} UAH</h3>
                                        <div>
                                            <h3>Redux quantity: {printerState.quantity}</h3>
                                            <button onClick={() => handleIncreaseQuantity(printerState)}>+</button>
                                            <h3>price with Redux: {printerState.printer.price * printerState.quantity}</h3>
                                            <button onClick={() => handleDecreaseQuantity(printerState)}>-</button>
                                        </div>
                                        <br />
                                    </SubmitContainer>
                                </div>
                            </ItemContainer>
                        </div>
                        <DescriptionContainer>
                            <h2>Description</h2>
                            <Description>{printerState.printer.text}</Description>
                        </DescriptionContainer>
                    </div>
                ))}
            </div>
            <div style={{ margin: '60px auto' }}>
                <h2>Total Price: {
                    printers.reduce((accumulator, printerState) => {
                        return accumulator + printerState.printer.price * printerState.quantity
                    }, 0)}
                </h2>
            </div>
        </div>
    );
};

export default CartPage;