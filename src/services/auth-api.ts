import toast from "react-hot-toast";
import { authClient } from "./auth-client";

export const login = async (credentials: {
  email: string;
  password: string;
}) => {
  const { data, error } = await authClient.signIn.email(credentials);
  if (error) {
    throw error;
  }
  return data;
};

export const forgetPassword = async (email: string) => {
  const { data, error } = await authClient.forgetPassword(
    {
      email,
      redirectTo: "/reset-password",
    },
    {
      onSuccess: () => {
        toast.success(
          "Email sent\n" + "Please check your email to reset your password"
        );
      },
      onError: (ctx) => {
        toast.error("Email failed\n" + ctx.error.message);
      },
    }
  );
  if (error) {
    throw error;
  }
  return data;
};

export const resetPassword = async (password: string, token: string) => {
  const { data, error } = await authClient.resetPassword(
    {
      newPassword: password,
      token,
    },
    {
      onSuccess: () => {
        toast.success("You have successfully reset your password");
      },
      onError: (ctx) => {
        toast.error("Password reset failed\n" + ctx.error.message);
      },
    }
  );
  if (error) {
    throw error;
  }
  return data;
};
export const signUp = async (userInfo: {
  email: string;
  password: string;
  name: string;
  imageUrl?: string;
}) => {
  const { data, error } = await authClient.signUp.email(userInfo);

  if (error) {
    throw error;
  }
  return data;
};

export const logout = async () => {
  const { data, error } = await authClient.signOut();
  if (error) {
    throw error;
  }
  return data;
};
