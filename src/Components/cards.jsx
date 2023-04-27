import React from "react";
import mobile from "./images/Mobile.png";
import camera from "./images/camera.png";
import monitor from "./images/monitors.jpg";
import headset from "./images/headphones.png";
import { useNavigate } from "react-router-dom";

function ShowCards() {
  const navigate = useNavigate();

  const detailscreen = () => {
    navigate("/detailscreen");
  };
  return (
    <div>
      <div className="row">
        <div className="column">
          <div className="card">
            <img
              src={camera}
              alt="Avatar"
              style={{ width: "100%", height: "50%" }}
            />
            <h3>Top Mirror Less Cameras</h3>
            <p>Shop now!</p>
          </div>
        </div>
        <div class="column">
          <div class="card">
            <img
              src={headset}
              alt="Avatar"
              style={{ width: "100%", height: "50%" }}
            />
            <h3>Studio Headphones</h3>
            <p>Shop now!</p>
            <p>From $999</p>
          </div>
        </div>
        <div class="column">
          <div class="card">
            <img
              src={mobile}
              alt="Avatar"
              style={{ width: "100%", height: "50%" }}
            />
            <h3>Mobile Phones</h3>
            <p>Shop now!</p>
            <p className="lead">
              <button className="btn btn-success" onClick={detailscreen}>
                Buy Now
              </button>
            </p>
          </div>
        </div>
        <div class="column">
          <div class="card">
            <img
              src={monitor}
              alt="Avatar"
              style={{ width: "100%", height: "50%" }}
            />
            <h3>Monitors</h3>
            <p>Shop now!</p>
            <p>From $8999</p>
          </div>
        </div>
        <div class="column">
          <div class="card">
            <img
              src={mobile}
              alt="Avatar"
              style={{ width: "100%", height: "50%" }}
            />
            <h3>Mobile Phones</h3>
            <p>Shop now!</p>
            <p>From $9999</p>
          </div>
        </div>
        <div class="column">
          <div class="card">
            <img
              src={mobile}
              alt="Avatar"
              style={{ width: "100%", height: "50%" }}
            />
            <h3>Mobile Phones</h3>
            <p>Shop now!</p>
            <p>From $9999</p>
          </div>
        </div>
        <div class="column">
          <div class="card">
            <img
              src={mobile}
              alt="Avatar"
              style={{ width: "100%", height: "50%" }}
            />
            <h3>Mobile Phones</h3>
            <p>Shop now!</p>
            <p>From $9999</p>
          </div>
        </div>
        <div class="column">
          <div class="card">
            <img
              src={mobile}
              alt="Avatar"
              style={{ width: "100%", height: "50%" }}
            />
            <h3>Mobile Phones</h3>
            <p>Shop now!</p>
            <p>From $9999</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ShowCards;
