import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import users from "../models/auth.js";
import nodemailer from "nodemailer";
export const signup = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const existinguser = await users.findOne({ email });
    if (existinguser) {
      return res.status(404).json({ message: "User already exist." });
    }
    const hashedPassword = await bcrypt.hash(password, 12);
    const newUser = await users.create({
      name,
      email,
      password: hashedPassword,
    });
    const token = jwt.sign(
      { email: newUser.email, id: newUser._id },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );
    res.status(200).json({ result: newUser, token });
  } catch (error) {
    res.status(500).json("something went wrong...");
    console.log(error);
  }
};
export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const existinguser = await users.findOne({ email });
    if (!existinguser) {
      return res.status(404).json({ message: "User doesn't exist." });
    }
    const isPasswordCrt = await bcrypt.compare(password, existinguser.password);
    if (!isPasswordCrt) {
      return res.status(400).json({ message: "Invaid credentials." });
    }
    const token = jwt.sign(
      { email: existinguser.email, id: existinguser._id },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );
    res.status(200).json({ result: existinguser, token });
  } catch (error) {
    res.status(500).json("something went wrong...");
  }
};

export const forgetPass = async (req, res) => {
  const { email } = req.body.email;


  try {
    const existinguser = await users.findOne({ email });
    if (!existinguser) {
      return res.status(404).json({ message: "User doesn't exist." });
    }
    const secret = process.env.JWT_SECRET + existinguser.password;

    const token = jwt.sign(
      { email: existinguser.email, id: existinguser._id },
      secret,
      {
        expiresIn: "5m",
      }
    );
    const BaseUrl = process.env.BASE_URL;
    const link = `${BaseUrl}/PasswordReset/${existinguser._id}/${token}`;
    var transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "rakeshmanna762@gmail.com",
        pass: "veli kffg mlfg fcoe",
      },
    });

    var mailOptions = {
      from: "rakeshmanna762@gmail.com",
      to: `"${existinguser}"`,
      subject: "Password Reset",
      text: link,
    };
 
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
        
      }
    });
    res.status(200).json({ result: existinguser, token });
  } catch (error) {
    console.log(error);
  }
};

export const reset_password = async (req, res) => {
  const { id, token } = req.params;
  const password= req.body.authData.password;
  const oldUser = await users.findOne({ _id: id });
  if (!oldUser) {
    return res.json({ status: "User Not Exists!!" });
  }
  const secret = process.env.JWT_SECRET + oldUser.password;
  try {
    const verify = jwt.verify(token, secret);
    const encryptedPassword = await bcrypt.hash(password, 10);
    await users.updateOne(
      {
        _id: id,
      },
      {
        $set: {
          password: encryptedPassword,
        },
      }
    );

    res.send("Verified");
  } catch (error) {
    console.log(error);
    res.json({ status: "Something Went Wrong" });
  }
};


