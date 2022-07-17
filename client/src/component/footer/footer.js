import React from "react";
import "./footer.css";
const Footer = () => (
  <footer className="page-footer font-small blue  footer-class">
    <div className="container-fluid text-center text-md-left">
      <div className="row">
        <div className="col-md-6 mt-md-0 mt-3">
          <h4 style={{ color: "yellow", fontFamily: "initial" }}>
            Teacher Evalution System
          </h4>
          <p style={{ color: "white" }}>
            Here you can use rows and columns to organize your footer content.
            Here you can use rows and columns to organize your footer content.
            Here you can use rows and columns to organize your footer content.
            Here you can use rows and columns to organize your footer content.
          </p>
        </div>

        <hr className="clearfix w-100 d-md-none pb-0" />

        <div className="col-md-3 mb-md-0 mb-3">
          <h4 style={{ color: "yellow", fontFamily: "initial" }}>
            Quick Links
          </h4>
          <ul className="list-unstyled">
            <li>
              <a href="#!" className="link-class">
                About Us
              </a>
            </li>
            <li>
              <a href="#!" className="link-class">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        <div className="col-md-3 mb-md-0 mb-3">
          <h4 style={{ color: "yellow", fontFamily: "initial" }}>Contact Us</h4>
          <ul className="list-unstyled">
            <li>
              <a href="#!" className="link-class">
                +051-23413344
              </a>
            </li>
            <li>
              <a href="#!" className="link-class">
                www.tes.com
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <hr style={{ color: "white" }}></hr>
    <div className="footer-copyright text-center py-3 link-class">
      © 2022 Copyright:
      <a href="#" className="link-class" style={{ color: "yellow" }}>
        {" "}
        Teacher Evalution Sytem.com
      </a>
    </div>
  </footer>
);

export default Footer;
