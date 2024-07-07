import React from 'react';
import '../styles/ScrapRates.css';
import { Link } from 'react-router-dom';

function ScrapRates() {
    // Define an array of items
    const items = [
        { name: 'Newspaper', image: 'https://cdn-icons-png.flaticon.com/512/7063/7063304.png', price: '₹ 10/kg' },
        { name: 'Iron', image: 'https://cdn-icons-png.flaticon.com/512/5672/5672069.png', price: '₹22/kg' },
        { name: 'Books', image: 'https://cdn-icons-png.flaticon.com/512/2232/2232688.png', price: '₹6/kg' },
        { name: 'Plastic', image: 'https://cdn-icons-png.flaticon.com/512/1039/1039778.png', price: '₹7/kg' },
        { name: 'E-waste', image: 'https://cdn-icons-png.flaticon.com/512/1039/1039783.png', price: '₹20/kg' },
        { name: 'WINDOW AC', image: 'https://cdn-icons-png.flaticon.com/512/5105/5105565.png', price: '₹500-800/piece' },
        { name: 'Air Cooler', image: 'https://cdn-icons-png.flaticon.com/512/7710/7710641.png', price: '₹400-900/piece' },
        { name: 'Stainless Steel', image: 'https://cdn-icons-png.flaticon.com/512/5672/5672176.png', price: '₹45/kg' },
        { name: 'CD', image: 'https://cdn-icons-png.flaticon.com/512/167/167522.png', price: '₹10/kg' },
        { name: 'Vehicle Tyre', image: 'https://cdn-icons-png.flaticon.com/512/859/859878.png', price: '₹4/kg' },
        { name: 'Inverter Battery', image: 'https://cdn-icons-png.flaticon.com/256/6380/6380086.png', price: '₹80/kg' },
        { name: 'Laptop', image: 'https://cdn-icons-png.flaticon.com/128/428/428001.png', price: '₹200-500/kg' },
        { name: 'Tin', image: 'https://png.pngtree.com/png-vector/20200201/ourmid/pngtree-metallic-cans-vector-food-tincan-ribbed-metal-tin-can-canned-food-png-image_2137030.jpg', price: '₹15/kg' },
        { name: 'Copper', image: 'https://i.pinimg.com/474x/60/1d/ba/601dba6086e659a52bf863418dbf8e8a.jpg', price: '₹450/kg' },
        { name: 'Mixed Waste', image: 'https://cdn-icons-png.flaticon.com/512/5207/5207497.png', price: '₹5/kg' },
    ];    

    return (
        <div className="container">
            <h1>SCRAP RATES</h1>
            <div className="row">
                {items.map((item, index) => (
                    <Link to="/newbooking" key={index} className="item">
                        <img height="180px" src={item.image} alt={item.name} />
                        <h2>{item.name}</h2>
                        <p>{item.price}</p>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default ScrapRates;
