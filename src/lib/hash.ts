import bcrypt from "bcryptjs";

export async function hashPassword(password: string) {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
}

export async function comparePassword(plain: string, hashed: string) {
  return await bcrypt.compare(plain, hashed);
}
