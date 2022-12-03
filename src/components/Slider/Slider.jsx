import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

const Slider = ({image1, image2, image3}) => {
    
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    
    return (
    
        <Carousel activeIndex={index} onSelect={handleSelect}>

            <Carousel.Item>
                <img
                className="d-block w-100"
                src={image1}
                alt="First slide"
                />
            </Carousel.Item>

            <Carousel.Item>

                <img 
                className="d-block w-100"
                src={image2}
                alt="Second slide"
                />
            </Carousel.Item>

            <Carousel.Item>
                
                <img
                className="d-block w-100"
                src={image3}
                alt="Third slide"
                />

            </Carousel.Item>

    </Carousel>
  );

}

export default Slider;
