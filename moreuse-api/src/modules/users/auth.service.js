const errorHandler = require('../../utils/errorHandler');
const User = require('./models/user.model');
const { USER_PASS_WRONG, USER_ALREADY_EXIST, USER_NOT_FOUND, SERVER_ERROR } = require('./utils/dict.errors')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const login = async (email, password) => {
  try {
    const user = await User.findOne({ email, isRemoved: false });
    if (user) {
      const match = await bcrypt.compare(password, user.password);
      if (match) {
        const payload = {
          idUser: user._id,

        }
        const token = jwt.sign(payload, process.env.JWT_SECRET);
        return {
          token
        }
      }
    }
    throw errorHandler(USER_PASS_WRONG, { "internalError": "Nullpointer" });
  } catch (error) {
    throw error.handled ? error : errorHandler(SERVER_ERROR)
  }

}

const logout = (idUser) => {
  return {
    message: "user logout"
  }
}

const signup = async (userData) => {
  try {
    const validateUser = await User.findOne({ email: userData.email });
    if (validateUser) {
      throw errorHandler(USER_ALREADY_EXIST);
    }
    const passHashed = await bcrypt.hash(userData.password, 10);
    userData.password = passHashed;
    const user = User(userData);
    await user.save();
    return {
      message: 'User created',
      user
    }
  } catch (error) {
    throw error.handled ? error : errorHandler(SERVER_ERROR, error);
  }
}

const info = async (idUser) => {
  try {
    const user = await User.findById(idUser);
    return user || errorHandler(USER_NOT_FOUND);
  } catch (error) {
    throw error.handled ? error : errorHandler(SERVER_ERROR, error);
  }
}

module.exports = {
  login, logout, info, signup
}

