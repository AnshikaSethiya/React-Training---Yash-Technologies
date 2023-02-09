import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
import { IoMdArrowDropdown } from "react-icons/io"
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { ModalDialog } from "react-bootstrap";

const location = [
  {
    link: "https://in.bmscdn.com/m6/images/common-modules/regions/mumbai.png",
    name: "Mumbai",
  },
  {
    link: "https://in.bmscdn.com/m6/images/common-modules/regions/ncr-selected.png",
    name: "NCR",
  },
  {
    link: "https://in.bmscdn.com/m6/images/common-modules/regions/bang.png",
    name: "Bangaluru",
  },
  {
    link: "https://in.bmscdn.com/m6/images/common-modules/regions/hyd.png",
    name: "Hyderabad",
  },
  {
    link: "https://in.bmscdn.com/m6/images/common-modules/regions/ahd.png",
    name: "Ahemdabad",
  },
  {
    link: "https://in.bmscdn.com/m6/images/common-modules/regions/chd.png",
    name: "Chandigarh",
  },
  {
    link: "https://in.bmscdn.com/m6/images/common-modules/regions/chen.png",
    name: "Chennai",
  },
  {
    link: "https://in.bmscdn.com/m6/images/common-modules/regions/pune.png",
    name: "Pune",
  },
  {
    link: "https://in.bmscdn.com/m6/images/common-modules/regions/kolk.png",
    name: "Kolkata",
  },
  {
    link: "https://in.bmscdn.com/m6/images/common-modules/regions/koch.png",
    name: "Kochi",
  },
];

const Header = () => {
  const [query, setQuery] = useState("");
  const [city, setCity] = useState("");
  const [open, setOpen] = useState(false);
  const [cityName, setCityName] = useState("Select City");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleLocation = (name) => {
    setOpen(false);
    setCityName(name);
  };

  const handleContainer = () => {
    
  }


  return (
    <>
      <div className="navbar">
        <div style={{ display: "flex", alignItems: "center", width: "65%" }}>
          <Link className="link" to="/">
            <h3> Ticketzz </h3>
          </Link>
          <div className="searchBar">
            <BiSearch style={{ color: "black" }} />
            <input
              type="text"
              placeholder="Search for Movies, Events, Plays, Sports and Activities"
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
          </div>
          <div
          style={{ display: "flex", alignItems: "center", fontSize: "17px", width:"20%" }}>
          <div className="location" onClick={handleClickOpen}>
            <div>{cityName}</div>
            <IoMdArrowDropdown />
          </div>
            {/* {!isAuth && 
            ( */}
              <Link to="/signup" style={{textDecoration:"none"}}>
                <button className="signBtn">
                    <p>Sign Up</p>
                </button>
              </Link>
            {/* )} */}
        </div>
      </div>

      <Modal show={open} onHide={handleClose} className="Dialog" fullscreen="md-down">
            <Modal.Body>
              <div className="location_content">
                  <BiSearch />
                  <input
                    style={{
                      border: "none",
                      width: "550px",
                      height: "40px",
                      outline: "none",
                    }}
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="Search for your city"
                  />
              </div>
              <br />
            <div>Popular cities</div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "baseline",
              textAlign: "center",
              cursor:"pointer"
            }}
          >
            {location.map((loc) => (
              <div style={{ margin: "2px" }}>
                <img
                  onClick={() => handleLocation(loc.name)}
                  src={loc.link}
                  alt={loc.name}
                />
                <div>{loc.name}</div>
              </div>
            ))}
          </div>
            </Modal.Body>
      </Modal>
    </>

  );
};

export default Header;
