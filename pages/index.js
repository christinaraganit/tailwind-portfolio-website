import Header from "../components/header";
import Hero from "../components/hero";
import About from "../components/about";
import Featured from "../components/featured";
import Footer from "../components/footer";
import Projects from "../components/projects";
import React, { useEffect, useState } from "react";

export default function Home() {
  return (
    <div id="home">
      <div id="title" className="h-screen md:h-5/6 md:my-20">
        <img
          src="purple-blur.png"
          className="z-0 fixed w-screen md:w-2/3 right-0 opacity-50 blur-3xl md:top-40 top-20 md:left-0 md:opacity-40"
        ></img>

        <Header></Header>

        <div
          id="content"
          className="pt-20 h-full flex bg-transparent content-center justify-center"
        >
          <Hero></Hero>
        </div>
      </div>

      <div id="more-content">
        <About></About>
        <Featured></Featured>
        <Projects></Projects>
      </div>

      <Footer></Footer>
    </div>
  );
}
