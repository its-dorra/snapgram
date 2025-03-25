import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login } from "@/services/auth-api";
import { useNavigate } from "@tanstack/react-router";
import { queryKeys } from "@/lib/queryKeys";

export const useLogin = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: login,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.auth });
      navigate({ to: "/", replace: true });
    },
  });
};
