import React from 'react'
import { Carousel, CarouselItem } from 'react-bootstrap'
import style from './product.module.css'

const CarouselCard = () => {
  return (
    <>
        <Carousel className='mb-4'>
            <Carousel.Item>
                <img
                    className="d-block w-100 h-100"
                    src="img/carouselproduct.png"
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 h-100"
                    src="img/carouselproduct.png"
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 h-100"
                    src="img/carouselproduct.png"
                    alt="First slide"
                />
            </Carousel.Item>
        </Carousel>
    </>
  )
}

export default CarouselCard