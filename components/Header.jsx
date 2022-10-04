import React from "react";
const Header = () => {
  return (
    <header className="header">
      <div className="header-inner">
        <div className="other-headers">
          <img
            src={
              "https://raw.githubusercontent.com/storyofcoder/extraImages/master/brain.png"
            }
            width="50px"
            height={"50px"}
            alt="logo"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
