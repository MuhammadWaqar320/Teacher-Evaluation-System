import React from "react";
import "./aboutUs.css";
import Header from "../../component/navBar/header";
import { Paper } from "@mui/material";
import pic from "../../assets/images/about.jpg";
import Footer from "../../component/footer/footer";
const AboutUs = () => {
  return (
    <>
      <Header />
      <div style={{ margin: "7%", textAlign: "justify" }}>
        <div className="row">
          <div className="col-sm-6">
            <span
              style={{
                fontSize: "34px",
                fontFamily: "initial",

                fontWeight: "bold",
              }}
            >
              The Vision
            </span>
            <p>
              To provide every opportunity for an all round and harmonious
              development of individuals and society and reconstruction of human
              thought in all its forms on the foundations of Islam in order to
              encourage and promote education, training the research in Islamic
              learning, social, natural, applied and communication sciences and
              other branches of learning to ensure the Muslim Ummah’s
              ideological, moral, intellectual, social, economic and
              technological development in accordance with the values, ideals,
              principles and norms of Islam.
            </p>
            <span
              style={{
                fontSize: "34px",
                fontFamily: "initial",
                fontWeight: "bold",
              }}
            >
              Action Plan
            </span>
            <ul>
              <li>
                To consolidate the existing faculties, institutes, academies and
                centres of the University, namely, Faculty of Shariah and Law,
                Usuluddin, Arabic, Languages and Literatures, Social Sciences,
                Management Sciences, Applied Sciences, Academy, Shariah Academy,
                Centre for Basic Studies and the Iqra College of Technology.
              </li>
              <li>
                To establish new faculties, departments centres, units and cells
                and strengthen the existing faculties, institutes, academies and
                centres the order the ensure diversification and deeper
                specialization in the relevant areas and to promote higher
                learning, research adn training in various branches and
                specializations falling under the purview of the concerned
                faculties, institutes, academies or centres.
              </li>
              <li>
                To strengthen pre-doctoral and post-doctoral research programs
                in the existing faculties and institutes.
              </li>
              <li>
                To develop a rich multi–lingual resource centre in the areas of
                interest to the University.
              </li>
              <li>
                To develop and consolidate the Female’s Campus as a premier sear
                of higher learning for female.
              </li>
              To establish branches and affiliated institutes of the
              International Islamic University outside Pakistan especially at
              places where higher Islamic learning is not available.
              <li>
                To establish a faculty of Communication and Media with view to
                produce experts in the fields of media, communication and
                journalism.
              </li>
            </ul>
          </div>
          <div className="col-sm-6">
            <img src={pic} width="90%"></img>
          </div>
        </div>
          </div>
          <Footer/>
    </>
  );
};

export default AboutUs;
