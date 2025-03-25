import { useAppForm } from "@/hooks/useForm";
import { signupSchema } from "../schema";
import { useSignup } from "../hooks/useSignup";

export default function SignupForm() {
  const mutation = useSignup();
  const form = useAppForm({
    defaultValues: {
      email: "",
      name: "",
      password: "",
      confirmPassword: "",
    },
    validators: {
      onSubmit: signupSchema,
    },
    onSubmit: async ({ value }) => {
      await mutation.mutateAsync({
        email: value.email,
        password: value.password,
        name: value.name,
      });
    },
  });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    e.stopPropagation();
    form.handleSubmit();
  };

  return (
    <form className="flex flex-col gap-6" onSubmit={onSubmit}>
      <form.AppField name="name">
        {(field) => <field.TextField label="Name" />}
      </form.AppField>
      <form.AppField name="email">
        {(field) => <field.TextField label="Email" />}
      </form.AppField>
      <form.AppField name="password">
        {(field) => <field.TextField label="Password" isObsucred />}
      </form.AppField>
      <form.AppField name="confirmPassword">
        {(field) => <field.TextField label="Confirm password" isObsucred />}
      </form.AppField>
      <form.AppForm>
        <form.SubmitButton label="Sign Up" />
      </form.AppForm>
    </form>
  );
}
