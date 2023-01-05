import bcrypt from "bcrypt";

const password = async (pass: string): Promise<string> => {
  return await bcrypt.hash(pass, 10).then((result): string => result);
};

export default password;
