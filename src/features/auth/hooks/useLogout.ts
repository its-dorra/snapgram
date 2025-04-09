import { logout } from "@/services/auth-api";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";
import toast from "react-hot-toast";

export function useLogout() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: logout,

    onSuccess: () => {
      queryClient.clear();
      navigate({ to: "/login", replace: true });
      toast.success("Logout successful");
    },
    onError: (error) => {
      toast(`Logout failed\n${error.message}`);
    },
  });
}
