import React from "react";
import Modal from "../components/Modal";
import Footer from "../components/Footer";
import Header from "@/components/Header";

const RootLayout = ({ children }) => {
  return (
    <div>
      <Header />  
      {children}
      <Modal />
      <Footer />
    </div>
  );
};

export default RootLayout;
