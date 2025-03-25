import SignupForm from "@/features/auth/components/signup-form";
import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/(auth)/signup")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center flex-col gap-2">
        <h1 className="h1-semibold">Create a new account</h1>
        <p className="text-light-4 base-medium">
          To use snapgram, Please enter your details.
        </p>
      </div>
      <SignupForm />
      <div className="self-center flex gap-2">
        <p>Already have an account?</p>
        <Link className="text-primary-600" to="/login">
          Login
        </Link>
      </div>
    </div>
  );
}
