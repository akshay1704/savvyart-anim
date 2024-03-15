import './app.scss'
import React from 'react';
import Navbar from './components/navbar/Navbar';
import Home from './components/Home/Home';
import { Portfolio } from './pages/Portfolio/Portfolio';
import { ClientArea } from './pages/ClientArea/ClientArea';
import  Parallax from './components/Parallax/Parallax';

const App = () => {
  return <div>
    <section>
      <Navbar/>
      <Home/>
    </section>
    <section><Parallax type = "services"/></section>
    <section><Portfolio/></section>
    <section>Portfolio1</section>
    <section>Portfolio2</section>
    <section><ClientArea/></section>
    <section>Pricing</section>
    <section>About</section>
    </div>;
};

export default App;
