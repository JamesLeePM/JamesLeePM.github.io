import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import s from "./Layout.module.scss";

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <div className={s.layout}>
      <Navigation className={s.navigation} />
      <main className={s.main}>{children}</main>
      <Footer />
    </div>
  );
};

export default RootLayout;
