import React from 'react'
import { Carousel, CarouselItem } from 'react-bootstrap'
import style from './product.module.css'

const CarouselCard = (props) => {
    return (
        <>
            <Carousel className='mb-4'>
                {props.productsProfile.imageUrl.map((productImages) => {
                    return(
                        <Carousel.Item>
                            <img
                                className={`d-block ${style.imgCarousel}`}
                                src={productImages}
                                alt="First slide"
                            />
                        </Carousel.Item>
                    )
                })}
            </Carousel>
        </>
    )
}

export default CarouselCard