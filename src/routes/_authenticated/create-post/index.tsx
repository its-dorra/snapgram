import { addPostIcon } from "@/assets";
import PageHeader from "@/components/page-header";
import { Button } from "@/components/ui/button";
import PhotoDropzone from "@/features/posts/components/photo-dropzone";
import { createPostSchema } from "@/features/posts/schema";
import { useAppForm } from "@/hooks/useForm";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_authenticated/create-post/")({
  component: RouteComponent,
});

function RouteComponent() {
  const form = useAppForm({
    defaultValues: {
      caption: "",
      tags: "",
      location: "",
      imageFile: undefined! as File,
    },
    validators: {
      onSubmit: createPostSchema,
    },
    onSubmit: async ({ value }) => {
      console.log({ value });
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
        <form.AppField name="caption">
          {(field) => <field.TextField inputType="text-area" label="Caption" />}
        </form.AppField>
        <form.AppField name="imageFile">
          {(field) => (
            <PhotoDropzone
              error={
                field.state.meta.isTouched && field.state.meta.errors.length
                  ? field.state.meta.errors.join(", ")
                  : null
              }
              onChange={field.handleChange}
            />
          )}
        </form.AppField>
        <form.AppField name="location">
          {(field) => <field.TextField label="Add Location" />}
        </form.AppField>
        <form.AppField name="tags">
          {(field) => (
            <field.TextField label='Add Tags (seperated by comma ",")' />
          )}
        </form.AppField>
        <form.AppForm>
          <div className="flex w-full items-center justify-end gap-x-2">
            <Button
              className="cursor-pointer border border-white/30 transition-colors"
              variant="ghost"
            >
              Cancel
            </Button>
            <form.SubmitButton label="Create Post" />
          </div>
        </form.AppForm>
      </form>
    </div>
  );
}
