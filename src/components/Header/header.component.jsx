import React, { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  let headerClasses = ["header"];
  if (scrolled) {
    headerClasses.push("scrolled");
  }

  return (
    <header id="header" className={headerClasses.join(" ")}>
      <div className="header__content">
        <h1>My Gallery</h1>
        <p>
          An example of a React.js functional component app consuming an API
          with Redux state management
        </p>
      </div>
    </header>
  );
}
