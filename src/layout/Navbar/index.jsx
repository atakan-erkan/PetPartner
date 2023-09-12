import React from "react";
import { NavLink } from "react-router-dom";
import PetPartner from "../../assets/images/PetPartner.png";
import navbar from "./navbar.module.css";
import pp from "../../assets/images/admin-pp.jpg";

function Navbar() {
  return (
    <nav className={navbar.navbar}>
      <div className={navbar.navbarRow}>
        <div className={navbar.navbarBrand}>
          <img src={PetPartner} alt="PetPartner" width="300px" />
        </div>
        <div className={navbar.navbarNav}>
          <NavLink className={navbar.navLink} to="/">
            Anasayfa
          </NavLink>
          <NavLink className={navbar.navLink} to="/">
            İlan Ver
          </NavLink>
        </div>
      </div>
      <div className={navbar.navbarRow}>
        <div className={navbar.navSearch}>
          <input className={navbar.searchInput} type="text" />
          <button className={navbar.searchBtn}>Ara</button>
        </div>
      </div>
      <div className={navbar.navbarRow}>
        <div className={navbar.navbarNav}>
          <div>
            <button className={navbar.navLink}></button>
          </div>
          <div>
            <button className={navbar.navLink}></button>
          </div>
          <div>
            <button className={navbar.navLink}></button>
          </div>
        </div>

        <div>
          <img src={pp} alt="" style={{ borderRadius: "50%", width: "50px" }} />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
