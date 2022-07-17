import React from 'react'
import "./mainPage.css";
import Header from '../../../component/navBar/header';
import Slider from '../../../component/slider/slider';
import Footer from '../../../component/footer/footer';

const MainPage = () => {
    return (
      <>
        <Header />
        <Slider/>
        <Footer/>
      </>
    );
}

export default MainPage