export const validInforLogin = {
  username: "standard_user",
  password: "secret_sauce",
};

export const invalidCases = [
  { username: "wrong_user", password: validInforLogin.password },
  { username: validInforLogin.username, password: "wrong" },
];
