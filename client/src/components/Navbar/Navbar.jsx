import React, { useEffect, useState, useRef } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import decode from "jwt-decode"
import logo from "../../assests/logo.png";
import search from "../../assests/search-solid.svg";
import Avatar from "../../components/Avatar/Avatar";
import "./Navbar.css";
import bars from "../../assests/bars-solid.svg";
import { setCurrentUser } from "../../actions/currentUser";
import ToggleBtn from "../Theme/ToggleBtn";


const Navbar = ({ handleSlideIn, styles, logoStyle }) => {



  const menuRef = useRef();

  const dispatch = useDispatch()
  // var User = null;
  var User = useSelector((state) => state.currentUserReducer)
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/");
    dispatch(setCurrentUser(null));

  };

  useEffect(() => {
    const token = User?.token;
    if (token) {
      const decodedToken = decode(token);
      if (decodedToken.exp * 1000 < new Date().getTime()) {
        handleLogout();
      }
    }
    dispatch(setCurrentUser(JSON.parse(localStorage.getItem("Profile"))));
  }, [User?.token, dispatch]);

  const [IsOpen, setIsOpen] = useState(false);
  const toggleProfile = () => {
    setIsOpen(!IsOpen);


  }
  useEffect(() => {
    const handler = (e) => {
      if(menuRef.current== null){
      
      }
      else if (!menuRef.current.contains(e.target)) {
        setIsOpen(false);
        e.stopPropagation()

      }
    }
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    }
  })


  return (
    <nav className="main-nav" style={styles} >
      <div className="navbar">
        <button className="slide-in-icon" onClick={() => handleSlideIn()}>
          <img src={bars} alt="bars" width="15" style={logoStyle} />
        </button>
        <div className="navbar-1" >
          <Link to="/" className="nav-item nav-logo" >
            <img src={logo} alt="logo" style={logoStyle} />
          </Link>
          <NavLink to="/About" className="nav-item nav-btn res-nav" style={styles} >
            About
          </NavLink>
          <Link to="/" className="nav-item nav-btn res-nav" style={styles}>
            Products
          </Link>
          <Link to="/" className="nav-item nav-btn res-nav" style={styles}>
            For Teams
          </Link>
          <form>
            <input type="text" placeholder="Search..." />
            <img src={search} alt="search" width="18" className="search-icon" />
          </form>
        </div>
        <div className="navbar-2" >
          {User === null ? (
            <Link to="/Auth" className="nav-item nav-links" >
              Log in
            </Link>
          ) : (
            <>
              <div className="profile" onClick={toggleProfile}>


                <Avatar
                  backgroundColor="#009dff"
                  px="10px"
                  py="7px"
                  borderRadius="50%"
                  color="white"

                >
                  {User.result.name.charAt(0).toUpperCase()}
                </Avatar>
                <div className={`profile-${IsOpen ? 'open' : 'close'}`} style={styles} ref={menuRef}>
                  <div className="profile-link">

                    <Link to={`/Users/${User?.result?._id}`} style={{ textDecoration: "none" }}>
                      <h4 style={styles}>Profile</h4></Link>
                  </div>
                  <div className="logout">
                    <h4 onClick={handleLogout} >Logout</h4>
                  </div>


                </div>
              </div>

            </>
          )}
          <ToggleBtn />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
