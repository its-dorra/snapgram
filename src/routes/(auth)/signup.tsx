import SignupForm from "@/features/auth/components/signup-form";
import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/(auth)/signup")({
  component: RouteComponent,
  ssr: true,
});

function RouteComponent() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col items-center gap-2">
        <h1 className="h1-semibold">Create a new account</h1>
        <p className="text-light-4 base-medium">
          To use snapgram, Please enter your details.
        </p>
      </div>
      <SignupForm />
      <div className="flex gap-2 self-center">
        <p>Already have an account?</p>
        <Link className="text-primary-600" to="/login">
          Login
        </Link>
      </div>
    </div>
  );
}
