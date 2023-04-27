import React from "react";
import LoGo from "./logo";
import pocox4 from "./images/poco_x4-removebg-preview.png";

function AddCartScreen() {
  return (
    <div>
      <div>
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
      </div>
      <div className="cards">
        <div className="text-box">
          <div>
            <p>Electronics</p>
          </div>
          <div>
            <p>Tv's & Appliances</p>
          </div>
          <div>
            <p>Men</p>
          </div>
          <div>
            <p>Women</p>
          </div>
          <div>
            <p>Tv's & Appliances</p>
          </div>
          <div>
            <p>Baby & Kids</p>
          </div>
          <div>
            <p>Home & Furniture</p>
          </div>
          <div>
            <p>Sports,Books & More</p>
          </div>
          <div>
            <p>Flights</p>
          </div>
        </div>
      </div>
      <div>
        <div>
          <div className="row-image">
            <div className="column-images">
              <img
                src={pocox4}
                alt="Avatar"
                style={{ width: "90%", height: "50%" }}
              />
              {/* <h3>POCO X4 Pro 5G(Laser Black,128)</h3>
              <p>Shop now!</p>
              <div className="texts">
                <p>₹21,999</p>
                <p style={{ marginLeft: "2px" }}>
                  {" "}
                  <del>₹25,999</del>
                </p>
              </div> */}

              <div className="btn-btn">
                <button className="btn-first">Add To Cart</button>
                <div></div>
                <button className="btn-second">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddCartScreen;
