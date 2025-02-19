import RiseUsers from "../components/RiseUsers";
import Header from "../components/Header";
import Experts from "../components/Experts";
import Footer from "../components/Footer";
import React from "react";
import OurNumbers from "../components/OurNumbers";
import OurOffers from "../components/OurOffers";

function Home() {
  return (
    <React.Fragment>
      <Header />
      <Main />
      <Footer />
    </React.Fragment>
  );
}

function Main() {
  return (
    <main>
      <RiseUsers />
      <Experts />
      <OurNumbers />
      <OurOffers />
    </main>
  );
}
export default Home;
