import express from "express";

import { forgetPass, login, reset_password, signup } from "../controllers/auth.js";
import { getAllUsers, updateProfile } from "../controllers/users.js";
import auth from "../middlewares/auth.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/forgetPass",forgetPass);
router.post("/reset_password/:id/:token",reset_password);
router.get("/getAllUsers", getAllUsers);
router.patch("/update/:id", auth, updateProfile);


export default router;
