import jwt from 'jsonwebtoken';

export const authenticateUser = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({ message: "Access denied. No token provided." });
  }

  const token = authHeader.split(" ")[1];
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; 
    next();
  } catch{
    return res.status(400).json({ message: "Invalid token." });
  }
};
 export const isAdmin = (req, res, next) => {
  if(req.user.role !=='admin') return res.status(403).send('unauthorized access!')
  next();
};