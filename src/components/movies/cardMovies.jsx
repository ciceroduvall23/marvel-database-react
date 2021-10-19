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
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1510,
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
      <div className="container-slide">
       <h2>Filmes em alta </h2>
        <Slider {...settings}>
        <div >
  <MDBCard  className="grid" >
    <img className="CardTwo" src={Img1}  alt="Logo"   />
      <MDBCardBody className="Card-body">
        <MDBCardTitle>Homem de ferro</MDBCardTitle>
        <MDBCardText>
        Homem de Ferro é um personagem fictício dos quadrinhos publicados pela Marvel Comics.
        Tony Stark usa armaduras de alta tecnologia no combate ao crime.
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
        <MDBCardTitle>Homem de ferro 2 </MDBCardTitle>
        <MDBCardText>
        Em um mundo ciente da existência do Homem de Ferro, o inventor bilionário Tony Stark sofre
         pressão de todos os lados para compartilhar sua tecnologia com as forças armadas.
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
        <MDBCardTitle>Thor</MDBCardTitle>
        <MDBCardText>
        Como filho de Odin, rei dos deuses nórdicos, Thor logo herdará o trono de Asgard de seu idoso pai.
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
        <MDBCardTitle>Capitão America</MDBCardTitle>
        <MDBCardText>
        Steve Rogers é um jovem que participa de experiências visando a criação do supersoldado americano.
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
        <MDBCardTitle>Capitã Marvel</MDBCardTitle>
        <MDBCardText>
        Capitã Marvel, parte do exército de elite dos Kree, uma raça alienígena, encontra-se no meio de uma batalha entre seu povo e os Skrulls.
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