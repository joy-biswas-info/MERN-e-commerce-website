const jwt = require("jsonwebtoken");


const verifyToken = (req, res, next) => {
    const authHeader = req.headers.token;
  
    if (!authHeader) {
      return res.status(403).json("You are not authenticated");
    }
  
    const token = authHeader.split(" ")[1];
  
    jwt.verify(token, process.env.JWT_SEC, (err, user) => {
      if (err) {
        return res.status(403).json("Token not valid");
      }
  
      req.user = user;
      next();
    });
  };

const verifyTokenAndAuthorization = (req,res,next)=>{
    verifyToken(req,res,()=>{
        if(req.user?.id === req.params.id || req.user?.isAdmin){
            next()
        }else{

            res.status(403).json("You Are Not Allowed To Do That !")
        }
    });
};

const verifyTokenAndAdmin = (req,res,next)=>{
    verifyToken(req,res,()=>{
        if(req.user?.isAdmin){
            next()
        }else{
            res.status(403).json("Only Admin Can Do this!")
        }
    });
};




module.exports=({verifyToken,verifyTokenAndAuthorization,verifyTokenAndAdmin});