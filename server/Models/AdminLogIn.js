
const mongoose = require('mongoose')
// const encrypt =require("mongoose-encryption");
const adminLoginSchema = new mongoose.Schema({
  name: { type: String, unique: true },
  email: { type: String, unique: true },
  password: String,
});
// const encKey =process.env.ENC_KEY;
// adminLoginSchema.plugin(encrypt,{
//   secret: encKey,
//   encryptedFields :["password"],
// });
const AdminLoginModel = mongoose.model('AdminLogin', adminLoginSchema);

module.exports = AdminLoginModel;
