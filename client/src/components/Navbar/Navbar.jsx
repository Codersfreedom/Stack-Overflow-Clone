import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
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


const Navbar = ({ handleSlideIn,styles,logoStyle }) => {


  

 
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


  return (
    <nav className="main-nav" style={styles} >
    <div className="navbar">
      <button className="slide-in-icon" onClick={() => handleSlideIn()}>
        <img src={bars} alt="bars" width="15" style={logoStyle} />
      </button>
      <div className="navbar-1" >
        <Link to="/" className="nav-item nav-logo" >
          <img src={logo} alt="logo" style={logoStyle}/>
        </Link>
        <Link to="/" className="nav-item nav-btn res-nav"style={styles} >
          About
        </Link>
        <Link to="/" className="nav-item nav-btn res-nav"style={styles}>
          Products
        </Link>
        <Link to="/" className="nav-item nav-btn res-nav"style={styles}>
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
            <Avatar
              backgroundColor="#009dff"
              px="10px"
              py="7px"
              borderRadius="50%"
              color="white"
            >
              <Link
                to={`/Users/${User?.result?._id}`}
                style={{ color: "white", textDecoration: "none" }}
              >
                {User.result.name.charAt(0).toUpperCase()}
              </Link>
            </Avatar>
            <button className="nav-item nav-links" onClick={handleLogout}>
              Log out
            </button>
          </>
        )}
      <ToggleBtn/>
      </div>
    </div>
  </nav>
  );
};

export default Navbar;
