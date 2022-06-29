import { useCallback, useState, useRef } from "react";

import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
import MapCustom from "../components/map";
const Listings = () => {
  const [city, setCity] = useState("hanoi");

  return (
    <>
      <ToastContainer />
      <div className="container">
        <div className="center">
          <h1>Listings</h1>
          <div className="form-group">
            <label htmlFor="exampleFormControlSelect2">City: </label>
            <select
              className="form-select"
              aria-label="Default select example"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            >
              <option value="hanoi">Hanoi</option>
              <option value="danang">Danang</option>
              <option value="hcm">HCM</option>
            </select>
          </div>
          <MapCustom city={city} />
        </div>
      </div>
    </>
  );
};

export default Listings;
