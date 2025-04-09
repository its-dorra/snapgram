import { type } from "arktype";

const Email = type("string.email").configure({
  problem: () => "Invalid email, Plz provide a valid one.",
});

const Password = type("string <= 8").configure({
  problem: () => "Password must be at least 8 chars long.",
});

export const loginSchema = type({
  email: Email,
  password: Password,
});

export const signupSchema = type({
  email: Email,
  name: type.string
    .atLeastLength(3)
    .configure({ problem: () => "Must provide a valid name." }),
  password: Password,
  confirmPassword: "string",
}).narrow(({ password, confirmPassword }, ctx) => {
  return password === confirmPassword
    ? true
    : ctx.mustBe("Password do not match");
});
