export const checkValidData = (email, password) => {
  // const isNamevalid = /b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(name);
  const isEmailvalid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  const isPasswordvalid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  // if (!isNamevalid) return "Name is invalid";
  if (!isEmailvalid) return "Email is invalid";
  if (!isPasswordvalid) return "Password is invalid";

  return null;
};
