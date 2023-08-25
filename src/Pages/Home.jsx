import React from 'react';
import '../styles/home.css';

import {Container , Row , Col } from 'reactstrap';
import heroImg from '../assets/images/hero-img01.jpg';
import heroImg02 from '../assets/images/hero-img02.jpg';
import heroVideo from '../assets/images/hero-video.mp4';
import experienceImg from '../assets/images/experience.png'
import wordImg from '../assets/images/world.png';

import Subtitle from './../shared/Subtitle';

import SearchBar from '../shared/SearchBar';

import ServiceList from '../services/ServiceList';

import FeaturedTourList from '../components/featured-tours/FeaturedTourList';

import MasonryImagesGallery from '../components/image gallery/MasonryImagesGallery';

import Testimonials from '../components/testimonial/Testimonials';

import Newsletter from '../shared/Newsletter';

const Home = () => {
  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg='6'>
              <dv className="hero__content">
                <div className="hero__subtitle d-flex align-items-center ">
                    <Subtitle subtitle={'Know Before You Go'}/>
                    <img src={wordImg} alt="" />
                </div>
                <h1>Traveling opens  the door to creating 
                <span className="highlight">memories</span>
                </h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                  Cum corrupti explicabo dolorem corporis inventore illum natus 
                  recusandae nam ea non mollitia impedit dolores, similique eos 
                  rem officia labore. Atque, ad?
                </p>
              </dv>
            </Col>
            <Col lg='2'>
              <div className="hero__img-box">
                <img src={heroImg} alt="" />
              </div>
            </Col>
            <Col lg='2'>
              <div className="hero__img-box mt-4">
                <video src={heroVideo} alt="" controls/>
              </div>
            </Col>
            <Col lg='2'>
              <div className="hero__img-box mt-5">
                <img src={heroImg02} alt="" />
              </div>
            </Col>
            <SearchBar  />
          </Row>
        </Container>
      </section>

      {/* /////////////////////hero section /////////////////////// */}
      <section>
        <Container>
            <Row>
              <Col lg='3'>
                <h5 className="service__subtitles">What we serve</h5>
                <h2 className="service__title">We offer our best services</h2>
              </Col>
              <ServiceList />
            </Row>
        </Container>
      </section>


      {/* /////////////////////////featured tour section start////////////////////////////// */}
      <section>
        <Container>
          <Row>
            <Col lg='12' className='mb-5'>
              <Subtitle subtitle={"Explore"} />
              <h2 className="featured__tour-title">Our featured tours</h2>
            </Col>
            <FeaturedTourList />
          </Row>
        </Container>
      </section>

      {/* /////////////////////////experience section start////////////////////////// */}

      <section>
        <Container>
          <Row>
            <Col lg='6'>
              <div className="experience__content">
                <Subtitle subtitle={"Experience"} />

                <h2>With all our experiences <br/> we will serve you</h2>

                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  <br />
                  Lorem ipsum dolor sit amet consectetur adipisicing.
                </p>
              </div>
              <div className="counter__wrapper d-flex align-items-center gap-4">
                <div className="counter__box">
                  <span>12k+</span>
                  <h6>Successfull Trip</h6>
                </div>
                <div className="counter__box">
                  <span>2k+</span>
                  <h6>Regular Clients</h6>
                </div>
                <div className="counter__box">
                  <span>15</span>
                  <h6>Years Experience</h6>
                </div>
              </div>
            </Col>

            <Col lg='6'>
              <div className="experienceImg">
                <img src={experienceImg} alt="experience-img" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ////////////////////////gallery section start//////////////// */}

      <section>
        <Container>
          <Row>
            <Col lg='12'>
              <Subtitle subtitle={"Gallery"} />
              <h2 className="gallery__title">Visit Our Customers Tour Gallery</h2>
            </Col>
            <Col lg='12'>
              <MasonryImagesGallery />
            </Col>
          </Row>
        </Container>
      </section>

     {/* /////////////////////testimonial section start//////////////////// */}

      <section>
        <Container>
          <Row>
            <Col lg='12'>
              <Subtitle subtitle={"Fans Love"} />
              <h2 className="testimonial__title">What our fans say about us</h2>
            </Col>
            <Col lg='12'>
              <Testimonials/>
            </Col>
          </Row>
        </Container>
      </section>


      {/* ///////////////newsletter section //////////////////////////// */}

      <Newsletter/>
    </>
  )
}

export default Home