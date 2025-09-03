import jwt from "jsonwebtoken"
import { errorHandler } from "./error.js"

export const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token

  if (!token) {
    return next(errorHandler(401, "Unauthorized"))
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return next(errorHandler(401, "Unauthorized"))
    }
    
    // Check if user is an admin
    if (!user.isAdmin) {
      return next(errorHandler(403, "Access restricted to administrators only"))
    }

    req.user = user

    next()
  })
}
