import User from "../models/user.model.js";
import bcrypt from "bcrypt";

export const register = async (req, res, next) => {
  try {
    const hash = bcrypt.hashSync(req.body.password, 10);
    const newUser = new User({
      ...req.body,
      password: hash,
    });

    await newUser.save();
    res.status(201).send("User has been created");
  } catch (err) {
    res.status(500).send("Something went wrong!");
  }
};

export const login = async (req, res, next) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user) {
      return res.status(404).send("User not found");
    }

    const isCorrect = bcrypt.compare(req.body.password, user.password);
    if (!isCorrect) return res.status(400).send("Wrong password or usernmae");
    const {password, ...info} = user._doc;

    res.status(200).send(info)
  } catch (err) {
    res.status(500).send("Something went wrong!");
  }
};

export const logout = async (req, res, next) => {
  try {
  } catch (err) {
    res.status(500).send("Something went wrong!");
  }
};