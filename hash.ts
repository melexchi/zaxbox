import * as bcrypt from "bcryptjs";

async function hashPassword() {
  const password = "zaxbox.net@2025"; // change this to your real password
  const hashed = await bcrypt.hash(password, 10);
  console.log("Your hashed password:", hashed);
}

hashPassword();
