import React,{ FC } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { signout } from '../../store/actions/authActions';

import Card from './Card'
import Carousel  from '../movies/cardMovies';
import signin  from './SignIn';
import Home  from './Homepage';
import Loader from '../UI/Loader';

import Logo from '../img/logo-marvel.png';
import Button from '../UI/Button';
import { RootState } from '../../store/index';

const AppRouter: FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { authenticated } = useSelector((state: RootState) => state.auth);

  const logoutClickHandler = () => {
    dispatch(signout());
  }

  return (
    <Router>
      <div className="navbar-container">
      <img className="logo-header" src={Logo}  alt="Logo" />
        <Link to="/Card/" className="button-navbar">Personagens</Link>
        <Link to="/Carousel/" className="button-navbar">Filmes</Link>
        <Link to="/Carousel/" className="button-navbar">HQs</Link>
      
          
      
      <Link to="/Login">
      {!authenticated ?
      <button onClick={() => history.push('/Login')}  className="button-navbar" type="button">
        Login
      </button>
      :
      <Link to="/signin"> <button onClick={logoutClickHandler}  className="button-logout" type="button">
      Sair
    </button> </Link>
      }
       </Link>

        <Route path="/Card/" exact component={Card} />
        <Route path="/Carousel/" component={Carousel} />
        <Route path="/signin/" component={signin} />
     
     

     
      </div>
      <div>
        <h1 className="title-h1">Trailes e extras</h1>
      <h2 className="title-dashboard">Descubra o novo e totalmente diferente Marvel Unlimited</h2>
      <button className="button-dashboard">Saiba Mais</button>
      </div>
    </Router>
  );
}

export default AppRouter;