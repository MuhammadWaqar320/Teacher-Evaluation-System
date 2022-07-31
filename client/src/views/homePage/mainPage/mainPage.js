import React from 'react'
import "./mainPage.css";
import Header from '../../../component/navBar/header';
import Slider from '../../../component/slider/slider';
import Footer from '../../../component/footer/footer';
import CdCounter from '../../../component/countDownCounter/cdCounter';
import SignInOption from '../../../component/countDownCounter/SignInOption';
const MainPage = () => {
    return (
      <>
        <Header />
        <Slider />
        <CdCounter />
        <SignInOption/>
        <Footer/>
      </>
    );
}

export default MainPage