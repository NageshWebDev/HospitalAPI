const jwt = require("jsonwebtoken");
// For maximum flexibility, we’ll allow the client to attach a token in one of three ways – 
// as a query string parameter, 
// a form body parameter, 
// or in an HTTP header. 
// For the latter, we’ll use the header x-access-token.

const verifyToken = (req, res, next) => {
  const token =
    req.body.token || req.query.token || req.headers["x-access-token"];

  if (!token) {
    return res.status(403).send("A token is required for authentication");
  }
  try {
    const decoded = jwt.verify(token, "SECRET_TOKEN_KEY_123456789");
    req.user = decoded;
  } catch (err) {
    return res.status(401).send("Invalid Token");
  }
  return next();
};

module.exports = verifyToken;