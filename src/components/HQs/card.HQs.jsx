import React, { Component } from "react";
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBBtn } from 'mdb-react-ui-kit';
import Slider from "react-slick";
import Img1 from '../img/thor vikings.jpg';
import Img2 from '../img/surfista prateado.jpg';
import Img3 from '../img/wolverine2.jpg';

import './style.css'


import One from './HQsModal/modal.1'
import Two from './HQsModal/modal.2'
import Three from './HQsModal/modal.3'



export default class Responsive extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 700,
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 2,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div className="container-movie">
       
        <Slider {...settings}>
        <div >
  <MDBCard  className="Card-Movies" >
    <img className="CardTwo" src={Img1}  alt="Logo"   />
      <MDBCardBody className="Card-body">
        <MDBCardTitle>Card title</MDBCardTitle>
        <MDBCardText>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </MDBCardText>
    
        <div>
        <One />
        </div>
      </MDBCardBody>
    </MDBCard>
          </div>

          <div>
  <MDBCard  className="Card-Movies" >
    <img className="CardTwo" src={Img2}  alt="Logo"   />
      <MDBCardBody className="Card-body">
        <MDBCardTitle>Card title</MDBCardTitle>
        <MDBCardText>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </MDBCardText>
    
        <div>
        <Two />
        </div>
      </MDBCardBody>
    </MDBCard>
          </div>

          <div>
  <MDBCard  className="Card-Movies" >
    <img className="CardTwo" src={Img3}  alt="Logo"   />
      <MDBCardBody className="Card-body">
        <MDBCardTitle>Card title</MDBCardTitle>
        <MDBCardText>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </MDBCardText>
    
        <div>
        <Three />
        </div>
      </MDBCardBody>
    </MDBCard>
          </div>

        </Slider>
      </div>
    );
  }
}