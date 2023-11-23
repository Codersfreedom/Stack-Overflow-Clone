
import * as api from "../api";
import { setCurrentUser } from "./currentUser.js";
import { fetchAllUsers } from "./users";

export const signup = (authData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.signUp(authData);
    dispatch({ type: "AUTH", data });
    dispatch(setCurrentUser(JSON.parse(localStorage.getItem("Profile"))));
    dispatch(fetchAllUsers());
    navigate("/");
  } catch (error) {
    console.log(error);
  }
};
export const login = (authData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.logIn(authData);
    dispatch({ type: "AUTH", data });
    dispatch(setCurrentUser(JSON.parse(localStorage.getItem("Profile"))));

    navigate("/");
  } catch (error) {
    console.log(error);
  }
};

export const ForgetPassword = (authData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.ForgetPass(authData);
    dispatch({ type: "AUTH", data });


    navigate("/");
  } catch (error) {
    console.log(error);
  }
};

export const ResetPassword = (authData,navigate)=>async (dispatch)=>{


  try {
    const {data} = await api.ResetPass(authData);
    dispatch({type:"AUTH",data});
    navigate("/Auth");
  } catch (error) {
    console.log(error);
    
  }
}
