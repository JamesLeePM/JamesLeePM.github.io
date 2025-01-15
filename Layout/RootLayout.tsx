import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import s from "./Layout.module.scss";

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <div className={s.layout}>
      <Header />
      <main className={s.main}>{children}</main>
      <Footer />
    </div>
  );
};

export default RootLayout;
