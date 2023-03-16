import React, {useEffect, useState} from 'react';
import axios from "axios";
import CategoryCard from "./CategoryCard";
import OwlCarousel from "react-owl-carousel";
import "./CategoryCard.css"

const options = {
            loop: true,
            autoplay: true,
            dots: false,
            nav: true,
            smartSpeed: 500,
            autoplayTimeout: 5000,
            margin: 10,
            autoplayHoverPause: true,
            navText:["<div class='nav-btn prev-slide'></div>","<div class='nav-btn next-slide'></div>"],
            responsive: {
                0: {
                    items: 1,
                    center: true,
                    nav: false,
                    stagePadding: 30,
                    margin: 0,
                },
                376: {
                    items: 1,
                    center: true,
                    nav: false,
                    stagePadding: 50,
                    margin: 0,
                },
                450: {
                    items: 1,
                    center: false,
                    nav: false,
                    stagePadding: 130,
                },
                650: {
                    items: 2,
                    center: false,
                    nav: false,
                    stagePadding: 80,
                },
                780: {
                    items: 2,
                    center: false,
                    nav: false,
                    stagePadding: 130,
                },
                991: {
                    items: 3,
                    center: false,
                    nav: false,
                    stagePadding: 80,
                },
                992: {
                    items: 3,
                },
                1200: {
                    items: 4,
                }
            },
        };

const CategorySection = () => {
    const [categories, setCategories] = useState([])
    const [loading, setLoading] = useState(false)
    const getAllCategories = () => {
        setLoading(true)
        axios.get(`https://fakestoreapi.com/products/categories`)
            .then(res => {
                setCategories(res.data)
                setLoading(false)
            })
            .catch(err => {
                console.log(err)
                setLoading(false)
            })
    }
    useEffect(() => {
        getAllCategories()
    }, [])
    return (
        <div className={'container'}>
            {
                loading ?
                    <div className="text-center loader">
                        <div className="spinner-border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div> :
                    <OwlCarousel className='owl-theme' {...options} >
                        {
                            categories?.map((cat, index) => (
                                <CategoryCard key={index} cat={cat}/>
                            ))
                        }
                    </OwlCarousel>
            }
        </div>
    );
};

export default CategorySection;
