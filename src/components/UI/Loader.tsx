import React, { FC } from 'react';

import './styles.css'

import Logo from '../img/logo-marvel.png';

const Loader: FC = () => {
  return(
    <div className="loader-wrapper">
        <img className="logo-loader" src={Logo}  alt="Logo" />
        <div  className="gradient-loader"></div>
    
    </div>
    
  );
}

export default Loader;
