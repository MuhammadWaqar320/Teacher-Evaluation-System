import React from 'react'
import MainPage from '../views/homePage/mainPage/mainPage';
import { Route, BrowserRouter, Routes } from "react-router-dom";
import RoutesName from './routesName';
import AboutUs from '../views/aboutUs/aboutUs';
import ContactUs from '../views/contactUs/contactUs';
import Registration from '../views/registration/registration';
import AdminDashboard from '../views/adminDashboard/adminDashboard';
import StudentDashboard from '../views/studentDashboard/studentDashboard';
import TeacherDashboard from '../views/teacherDashboard/teacherDashboard';
import AllStudent from '../views/adminDashboard/allStudent/allStudent';
import AllTeacher from '../views/adminDashboard/allTeacher/allTeacher';
import AllCourse from '../views/adminDashboard/allCourse/allCourse';
import AddNewCourse from '../views/adminDashboard/addNewCourse/addNewCourse';
import AddNewStudent from '../views/adminDashboard/addNewStudent/addNewStudent';
import TesReport from '../views/adminDashboard/tesReport/tesReport';
import OverAllReport from '../views/adminDashboard/overAllReport/overAllReport';
import StudentViewProfile from '../views/studentDashboard/studentViewProfile/studentViewProfile';
import ResetPassword from '../views/login/resetPassword/resetPassword';

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
            />
            <Route
              exact
              path={RoutesName.ContactUs.route}
              element={<ContactUs />}
            />
            <Route
              exact
              path={RoutesName.Register.route}
              element={<Registration />}
            />
            <Route
              exact
              path={RoutesName.AdminDashboard.route}
              element={<AdminDashboard />}
            />
            <Route
              exact
              path={RoutesName.StudentDashboard.route}
              element={<StudentDashboard />}
            />
            <Route
              exact
              path={RoutesName.ResetPassword.route}
              element={<ResetPassword />}
            />
            <Route
              exact
              path="/student/dashboard/rated"
              element={<StudentViewProfile />}
            />
            <Route
              exact
              path={RoutesName.TeacherDashboard.route}
              element={<TeacherDashboard />}
            />

            <Route
              exact
              path={RoutesName.AdminDashboard.subRoute.AllStudent.route}
              element={<AllStudent />}
            />
            <Route
              exact
              path={RoutesName.AdminDashboard.subRoute.AllTeacher.route}
              element={<AllTeacher />}
            />
            <Route
              exact
              path={RoutesName.AdminDashboard.subRoute.AllCourse.route}
              element={<AllCourse />}
            />
            <Route
              exact
              path={RoutesName.AdminDashboard.subRoute.AddNewCourse.route}
              element={<AddNewCourse />}
            />
            <Route
              exact
              path={RoutesName.AdminDashboard.subRoute.AddNewStudent.route}
              element={<AddNewStudent />}
            />
            <Route
              exact
              path={RoutesName.AdminDashboard.subRoute.TesReport.route}
              element={<TesReport />}
            />
            <Route
              exact
              path={RoutesName.AdminDashboard.subRoute.OverAllReport.route}
              element={<OverAllReport />}
            />
          </Routes>
        </BrowserRouter>
      </>
    );
}

export default Router