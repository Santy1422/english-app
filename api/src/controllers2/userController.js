const UserModel = require('../models/user.model');

const createNewUser = async (user) => {
  const userExists = await UserModel.findOne({ email: user.email });
  //if(!!userExists) throw new Error("El usuario ya existe")
  //si existe lo modifica XXDXDXD harcodeado para debugear
  if (!!userExists) {
    return await updateUser(user, user.email)
  } else {
    const newUser = new UserModel(user);
    await newUser.save();
    return newUser;
  }
};


const findUser = async (email) => {
  try {
    const userInDB = await UserModel.findOne({ email: email });
    return userInDB;
  } catch (error) {
    throw error;
  }
};
const findUserName = async (email) => {
  try {
    const userInDB = await UserModel.findOne({ email: email });
    return userInDB.firstName + ' ' +  userInDB.lastName;
  } catch (error) {
    throw error;
  }
};

const findAllUsers = async (filter) => {
  const allUsers = await UserModel.find(filter);
  return allUsers;
};

const updateUser = async (newUserData, userEmail) => {
  const queryConditions = { email: userEmail };
  newUserData.email = userEmail;

  const updatedUser = await UserModel.updateOne(queryConditions, newUserData, {
    upsert: true,
    /* setDefaultsOnInsert: true, */
  });
  return updatedUser;
};

const updateUserNotifications = async (Notifications, userEmail) => {
  await UserModel.updateOne(
    { email: userEmail },
    { $set: { Notifications: Notifications } }
  );
};

module.exports = {
  createNewUser,
  findUser,
  findAllUsers,
  updateUser,
  updateUserNotifications,
  findUserName,
};
