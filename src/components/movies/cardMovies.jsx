import React, { Component } from "react";
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBBtn } from 'mdb-react-ui-kit';
import Slider from "react-slick";
import CardOne from '../img/feiticeiraScarlet.jpg';
import './style.css'


export default class Responsive extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 4,
      initialSlide: 0,
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
          <div>
  <MDBCard  className="grid" >
    <img className="CardTwo" src={CardOne}  alt="Logo"   />
      <MDBCardBody className="Card-body">
        <MDBCardTitle>Card title</MDBCardTitle>
        <MDBCardText>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </MDBCardText>
    
        <a href>Ver mais Detalhes</a>
      </MDBCardBody>
    </MDBCard>
          </div>

          <div>
    <MDBCard className="grid">
    <img className="CardTwo" src={CardOne}  alt="Logo"   />
      <MDBCardBody className="Card-body">
        <MDBCardTitle>Card title</MDBCardTitle>
        <MDBCardText>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </MDBCardText>
        <a href>Ver mais Detalhes</a>
      </MDBCardBody>
    </MDBCard>
          </div>

          <div>
     <MDBCard className="grid">
    <img className="CardTwo" src={CardOne}  alt="Logo"   />
      <MDBCardBody className="Card-body">
        <MDBCardTitle>Card title</MDBCardTitle>
        <MDBCardText>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </MDBCardText>
        <a href>Ver mais Detalhes</a>
      </MDBCardBody>
    </MDBCard>
          </div>

          <div>
      <MDBCard className="grid">
    <img className="CardTwo" src={CardOne}  alt="Logo"   />
      <MDBCardBody className="Card-body">
        <MDBCardTitle>Card title</MDBCardTitle>
        <MDBCardText>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </MDBCardText>
        <MDBBtn href='#'>Button</MDBBtn>
      </MDBCardBody>
    </MDBCard>
          </div>

          <div>
              <MDBCard className="grid">
    <img className="CardTwo" src={CardOne}  alt="Logo"   />
      <MDBCardBody className="Card-body">
        <MDBCardTitle>Card title</MDBCardTitle>
        <MDBCardText>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </MDBCardText>
        <MDBBtn href='#'>Button</MDBBtn>
      </MDBCardBody>
    </MDBCard>
          </div>

          <div>
    <MDBCard className="grid">
    <img className="CardTwo" src={CardOne}  alt="Logo"   />
      <MDBCardBody className="Card-body">
        <MDBCardTitle>Card title</MDBCardTitle>
        <MDBCardText>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </MDBCardText>
        <MDBBtn href='#'>Button</MDBBtn>
      </MDBCardBody>
    </MDBCard>
          </div>

          <div>
    <MDBCard className="grid">
    <img className="CardTwo" src={CardOne}  alt="Logo"   />
      <MDBCardBody className="Card-body">
        <MDBCardTitle>Card title</MDBCardTitle>
        <MDBCardText>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </MDBCardText>
        <MDBBtn href='#'>Button</MDBBtn>
      </MDBCardBody>
    </MDBCard>
          </div>

          <div>
                <MDBCard className="grid">
    <img className="CardTwo" src={CardOne}  alt="Logo"   />
      <MDBCardBody className="Card-body">
        <MDBCardTitle>Card title</MDBCardTitle>
        <MDBCardText>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </MDBCardText>
        <MDBBtn href='#'>Button</MDBBtn>
      </MDBCardBody>
    </MDBCard>
          </div>
        </Slider>
      </div>
    );
  }
}