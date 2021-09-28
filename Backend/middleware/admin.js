function admin(req,res,next) {
    if(req.user){
      
        return res.status(403).send('You are not authorized to access this endpoint!');

    }
    next();
}

module.exports=admin;