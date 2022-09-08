import React from 'react'
import { WorkImage } from '../work'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

const ProjectCarousel = ({ images }) => {
  return (
    <Carousel infiniteLoop autoPlay showThumbs={false}>
      {images.map((image, index) => {
        return <WorkImage key={index} src={image} />
      })}
    </Carousel>
  )
}

export default ProjectCarousel
