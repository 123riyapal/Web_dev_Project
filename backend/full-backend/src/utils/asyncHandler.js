// const asyncHandler=(requestHnadler)=>{
//     (req,res,next)=>{
//         Promise.resolve(requestHnadler(req,res,next)).catch((err)=>{
//             next(err)
//         })
//     }
// }

export { asyncHandler }

const asyncHandler=(fn)=> async (req,res,next)=>{
    try {
        await fn(req,res,next )
    } catch (error) {
         res.status(error.code || 300).json({
            success:false,
            message:error.message
         })
    }
}