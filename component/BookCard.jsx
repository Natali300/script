import React from 'react';
const BookCard = ({book, addToCart}) => {
    if(!book) return null;
    const{title, autor, cover, description, price} = book
    return(
        <div className = 'book'>
            <img src={cover} alt={title}style={{width: '150px', height: '200px'}}/>
            <h2>{title}</h2>
            <p><strong>Автор:</strong>{autor}</p>
            <p>{description}</p>
            <p><strong>Цена:</strong>{price}</p>
            <button onClick={() => addToCart(book)}>добавить в карзину</button>



        </div>
    );
};
export default BookCard;