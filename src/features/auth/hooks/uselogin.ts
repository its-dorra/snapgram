import type { BetterFetchError } from "@better-fetch/fetch";
import { queryKeys } from "@/lib/queryKeys";
import { login } from "@/services/auth-api";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { getRouteApi } from "@tanstack/react-router";
import toast from "react-hot-toast";

export function useLogin() {
  const routeApi = getRouteApi("/(auth)/login");
  const navigate = routeApi.useNavigate();
  const queryClient = useQueryClient();
  const search = routeApi.useSearch();

  return useMutation({
    mutationFn: login,
    onSuccess: () => {
      queryClient.refetchQueries({ queryKey: queryKeys.auth() }).then(() => {
        navigate({ to: search.redirect || "/", replace: true });
      });
      toast.success("Login successful");
    },
    onError: (error: BetterFetchError) => {
      const message =
        error.status === 403
          ? "Please verify your email address"
          : error.message;
      toast.error(`Login failed \n${message}`);
    },
  });
}
