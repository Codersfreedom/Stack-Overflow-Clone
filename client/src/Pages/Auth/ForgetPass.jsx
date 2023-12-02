import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar';
import "./Auth.css";
import icon from "../../assests/icon.png";
import { ForgetPassword } from '../../actions/auth';
import 'react-toastify/dist/ReactToastify.css';

const ForgetPass = ({slideIn,handleSlideIn,styles, logoStyle}) => {

    const [email, setEmail] = useState("");

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit =  ((e) =>  {
        e.preventDefault();
        if (!email) {
            alert("Enter email and password");
        }
        
        dispatch(ForgetPassword({ email }, navigate));
        
    })
    
    return (
        <div className="home-container-1">
            <LeftSidebar slideIn={slideIn} handleSlideIn={handleSlideIn} styles={styles} logoStyle={logoStyle}  />
        <section className="auth-section" style={styles}>

            <div className="auth-container-2" style={styles}>
                <img src={icon} alt="stack overflow" className="login-logo" style={logoStyle} />
                <form onSubmit={handleSubmit} style={styles}>



                    <label htmlFor="email">
                        <h4>Email</h4>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder='Enter your email to reset password'
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value);
                            }}
                        />
                    </label>

                    <button type="submit" className="auth-btn">
                        Submit
                    </button>
                </form>

            </div>

        </section>
        </div>
        
    )
}

export default ForgetPass
