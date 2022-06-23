import React from "react";
import Common from "./Common";
import web from "../Pictures/img3.png";
import { FaHeart } from 'react-icons/fa';

function About() {
  return (
    <>
    <div>We <FaHeart/> What We Do !</div>
      <Common
        name="Welcome to the world of"
        imgsrc={web}
        visit="/contact"
        btname="Contact Us"
      />
    </>
  );
}

export default About;
