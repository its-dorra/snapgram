import { signUp } from "@/services/auth-api";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";
import toast from "react-hot-toast";

export function useSignup() {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: signUp,
    onSuccess: () => {
      toast.success(
        "You have successfully signed up, please check your email to verify your account",
      );
      navigate({ to: "/login" });
    },
    onError: (error) => {
      toast.error(`Signup failed\n${error.message}`);
    },
  });
}
