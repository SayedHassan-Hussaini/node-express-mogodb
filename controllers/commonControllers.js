
export const checkId =(req,res,next,val)=>{
    console.log("val........",val)
    if(val){
        console.log("check id...",val)
        next()
    }else{
        res.status(400).json({status:"error",message:"Id is required!"})
    }

}