const User = require("../models/users");

module.exports.signin = function (req, res) {
  return res.render("users_sign_in", { title: "My SignIn page" });
};

module.exports.signup = function (req, res) {
  return res.render("users_sign_up", { title: "My SignUp Page" });
};

module.exports.create = async function (req, res) {
  if (req.body.password != req.body.confirm_password) {
    return res.redirect("back");
  }

  const user = await User.findOne({ email: req.body.email });

  if (!user) {
   await User.create(req.body);
    return res.redirect("/users/sign-in");
  } else {
    return res.redirect("back");
  }
};
