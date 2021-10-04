import React, { Component } from "react";
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBBtn } from 'mdb-react-ui-kit';
import Slider from "react-slick";
import Img1 from '../img/Homem de ferro.jpg';
import Img2 from '../img/Homem de ferro2.jpg';
import Img3 from '../img/thor.jpg';
import Img4 from '../img/capitao america.jpg';
import Img5 from '../img/capita marvel.jpg';
import './style.css'


import MovieOne from './moviesModal/movie1'
import MovieTwo from './moviesModal/movie2'
import MovieThree from './moviesModal/movie3'
import MovieFour from './moviesModal/movie4'
import MovieFive from './moviesModal/movie5'


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
        <div className="container-movie2">
  <MDBCard  className="Card-Movies" >
    <img className="CardTwo" src={Img1}  alt="Logo"   />
      <MDBCardBody className="Card-body">
        <MDBCardTitle>Card title</MDBCardTitle>
        <MDBCardText>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </MDBCardText>
    
        <div>
        <MovieOne />
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
        <MovieTwo />
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
        <MovieThree />
        </div>
      </MDBCardBody>
    </MDBCard>
          </div>

          <div>
  <MDBCard  className="Card-Movies" >
    <img className="CardTwo" src={Img4}  alt="Logo"   />
      <MDBCardBody className="Card-body">
        <MDBCardTitle>Card title</MDBCardTitle>
        <MDBCardText>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </MDBCardText>
    
        <div>
        <MovieFour />
        </div>
      </MDBCardBody>
    </MDBCard>
          </div>

          <div>
  <MDBCard  className="Card-Movies" >
    <img className="CardTwo" src={Img5}  alt="Logo"   />
      <MDBCardBody className="Card-body">
        <MDBCardTitle>Card title</MDBCardTitle>
        <MDBCardText>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </MDBCardText>
    
        <div>
        <MovieFive />
        </div>
      </MDBCardBody>
    </MDBCard>
          </div>



        </Slider>
      </div>
    );
  }
}