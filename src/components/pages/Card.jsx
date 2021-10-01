import React, { Component,useState } from "react";
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBBtn } from 'mdb-react-ui-kit';
import Slider from "react-slick";
import './style.css'

/* caracteristicas dos personagens*/ 
import CharacterOne from '../Character/character.One'
import CharacterTwo from '../Character/character.Two'
import CharacterThree from '../Character/character.Three'
import CharacterFour from '../Character/character.Four'


import CardOne from '../img/homem-aranha.jpg';
import CardTwo from '../img/feiticeiraScarlet.jpg';
import CardThree from '../img/Thanos2.jpg';
import CardFour from '../img/Hulk.jpg';



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
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
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
      <div className="container-slide">
       
        <Slider {...settings}>
          <div>
  <MDBCard    className="grid">
    <img className="CardTwo" src={CardOne}  alt="Logo"   />
      <MDBCardBody className="Card-body">
        <MDBCardTitle>Card title</MDBCardTitle>
        <MDBCardText>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </MDBCardText>
        <div>
        <CharacterOne />
        </div>
      </MDBCardBody>
    </MDBCard>
          </div>

          <div>
    <MDBCard className="grid">
    <img className="CardTwo" src={CardTwo}  alt="Logo"   />
      <MDBCardBody className="Card-body">
        <MDBCardTitle>Card title</MDBCardTitle>
        <MDBCardText>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </MDBCardText>
        <div>
        <CharacterTwo />
        </div>
      </MDBCardBody>
    </MDBCard>
          </div>

          <div>
     <MDBCard className="grid">
    <img className="CardTwo" src={CardThree}  alt="Logo"   />
      <MDBCardBody className="Card-body">
        <MDBCardTitle>Card title</MDBCardTitle>
        <MDBCardText>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </MDBCardText>
        <div>
        <CharacterThree  />
        </div>
      </MDBCardBody>
    </MDBCard>
          </div>

          <div>
              <MDBCard className="grid">
    <img className="CardTwo" src={CardFour}  alt="Logo"   />
      <MDBCardBody className="Card-body">
        <MDBCardTitle>Card title</MDBCardTitle>
        <MDBCardText>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </MDBCardText>
        <div>
        <CharacterFour  />
        </div>
      </MDBCardBody>
    </MDBCard>
          </div>
   <div>
   
   </div>
        </Slider>
      </div>
    );
  }
}