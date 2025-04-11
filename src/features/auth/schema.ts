import { type } from "arktype";

const Email = type("string.email").configure({
  message: () => "Invalid email, Plz provide a valid one.",
});

const Password = type("string >= 8").configure({
  message: () => "Password must be at least 8 chars long.",
});

export const loginSchema = type({
  email: Email,
  password: Password,
});

export const signupSchema = type({
  email: Email,
  name: type.string
    .atLeastLength(3)
    .configure({ message: () => "Must provide a valid name." }),
  password: Password,
  confirmPassword: type.string,
}).narrow((data, ctx) => {
  if (data.password !== data.confirmPassword) {
    return ctx.reject({
      expected: "Passwords must match.",
      actual: "",
      path: ["confirmPassword"],
    });
  }
  return true;
});
