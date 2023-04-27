import React from "react";
import logo from "./images/logo.png";
import LoGo from "./logo";
import mobile from "./images/Mobile.png";
import pocox4 from "./images/poco_x4-removebg-preview.png";
import vivo from "./images/vivo-removebg-preview.png";
import pocom4 from "./images/poco_m4-removebg-preview.png";
import oppo from "./images/oppo-removebg-preview.png";
import oneplus from "./images/oneplus-removebg-preview.png";
import { useNavigate } from "react-router-dom";

function DetailScreen() {
  const navigate = useNavigate();

  const cartscreen = () => {
    navigate("/addcartscreen");
  };
  return (
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
      <hr />
      <div className="Recently-Viewed">
        <h4>Recently Viewed</h4>
        <p>10 Items</p>
      </div>
      <hr />
      <div>
        <div className="row-image">
          <div className="column-image">
            <img
              src={pocox4}
              alt="Avatar"
              style={{ width: "90%", height: "50%" }}
            />
            <h3>POCO X4 Pro 5G(Laser Black,128)</h3>
            <p>Shop now!</p>
            <div className="texts">
              <p>₹21,999</p>
              <p style={{ marginLeft: "2px" }}>
                {" "}
                <del>₹25,999</del>
              </p>
            </div>
          </div>
          <div class="column-image">
            <img
              src={pocox4}
              alt="Avatar"
              style={{ width: "90%", height: "50%" }}
            />
            <h3>POCO X4 Pro 5G( Bifrost Blue,128)</h3>
            <p>Shop now!</p>
            <div className="texts">
              <p>₹21,999</p>
              <p style={{ marginLeft: "2px" }}>
                {" "}
                <del>₹25,999</del>
              </p>
            </div>
          </div>
          <div class="column-image">
            <img
              src={pocox4}
              alt="Avatar"
              style={{ width: "90%", height: "50%" }}
            />
            <h3>POCO M4 Pro(Cool Blue,128)</h3>
            <p>Shop now!</p>
            <div className="texts">
              <p>₹21,999</p>
              <p style={{ marginLeft: "2px" }}>
                {" "}
                <del>₹25,999</del>
              </p>
            </div>
          </div>
          <div class="column-image">
            <img
              src={pocox4}
              alt="Avatar"
              style={{ width: "90%", height: "50%" }}
            />
            <h3>POCO M4 Pro(Cool Blue,64)</h3>
            <p>Shop now!</p>
            <div className="texts">
              <p>₹15,999</p>
              <p style={{ marginLeft: "2px" }}>
                {" "}
                <del>₹20,999</del>
              </p>
            </div>
          </div>
          <div class="column-image">
            <img
              src={pocox4}
              alt="Avatar"
              style={{ width: "90%", height: "30%" }}
            />
            <h3>POCO X4 Pro(Laser Black,64)</h3>
            <p>Shop now!</p>
            <div className="texts">
              <p>₹15,999</p>
              <p style={{ marginLeft: "2px" }}>
                {" "}
                <del>₹20,999</del>
              </p>
            </div>
          </div>
          <div>
            <div>
              <div class="column-image">
                <img
                  src={vivo}
                  alt="Avatar"
                  style={{ width: "90%", height: "50%" }}
                />
                <h3>POCO M4 Pro(Cool Blue,64)</h3>
                <p>Shop now!</p>
                <div className="texts">
                  <p>₹15,999</p>
                  <p style={{ marginLeft: "2px" }}>
                    {" "}
                    <del>₹20,999</del>
                  </p>
                </div>
              </div>
              <div class="column-image">
                <img
                  src={vivo}
                  alt="Avatar"
                  style={{ width: "90%", height: "50%" }}
                />
                <h3>POCO M4 Pro(Cool Blue,64)</h3>
                <p>Shop now!</p>
                <div className="texts">
                  <p>₹15,999</p>
                  <p style={{ marginLeft: "2px" }}>
                    {" "}
                    <del>₹20,999</del>
                  </p>
                </div>
              </div>
              <div class="column-image">
                <img
                  src={oppo}
                  alt="Avatar"
                  style={{ width: "90%", height: "50%" }}
                />
                <h3>POCO M4 Pro(Cool Blue,64)</h3>
                <p>Shop now!</p>
                <div className="texts">
                  <p>₹15,999</p>
                  <p style={{ marginLeft: "2px" }}>
                    {" "}
                    <del>₹20,999</del>
                  </p>
                </div>
              </div>
              <div class="column-image">
                <img
                  src={oppo}
                  alt="Avatar"
                  style={{ width: "90%", height: "50%" }}
                />
                <h3>POCO M4 Pro(Cool Blue,64)</h3>
                <p>Shop now!</p>
                <div className="texts">
                  <p>₹15,999</p>
                  <p style={{ marginLeft: "2px" }}>
                    {" "}
                    <del>₹20,999</del>
                  </p>
                </div>
              </div>
              <div class="column-image">
                <img
                  src={oneplus}
                  alt="Avatar"
                  style={{ width: "90%", height: "50%" }}
                />
                <h3>POCO M4 Pro(Cool Blue,64)</h3>
                <p>Shop now!</p>
                <div className="texts">
                  <p>₹15,999</p>
                  <p style={{ marginLeft: "2px" }}>
                    {" "}
                    <del>₹20,999</del>
                  </p>
                  <p className="lead">
                    <button className="btn btn-success" onClick={cartscreen}>
                      Buy Now
                    </button>
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* <div class="column-image">
            <img
              src={pocox4}
              alt="Avatar"
              style={{ width: "90%", height: "30%" }}
            />
            <h3>Studio Headphones</h3>
            <p>Shop now!</p>
            <p>From $999</p>
          </div>
          <div class="column-image">
            <img
              src={pocox4}
              alt="Avatar"
              style={{ width: "90%", height: "30%" }}
            />
            <h3>Studio Headphones</h3>
            <p>Shop now!</p>
            <p>From $999</p>
          </div>
          <div class="column-image">
            <img
              src={pocox4}
              alt="Avatar"
              style={{ width: "90%", height: "30%" }}
            />
            <h3>Studio Headphones</h3>
            <p>Shop now!</p>
            <p>From $999</p>
          </div>
          <div class="column-image">
            <img
              src={pocox4}
              alt="Avatar"
              style={{ width: "90%", height: "30%" }}
            />
            <h3>Studio Headphones</h3>
            <p>Shop now!</p>
            <p>From $999</p>
          </div>
          <div class="column-image">
            <img
              src={pocox4}
              alt="Avatar"
              style={{ width: "90%", height: "30%" }}
            />
            <h3>Studio Headphones</h3>
            <p>Shop now!</p>
            <p>From $999</p>
          </div>
          <div class="column-image">
            <img
              src={pocox4}
              alt="Avatar"
              style={{ width: "90%", height: "30%" }}
            />
            <h3>Studio Headphones</h3>
            <p>Shop now!</p>
            <p>From $999</p>
          </div>
          <div class="column-image">
            <img
              src={pocox4}
              alt="Avatar"
              style={{ width: "90%", height: "30%" }}
            />
            <h3>Studio Headphones</h3>
            <p>Shop now!</p>
            <p>From $999</p>
          </div> */}
        </div>
      </div>
    </div>
  );
}
export default DetailScreen;
