import React, { useEffect, useState } from "react";
import styles from "../styles/navbar.module.css";
import { RxCross2, RxHamburgerMenu } from "react-icons/rx";
import { IoIosArrowDown } from "react-icons/io";

function Navbar() {
  const [showMenu, setShowMenu] = useState(true);

  useEffect(() => {
    if (window.innerWidth <= 768) {
      setShowMenu(false);
    } else {
      setShowMenu(true);
    }
  }, []);

  function menu() {
    console.log("hamburger");
    setShowMenu(!showMenu);
  }

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <a>IT Division Logo</a>

        <div className={styles.mobile_btn}>
          <button style={showMenu ? { display: "none" } : { display: "block" }}>
            <RxHamburgerMenu size={25} onClick={menu} />
          </button>
          <button
            onClick={menu}
            style={showMenu ? { display: "block" } : { display: "none" }}
          >
            <RxCross2 size={25} />
          </button>
        </div>
      </div>
      <div style={showMenu ? { display: "block" } : { display: "none" }} >
     
       <ul className={styles.navLinks}>
          <li>
            <a href="#">home</a>
          </li>
          <li>
            <a href="#">about</a>
          </li>
          <li className={styles.dropdown_content}>
            <a href="#">
              service <IoIosArrowDown />
            </a>
            <ul className={styles.dropdown_item}>
              <li>Link 1</li>
              <li>Link 2</li>
              <li>Link 3</li>
              <li>Link 4</li>
            </ul>
          </li>
          <li>
            <a href="#">pricing</a>
          </li>
          <li>
            <a href="#">production</a>
          </li>
          <div className={styles.demoBtn}>
          <button type="button">Get a Demo</button>
        </div>
        </ul>
       
       
      </div>
    </nav>
  );
}

export default Navbar;
