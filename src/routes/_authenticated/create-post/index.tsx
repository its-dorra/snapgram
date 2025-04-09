import { addPostIcon } from "@/assets";
import PageHeader from "@/components/page-header";
import { useAppForm } from "@/hooks/useForm";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_authenticated/create-post/")({
  component: RouteComponent,
});

function RouteComponent() {
  const form = useAppForm({
    defaultValues: {
      email: "",
      password: "",
    },
    validators: {
      onSubmit: ,
    },
    onSubmit: async ({ value }) => {
     
    },
  });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    e.stopPropagation();
    form.handleSubmit();
  };

  return (
    <div className="flex w-full flex-col gap-y-8">
      <PageHeader title="Create Post" icon={addPostIcon} />
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
    </div>
  );
}
