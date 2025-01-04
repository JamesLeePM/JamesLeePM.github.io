import React from "react";
import Modal from "../components/Modal";
import Footer from "../components/Footer";

const RootLayout = ({ children }) => {
  return (
    <div>
      {children}
      <Modal />
      <Footer />
    </div>
  );
};

export default RootLayout;
