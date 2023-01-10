import bcrypt from "bcrypt";

const bcryptPass = (pass: string): string => {
  return bcrypt.hashSync(pass, 10);
};

export default bcryptPass;
