import React from 'react'
import { Carousel, CarouselItem } from 'react-bootstrap'
import style from './product.module.css'

const CarouselCard = (props) => {
    return (
        <>
            <Carousel className='mb-4'>
                {props.products[0].imageUrl.map((productImages) => {
                    return(
                        <Carousel.Item>
                            <img
                                className="d-block w-100 h-100"
                                src={productImages.imageUrl}
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