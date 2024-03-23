import './app.scss'
import React from 'react';
import Navbar from './components/navbar/Navbar';
import Home from './components/Home/Home';
import { Portfolio } from './pages/Portfolio/Portfolio';
import { ClientInfo } from './pages/ClientInfo/ClientInfo';
import  Parallax from './components/Parallax/Parallax';
import ClientArea from './pages/ClientArea/ClientArea';

const App = () => {
  return <div>
    <section>
      <Navbar/>
      <Home/>
    </section>
    <section><Parallax type = "services"/></section>
    <section><Portfolio/></section>
    <section><ClientArea/></section>
    <section>Portfolio2</section>
    <section><ClientInfo/></section>
    <section>Pricing</section>
    <section>About</section>
    </div>;
};

export default App;
