import toast from "react-hot-toast";
import { authClient } from "./auth-client";

export const login = async (credentials: {
  email: string;
  password: string;
}) => {
  const { data, error } = await authClient.signIn.email(credentials, {
    onSuccess: () => {
      toast.success("Login successful");
    },
    onError: (ctx) => {
      const message =
        ctx.error.status === 403
          ? "Please verify your email address"
          : ctx.error.message;
      toast.error("Login failed \n" + message);
    },
  });
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
  const { data, error } = await authClient.signUp.email(userInfo, {
    onSuccess: () => {
      toast.success(
        "You have successfully signed up, please check your email to verify your account"
      );
    },
    onError: (ctx) => {
      toast.error("Signup failed\n" + ctx.error.message);
    },
  });

  if (error) {
    throw error;
  }
  return data;
};

export const logout = async () => {
  const { data, error } = await authClient.signOut({
    fetchOptions: {
      onSuccess: () => {
        toast("Logout successful");
      },
      onError: (ctx) => {
        toast("Logout failed\n" + ctx.error.message);
      },
    },
  });
  if (error) {
    throw error;
  }
  return data;
};
