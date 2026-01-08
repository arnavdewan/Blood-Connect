const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const User = require("./models/User");

mongoose.connect("mongodb://127.0.0.1:27017/bloodbank", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

async function changeAdminPassword() {
  const newPassword = "123456"; // ✅ NEW PASSWORD
  const hashedPassword = await bcrypt.hash(newPassword, 10);

  const result = await User.updateOne(
    { email: "admin@bloodbank.com", role: "admin" },
    { $set: { password: hashedPassword } }
  );

  if (result.matchedCount === 0) {
    console.log("❌ Admin user not found");
  } else {
    console.log("✅ Admin password updated successfully");
  }

  mongoose.disconnect();
}

changeAdminPassword();
