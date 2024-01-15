import React from "react";
import NavigationBar from "../../components/NavigationBar/NavigationBar";

const MainLayout = ({ children }) => {
  return (
    <div>
      <header className="sticky top-0 z-50">
        <NavigationBar />
      </header>
      <div className="relative">{children}</div>
    </div>
  );
};

export default MainLayout;
