import { queryKeys } from "@/lib/queryKeys";
import { logout } from "@/services/auth-api";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";
import toast from "react-hot-toast";

export const useLogout = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: logout,
    onSuccess: () => {
      toast.success("Logout successful");
      queryClient.invalidateQueries({ queryKey: queryKeys.auth });
      navigate({ to: "/login", replace: true });
    },
    onError: (error) => {
      toast("Logout failed\n" + error.message);
    },
  });
};
