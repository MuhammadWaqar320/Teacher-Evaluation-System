import React from 'react'
import "./cdCounter.css";
import CountUp from "react-countup";
const CdCounter = () => {
    return (
      <div style={{ background: "#d7f7e3" }}>
        <div
          style={{
            textAlign: "center",
            fontFamily: "initial",
            fontSize: "34px",
            padding: "40px 0px 0px 0px",
          }}
        >
          Total Registrations
        </div>
        <div
          className="row"
          style={{
            textAlign: "center",
            justifyContent: "center",
            padding: "30px 0px 60px 0px",
          }}
        >
          <div
            style={{
              border: "1px solid gray",
              backgroundColor: "#185047",
              color: "white",
              marginRight: "10px",
              height: "110px",
              width: "110px",
              borderRadius: "50%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <span style={{ fontSize: "25px" }}>
              <span style={{ fontWeight: "bold" }}>+</span>
              <CountUp end={300} duration={130}></CountUp>
            </span>
            <span>Students</span>
          </div>
          <div
            style={{
              border: "1px solid gray",
              backgroundColor: "#185047",
              color: "white",
              marginRight: "10px",
              height: "110px",
              width: "110px",
              borderRadius: "50%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <span style={{ fontSize: "25px" }}>
              <span style={{ fontWeight: "bold" }}>+</span>
              <CountUp end={400} duration={130}></CountUp>
            </span>
            <span>Teachers</span>
          </div>
          <div
            style={{
              border: "1px solid gray",
              backgroundColor: "#185047",
              color: "white",
              marginRight: "10px",
              height: "110px",
              width: "110px",
              borderRadius: "50%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <span style={{ fontSize: "25px" }}>
              <span style={{ fontWeight: "bold" }}>+</span>
              <CountUp end={600} duration={130}></CountUp>
            </span>
            <span>Courses</span>
          </div>
          <div
            style={{
              border: "1px solid gray",
              backgroundColor: "#185047",
              color: "white",
              height: "110px",
              width: "110px",
              borderRadius: "50%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <span style={{ fontSize: "25px" }}>
              <span style={{ fontWeight: "bold" }}>+</span>
              <CountUp end={800} duration={130}></CountUp>
            </span>
            <span>Feedbacks</span>
          </div>
        </div>
      </div>
    );
}

export default CdCounter