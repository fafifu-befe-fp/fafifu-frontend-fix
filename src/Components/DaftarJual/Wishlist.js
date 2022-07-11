import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Card from './WishlistCard';
import axios from "axios";

const Wishlist = () => {
    const [productsWishlist, setProductsWishlist] = useState([])
        
        useEffect(() => {
            axios
                .get(`https://fafifu-backend-api.herokuapp.com/v1/product/wishlist`, {
                    headers: {
                        Authorization: localStorage.getItem('jwtToken'),
                    },
                })
                .then((res) => {
                    console.log('ini wishlist', res.data.data);
                    setProductsWishlist(res.data.data);
                });
    }, []);

    return (
        <>
            {productsWishlist.map((productWishlist) => {
                return(
                    <>
                        <Link to={`/infop/${productWishlist.publicId}`} className={`text-decoration-none`}>
                            <Card productWishlist={productWishlist}/>
                            {/* WIshlist x */}
                        </Link>
                    </>
                )
            })}
        </>
    )
}

export default Wishlist