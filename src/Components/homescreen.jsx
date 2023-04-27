import React from "react";
import LoGo from "./logo";
import estore from "./images/ecommerce-estore.png";
import mobile from "./images/Mobile.png";
import grocery from "./images/grocery.png";
import ShowCards from "./cards";
import TextContents from "./textcontents";
import fashions from "./images/fashions.png";
import electronics from "./images/electronics.png";
import appliances from "./images/appliances.png";
import sofa from "./images/sofas.png";
import toys from "./images/Toys.png";
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
          <div className="text-content">
            <img
              src={grocery}
              alt="Avatar"
              style={{ width: "200px", height: "60px" }}
            />
            <p>Groceries</p>
          </div>

          <div className="text-content">
            <img
              src={mobile}
              alt="Avatar"
              style={{ width: "80px", height: "60px" }}
            />
            <p>Mobiles</p>
          </div>

          <div className="text-content">
            <img
              src={fashions}
              alt="Avatar"
              style={{ width: "80px", height: "60px" }}
            />
            <p>Fashions</p>
          </div>
          <div className="text-content">
            <img
              src={electronics}
              alt="Avatar"
              style={{ width: "80px", height: "60px" }}
            />
            <p>Electronics</p>
          </div>
          <div className="text-content">
            <img
              src={appliances}
              alt="Avatar"
              style={{ width: "80px", height: "60px" }}
            />
            <p>Home</p>
          </div>
          <div className="text-content">
            <img
              src={sofa}
              alt="Avatar"
              style={{ width: "80px", height: "60px" }}
            />
            <p>Home Appliances</p>
          </div>

          <div className="text-content">
            <img
              src={toys}
              alt="Avatar"
              style={{ width: "80px", height: "60px" }}
            />
            <p>Toys</p>
          </div>
        </div>
      </div>
      <div>
        <div className="banner">
          <div className="estore">
            <img src={estore} alt="banner" />
          </div>
        </div>
        <div className="cards">
          <div>
            <ShowCards />
          </div>
        </div>
        <div>
          <TextContents />
        </div>
      </div>
    </nav>
  );
}
export default NavBar;
