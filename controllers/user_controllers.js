module.exports.signin = function (req, res) {
  return res.render("users_sign_in", { title: "My SignIn page" });
};

module.exports.signup = function (req, res) {
  return res.render("users_sign_up", { title: "My SignUp Page" });
};
