const User = require("../models/users");

module.exports.profile = function (req, res) {
  return res.render("profile", { title: "My Profile Page" });
};

module.exports.sign_in = function (req, res) {
  return res.render("signIn", { title: "My Sign_In Page." });
};

module.exports.sign_up = function (req, res) {
  return res.render("signUp", { title: "My Sign_Up Page" });
};

module.exports.create = async function (req, res) {
  if (req.body.password != req.body.confirm_password) {
    return res.redirect("back");
  }
  const user = await User.findOne({ email: req.body.email });
  if (!user) {
    await User.create({
      email: req.body.email,
      password: req.body.password,
      name: req.body.name,
    });
    return res.redirect("sign_in");
  } else {
    return res.redirect("back");
  }
};

module.exports.createSession =async function (req, res) {
  const user =await User.findOne({ email: req.body.email });
  if (user) {
    if (user.password != req.body.password) {
      return res.redirect("back");
    }
    res.cookie("users_id", user.id);
    return res.redirect("profile");
  } else {
    return res.redirect("back");
  }
};

