import jwt from 'jsonwebtoken'
import User from '../models/user.js'

export default async function secureRoute(req, res, next) {
  try {
    if (!req.headers.authorization) throw new Error('missing headers')
    const token = req.headers.authorization.replace('Bearer ', '')
    const payload = jwt.verify(token, process.env.SECRET)
    const userToVerify = await User.findById(payload.sub)
    if (!userToVerify) throw new Error('User not Found')
    req.currentUser = userToVerify
    next()
  } catch (error) {
    console.log(error)
    return res.status(401).json({ message: 'Unauthorized' })
  }
}