import React from 'react'
import { Carousel, CarouselItem } from 'react-bootstrap'
import style from './product.module.css'

const CarouselCard = (props) => {
    return (
        <>
            {
                (props.products.imageUrl.length > 0) &&
                    <Carousel className='mb-4'>
                        {props.products.imageUrl.map((productImages) => {
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
            }
            {
                (props.products.imageUrl.length == 0) &&
                    <Carousel className='mb-4'>
                        <Carousel.Item>
                            <img
                                className={`d-block ${style.imgCarousel}`}
                                src='/img/imagena.png'
                                alt="First slide"
                            />
                        </Carousel.Item>
                    </Carousel>
            }
        </>
    )
}

export default CarouselCard