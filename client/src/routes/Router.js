import React from 'react'
import MainPage from '../views/homePage/mainPage/mainPage';
import { Route, BrowserRouter, Routes } from "react-router-dom";
import RoutesName from './routesName';
import AboutUs from '../views/aboutUs/aboutUs';
import ContactUs from '../views/contactUs/contactUs';
const Router = () => {
    return (
      <>
        <BrowserRouter>
          <Routes>
            <Route
              exact
              path={RoutesName.homePage.route}
              element={<MainPage />}
            />
            <Route
              exact
              path={RoutesName.AboutUs.route}
              element={<AboutUs />}
            ></Route>
            <Route
              exact
              path={RoutesName.ContactUs.route}
              element={<ContactUs />}
            ></Route>
          </Routes>
        </BrowserRouter>
      </>
    );
}

export default Router