
import React,{useState} from "react";
import "../CartPage.css";
const CartPage = ({cartItems, removeFromCart,clearCart}) => {
    const [showConfirmModal,setShowConfirmModal] = useState(false);
    const [showThankYouModal,setShowThankYouModal] = useState(false);
    const getTotalPrice = () => {
        return cartItems.reduce((total, book) => total + book.price,0).toFixed(2)
    };
    const handleCheckout = () =>{
        setShowConfirmModal(true);
    };
    const confirmCheckout = () =>{
        clearCart();
        setShowConfirmModal(false);
        setShowThankYouModal(false);
        setTimeout (() => {
            setShowThankYouModal(false);
        },2000);
    };
    const cancelCheckout = () =>{
        setShowConfirmModal(false);
    };
    return(
    <div className="cart-container">
        <h1>Ваша корзина</h1>
        <div className="cart-gird">
            {cartItems.length === 0 ? (<p>корзина пуста</p>) : (cartItems.map((book, index) => (
                <div className="cart-item" key={index}>
                    <img src={book.cover} alt={book.title} />
                    <h2>{book.title}</h2>
                    <p>{book.author}</p>
                    <p>{book.price} руб</p>
                    <button onClick={() => removeFromCart(book.id)}>
                        удалить из корзины
                    </button>
                </div>
            ))
            )}
        </div>
        {cartItems.length > 0 && (
            <>
            <div className="cart-total">общая сумма : {getTotalPrice()} руб</div>
            <div className="checout-wrapper">
                <button className="checout-button" onClick ={handleCheckout}>оформить заказ</button>
                </div>
            </>
        )}
        {showConfirmModal && (
            <div className="modal-backdrop">
                <div className="modal">
                    <p>Вы действительно хотите оформитьзаказ на сумму{getTotalPrice()} руб ?</p>
                    <div className="modal-button">
                        <button onClick={confirmCheckout}> да </button>
                        <button onClick={cancelCheckout}> нет </button>
                    </div>
                </div>
            </div>
        )}
        {showThankYouModal && (
            <div className="modal-backdrop">
                <div className="modal">
                    <p>спасибо за покупку</p>
                </div>
            </div>
        )}

        </div>
        );
};
export default CartPage;