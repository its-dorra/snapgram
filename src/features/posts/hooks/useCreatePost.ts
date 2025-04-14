import { useUser } from "@/features/auth/hooks/useUser";
import { createPost } from "@/services/post-api";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";
import toast from "react-hot-toast";

export function useCreatePost() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { data } = useUser();

  return useMutation({
    mutationFn: createPost,
    onSuccess: () => {
      toast.success("Post created successfully!");
      // TODO: invalidate user profile query
      // queryClient.invalidateQueries
      navigate({ to: "/$userId", params: { userId: data!.user.id } });
    },
  });
}
