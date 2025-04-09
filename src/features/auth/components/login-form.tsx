import { useAppForm } from "@/hooks/useForm";
import { useLogin } from "../hooks/uselogin";
import { loginSchema } from "../schema";

export default function LoginForm() {
  const mutation = useLogin();
  const form = useAppForm({
    defaultValues: {
      email: "",
      password: "",
    },
    validators: {
      onSubmit: loginSchema,
    },
    onSubmit: async ({ value }) => {
      await mutation.mutateAsync({
        email: value.email,
        password: value.password,
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
      <form.AppField name="email">
        {(field) => <field.TextField label="Email" />}
      </form.AppField>
      <form.AppField name="password">
        {(field) => <field.TextField label="Password" isObsucred />}
      </form.AppField>
      <form.AppForm>
        <form.SubmitButton label="Log in" />
      </form.AppForm>
    </form>
  );
}
