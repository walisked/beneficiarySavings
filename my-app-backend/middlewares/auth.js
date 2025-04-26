const admin = require('../config/firebase');

const authenticate = async (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  
  try {
    const decodedToken = await admin.auth().verifyIdToken(token);
    req.user = {
      uid: decodedToken.uid,
      role: decodedToken.role || 'user'
    };
    next();
  } catch (error) {
    res.status(401).json({ message: 'Unauthorized' });
  }
};

module.exports = authenticate;