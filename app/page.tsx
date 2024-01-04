import React from "react";
import "animate.css";
import Header from "./components/Header";
import MinimumChargeCard from "./components/MinimumChargeCard/MinimumChargeCard";
import CreateAccountButton from "./components/CreateAccountButton/CreateAccountButton";
import { phoneNumber } from "@/utils/phoneNumber";

const Home = () => {
  return (
    <>
      {/* <Script src="META SCRIPT" /> */}
      <Header />

      {/** BOTON - CREAR CUENTA */}
      <CreateAccountButton phoneNumber={phoneNumber} />

      {/** Minimo de carga - Card  */}
      <MinimumChargeCard minimumCharge={500} />
    </>
  );
};

export default Home;
