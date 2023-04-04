const adminModel = require("../../models/admin_info");

/**
 * This method takes in the username and password given by the user and queries the MongoDB database for those credentials.
 * 
 * @param {*} username This is the username given by the user 
 * @param {*} password  This is the password given by the user
 * @returns Null if admin not found and admin data if admin is found.
 */
const getAdminProfile = async function (username, password) {
    let admin = null;
    try {
        admin = await adminModel.findOne({
            username: username,
            password: password
        });
    } catch (err) {
        console.log(err);
    }

    return admin;
}

module.exports = {
    getAdminProfile
}