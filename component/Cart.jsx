import React from 'react';
const Card = ({cartItems}) => {
    const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
    const totlPrice = cartItems.reduce((sum,item) => sum + item.price * item.quantity, 0);
    return (
        <div style={{padding: '10px', beckgroundColor:'#7db7b4', border: '1px colid #ddd',
            borderRadius: '8px',textAlign: 'center', margin: '20px auto', width: '300px' }}>
                <h2>Корзина</h2>
                <p>товаров в корзине: {totalItems}шт</p>
                <p>сумма товаров: {totlPrice}руб</p>
        </div>
    );   
};
export default Cart;