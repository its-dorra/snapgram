import { editPost } from "@/services/post-api";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

export function useEditPost() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: editPost,
    onSuccess: () => {
      toast.success("Post edited successfully!");
      // TODO: invalidate user profile query
    },
  });
}
