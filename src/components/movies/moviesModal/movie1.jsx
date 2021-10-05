import React, { useState } from "react";
import "./styles.css";

import Modal from "react-modal";
import Img from'../../img/Homem de ferro.jpg'
import Close from'../../img/close.svg'

Modal.setAppElement("#root");

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="App">
      <button className="button-card" onClick={toggleModal}>Ver Detalhes</button>

      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="My dialog"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
           <div className="modalCard">
        <img className="img-modalTwo" src={Img}  alt="Logo" />
        <h1 className="title-modal">Homem de ferro</h1>
        <h2 className="h2-modal">Homem de Ferro é um personagem fictício dos quadrinhos publicados pela Marvel Comics.
         Sua identidade verdadeira é a do empresário e bilionário, Tony Stark, que usa armaduras de alta tecnologia no combate ao crime</h2>
        <p className="p-modal">Vingadores - Era de Ultron</p>
        <p className="p-modal">Thor - Ragnarok</p>
        <p className="p-modal">Vingadores - Era de Ultron</p>
        <p className="p-modal">Vingadores - Ultimato</p>
        
       <br></br>
       
         <h2 className="evaluation-modal">Avaliações dos fãs</h2>
  
        <button className="close-modal" onClick={toggleModal}> 
        <img className="img-close" src={Close}  alt="Logo" />
         </button>
        </div>
      </Modal>
    </div>
  );
}