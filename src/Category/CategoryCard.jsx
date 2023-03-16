import React from 'react';
import Image from "./assets/images/1.png";
import Image1 from "./assets/images/2.png";
import Image2 from "./assets/images/4.png";
import Image3 from "./assets/images/3.png";
import "./CategoryCard.css"

const CategoryCard = ({cat}) => {
    let image = Image;
    if (cat === 'jewelery') {
        image = Image1
    }
    if (cat === "women's clothing") {
        image = Image2
    }
    if (cat === "men's clothing") {
        image = Image3
    }
    return (
        <div className={'card category'}>
            <img src={image} alt="" className={'position-relative'}/>
            <div className="mt-1 d-flex align-items-center justify-content-between category_name">
                <p className={''}>{cat}</p>
                <p>Shop</p>
            </div>
        </div>
    );
};

export default CategoryCard;
