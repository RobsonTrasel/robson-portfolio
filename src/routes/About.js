import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImg2 from "../components/HeroImg2";


export default function About(){
  return (
    <div>
      <Navbar/>
      <HeroImg2 heading="SOBRE" text="Saiba um pouco sobre mim" />
      <Footer/>
    </div>
  )
};
