import React from 'react'
import "./Auth.css";
import icon from "../../assests/icon.png";
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { ResetPassword } from '../../actions/auth';
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar';

const PasswordReset = ({slideIn,handleSlideIn,styles,logoStyle}) => {
    const [password, setPassword] = useState("");
    const [cpassword, setcPassword] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { id,token } =useParams();
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!password && !cpassword) {
            alert("Password can't be empty");
        }
        if(password==cpassword){

            
            // console.log(id);
            // console.log(token);

            dispatch(ResetPassword({id,token,password},navigate));
           
        }
        else{
            alert("Password mismatch!");
        }

        





    };

  return (
    <div className="home-container-1">
        <LeftSidebar slideIn={slideIn} handleSlideIn={handleSlideIn} styles={styles} logoStyle={logoStyle}  />
    <section className="auth-section" style={styles}>

            <div className="auth-container-2" style={styles}>
                <img src={icon} alt="stack overflow" className="login-logo" style={logoStyle} />
                <form onSubmit={handleSubmit} style={styles}>



                    <label htmlFor="Password">
                        <h4>Password</h4>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder='Enter your new password'
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value);
                            }}
                        />
                    </label>
                    <label htmlFor="password">
                        <h4>Confirm Password</h4>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder='Retype the password'
                            value={cpassword}
                            onChange={(e) => {
                                setcPassword(e.target.value);
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

export default PasswordReset
