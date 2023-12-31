
const asynchandler = require("express-async-handler");
const AutherModel = require("../models/autherModel");
const CustomClassError = require("../utils/CustomClassError");


/**
 * @desc    create auther
 * @route   /api/v1/auther
 * @method  POST
 * @access  private /Admin - Manger
 */
exports.createAuther = asynchandler(async (req , res , next) => {
  const auther = await AutherModel.create(req.body);
  if (!auther) {
  return next( new CustomClassError("no auther created" , 400))
  }
 
  res.status(201).json({data : auther});

})


/**
 * @desc    get auther
 * @route   /api/v1/auther
 * @method  GET
 * @access  public 
 */
exports.getAuthers = asynchandler(async (req , res , next) => {
  const auther = await AutherModel.find();
  res.status(200).json({rseult : auther.length , data : auther});
})

/**
 * @desc    get one auther
 * @route   /api/v1/auther/:id
 * @method  GET
 * @access  public 
 */
exports.getOneAuther = asynchandler(async (req , res , next) => {
  const auther = await AutherModel.findById(req.params.id);
  if (!auther) {
    return next( new CustomClassError(`no found auther for this Id ${req.params.id}` ));
  }
  res.status(200).json({data : auther});
})

/**
 * @desc    update auther
 * @route   /api/v1/auther/:id
 * @method  PUT
 * @access  private /Admin - Manger
 */
exports.updateAuther = asynchandler(async (req , res , next) => {
  const auther = await AutherModel.findByIdAndUpdate(req.params.id , req.body , {new : true});
  if (!auther) {
    return next( new CustomClassError(`no found auther for this Id ${req.params.id}` ));
    }
   
  res.status(200).json({data : auther});
})


/**
 * @desc    delete auther
 * @route   /api/v1/auther/:id
 * @method  DELETE
 * @access  private /Admin - Manger
 */
exports.deleteAuther = asynchandler(async (req , res , next) => {
  const auther = await AutherModel.findByIdAndDelete(req.params.id );

  if (!auther) {
    return next( new CustomClassError(`no found auther for this Id ${req.params.id}` ));
    }
  res.status(200).json({data : "deleted success"});
})