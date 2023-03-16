import React, {useEffect, useState} from 'react';
import "./NewArrivals.css"
import Card from "../Card/Card";
import axios from "axios";
import OwlCarousel from 'react-owl-carousel';
import {options} from "../helper/commoinFunction"

const NewArrivals = () => {
        const [products, setProducts] = useState([]);
        const [loading, setLoading] = useState(false)
        const getAllProduct = () => {
            setLoading(true)
            axios.get(`https://fakestoreapi.com/products?limit=10`)
                .then(res => {
                    setLoading(false)
                    setProducts(res.data)
                })
                .catch(err => {
                    setLoading(false)
                    console.log(err)
                })
        }
        useEffect(() => {
            getAllProduct()
        }, [])

        return (
            <div>
                <div className="container mb-2">
                    <h3><span>New</span> Arrivals</h3>

                    {
                        loading ?
                            <div className="text-center loader">
                                <div className="spinner-border" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                            </div>
                            :

                            <OwlCarousel className='owl-theme' {...options} >
                                {
                                    products?.map((product, index) => {
                                        return (
                                            <Card product={product} key={index}/>

                                        )
                                    })
                                }
                            </OwlCarousel>
                    }


                </div>
            </div>
        )
            ;
    }
;

export default NewArrivals;
