import Header from "../components/header";
import Hero from "../components/hero";
import About from "../components/about";
import Featured from "../components/featured";
import Footer from "../components/footer";

export default function Home() {
  return (
    <div id="home">
      <div id="title" className="h-screen">
        <img
          src="background-4.jpg"
          className="z-0 fixed opacity-40 w-full max-w-sm blur-3xl top-0 right-5"
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
      </div>

      <Footer></Footer>
    </div>
  );
}
