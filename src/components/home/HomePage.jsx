import React from "react";

const MenuList = () => {
    const menuItems = ['Beef', 'Pasta', 'Chiken', 'Pork', 'Dessert', 'Lamb', 'Miscellaneous', 'Seafood', 'Side', 'Starter', 'Vegan', 'Vegetarian', 'Breakfast', 'Goat'];

    return (
        <div>
            <h2>Menu</h2>
            <ul>
                {menuItems.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
};


const HomePage = () => {
    return (
        <div>
            <h1>Welcome to Restaurant Gelegar</h1>
            <img src="Gelegar.jpg" alt="Restaurant GELEGAR" />
            <MenuList />
        </div>
    );
};

export default HomePage