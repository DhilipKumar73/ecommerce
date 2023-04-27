import React from "react";
import NavBar from "./homescreen";
import DetailScreen from "./detailscreen";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddCartScreen from "./addcartscreen";
import UseNavigation from "./usenavigate";

function ToDo() {
  const HomescreenNavigation = UseNavigation(NavBar);
  const DetailScreennavigation = UseNavigation(DetailScreen);
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<HomescreenNavigation />}></Route>
          <Route path="/homescreen" element={<HomescreenNavigation />}></Route>
          <Route
            path="/detailscreen"
            element={<DetailScreennavigation />}
          ></Route>
          <Route path="/addcartscreen" element={<AddCartScreen />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default ToDo;
