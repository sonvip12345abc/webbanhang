const ErrorHandler=require('../utils/errorHandler')


module.exports=(err,req,res,next)=>{
    err.statusCode=err.statusCode||500;
    if(process.env.NODE_ENV==='DEVELOPMENT'){
        res.status(err.statusCode).json({
            success:false,
            error:err,
            errMessage:err.message,
            stack:err.stack
        })
    }
 

    res.status(err.statusCode).json({
        success:false,
        error:err.stack
    })
}