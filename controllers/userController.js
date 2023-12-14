const asyncHandler = require('express-async-handler');

//@description Register a user
//@route POST /api/users/register
//@access public
const registerUser = asyncHandler(async (req, res) => {
    res.json({"msg": "Register an user"});
});

//@description Login user
//@route POST /api/users/login
//@access public
const loginUser = asyncHandler(async (req, res) => {
    res.json({"msg": "Login an user"});
});

//@description Current user info
//@route GET /api/users/current
//@access private
const currentUser = asyncHandler(async (req, res) => {
    res.json({"msg": "Current an user"});
});

module.exports = { registerUser, loginUser, currentUser };