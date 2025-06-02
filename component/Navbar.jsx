import React from "react";
import '../Navbar.css';
import {Link} from 'react-router-dom';
const Navbar = ({cartCount}) =>{
    return(
        <nav className='navbar'>
            <div className="logo">Мой книжный магазин 📔📕📖</div>
            <ul className="nav-links">
                <li><Link to="/">Главная</Link></li>
                <li><Link to="cart">корзина 🛒({cartCount})</Link></li>
            </ul>

        </nav>
    );
};
export default Navbar;