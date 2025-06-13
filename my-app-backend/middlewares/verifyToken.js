import jwt from "jsonwebtoken";

const verifyToken = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({ success: false, isAuthenticated: false, message: "Authentication required" });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = { id: decoded.id, email: decoded.email };
    next();
  } catch (error) {
    res.clearCookie("token");
    return res.status(401).json({ success: false, isAuthenticated: false, message: "Invalid or expired token" });
  }
};

export default verifyToken;