import React from 'react';
import Slider from 'react-slick';

import ava01 from "../../assets/images/ava-1.jpg"
import ava02 from "../../assets/images/ava-2.jpg"
import ava03 from "../../assets/images/ava-3.jpg"


const Testimonials = () => {


  const settings ={
    dots:true,
    infinite:true,
    autoplay:true,
    speed:1000,
    swupeToSlide:true,
    autoplaySpeed:2000,
    slidesToShow:3,

    responsive:[
      {
        breakpoint: 992,
        settings:{
          slidesToShow:2,
          slidesToScroll:1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings:{
          slidesToShow:1,
          slidesToScroll:1,
        },
      },
    ]
  }

  return (
    <Slider {...settings}>
      <div className="testimonial py-4 px-3">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Doloremque quod neque voluptates hic ut esse earum quia ad beatae quas, tempora placeat. 
          Inventore vel dicta fugit sapiente? Dolor, laborum facilis.
        </p>
        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava01} alt="" className="w-25 h-25 rounded-2" />
          <div>
            <h5 className="mb-0 mt-3">
              <p>Gonne Freaks</p>
            </h5>
          </div>
        </div>
      </div>
      <div className="testimonial py-4 px-3">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Doloremque quod neque voluptates hic ut esse earum quia ad beatae quas, tempora placeat. 
          Inventore vel dicta fugit sapiente? Dolor, laborum facilis.
        </p>
        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava02} alt="" className="w-25 h-25 rounded-2" />
          <div>
            <h5 className="mb-0 mt-3">
              <p>Anebella</p>
            </h5>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Doloremque quod neque voluptates hic ut esse earum quia ad beatae quas, tempora placeat. 
          Inventore vel dicta fugit sapiente? Dolor, laborum facilis.
        </p>
        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava03} alt="" className="w-25 h-25 rounded-2" />
          <div>
            <h5 className="mb-0 mt-3">
              <p>John Wick</p>
            </h5>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Doloremque quod neque voluptates hic ut esse earum quia ad beatae quas, tempora placeat. 
          Inventore vel dicta fugit sapiente? Dolor, laborum facilis.
        </p>
        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava01} alt="" className="w-25 h-25 rounded-2" />
          <div>
            <h5 className="mb-0 mt-3">
              <p>Gonne Freaks</p>
            </h5>
          </div>
        </div>
      </div>
      <div className="testimonial py-4 px-3">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Doloremque quod neque voluptates hic ut esse earum quia ad beatae quas, tempora placeat. 
          Inventore vel dicta fugit sapiente? Dolor, laborum facilis.
        </p>
        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava02} alt="" className="w-25 h-25 rounded-2" />
          <div>
            <h5 className="mb-0 mt-3">
              <p>Anebella</p>
            </h5>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Doloremque quod neque voluptates hic ut esse earum quia ad beatae quas, tempora placeat. 
          Inventore vel dicta fugit sapiente? Dolor, laborum facilis.
        </p>
        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava03} alt="" className="w-25 h-25 rounded-2" />
          <div>
            <h5 className="mb-0 mt-3">
              <p>John Wick</p>
            </h5>
          </div>
        </div>
      </div>


    </Slider>
  )
}

export default Testimonials