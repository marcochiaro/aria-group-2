import React from "react";
import "animate.css";
import Header from "./components/Header";
import MinimumChargeCard from "./components/MinimumChargeCard/MinimumChargeCard";
import CreateAccountButton from "./components/CreateAccountButton/CreateAccountButton";
import { phoneNumber } from "@/utils/phoneNumber";
import TelegramButton from "./components/TelegramButton/TelegramButton";
import { telegramAccount } from "@/utils/telegramAccount";
import MinimumWithdrawal from "./components/MinimumWithdrawal/MinimumWithdrawal";

const isTelegramEnabled = true;
const isWhatsappEnabled = true;
const Home = () => {
  return (
    <>
      {/* Header */}

      <Header />
      <div className="flex">
        {/** BOTON - CREAR CUENTA */}
        {isWhatsappEnabled && <CreateAccountButton phoneNumber={phoneNumber} />}

        {isTelegramEnabled && (
          <TelegramButton telegramAccount={telegramAccount} />
        )}
      </div>

      <div className="flex">
        {/** Minimo de carga - Card  */}
        <MinimumChargeCard minimumCharge={500} />

        {/** Minimo de carga - Card  */}
        <MinimumWithdrawal minimumWithdrawal={2000} />
      </div>
    </>
  );
};

export default Home;
