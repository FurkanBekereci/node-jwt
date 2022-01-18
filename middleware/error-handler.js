const { StatusCodes } = require('http-status-codes')
const CustomAPIError = require('../errors/custom-error')
const errorHandlerMiddleware = (err, req, res, next) => {
  if (err instanceof CustomAPIError) {
    return res.status(err.statusCode).json({ msg: err.message })
  }
  // if(err instanceof Mongoose.Error){
  //   return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send('Something went wrong in mongo.')
  // }
  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send('Something went wron. Try again later.')
}

module.exports = errorHandlerMiddleware
