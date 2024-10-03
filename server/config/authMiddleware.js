const jwt = require('jsonwebtoken');

const protect = (req, res, next) => {
  const token = req.header('Authorization');

  if(!token) return res.status(401).json({message:'No token Authorization denied'})

    try {
        const decoded=jwt.verify(token,process.env.JWT_SECRET)
        req.user=decoded.id;
    } catch (error) {
        res.status(401).json({message;"token is not valid"})
    }
};

module.exports=protect
