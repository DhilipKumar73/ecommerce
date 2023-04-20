import React from "react";
import LoGo from "./logo";
// import digitalocean from "./assets/Digital Ocean.png";

function NavBar() {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <LoGo />
        </div>
        <div className="nav-elements">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="About">About</a>
            </li>
            <li>
              <a href="Services">Services</a>
            </li>
            <li>
              <a href="Products">Products</a>
            </li>
            <li>
              <a href="Blog">Blog</a>
            </li>
            <li>
              <button type="button" className="button btn btn-success">
                Login
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div className="mainbar">
        <div className="mainbarimages">
          <img src="https://mdbootstrap.com/img/logo/mdb-transaprent-noshadows.webp" />
          <img src="https://mdbootstrap.com/img/logo/mdb-transaprent-noshadows.webp" />
          <img src="https://mdbootstrap.com/img/logo/mdb-transaprent-noshadows.webp" />
          <img src="https://mdbootstrap.com/img/logo/mdb-transaprent-noshadows.webp" />
          <img src="https://mdbootstrap.com/img/logo/mdb-transaprent-noshadows.webp" />
          <img src="https://mdbootstrap.com/img/logo/mdb-transaprent-noshadows.webp" />
          <img src="https://mdbootstrap.com/img/logo/mdb-transaprent-noshadows.webp" />
        </div>
      </div>
      <div>
        <div className="mainbarimages">
          <img src="https://mdbootstrap.com/img/logo/mdb-transaprent-noshadows.webp" />
        </div>
      </div>
    </nav>
  );
}
export default NavBar;
