const passport = require("passport");

exports.isAuth = (req, res, done) => {
  return passport.authenticate("jwt");
};

exports.sanitizeUser = (user) => {
  return { id: user.id, role: user.role };
};
exports.cookieExtractor = function (req) {
  let token = null;
  if (req && req.cookies) {
    token = req.cookies["jwt"];
  }
  // TODO : this is temporary token for testing without cookie
  token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1YTRmNWNhNzg3YWU5Y2Y5YmUyMGMyNCIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzA1MzA5NjQ5fQ.p7Q21U40WGHBj2BErudAQ0gFsS_RCabug7fWnDq4Yxk";
  return token;
};
