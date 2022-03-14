const userSchema = require("./../model/userModel");

exports.updateFields = async (req, res, next) => {
  const user = await userSchema.findByIdAndUpdate(
    req.params.userId,
    { isPaymentMade: true },
    { new: true }
  );

  const userReferrerr = await userSchema.findByIdAndUpdate(
    user.referredUser,
    { $inc: { totalEarnings: 10 } },
    { new: true }
  );

  res.status(200).json({
    status: "success",
    user,
    userReferrerr,
  });
};

exports.getUsers = async (req, res, next) => {
  const getAllUsers = await userSchema.find();
  res.status(200).json({
    length: getAllUsers.length,
    status: "success",
    data: getAllUsers,
  });
};

exports.postUser = async (req, res, next) => {
  const newUser = await userSchema.create(req.body);
  res.status(200).json({
    status: "success",
    data: newUser,
  });
};
