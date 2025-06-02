import React from "react";
import BookCard from "../companents/BookCard";
import books from "../books";
import './HomePage.css';

const HomePage = ({addToCart}) => {
    return(
        <div className="homepage">
            <h1 className="homepage-title">Добро пожаловать в магазин</h1>
            <div className="book-list">
                {books.map((book) =>(
                    <BookCard key={book.id} book={book} addToCart={addToCart}/>
                ))}
            </div>
        </div>
    );
};
export default HomePage;