module.exports.profile = function (req, res) {
  return res.render("profile", { title: "My Profile Page" });
};

module.exports.sign_in = function (req, res) {
  return res.render("signIn", { title: "My Sign_In Page." });
};

module.exports.sign_up = function (req, res) {
  return res.render("signUp", { title: "My Sign_Up Page" });
};
