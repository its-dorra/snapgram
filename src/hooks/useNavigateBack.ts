import { useRouter } from "@tanstack/react-router";

export function useNavigateBack() {
  const router = useRouter();

  return () => router.history.back();
}
