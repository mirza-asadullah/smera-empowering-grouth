import React from "react";
import Hero from "../components/Hero";
import WhySmera from "../components/WhySmera";
import SmeraAcademy from "../components/SmeraAcademy";
import Testimonials from "../components/Testimonials";
import Product from "./Products"

export default function Home() {
  return (
    <>
      <Hero />
      <Product/>
      <WhySmera />
      {/* <SmeraAcademy /> */}

      <div
        style={{
          backgroundColor: "black",
          border: "1px solid black",
          padding: "50px 0px 0px 0px",
        }}
      >
        <Testimonials />
      </div>
    </>
  );
}
