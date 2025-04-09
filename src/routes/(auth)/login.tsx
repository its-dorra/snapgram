import LoginForm from "@/features/auth/components/login-form";
import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/(auth)/login")({
  component: RouteComponent,
  ssr: true
});

function RouteComponent() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center flex-col gap-2">
        <h1 className="h1-semibold">Log in to your account</h1>
        <p className="text-light-4 base-medium">
          Welcome back! Please enter your details.
        </p>
      </div>
      <LoginForm />
      <div className="self-center flex gap-2">
        <p>Don't you have an account?</p>
        <Link className="text-primary-600" to="/signup">
          Signup
        </Link>
      </div>
    </div>
  );
}
