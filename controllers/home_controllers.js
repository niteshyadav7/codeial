module.exports.home = function (req, res) {
  
  // ⁡⁢⁣⁢BY THIS WE CAN ACCESS THE COOKIES AND ALTERING IT.⁡
  // console.log(req.cookies);
  // res.cookie("users_id", 23);
  
  return res.render("home", { title: "My Home Page" });
};
