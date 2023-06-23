import React, { useEffect, useState } from "react";
import { Link, useLocation } from 'react-router-dom';
import "./Navbar.scss";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);

  const {pathname} = useLocation();

  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false)
  }
  useEffect(() => {
    window.addEventListener("scroll", isActive);

    return () => {
      window.removeEventListener("scroll", isActive);
    }
  },[]);

  const currentUser = {
    id: 1,
    username: "John Doe",
    isSeller: true
  }

  return (
    <div className={active || pathname !== '/' ? "navbar active" : "navbar"}>
      <div className="container">
        <div className="logo">
          <Link to="/" className="link">
          <span className="text">fiverr</span>
          <span className="dot">.</span>
          </Link>
        </div>
        <div className="links">
          <span>Fiverr Business</span>
          <span>Explore</span>
          <span>English</span>
          <span>Sign In</span>
          {!currentUser?.isSeller && <span>Become a Seller</span>}
          {!currentUser && <button className="button">Join</button>}
          {currentUser && (
            <div className="user" onClick={()=> setOpen(!open)}>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9aniZE01uX-uzkRSscxQ4DYTwSUzC7ZKmDtExIg7tKBIH-rCO7-QhHz-kaYiHR9Vpgs4&usqp=CAU" alt="" />
              <span>{currentUser?.username}</span>
             {open && <div className="options">
                {
                  currentUser?.isSeller && (
                    <>
                    <Link className="link" to="/mygigs">Gigs</Link>
                    <Link className="link" to="/add">Add New Gig</Link>
                    </>
                  )
                }
                <Link className="link" to="/orders">Orders</Link>
                <Link className="link" to="/messages">Messages</Link>
                <Link className="link">Logout</Link>
              </div>}
            </div>
          )}
        </div>
      </div>

      {(active || pathname !== '/') &&
        <>
          <hr />
          <div className="menu">
            <Link className="link menuLink" to="/">Graphic & Design</Link>
            <Link className="link" to="/">Video & Animation</Link>
            <Link className="link" to="/">Writing & Translation</Link>
            <Link className="link" to="/">AI Services</Link>
            <Link className="link" to="/">Digital Marketing</Link>
            <Link className="link" to="/">Music & Audio</Link>
            <Link className="link" to="/">Programming & Tech</Link>
            <Link className="link" to="/">Business</Link>
            <Link className="link" to="/">Lifestyle</Link>
          </div>
          <hr />
        </>
      }
    </div>
  );
};

export default Navbar;