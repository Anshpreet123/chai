const asyncHandler = (requestHandler) => {
  return (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err));
  };
};

export { asyncHandler };

// this is wrapper form
//promise has resolve and reject

// const asyncHandler = (fn) => async (req , res , next)=>{
//     try{
//         await fn(req , res , next)

//     }

//     catch (error){
//       res.status(error.code || 500).json({
//         success : false ,
//         message  :error.message
//       })
//     }
// }
